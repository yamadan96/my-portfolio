const research = [
  {
    id: 'research-01',
    title: 'ファインチューニング手法に基づく被災建物画像の多クラス損傷度分類の精度改善',
    venue: 'FIT2025 第24回情報科学技術フォーラム',
    year: 2025,
    type: '学会発表（口頭）',
    description:
      '地震・津波などの大規模災害直後の被災建物損傷度分類の自動化。' +
      '2024年能登半島地震の被災家屋を現地撮影した独自データセット（1,040枚・6クラス・518×518画素／訓練832枚・評価208枚の固定分割）を使用。' +
      'クラス分布は最大313枚〜最小88枚と不均衡で、専門家によるラベル付与でも判断が分かれる難易度の高いタスク。' +
      'ResNet-50（Acc 0.51／Macro F1 0.46）、ConvNeXt-Tiny（0.66／0.54）に対し、' +
      'DINOv2（ViT-B）＋LoRAが Acc 0.80／Macro F1 0.77 で最良となり、少数データ環境における精度と軽量性の両立を示した。',
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
    description:
      'クラス不均衡問題に対し、補助タスク（災害タイプ／重症度）を導入したマルチタスク学習を提案。' +
      'DINOv2＋LoRAをバックボーンとし、10シード平均で Accuracy 68.99±2.95% → 71.04±3.10%、' +
      'Macro F1 0.6366±0.0272 → 0.6556±0.0488 に改善。' +
      'コスト行列導入とMTL損失設計により、少数クラス性能を引き上げつつ汎化性能と安定性を確保した。',
    tags: ['Multi-task Learning', 'DINOv2', 'LoRA', 'Class Imbalance'],
    link: 'https://pub.confit.atlas.jp/ja/event/general2026/presentation/D-12-80',
    citation: '山田悠人, 鈴木海友, 松田一朗, 多賀祥平, 松澤智史, 二瓶泰雄, 柏田 仁: 「被災建物画像の多クラス損傷度分類におけるマルチタスク学習の有効性」, 2026年電子情報通信学会総合大会講演論文集, 2026年3月13日.',
    materials: [
      { label: '東理大研究業績DB', url: 'https://www.tus.ac.jp/ridai/doc/ji/RIJIA01User.php?kin=soc&diu=18e8' },
      { label: '原稿PDF', url: '/papers/ieice2026-paper.pdf' },
      { label: 'スライドPDF', url: '/papers/ieice2026-slides.pdf' },
    ],
  },
  {
    id: 'research-03',
    title: '視覚基盤モデルによる小・中規模被災建物画像データセットの分類性能の比較',
    venue: '映像情報メディア学会 2026年年次大会（口頭）／第1回 知覚AIフォーラム（ポスター）',
    year: 2026,
    type: '学会発表（口頭・ポスター・予定）',
    description:
      '被災建物の損傷度分類において、視覚基盤モデル（DINOv2 ViT-L/14・DINOv3 ViT-L/16）の選択と適応戦略を、' +
      '規模の異なる4種の災害画像データセット（能登半島地震 832枚／PHI-Net 4,138枚／AIDERv2 13,399枚／MEDIC 49,353枚）で系統的に比較。' +
      'より大規模に事前学習されたDINOv3が最小規模の能登データではDINOv2を5.53ポイント下回る一方、' +
      'PHI-Net規模では差が0.25ポイントまで消失する反直感的な現象を報告。' +
      'またPHI-NetではFull Fine-Tuning（3億439万パラメータ更新・76.20%）に対し、' +
      'LoRA r=8（79万パラメータ＝全体の0.26%のみ更新）が79.82%と上回り、低ランク適応の暗黙的正則化効果を実証。' +
      'PHI-Net 79.87%（先行報告74.50%）、AIDERv2 99.53%（同96.60%）、MEDIC 83.86% W-F1（同80.40%）と、' +
      '3つの公開ベンチマークで一貫してSoTAを更新。' +
      '同一内容を「第1回 知覚AIフォーラム 〜共生するフィジカルAIをめぐって〜」（東京理科大学 研究推進機構 総合研究院 知覚AI基盤研究部門 主催、2026年8月24日・葛飾キャンパス 講義棟E203教室）でポスター発表。',
    tags: ['Vision Foundation Model', 'DINOv2', 'DINOv3', 'LoRA', 'Disaster Assessment'],
    link: 'https://www.ite.or.jp/annual/2026/',
    citation: '山田悠人, 鈴木海友, 松田一朗, 多賀祥平, 松澤智史, 柏田 仁, 二瓶泰雄: 「視覚基盤モデルによる小・中規模被災建物画像データセットの分類性能の比較」, 映像情報メディア学会2026年年次大会講演予稿集 (発表予定), 2026年8月.',
    materials: [
      { label: '原稿PDF', url: '/papers/ite2026-paper.pdf' },
      { label: '知覚AIフォーラム', url: 'https://www.rs.tus.ac.jp/perceptual-ai/#workshop-1' },
    ],
  },
  {
    id: 'research-07',
    title: '被災建物画像の損傷度分類に関する研究（演題準備中）',
    venue: 'IWAIT 2027 International Workshop on Advanced Image Technology（韓国・ソウル）',
    year: 2027,
    type: '国際会議（投稿予定）',
    description:
      '画像技術分野の国際ワークショップ IWAIT 2027（2027年1月10〜12日、韓国・ソウル 梨花女子大学）への投稿を予定。' +
      '国内学会で継続してきた被災建物の損傷度分類研究を、国際会議向けにまとめる。',
    tags: ['Disaster Assessment', 'International Conference'],
    link: 'https://iwait.online/',
  },
  {
    id: 'research-04',
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
    id: 'research-05',
    title: 'マルチモーダルRAGによる日本語専門文書の要約・分析システム開発',
    venue: '東京大学 松尾・岩澤研究室 LLMATCHプログラム',
    year: 2025,
    type: '選抜制プログラム',
    description: '図表や画像を含む日本語専門文書を対象としたマルチモーダルRAGシステムの開発。CLIPやLangChainを活用し、画像・表・テキストの埋め込み統合と生成系LLMとの連携による検索拡張生成を設計。',
    tags: ['RAG', 'Multimodal', 'CLIP', 'LangChain', 'LLM'],
    link: null,
  },
  {
    id: 'research-06',
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
