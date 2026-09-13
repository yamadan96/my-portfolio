import React, { useId, useState } from 'react';
import styled from 'styled-components';

// トップページ用の「その場で開く」折りたたみ。
// 一覧の下に文字リンク風のボタンを1つ置き、押すと直下に残りの項目を展開する（ページ遷移はしない）。
// カード内の折りたたみ（Disclosure）と違い、セクション幅いっぱい・中央揃えで使う。
const ToggleRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 3px;
    border-radius: 4px;
  }
`;

const Panel = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const ExpandInPlace = ({ label, closeLabel = '閉じる ↑', children }) => {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <>
      <ToggleRow>
        <ToggleButton
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? closeLabel : label}
        </ToggleButton>
      </ToggleRow>
      <Panel id={panelId} hidden={!open}>
        {open && children}
      </Panel>
    </>
  );
};

export default ExpandInPlace;
