const baseTheme = {
  fonts: {
    heading: "'Inter', 'Noto Sans JP', sans-serif",
    body: "'Inter', 'Noto Sans JP', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  // xs=13px（タグ・小リンク）/ sm=15px（説明文）: 可読性のため 12px/14px から1段階上げている
  fontSizes: { xs: '0.8125rem', sm: '0.9375rem', md: '1rem', lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem', '5xl': '3rem', '6xl': '3.75rem' },
  spacing: { xs: '0.25rem', sm: '0.5rem', md: '1rem', lg: '1.5rem', xl: '2rem', '2xl': '3rem', '3xl': '4rem', '4xl': '6rem' },
  borderRadius: { sm: '0.25rem', md: '0.5rem', lg: '0.75rem', xl: '1rem', full: '9999px' },
  breakpoints: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
  transitions: { fast: '0.15s ease', normal: '0.3s ease', slow: '0.5s ease' },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    primary: '#6366f1',
    primaryLight: '#818cf8',
    primaryDark: '#4f46e5',
    background: '#0f172a',
    backgroundAlt: '#1e293b',
    surface: '#1e293b',
    surfaceHover: '#334155',
    text: '#f1f5f9',
    // 補助テキストは surface 上でも WCAG AA（4.5:1 以上）を満たす明度にする
    textSecondary: '#b6c2d2',
    textMuted: '#a3b0c2',
    // 小さい文字で使うアクセント色（タグ・期間・小リンク）。primary だと背景とのコントラストが不足する
    accentText: '#818cf8',
    border: '#334155',
    success: '#22c55e',
    error: '#ef4444',
    warning: '#f59e0b',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    glassBg: 'rgba(15, 23, 42, 0.8)',
    glassBorder: 'rgba(99, 102, 241, 0.15)',
    cardBg: 'rgba(30, 41, 59, 0.5)',
  },
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    primary: '#6366f1',
    primaryLight: '#818cf8',
    primaryDark: '#4f46e5',
    background: '#ffffff',
    backgroundAlt: '#f8fafc',
    surface: '#f1f5f9',
    surfaceHover: '#e2e8f0',
    text: '#0f172a',
    // 補助テキストは surface 上でも WCAG AA（4.5:1 以上）を満たす明度にする
    textSecondary: '#3f4c5f',
    textMuted: '#526175',
    // 小さい文字で使うアクセント色（タグ・期間・小リンク）。primary だと背景とのコントラストが不足する
    accentText: '#4f46e5',
    border: '#e2e8f0',
    success: '#22c55e',
    error: '#ef4444',
    warning: '#f59e0b',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    glassBg: 'rgba(255, 255, 255, 0.8)',
    glassBorder: 'rgba(99, 102, 241, 0.15)',
    cardBg: 'rgba(241, 245, 249, 0.5)',
  },
};
