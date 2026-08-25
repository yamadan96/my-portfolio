// トップページで最初に見せる代表4件。
//
// 選定基準（ここに載せない案件を選ぶ基準でもある）:
//   1. 成果を数字で言えること（相対改善ではなく before → after が出せる）
//   2. 領域が重複しないこと（LLMエージェント / NLP本番化 / 研究 / 現場実装）
//   3. 一次情報の裏付けがあること（実測値・査読付き発表・報道）
//
// 数字はすべて experiences.js / publications.js の実測値から引いている。
// ここを増やしたくなったら、代わりにどれを落とすかを先に決めること。
const selectedWork = [
  {
    id: 'gui-agent-rag',
    title: '業務システムを自律操作する GUI エージェントへの知識注入',
    context: '株式会社松尾研究所 — AIエンジニア（2026年7月〜現在）',
    problem:
      'GUIを見て操作できるエージェントも、その企業固有の業務ルールは知らない。知らないままメニューを探し回って完走しない。',
    built:
      '知識の使われ方ごとに検索を3系統へ分割し、1系統の失敗が波及しないRAGパイプラインを設計・実装。無人でA/B検証を回す基盤まで自作した。',
    metrics: [
      { value: '74% → 7%', label: 'メニュー探索の空回り率（55本のA/B検証）' },
      { value: '0.57 → 0.86', label: '知識検索の keyword recall（汎用化後 7/7 合格）' },
    ],
    stack: ['Python', 'LLM Agents', 'RAG', 'OpenAI API', 'Playwright'],
    detailPath: '/experience/matsuo-institute-gui-rag',
  },
  {
    id: 'legalon-llm-classifier',
    title: '契約書分類モデルの LLM 置き換えと本番マイクロサービス化',
    context: '株式会社LegalOn Technologies — AIエンジニア（2026年2月〜3月）',
    problem:
      '既存の機械学習モデルによる契約書種別の判定精度が頭打ちで、少数種別の取りこぼしが残っていた。',
    built:
      '分類器をLLMベースへ置き換え、プロンプト設計と評価データ整備を行ったうえで本番マイクロサービスとして実装・納品した。',
    metrics: [
      { value: '+14.1pt', label: '日本語契約書の分類精度（76.0% → 90.1%）' },
      { value: '約6,160行', label: '本番品質のテスト60件超を含む実装を納品' },
    ],
    stack: ['Python', 'LLM', 'Prompt Engineering', 'Microservice', 'pytest'],
    detailPath: '/experience/legalon',
  },
  {
    id: 'disaster-vfm',
    title: '視覚基盤モデルによる被災建物の損傷度分類',
    context: '東京理科大学 修士研究 — 学会発表4件（FIT2025 / IEICE2026 / ITE2026 / 知覚AIフォーラム）',
    problem:
      '災害直後の被害調査は専門家の目視に頼っており、学習データも1,000枚規模しか集まらない。少数ラベルで基盤モデルをどう適応させるかが問題になる。',
    built:
      'DINOv2 / DINOv3 を凍結してLoRAだけを学習する構成で、規模の異なる4データセットを同一プロトコルで比較。適応戦略の選び方を体系化した。',
    metrics: [
      { value: '3件', label: '公開ベンチマークでSoTA更新（PHI-Net / AIDERv2 / MEDIC）' },
      { value: '0.46 → 0.77', label: '6クラス分類 Macro F1（ResNet-50 → DINOv2 + LoRA）' },
    ],
    stack: ['PyTorch', 'DINOv2 / DINOv3', 'LoRA', 'Vision Transformer'],
    detailPath: '/research',
  },
  {
    id: 'airion-production-ml',
    title: 'ロボット向けリアルタイム音声合成と製造ラインの物体検出',
    context: '株式会社Airion — AIエンジニア（2024年4月〜現在）',
    problem:
      '顧客ごとに条件が違い、既製品では解けない。モデル選定からデータ設計、現場で動く形にするまでを毎回自分で決める必要があった。',
    built:
      '音声合成は10モデルを実測比較してStyle-Bert-VITS2を選定し、学習・推論基盤まで構築。鉄パイプ計数ではテックリードとしてYOLOv8ベースの3段階学習を設計した。',
    metrics: [
      { value: '0.43〜1.09秒', label: '12〜99文字の音声合成レイテンシ（トヨタ博物館で展示・トヨタイムズ掲載）' },
      { value: '96.6%', label: '鉄パイプ束単位の計数成功率（従来ほぼ0%・8秒/枚 → 0.2秒/枚）' },
    ],
    stack: ['PyTorch', 'Style-Bert-VITS2', 'YOLOv8', 'FastAPI', 'Azure'],
    detailPath: '/experience/airion',
  },
];

export default selectedWork;
