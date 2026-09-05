// 配色・書体の唯一の定義場所。
//
// 方針: 落ち着いたエディトリアル。装飾（グラデーション・ガラス効果・影）は使わず、
// 余白・罫線・書体の対比だけで階層を作る。アクセント色はインクブルー1色に限定し、
// リンクと小さな強調にだけ使う。
const baseTheme = {
  fonts: {
    // 見出し（h1 / h2 / 大きな数字）だけセリフ体。本文と h3 以下はサンセリフで可読性を優先
    display: "'Source Serif 4', 'Noto Serif JP', 'Hiragino Mincho ProN', 'Yu Mincho', serif",
    heading: "'Inter', 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif",
    body: "'Inter', 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '5rem',
  },
  borderRadius: { sm: '0.25rem', md: '0.375rem', lg: '0.5rem', xl: '0.75rem', full: '9999px' },
  breakpoints: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
  transitions: { fast: '0.15s ease', normal: '0.25s ease', slow: '0.4s ease' },
  // 本文の読みやすい行長。Hero の紹介文やセクションのリード文に使う
  measure: '46rem',
  // コンテンツ幅。1200px より少し絞り、1行が長くなりすぎないようにする
  contentWidth: '1120px',
};

export const lightTheme = {
  ...baseTheme,
  mode: 'light',
  colors: {
    primary: '#1e40af',
    primaryLight: '#2563eb',
    primaryDark: '#1e3a8a',
    background: '#ffffff',
    backgroundAlt: '#f6f6f4',
    surface: '#f6f6f4',
    surfaceHover: '#eeeeeb',
    text: '#16181d',
    textSecondary: '#3f4551',
    textMuted: '#6b7280',
    border: '#e4e5e1',
    borderStrong: '#16181d',
    success: '#15803d',
    error: '#b91c1c',
    warning: '#b45309',
    // 旧コンポーネント互換。グラデーションは使わないので単色にしている
    gradient: '#1e40af',
    glassBg: 'rgba(255, 255, 255, 0.92)',
    glassBorder: '#e4e5e1',
    cardBg: '#f6f6f4',
  },
};

export const darkTheme = {
  ...baseTheme,
  mode: 'dark',
  colors: {
    primary: '#9ab8ff',
    primaryLight: '#bfd2ff',
    primaryDark: '#7fa3ff',
    background: '#0f1115',
    backgroundAlt: '#161920',
    surface: '#161920',
    surfaceHover: '#1d2129',
    text: '#e9ebef',
    textSecondary: '#b3b9c6',
    textMuted: '#818899',
    border: '#272b34',
    borderStrong: '#e9ebef',
    success: '#4ade80',
    error: '#f87171',
    warning: '#fbbf24',
    gradient: '#9ab8ff',
    glassBg: 'rgba(15, 17, 21, 0.92)',
    glassBorder: '#272b34',
    cardBg: '#161920',
  },
};
