import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import { Card, CardFooter, CardGrid, CardTitle, Desc, Figure, Meta, MoreRow, Term, TextLink } from '../ui/Editorial';
import selectedWork from '../../data/selectedWork';
import projects from '../../data/projects';

// 1枚のカードは 作ったもの（1文） → 担当（短句） → 成果（数字1つ）。
// 3枚とも同じ骨格にして横に並べ、読み手が同じ位置を見比べられるようにする。
const Rows = styled.dl`
  margin: 0;
`;

const Note = styled.p`
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const SelectedWorkSection = () => {
  const navigate = useNavigate();

  return (
    <Section id="work">
      <SectionTitle index="01" eyebrow="Selected Work" title="代表的な実績" />
      <CardGrid>
        {selectedWork.map((item) => (
          <Card key={item.id}>
            <Meta>
              {item.org} · {item.period}
            </Meta>
            <CardTitle>{item.title}</CardTitle>
            <Rows>
              <Term>作ったもの</Term>
              <Desc>{item.built}</Desc>
              <Term>担当</Term>
              <Desc>{item.role}</Desc>
              <Term>成果</Term>
              <Desc>
                <Figure>{item.outcome.value}</Figure>
                {item.outcome.label}
                {item.note && <Note>{item.note}</Note>}
              </Desc>
            </Rows>
            <CardFooter>
              <TextLink onClick={() => navigate(item.detailPath)}>詳細を見る →</TextLink>
            </CardFooter>
          </Card>
        ))}
      </CardGrid>
      <MoreRow>
        <TextLink onClick={() => navigate('/work')}>個人開発・研究実装の一覧（{projects.length}件）→</TextLink>
      </MoreRow>
    </Section>
  );
};

export default SelectedWorkSection;
