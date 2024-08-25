import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  text-align: center;
  padding: 2rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  background: #ffffff;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

const projects = [
  {
    title: "プロジェクト 1",
    description: "このプロジェクトは、シンプルで直感的なデザインを特徴としています。",
  },
  {
    title: "プロジェクト 2",
    description: "ユーザーエクスペリエンスを向上させるための取り組みが含まれています。",
  },
  // 他のプロジェクト
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>プロジェクト一覧</h2>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;
