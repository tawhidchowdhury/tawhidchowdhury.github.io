import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledSkillsSection = styled.section`
  max-width: 900px;

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px 50px;
    padding: 0;
    margin: 0;
    list-style: none;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .category {
    h3 {
      margin: 0 0 15px;
      color: var(--lightest-slate);
      font-size: var(--fz-lg);
    }

    ul {
      ${({ theme }) => theme.mixins.fancyList};
    }
  }
`;

const skillCategories = [
  {
    category: 'Programming & Scripting',
    skills: ['Python', 'C', 'C++', 'Verilog', 'Assembly', 'JavaScript'],
  },
  {
    category: 'Data Analytics & ML',
    skills: [
      'Scikit-learn',
      'Keras',
      'MS Excel',
      'Power BI',
      'Google Sheets',
      'Matplotlib',
      'Supervised Learning',
    ],
  },
  {
    category: 'Database Management',
    skills: ['MySQL', 'PostgreSQL', 'Query Optimization', 'Advanced SQL Joins'],
  },
  {
    category: 'Hardware & Deployment',
    skills: ['Arduino', 'Raspberry Pi 5', 'Figma (Product Prototyping)', 'Git', 'LaTeX', 'VS Code'],
  },
];

const Skills = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledSkillsSection id="skills" ref={revealContainer}>
      <h2 className="numbered-heading">Technical Toolkit &amp; Skills</h2>

      <ul className="skills-grid">
        {skillCategories.map(({ category, skills }, i) => (
          <li className="category" key={i}>
            <h3>{category}</h3>
            <ul>
              {skills.map((skill, j) => (
                <li key={j}>{skill}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </StyledSkillsSection>
  );
};

export default Skills;
