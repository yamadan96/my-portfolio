// トップページ用に4カテゴリへ圧縮したスキル。
// 全一覧（7カテゴリ・約70項目）は skills.js にあり、/more で表示する。
//
// 粒度のルール: 各カテゴリの items は「実際に手を動かした技術名」だけを並べる。
// 分野名・タスク名・成果の数字は混ぜない（それらは Selected Work / Research の担当）。
const skillsCore = [
  {
    category: 'Vision & Foundation Models',
    lead: '基盤モデルを少数ラベルで適応させ、比較評価するのが主戦場。',
    items: ['PyTorch', 'DINOv2 / DINOv3', 'Vision Transformer', 'LoRA / PEFT', 'YOLOv8', 'Diffusion / Flow Matching'],
  },
  {
    category: 'LLM & Agents',
    lead: 'RAG とエージェントを、評価まで含めて本番に載せる。',
    items: ['OpenAI / Claude API', 'RAG（Vector Store）', 'LLM Agents / Tool Calling', 'GRPO / SFT', 'Prompt Engineering', 'LLM-as-a-Judge'],
  },
  {
    category: 'Production & MLOps',
    lead: '学習したモデルを、動き続けるサービスにするところまで。',
    items: ['Python', 'FastAPI', 'Docker', 'AWS / GCP / Azure', 'GitHub Actions', 'PostgreSQL / MySQL'],
  },
  {
    category: 'Evaluation & Research',
    lead: '「効いた」と言う前に、疑って測る手順を設計する。',
    items: ['実験設計（多シード / A B 比較）', '統計的検定・順列プラセボ', '較正・選択的分類', 'ベンチマーク構築', '論文実装（再現）'],
  },
];

export default skillsCore;
