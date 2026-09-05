import styled from 'styled-components';

// トップページの各セクションで共有する小さな部品。

// 原稿 PDF などへのリンク
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

// 「詳細 →」「すべて見る →」。装飾なしのテキストリンク
export const TextLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  line-height: 2;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  text-align: left;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

export const MoreRow = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;
