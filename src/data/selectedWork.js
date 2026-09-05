// トップページ「代表的な実績」の3件。
//
// 選定基準（載せない案件を決める基準でもある）:
//   1. 実務で担当し、成果を before → after の数字で言えること
//   2. 領域が重複しないこと（LLM エージェント / NLP の本番化 / 現場のモデル開発）
//   3. 一次情報の裏付けがあること（実測値・納品物・報道）
// 研究は Research セクションが担当するので、ここには入れない。
//
// 文章量の上限: built は1文（50文字前後）、role は短句、outcome.label は25文字前後。
// モデル名・ライブラリ名は書かない（詳細ページと Skills が担当）。
// ここを増やしたくなったら、代わりにどれを落とすかを先に決めること。
const selectedWork = [
  {
    id: 'gui-agent-rag',
    org: '株式会社松尾研究所',
    period: '2026年7月〜現在',
    title: '業務システムを自律操作する AI エージェントへの知識注入',
    built: '画面を見て操作する AI エージェントに、社内文書の知識を検索して渡す仕組みを設計・実装。',
    role: '設計・実装・効果測定の実験設計（約12名のプロジェクト）',
    outcome: { value: '74% → 7%', label: 'メニュー探索で迷う割合（55本の比較検証）' },
    detailPath: '/experience/matsuo-institute-gui-rag',
  },
  {
    id: 'legalon-llm-classifier',
    org: '株式会社LegalOn Technologies',
    period: '2026年2月〜3月',
    title: '契約書分類モデルの LLM 置き換えと本番サービス化',
    built: '契約書の種類を判定する既存の機械学習モデルを LLM に置き換え、本番マイクロサービスとして納品。',
    role: '試作の実験・評価から本番実装まで一貫して担当',
    outcome: { value: '76.0% → 90.1%', label: '日本語契約書の分類精度' },
    detailPath: '/experience/legalon',
  },
  {
    id: 'airion-production-ml',
    org: '株式会社Airion',
    period: '2024年4月〜現在',
    title: 'ロボット向けリアルタイム音声合成と製造ラインの物体検出',
    built: 'ロボット向けリアルタイム音声合成の基盤構築と、製造ライン向け鉄パイプ自動計数モデルの設計。',
    role: 'モデル選定から顧客報告まで担当。計数ではテックリード',
    outcome: { value: '96.6%', label: '鉄パイプの束単位の計数成功率（従来はほぼ0%）' },
    note: '音声合成を搭載したロボットはトヨタ博物館で展示、トヨタイムズに掲載。',
    detailPath: '/experience/airion',
  },
];

export default selectedWork;
