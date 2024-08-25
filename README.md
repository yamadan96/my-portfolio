# LionTech ポートフォリオ

![LionTech ロゴ](./public/images/logo.png)

## 概要

このリポジトリは、Reactを使用して構築された個人用ポートフォリオウェブサイトです。プロジェクトの紹介、スキル、連絡先情報を掲載しています。GitHub Pagesを利用してホスティングされており、レスポンシブでモダンなユーザーエクスペリエンスを提供します。

## 特徴

- **レスポンシブデザイン:** 様々な画面サイズに対応したレスポンシブデザイン。
- **React:** スムーズで動的なユーザーインターフェイスを実現するためにReactを使用。
- **Styled Components:** メンテナンス性と柔軟性を高めるためにStyled Componentsを使用してスタイリングを管理。
- **GitHub Pages デプロイ:** GitHub Actionsを使用して自動的にGitHub Pagesにデプロイ。
- **HashRouter を使用したルーティング:** GitHub Pages上でのルーティング問題を解決するためにHashRouterを使用。

## セクション

1. **ホーム**: LionTechおよびAIエンジニアとしての私の簡単な紹介。
2. **プロフィール**: 私のバックグラウンド、スキル、経験に関する情報。
3. **ポートフォリオ**: 特徴的なプロジェクトを紹介。
4. **連絡先**: 直接メッセージを送信できる連絡フォーム。

## 始め方

### 前提条件

Node.jsとnpmがインストールされていることを確認してください。

```bash
node -v
npm -v
```

### インストール

1. リポジトリをクローンします:

   ```bash
   git clone https://github.com/yamadan96/my-portfolio.git
   ```

2. プロジェクトディレクトリに移動します:

   ```bash
   cd my-portfolio
   ```

3. 依存関係をインストールします:

   ```bash
   npm install
   ```

### ローカルでの実行

開発サーバーを開始するには、以下を実行します:

```bash
npm start
```

ブラウザで `http://localhost:3000` を開き、ウェブサイトを表示します。

### 本番ビルドの作成

最適化された本番ビルドを作成するには、以下を実行します:

```bash
npm run build
```

### GitHub Pages へのデプロイ

このプロジェクトは、`main` ブランチに変更がプッシュされるたびに、GitHub Actionsを通じて自動的にGitHub Pagesにデプロイされるよう設定されています。

手動でデプロイするには、以下を実行します:

```bash
npm run deploy
```

サイトは以下のURLにデプロイされます:

```
https://yamadan96.github.io/my-portfolio/
```

## 使用技術

- React
- Styled Components
- React Router (HashRouter)
- GitHub Pages
- GitHub Actions (CI/CD)

## プロジェクト構成

```
my-portfolio/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── App.js
│   └── index.js
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── README.md
└── ...
```

