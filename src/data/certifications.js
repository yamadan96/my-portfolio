// topPage: true の5件だけがトップページに開いた状態で出る（並びは取得年月の新しい順）。
// それ以外は「すべての資格・修了証を見る →」の中に入る。
// shortName / issuer は name を「資格名」と「発行元」に切り分けた表示用フィールド（新しい事実は足さない）。
// shortName が無い項目は name をそのまま出す。
const certifications = [
  {
    name: '普通自動車第一種免許（MT）',
    category: 'その他',
    year: '2021年7月',
    description: '',
    link: null,
  },
  {
    name: '普通二輪免許（MT）',
    category: 'その他',
    year: '2026年6月',
    description: '',
    link: null,
  },
  {
    name: '大型二輪免許（MT）',
    category: 'その他',
    year: '2026年7月',
    description: '',
    link: null,
  },
  {
    name: 'Harvard CS50x: Introduction to Computer Science',
    topPage: true,
    shortName: 'CS50x: Introduction to Computer Science',
    issuer: 'Harvard University',
    category: 'CS',
    year: '2022年2月',
    description: 'Harvard University 提供の CS 基礎コース修了（問題セット10・ラボ8・最終プロジェクト）',
    // 証明書に印字された検証用 URL
    link: 'https://cs50.harvard.edu/certificates/42c3158a-2221-4f86-bde8-75468835d44a',
    pdfLink: '/certificates/harvard-cs50x-2022.pdf',
  },
  {
    name: '日商簿記検定3級',
    category: '会計',
    year: '2023年1月',
    description: '日本商工会議所主催',
    // 合格証書のスキャン（生年月日・証番号は塗りつぶし済み）
    link: '/certificates/nissho-boki-3-2023.jpg',
  },
  {
    name: 'JDLA認定「現場で使えるディープラーニング基礎講座」',
    category: 'AI',
    year: '2024年1月',
    description: '日本ディープラーニング協会認定プログラム修了',
    link: null,
  },
  {
    name: 'Data Science Education Program Level 3（Specialization）',
    category: 'Data Science',
    year: '2025年3月',
    description: 'データサイエンス教育プログラム修了',
    link: 'https://www.openbadge-global.com/api/v1.0/openBadge/v2/Wallet/Public/GetAssertionShare/aHBkNHNWLzhrWmpNVlJVSDZVQTdIZz09',
    pdfLink: '/certificates/tus-data-science-level3-2025.pdf',
  },
  {
    name: '東京大学松尾研究室 集中講義「画像認識」修了証',
    topPage: true,
    shortName: '集中講義「画像認識」修了',
    issuer: '東京大学 松尾研究室',
    category: 'AI',
    year: '2022年4月',
    description: '画像認識のための先端的機械学習モデルの設計と開発に関する所定のプログラムを修了',
    link: '/certificates/matsuoken-image-recognition-2022.png',
  },
  {
    name: '東京大学 グローバル消費インテリジェンス寄附講座 修了証',
    category: 'AI',
    year: '2023年3月',
    description: 'データ分析およびマーケティングに関する所定のプログラムを修了（2022 Winter）',
    link: '/certificates/matsuoken-global-consumer-intelligence-2022winter.png',
  },
  {
    name: '東京大学松尾研究室 集中講義「深層生成モデル」修了証',
    topPage: true,
    shortName: '集中講義「深層生成モデル」修了',
    issuer: '東京大学 松尾研究室',
    category: 'AI',
    year: '2024年4月',
    description: '深層生成モデルの設計と開発に関する所定のプログラムを修了（2024 Spring）',
    link: '/certificates/matsuoken-deep-generative-model-2024spring.png',
  },
  {
    name: '東京大学 AI経営講座「AI Business Insights 2025」修了証',
    category: 'AI',
    year: '2025年4月',
    description: '組織戦略へのAI技術利活用、基礎知識・応用事例・組織の在り方等を学習し修了',
    link: '/certificates/matsuoken-ai-business-insights-2025.pdf',
  },
  {
    name: 'G検定（JDLA Deep Learning for GENERAL 2026 #4）',
    topPage: true,
    shortName: 'G検定',
    issuer: 'JDLA',
    category: 'AI',
    year: '2026年8月',
    description:
      '日本ディープラーニング協会主催。ディープラーニングの基礎知識と事業活用能力を認定（2026年7月実施回 合格）',
    link: 'https://www.openbadge-global.com/api/v1.0/openBadge/v2/Wallet/Public/GetAssertionShare/bldidkE4U3JwaVR0QUdvOUhiYzV5QT09',
    pdfLink: '/certificates/jdla-g-general-2026-4.pdf',
  },
  {
    name: '東京大学松尾・岩澤研究室 講座「Physical AI 基礎編 2026」修了証',
    topPage: true,
    shortName: 'Physical AI 基礎編 2026 修了',
    issuer: '東京大学 松尾・岩澤研究室',
    category: 'AI',
    year: '2026年9月',
    description: '松尾・岩澤研究室が主宰する Physical AI 基礎編（2026）を修了（2026年9月11日付）',
    link: '/certificates/matsuoken-physical-ai-basic-2026.pdf',
  },
];

export default certifications;
