// 技術記事。Qiita 34本 / Zenn 7本 / note 6本のうち、
// AI・ML の技術密度が高いもの、または実務での意思決定が読み取れるものだけを選抜。
// 入門記事（NumPy / pandas / HTTP 基礎など）は意図的に除外している。
const writing = {
  profiles: [
    { platform: 'Qiita', url: 'https://qiita.com/yamadan96', count: '34本' },
    { platform: 'Zenn', url: 'https://zenn.dev/yuto0', count: '7本' },
    { platform: 'note', url: 'https://note.com/yuto_yamada398', count: '6本' },
  ],
  articles: [
    {
      id: 'w-qwen3vl',
      title: 'Qwen3-VL アーキテクチャ調査',
      date: '2025-11',
      platform: 'Qiita / Zenn',
      url: 'https://qiita.com/yamadan96/items/bbb8c0515880fa4d574a',
      summary:
        'マルチモーダル LLM Qwen3-VL の構造を、視覚エンコーダと言語モデルの接続方式まで踏み込んで整理した調査記事。',
      tags: ['VLM', 'Qwen3-VL', 'Architecture'],
      featured: true,
    },
    {
      id: 'w-llm-cicd',
      title: '不確実性を持つAI出力とCI/CD統合 — 実践ガイド',
      date: '2026-01',
      platform: 'Qiita',
      url: 'https://qiita.com/yamadan96/items/667f3b3da6a6d2b597c2',
      summary:
        '出力が毎回変わる LLM をどう CI に載せるか。promptfoo / DeepEval を用いた評価の自動化と、合否基準の設計をまとめた。',
      tags: ['MLOps', 'LLM Evaluation', 'CI/CD', 'promptfoo', 'DeepEval'],
      featured: true,
    },
    {
      id: 'w-diffusion-series',
      title: '拡散モデル徹底解説（全4回シリーズ）',
      date: '2025-12',
      platform: 'Qiita',
      url: 'https://qiita.com/yamadan96/items/16627edea9f87850a90f',
      summary:
        '第1回 理論編（DDPM / DDIM の数学的基礎）、第2回 実装編（U-Net を Keras で完全実装）、第3回 応用編（Stable Diffusion 3 と2024-2025年の最新研究）、第4回 実践編（実験結果・トラブルシューティング・最適化）の4部構成。',
      tags: ['Diffusion Model', 'DDPM', 'DDIM', 'U-Net', 'Stable Diffusion 3'],
      featured: true,
    },
    {
      id: 'w-legalon',
      title: 'LegalOn Technologies で2ヶ月間インターンした話 — 契約書分類をLLMで置き換えて精度14%改善した',
      date: '2026-04',
      platform: 'Qiita',
      url: 'https://qiita.com/yamadan96/items/8926e19382896bc72bbf',
      summary:
        '既存 ML モデルを LLM ベースに置き換えるまでの検証プロセスと、本番マイクロサービスへの組み込みまでを実務の視点で記録した。',
      tags: ['LLM', 'Text Classification', 'LegalTech', 'Production'],
      featured: true,
    },
    {
      id: 'w-mixi-mlops',
      title: 'MIXI『みてね』でのMLOpsインターン：機械学習基盤の効率化と最適化に取り組んだ8週間',
      date: '2025-11',
      platform: 'Qiita',
      url: 'https://qiita.com/yamadan96/items/9e29293f1bc6d03c1c46',
      summary: '大規模サービスの ML パイプラインに対する改善を、実運用の制約込みで振り返った記録。',
      tags: ['MLOps', 'AWS', 'ML Pipeline'],
      featured: true,
    },
    {
      id: 'w-lightning',
      title: 'PyTorch Lightning 基礎実装ガイド',
      date: '2024-09',
      platform: 'Qiita',
      url: 'https://qiita.com/yamadan96/items/0f893d1e4e5a5d77f65a',
      summary: '学習ループの定型部分を Lightning に寄せる際の実装パターンを整理。',
      tags: ['PyTorch', 'Lightning'],
      featured: false,
    },
    {
      id: 'w-nlp-nn',
      title: 'ニューラルネットワークを用いた自然言語処理の基礎',
      date: '2025-04',
      platform: 'Qiita / Zenn / note',
      url: 'https://qiita.com/yamadan96/items/05f49e024e67eff4b517',
      summary: '単語分散表現から系列モデルまで、NLP における NN の役割を体系立てて解説。',
      tags: ['NLP', 'Neural Network'],
      featured: false,
    },
    {
      id: 'w-3h-ai-app',
      title: '「3時間で作れるAIアプリ」に価値はあるのか？実務AIエンジニアがあえて公開した理由',
      date: '2026-02',
      platform: 'note',
      url: 'https://note.com/yuto_yamada398/n/ndfe5de638f4f',
      summary:
        '生成AIで開発速度が上がった時代に、個人開発のアウトプットをどう位置づけるかについての考察。',
      tags: ['Essay', 'AI Product'],
      featured: false,
    },
  ],
};

export default writing;
