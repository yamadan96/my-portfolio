import { css } from 'styled-components';

// モバイルで小さいリンクのタップ領域を広げる。
// レイアウトの高さは変えずに、疑似要素で当たり判定だけを上下に拡張する（文字 13px + 上下 12px ≒ 46px）
export const mobileTapArea = css`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: -12px;
      bottom: -12px;
      left: -4px;
      right: -4px;
    }
  }
`;
