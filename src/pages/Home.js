import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.section`
  padding-top: 80px;
  text-align: center;
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoText = styled.h1`
  font-size: 3.5rem;
  color: #333333;
  margin-bottom: 1rem;
`;

const SubText = styled.h2`
  font-size: 2rem;
  color: #FFD700;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666666;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 3rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <LogoContainer>
        <LogoText>LionTech</LogoText>
        <SubText>AI Engineer</SubText>
      </LogoContainer>
      <Description>
        私はAI技術を駆使し、最新のテクノロジーを用いて革新的なソリューションを提供しています。主に、機械学習とデータ解析を専門とし、クライアントのビジネスに価値をもたらすためのシステムを構築しています。
      </Description>
    </HomeContainer>
  );
};

export default Home;
