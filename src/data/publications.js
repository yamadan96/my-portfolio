// 発表済み・発表確定の学会発表と学位論文。
// 投稿準備中のものは research.js を参照。
const publications = [
  {
    id: 'pub-ite2026',
    // Level 3（数字）: 3件とも「公開ベンチマークでの自手法スコア（先行報告）」で粒度を揃える
    metrics: [
      { value: '79.87%', label: 'PHI-Net Accuracy（先行報告 74.50%）' },
      { value: '99.53%', label: 'AIDERv2 Accuracy（同 96.60%）' },
      { value: '83.86%', label: 'MEDIC Weighted-F1（同 80.40%）' },
    ],
    title: '視覚基盤モデルによる小・中規模被災建物画像データセットの分類性能の比較',
    venue:
      '映像情報メディア学会 2026年年次大会（口頭）／第1回 知覚AIフォーラム（ポスター、2026年8月24日・東京理科大学 葛飾キャンパス）',
    year: 2026,
    type: '学会発表（口頭・ポスター）',
    highlight: '公開ベンチマーク3件でSoTA更新',
    // 原稿（ite2026-paper.pdf）掲載の Abstract をそのまま転記。
    abstract:
      'Since datasets for training dedicated models for such tasks are limited, utilization of general-purpose ' +
      'visual foundation models (VFMs) is beneficial. In this paper, we found that a newer VFM is not necessarily ' +
      'better: the previous-generation DINOv2 with LoRA outperformed the newer alternative in our comparative study.',
    description:
      '被災建物の損傷度分類において、視覚基盤モデル（DINOv2 ViT-L/14・DINOv3 ViT-L/16）の選択と適応戦略を、' +
      '規模の異なる4種の災害画像データセット（能登半島地震 832枚／PHI-Net 4,138枚／AIDERv2 13,399枚／MEDIC 49,353枚）で系統的に比較。' +
      'より大規模に事前学習されたDINOv3が最小規模の能登データではDINOv2を5.53ポイント下回る一方、' +
      'PHI-Net規模では差が0.25ポイントまで消失する反直感的な現象を報告。' +
      'またPHI-NetではFull Fine-Tuning（3億439万パラメータ更新・76.20%）に対し、' +
      'LoRA r=8（79万パラメータ＝全体の0.26%のみ更新）が79.82%と上回り、低ランク適応の暗黙的正則化効果を実証。' +
      'PHI-Net 79.87%（先行報告74.50%）、AIDERv2 99.53%（同96.60%）、MEDIC 83.86% W-F1（同80.40%）と、' +
      '3つの公開ベンチマークで一貫してSoTAを更新。',
    tags: ['Vision Foundation Model', 'DINOv2', 'DINOv3', 'LoRA', 'Disaster Assessment'],
    link: 'https://www.ite.or.jp/annual/2026/',
    citation:
      '山田悠人, 鈴木海友, 松田一朗, 多賀祥平, 松澤智史, 柏田 仁, 二瓶泰雄: 「視覚基盤モデルによる小・中規模被災建物画像データセットの分類性能の比較」, 映像情報メディア学会2026年年次大会講演予稿集, 2026年8月.',
    materials: [
      { label: '原稿PDF', url: '/papers/ite2026-paper.pdf' },
      { label: 'ポスターPDF（知覚AIフォーラム）', url: '/papers/ite2026-poster.pdf' },
      { label: '知覚AIフォーラム 開催案内', url: 'https://rist.tus.ac.jp/news/15938/' },
    ],
  },
  {
    id: 'pub-ieice2026',
    metrics: [
      { value: '71.04%', label: 'Accuracy（単一タスク 68.99% → MTL、10シード平均）' },
      { value: '0.656', label: 'Macro F1（同 0.637 →）' },
    ],
    title: '被災建物画像の多クラス損傷度分類におけるマルチタスク学習の有効性',
    venue: 'IEICE2026 電子情報通信学会 総合大会',
    year: 2026,
    type: '学会発表（口頭）',
    highlight: 'Accuracy 68.99% → 71.04%（10シード平均）',
    description:
      'クラス不均衡問題に対し、補助タスク（災害タイプ／重症度）を導入したマルチタスク学習を提案。' +
      'DINOv2＋LoRAをバックボーンとし、10シード平均で Accuracy 68.99±2.95% → 71.04±3.10%、' +
      'Macro F1 0.6366±0.0272 → 0.6556±0.0488 に改善。' +
      'コスト行列導入とMTL損失設計により、少数クラス性能を引き上げつつ汎化性能と安定性を確保した。',
    tags: ['Multi-task Learning', 'DINOv2', 'LoRA', 'Class Imbalance'],
    link: 'https://pub.confit.atlas.jp/ja/event/general2026/presentation/D-12-80',
    citation:
      '山田悠人, 鈴木海友, 松田一朗, 多賀祥平, 松澤智史, 二瓶泰雄, 柏田 仁: 「被災建物画像の多クラス損傷度分類におけるマルチタスク学習の有効性」, 2026年電子情報通信学会総合大会講演論文集, 2026年3月13日.',
    materials: [
      { label: '東理大研究業績DB', url: 'https://www.tus.ac.jp/ridai/doc/ji/RIJIA01User.php?kin=soc&diu=18e8' },
      { label: '原稿PDF', url: '/papers/ieice2026-paper.pdf' },
      { label: 'スライドPDF', url: '/papers/ieice2026-slides.pdf' },
    ],
  },
  {
    id: 'pub-fit2025',
    metrics: [
      { value: '0.77', label: 'Macro F1（ResNet-50 0.46 → DINOv2 + LoRA）' },
      { value: '1,040枚', label: '能登半島地震の自作データセット（6クラス）' },
    ],
    title: 'ファインチューニング手法に基づく被災建物画像の多クラス損傷度分類の精度改善',
    venue: 'FIT2025 第24回情報科学技術フォーラム',
    year: 2025,
    type: '学会発表（口頭）',
    highlight: 'DINOv2+LoRA で Macro F1 0.46 → 0.77',
    description:
      '地震・津波などの大規模災害直後の被災建物損傷度分類の自動化。' +
      '2024年能登半島地震の被災家屋を現地撮影した独自データセット（1,040枚・6クラス・518×518画素／訓練832枚・評価208枚の固定分割）を使用。' +
      'クラス分布は最大313枚〜最小88枚と不均衡で、専門家によるラベル付与でも判断が分かれる難易度の高いタスク。' +
      'ResNet-50（Acc 0.51／Macro F1 0.46）、ConvNeXt-Tiny（0.66／0.54）に対し、' +
      'DINOv2（ViT-B）＋LoRAが Acc 0.80／Macro F1 0.77 で最良となり、少数データ環境における精度と軽量性の両立を示した。',
    tags: ['Deep Learning', 'LoRA', 'CNN', 'ViT', 'Disaster Assessment'],
    link: 'https://www.ieice.org/publications/conferences/summary.php?id=FIT0000017580&expandable=2&ConfCd=F&session_num=7n&lecture_number=I-029&year=2025&conf_type=F',
    citation:
      '山田悠人, 鈴木海友, 松田一朗, 多賀祥平, 松澤智史, 柏田 仁, 二瓶泰雄: 「ファインチューニング手法に基づく被災建物画像の多クラス損傷度分類の精度改善」, 第24回情報科学技術フォーラム(FIT 2025)講演論文集, Vol.3, No.I-029, pp.339-340, (2025年9月).',
    materials: [
      { label: '原稿PDF', url: '/papers/fit2025-paper.pdf' },
      { label: 'スライドPDF', url: '/papers/fit2025-slides.pdf' },
    ],
  },
  {
    id: 'pub-bachelor-thesis',
    title: '長期文脈を活用したフレーム外挿モデルによる動画異常検知',
    venue: '東京理科大学 創域理工学部 2024年度 卒業論文',
    year: 2024,
    type: '卒業論文',
    highlight: 'CW-VAE による時間スケール分離の有効性を実証',
    description:
      '事故などの異常を動画から検知するタスクにおいて、従来手法が苦手とする長期的な背景変化や動作パターンの抽出を目的に、' +
      'Clockwork Variational Autoencoder（CW-VAE）を活用した手法を提案。' +
      'OOPS!データセットを用いてConvLSTMとの定量比較を実施し、AUC・F1など複数指標で優れた結果を達成。',
    tags: ['VAE', 'CW-VAE', 'Anomaly Detection', 'Video Analysis', 'ConvLSTM', 'OOPS!'],
    link: 'https://github.com/yamadan96/cwvae-anomaly-detection-thesis',
    citation: null,
    materials: [],
  },
];

export default publications;
