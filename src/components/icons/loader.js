import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="hexagon">
        <path
          stroke="#64ffda"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5 L 89, 27.5 L 89, 72.5 L 50, 95 L 11, 72.5 L 11, 27.5 Z"
        />
      </g>
      <path
        id="letter"
        d="M32 25 H68 V35 H56 V75 H44 V35 H32 Z"
        fill="#64ffda"
      />
    </g>
  </svg>
);

export default IconLoader;
