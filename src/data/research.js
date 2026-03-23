const research = [
  {
    id: 'research-01',
    title: 'ファインチューニング手法に基づく被災建物画像の多クラス損傷度分類の精度改善',
    venue: 'FIT2025 第24回情報科学技術フォーラム',
    year: 2025,
    type: '学会発表（口頭）',
    description: '地震・津波などの大規模災害直後の被災建物損傷度分類の自動化。ResNet・ConvNeXt・ViTの比較検証に加え、LoRA（Low-Rank Adaptation）を導入し、少数データ環境での高精度ファインチューニングを実現。従来手法を上回る精度と軽量性を両立。',
    tags: ['Deep Learning', 'LoRA', 'CNN', 'ViT', 'Disaster Assessment'],
    link: 'https://www.ieice.org/publications/conferences/summary.php?id=FIT0000017580&expandable=2&ConfCd=F&session_num=7n&lecture_number=I-029&year=2025&conf_type=F',
    citation: '山田悠人, 鈴木海友, 松田一朗, 多賀祥平, 松澤智史, 柏田 仁, 二瓶泰雄: 「ファインチューニング手法に基づく被災建物画像の多クラス損傷度分類の精度改善」, 第24回情報科学技術フォーラム(FIT 2025)講演論文集, Vol.3, No.I-029, pp.339-340, (2025年9月).',
    materials: [
      { label: '原稿PDF', url: '/papers/fit2025-paper.pdf' },
      { label: 'スライドPDF', url: '/papers/fit2025-slides.pdf' },
    ],
  },
  {
    id: 'research-02',
    title: '被災建物画像の多クラス損傷度分類におけるマルチタスク学習の有効性',
    venue: 'IEICE2026 電子情報通信学会 総合大会',
    year: 2026,
    type: '学会発表（口頭）',
    description: 'クラス不均衡問題に対し、補助タスク（タイプ/重症度）を導入したマルチタスク学習を提案。DINOv2＋LoRAを用い、少数クラス性能を改善しMacro F1を向上。コスト行列導入とMTL損失設計で汎化性能と安定性を実現。',
    tags: ['Multi-task Learning', 'DINOv2', 'LoRA', 'Class Imbalance'],
    link: null,
    citation: '山田悠人, 鈴木海友, 松田一朗, 多賀祥平, 松澤智史, 二瓶泰雄, 柏田 仁: 「被災建物画像の多クラス損傷度分類におけるマルチタスク学習の有効性」, 2026年電子情報通信学会総合大会講演論文集, 2026年3月13日.',
    materials: [
      { label: '原稿PDF', url: '/papers/ieice2026-paper.pdf' },
      { label: 'スライドPDF', url: '/papers/ieice2026-slides.pdf' },
    ],
  },
  {
    id: 'research-03',
    title: '長期文脈を活用したフレーム外挿モデルによる動画異常検知',
    venue: '東京理科大学 創域理工学部 2024年度 卒業論文',
    year: 2024,
    type: '卒業論文',
    description:
      '事故などの異常を動画から検知するタスクにおいて、従来手法が苦手とする長期的な背景変化や動作パターンの抽出を目的に、' +
      'Clockwork Variational Autoencoder（CW-VAE）を活用した手法を提案。' +
      'OOPS!データセットを用いてConvLSTMとの定量比較を実施し、AUC・F1など複数指標で優れた結果を達成。' +
      'CW-VAEの時間的抽象化機構により、短期・長期双方の変化を捉え、動画異常検知における時間スケール分離の有効性を示した。',
    tags: ['VAE', 'CW-VAE', 'Anomaly Detection', 'Video Analysis', 'ConvLSTM', 'OOPS!'],
    link: 'https://github.com/yamadan96/cwvae-anomaly-detection-thesis',
  },
  {
    id: 'research-04',
    title: 'マルチモーダルRAGによる日本語専門文書の要約・分析システム開発',
    venue: '東京大学 松尾・岩澤研究室 LLMATCHプログラム',
    year: 2025,
    type: '選抜制プログラム',
    description: '図表や画像を含む日本語専門文書を対象としたマルチモーダルRAGシステムの開発。CLIPやLangChainを活用し、画像・表・テキストの埋め込み統合と生成系LLMとの連携による検索拡張生成を設計。',
    tags: ['RAG', 'Multimodal', 'CLIP', 'LangChain', 'LLM'],
    link: null,
  },
  {
    id: 'research-05',
    title: '連続変換生成モデルNFDMのTransformerベース簡略化に関する基礎検討',
    venue: '研究プロジェクト',
    year: 2025,
    type: '研究プロジェクト',
    description: 'Neural Flow Diffusion Models（NFDM）を基盤とし、Just Image Transformerベースへ拡張・簡略化する研究。モデル構造の単純化とTransformer化による挙動整理を目的とした予備実験を実施。',
    tags: ['Diffusion Model', 'Transformer', 'Generative Model', 'NFDM'],
    link: null,
  },
];

export default research;
