import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledEducationSection = styled.section`
  max-width: 900px;

  .degrees {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px 50px;
    padding: 0;
    margin: 0 0 50px;
    list-style: none;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .degree {
    h3 {
      margin: 0 0 5px;
      color: var(--lightest-slate);
      font-size: var(--fz-lg);
    }

    .range {
      margin-bottom: 10px;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
    }
  }

  h3.subheading {
    margin: 0 0 15px;
    color: var(--lightest-slate);
    font-size: var(--fz-lg);
  }

  ul.cert-list {
    ${({ theme }) => theme.mixins.fancyList};
  }
`;

const Education = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const certifications = [
    'Fully Automated MLOps',
    'Developing Machine Learning Models for Production',
    'MLOps Deployment and Life Cycle',
  ];

  return (
    <StyledEducationSection id="education" ref={revealContainer}>
      <h2 className="numbered-heading">Education, Honors &amp; Certifications</h2>

      <ul className="degrees">
        <li className="degree">
          <h3>BSc in Computer Science and Engineering</h3>
          <p className="range">BRAC University · 2022–2026</p>
          <p>CGPA: 3.73/4.00 (High Distinction)</p>
          <p>Honors: Vice Chancellor's List, Dean's List x6, Merit-Based Scholarship</p>
        </li>

        <li className="degree">
          <h3>Higher School Certificate (Science)</h3>
          <p className="range">St. Joseph Higher Secondary School</p>
          <p>GPA: 5.00/5.00</p>
        </li>
      </ul>

      <h3 className="subheading">Certifications (DataCamp)</h3>
      <ul className="cert-list">
        {certifications.map((cert, i) => (
          <li key={i}>{cert}</li>
        ))}
      </ul>
    </StyledEducationSection>
  );
};

export default Education;
