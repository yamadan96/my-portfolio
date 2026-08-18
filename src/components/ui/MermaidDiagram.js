import React, { useEffect, useId, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';

// mermaid はバンドルが大きいため静的 import しない。
// 図はすべて折りたたみパネルの中にあるので、読者がパネルを開いた
// このコンポーネントのマウント時に初めて動的 import する。
// 結果として初期ロードのバンドルには一切含まれない。
const Figure = styled.figure`
  margin: 0;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.cardBg};
  overflow-x: auto;

  svg {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
`;

const Caption = styled.figcaption`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: ${({ theme }) => theme.spacing.sm};
  text-align: center;
`;

const Status = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
`;

const MermaidDiagram = ({ chart, caption, alt }) => {
  const theme = useTheme();
  const containerRef = useRef(null);
  const rawId = useId();
  const [state, setState] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    // useId は ":" を含むが mermaid は CSS セレクタとして扱うため使えない
    const renderId = `mermaid-${rawId.replace(/[^a-zA-Z0-9]/g, '')}`;

    import('mermaid')
      .then(({ default: mermaid }) => {
        if (cancelled) return;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme: 'base',
          fontFamily: 'inherit',
          themeVariables: {
            background: theme.colors.cardBg,
            primaryColor: `${theme.colors.primary}22`,
            primaryTextColor: theme.colors.text,
            primaryBorderColor: theme.colors.primary,
            lineColor: theme.colors.textMuted,
            secondaryColor: theme.colors.cardBg,
            tertiaryColor: theme.colors.cardBg,
            fontSize: '13px',
          },
        });
        return mermaid.render(renderId, chart);
      })
      .then((result) => {
        if (cancelled || !result || !containerRef.current) return;
        containerRef.current.innerHTML = result.svg;
        // 図は caption / alt で説明済みなので、SVG 内部は読み上げ対象から外す
        const svg = containerRef.current.querySelector('svg');
        if (svg) {
          svg.setAttribute('role', 'img');
          if (alt) svg.setAttribute('aria-label', alt);
        }
        setState('done');
      })
      .catch(() => {
        if (!cancelled) setState('error');
      });

    return () => {
      cancelled = true;
    };
  }, [chart, rawId, alt, theme]);

  return (
    <Figure>
      <div ref={containerRef} />
      {state === 'loading' && <Status>構成図を読み込み中…</Status>}
      {state === 'error' && <Status>構成図を表示できませんでした。</Status>}
      {caption && state === 'done' && <Caption>{caption}</Caption>}
    </Figure>
  );
};

export default MermaidDiagram;
