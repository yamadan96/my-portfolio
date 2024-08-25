import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 10rem 2rem;
  background-color: #f8f9fa;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>プロフィール</AboutTitle>
      <AboutText>
        私は、エンジニアとして様々な技術を駆使し、ダイナミックかつレスポンシブなウェブアプリケーションを開発しています。バックエンドからフロントエンドまで、幅広い技術に対応することができます。
      </AboutText>
    </AboutContainer>
  );
};

export default About;
