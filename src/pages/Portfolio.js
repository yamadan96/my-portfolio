import React from 'react';
import styled from 'styled-components';
import SampleImage from '../assets/images/portfolio-image.png'; // 画像のインポート

const PortfolioContainer = styled.section`
  padding: 10rem 2rem;
  text-align: center;
  background: #ffffff;
`;

const PortfolioTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const PortfolioItem = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  border-radius: 8px;
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const PortfolioTitleText = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-top: 1rem;
`;

const PortfolioDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 0.5rem;
`;

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioTitle>ポートフォリオ</PortfolioTitle>
      <PortfolioGrid>
        <PortfolioItem>
          <PortfolioImage src={SampleImage} alt="The Sample App" />
          <PortfolioTitleText>The Sample App</PortfolioTitleText>
          <PortfolioDescription>シンプルで直感的なUIを持つウェブアプリケーション。</PortfolioDescription>
        </PortfolioItem>
        <PortfolioItem>
          <PortfolioImage src={SampleImage} alt="クラウドWebサーバー構築" />
          <PortfolioTitleText>クラウドWebサーバー構築</PortfolioTitleText>
          <PortfolioDescription>AWSを活用したスケーラブルなクラウドサーバーの構築。</PortfolioDescription>
        </PortfolioItem>
        <PortfolioItem>
          <PortfolioImage src={SampleImage} alt="Hodalog" />
          <PortfolioTitleText>Hodalog</PortfolioTitleText>
          <PortfolioDescription>技術ブログサイトのデザインと実装。</PortfolioDescription>
        </PortfolioItem>
      </PortfolioGrid>
    </PortfolioContainer>
  );
};

export default Portfolio;
