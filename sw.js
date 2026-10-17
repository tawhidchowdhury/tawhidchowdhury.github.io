/* Retire the offline worker installed by the previous Gatsby portfolio. */
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.map(name => caches.delete(name)));
    await self.clients.claim();
    const windows = await self.clients.matchAll({ type: 'window' });
    await self.registration.unregister();
    await Promise.all(windows.map(client => client.navigate(client.url)));
  })());
});
