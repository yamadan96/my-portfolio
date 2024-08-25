import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  color: #007bff;
  text-decoration: none;
  border: 1px solid #007bff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #ffffff;
  }
`;

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>プロジェクト詳細: {id}</h2>
      <p>ここにプロジェクトの詳細情報が表示されます。</p>
      <BackLink to="/projects">プロジェクト一覧に戻る</BackLink>
    </div>
  );
};

export default ProjectDetails;
