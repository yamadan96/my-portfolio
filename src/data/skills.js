// トップページの Skills。
//   - 先頭4グループ（Core / LLM / Vision / Production）だけを開いた状態で出す
//   - それ以外は「Other Technologies」に折りたたむ（旧カテゴリの分け方はそのまま残す）
// 4グループの項目は下の折りたたみ側にもともとあった項目から抜き出したもの（新しい項目は足していない）。
//   LLM → 'LLM / 生成AI' カテゴリ、Agents → 'LLM Agents / Tool Calling'、Computer Vision → 'Vision / 生成モデル' カテゴリ
const skills = [
  {
    category: 'Core',
    icon: '⭐',
    core: true,
    items: ['Python', 'PyTorch', 'LLM', 'RAG', 'Agents', 'Computer Vision'],
  },
  {
    category: 'LLM',
    icon: '🤖',
    core: true,
    items: ['LoRA', 'GRPO', 'vLLM', 'OpenAI', 'Claude', 'Gemini'],
  },
  {
    category: 'Vision',
    icon: '🖼️',
    core: true,
    items: ['DINOv2', 'ViT', 'YOLOv8', 'OpenCV'],
  },
  {
    category: 'Production',
    icon: '🚀',
    core: true,
    items: ['FastAPI', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure'],
  },
  // ---- ここから下は「Other Technologies」の中（上の4グループに出した項目は除いてある） ----
  {
    category: 'LLM / 生成AI',
    icon: '🤖',
    items: [
      'QLoRA',
      'SFT / Instruction Tuning',
      'RAG（Vector Store / File Search）',
      'Prompt Engineering',
      'LLM-as-a-Judge',
      'Unsloth / TRL',
      'LangChain / Semantic Kernel',
    ],
  },
  {
    category: 'Vision / 生成モデル',
    icon: '🖼️',
    items: [
      'DINOv3',
      'VLM (Qwen3-VL)',
      'Diffusion Models / Flow Matching',
      'Stable Diffusion XL',
      'VAE / CW-VAE',
      'Segment Anything',
      'ConvLSTM / 3D-CNN',
      'ArcFace / Metric Learning',
      'Grad-CAM (XAI)',
    ],
  },
  {
    category: 'ML 基盤 / データ',
    icon: '🧠',
    items: [
      'Transformers (HuggingFace)',
      'scikit-learn',
      'LightGBM',
      'TensorFlow',
      'WandB / MLflow',
      'pandas / NumPy',
      'Style-Bert-VITS2 (TTS)',
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: [
      'Django',
      'Spring Boot (Kotlin)',
      'Ruby on Rails',
      'Go',
      'PHP',
      'MySQL / PostgreSQL',
      'Java',
      'SQL',
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Flutter / Dart',
      'JavaScript',
      'HTML / CSS',
      'styled-components',
    ],
  },
  {
    category: 'Cloud / Infra',
    icon: '☁️',
    items: ['Terraform'],
  },
  {
    category: 'Tools / Other',
    icon: '🛠️',
    items: [
      'Git / GitHub',
      'Linux / Shell',
      'New Relic / Grafana',
      'Prometheus',
      'CI/CD',
      'Slack',
      'Arduino',
      'C / C++ / C#',
      'MATLAB',
      'Unity',
    ],
  },
];

export default skills;
