import styled from 'styled-components';

// トップページの各セクションで共有する部品。
// 「代表的な実績」と「研究・発表」のカードが同じ骨格に見えるよう、ここに寄せている。

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.background};
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.textMuted};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

// 会社名・学会名・期間など、本文の前に置く小さな文脈
export const Meta = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const CardTitle = styled.h3`
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.45;
`;

// 「作ったもの」「担当」などのラベル
export const Term = styled.dt`
  margin-top: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Desc = styled.dd`
  margin-top: 2px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

// 成果の数字。文脈（Term / Desc）の後に置くこと
export const Figure = styled.p`
  margin-top: 2px;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.text};
`;

export const Chip = styled.a`
  display: inline-block;
  padding: 3px 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
`;

// 「詳細を見る →」「すべて見る →」。装飾なしのテキストリンク
export const TextLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  text-align: left;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

export const CardFooter = styled.div`
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.lg};
`;

export const MoreRow = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;
