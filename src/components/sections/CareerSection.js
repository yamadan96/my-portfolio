import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import { MoreRow, TextLink } from '../ui/Editorial';
import experiences from '../../data/experiences';

// 職務経歴書と同じ読み方ができる形にする: 期間 / 会社 / 役職 / 何をしたか（30文字前後の1行）だけ。
// 数字・技術スタック・担当範囲は詳細ページへ。ここで読ませるのは「どこで何をしたか」の一覧性。
//
// 並び順は 現職 → 終了日の新しい順。
const TOP_IDS = ['matsuo-institute-gui-rag', 'airion', 'legaltech-freelance', 'solty', 'legalon', 'mixi'];

const List = styled.ol`
  list-style: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Row = styled.li`
  display: grid;
  grid-template-columns: 12rem minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => `${theme.spacing.md} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2px;
  }
`;

const Period = styled.p`
  padding-top: 2px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  font-variant-numeric: tabular-nums;
`;

const Head = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: ${({ theme }) => `0 ${theme.spacing.sm}`};
`;

const Company = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const Role = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Summary = styled.p`
  margin-top: 2px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const DetailLink = styled(TextLink)`
  margin-left: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  white-space: nowrap;
`;

// 役職の括弧書き（担当領域の補足）は一覧では落とす。詳細ページで出る
const shortRole = (role) => role.replace(/[（(].*$/, '').trim();

const CareerSection = () => {
  const navigate = useNavigate();
  const items = TOP_IDS.map((id) => experiences.find((e) => e.id === id)).filter(Boolean);
  // 件数ではなく社数で数える（松尾研究所のように1社で複数エントリがあるため）
  const allCompanies = new Set(experiences.map((e) => e.company));
  const restCount = allCompanies.size - new Set(items.map((e) => e.company)).size;

  return (
    <Section id="experience">
      <SectionTitle index="03" eyebrow="Experience" title="職務経歴" />
      <List>
        {items.map((item) => (
          <Row key={item.id}>
            <Period>{item.period}</Period>
            <div>
              <Head>
                <Company>{item.company}</Company>
                <Role>{shortRole(item.role)}</Role>
              </Head>
              <Summary>
                {item.oneLiner || item.summary.built}
                {item.hasDetail && (
                  <DetailLink onClick={() => navigate(`/experience/${item.id}`)}>詳細 →</DetailLink>
                )}
              </Summary>
            </div>
          </Row>
        ))}
      </List>
      <MoreRow>
        <TextLink onClick={() => navigate('/more')}>短期インターンを含む他{restCount}社の経歴を見る →</TextLink>
      </MoreRow>
    </Section>
  );
};

export default CareerSection;
