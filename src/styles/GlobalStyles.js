import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #ffffff; /* 背景を白に設定 */
    color: #333333; /* テキストを濃いグレーに設定 */
    line-height: 1.6;
  }

  h1, h2, h3 {
    font-weight: bold;
    color: #333333;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: #FFD700; /* リンクやボタンに黄色を使用 */
    transition: color 0.3s ease;

    &:hover {
      color: #ffa500; /* ホバー時に少し濃い黄色に */
    }
  }

  section {
    padding: 2rem 1rem;
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
  }
`;

export default GlobalStyles;
