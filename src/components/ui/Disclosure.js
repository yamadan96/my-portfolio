import React, { useId, useState } from 'react';
import styled from 'styled-components';

// 折りたたみセクション。
// ネイティブの <details> ではなくボタン + aria-expanded で組んでいるのは、
// 開閉状態をアニメーションさせつつスクリーンリーダーへ正しく伝えるため。
const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: ${({ theme }) => theme.spacing.md};
`;

const Trigger = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-align: left;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 3px;
    border-radius: 2px;
  }
`;

const Chevron = styled.span`
  display: inline-block;
  transition: transform ${({ theme }) => theme.transitions.fast};
  transform: rotate(${({ $open }) => ($open ? '90deg' : '0deg')});
  font-size: 0.8em;
  line-height: 1;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Panel = styled.div`
  padding-top: ${({ theme }) => theme.spacing.md};
`;

const Disclosure = ({ label = '技術詳細', children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const triggerId = useId();

  return (
    <Wrapper>
      <Trigger
        id={triggerId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <Chevron $open={open} aria-hidden="true">
          ▶
        </Chevron>
        {label}
      </Trigger>
      <Panel id={panelId} role="region" aria-labelledby={triggerId} hidden={!open}>
        {open && children}
      </Panel>
    </Wrapper>
  );
};

export default Disclosure;
