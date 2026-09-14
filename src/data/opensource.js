// GitHub 上で公開しているリポジトリ。private の研究リポジトリは含めない。
const openSource = {
  githubUrl: 'https://github.com/yamadan96?tab=repositories',
  summary:
    '論文実装・スクラッチ実装・研究成果のデモなど、実際に動かしたコードを公開している。',
  repositories: [
    {
      name: 'local-claude-code',
      url: 'https://github.com/yamadan96/local-claude-code',
      language: 'Python',
      description:
        'Ollama など OpenAI 互換のローカル LLM で動くコーディングエージェント CLI。ファイル操作を作業フォルダ内に制限し、コマンド実行前の確認モードを備える。MIT ライセンス。',
      topics: ['LLM Agent', 'CLI', 'Local LLM', 'MIT'],
    },
    {
      name: 'arxiv-ingest',
      url: 'https://github.com/yamadan96/arxiv-ingest',
      extraUrl: { label: 'PyPI', url: 'https://pypi.org/project/arxiv-ingest/' },
      language: 'Python',
      description:
        'arXiv の新着論文を毎日自動収集し、構造化研究ノートへ変換する CLI + GitHub Actions テンプレート。PyPI 公開済み。',
      topics: ['CLI', 'PyPI', 'LLM', 'GitHub Actions'],
    },
    {
      name: 'llm-finetune',
      url: 'https://github.com/yamadan96/llm-finetune',
      language: 'Python',
      description:
        'LoRA（Hu et al., 2021）を PEFT 非依存で自前実装し、Qwen2.5-7B の日本語 instruction tuning 用の学習パイプラインを実装。',
      topics: ['LoRA', 'Qwen2.5', 'Instruction Tuning'],
    },
    {
      name: 'vit-from-scratch',
      url: 'https://github.com/yamadan96/vit-from-scratch',
      language: 'Python',
      description:
        'Vision Transformer（Dosovitskiy et al., 2020）の主要コンポーネントを PyTorch でスクラッチ実装。CIFAR-10 で学習・検証。',
      topics: ['ViT', 'PyTorch', 'From Scratch', 'Paper Implementation'],
    },
    {
      name: 'disaster-app',
      url: 'https://github.com/yamadan96/disaster-app',
      language: 'Python',
      description: '学会発表した DINOv2 + LoRA の損傷度分類モデルを WebApp 化（研究論文の実装）。',
      topics: ['DINOv2', 'LoRA', 'Gradio'],
    },
    {
      name: 'sdxl-lora',
      url: 'https://github.com/yamadan96/sdxl-lora',
      language: 'Python',
      description: 'Stable Diffusion XL + LoRA の DreamBooth 方式ファインチューニングと Gradio WebApp。',
      topics: ['SDXL', 'LoRA', 'Diffusers', 'Gradio'],
    },
    {
      name: 'private-ocr-markdown',
      url: 'https://github.com/yamadan96/private-ocr-markdown',
      extraUrl: { label: 'Demo', url: 'https://private-ocr-markdown.vercel.app/' },
      language: 'TypeScript',
      description:
        '画像・PDF をブラウザ内だけで Markdown に変換する Web アプリ。Tesseract.js と pdf.js を使い、ファイルを外部へ送らない。',
      topics: ['Next.js', 'OCR', 'Client-side', 'Vercel'],
    },
    {
      name: 'paper-survey',
      url: 'https://github.com/yamadan96/paper-survey',
      extraUrl: { label: 'Site', url: 'https://yamadan96.github.io/paper-survey/' },
      language: 'TypeScript',
      description: 'LLM / VLM / MLOps 領域の論文サーベイノートを Quartz v4 で公開。',
      topics: ['Quartz', 'Survey', 'LLM', 'VLM'],
    },
    {
      name: 'cwvae-anomaly-detection-thesis',
      url: 'https://github.com/yamadan96/cwvae-anomaly-detection-thesis',
      language: 'TeX',
      description: 'CW-VAE を用いた映像異常検知に関する卒業論文（東京理科大学 2024年度）。',
      topics: ['CW-VAE', 'Anomaly Detection', 'Thesis'],
    },
    {
      name: 'voice2report-ai',
      url: 'https://github.com/yamadan96/voice2report-ai',
      extraUrl: null,
      language: 'JavaScript',
      description: '音声メモから日報・フォローアップメール・CRM エントリを生成するプロダクトデモ。',
      topics: ['React', 'Product Demo'],
    },
    {
      name: 'mnist-canvas',
      url: 'https://github.com/yamadan96/mnist-canvas',
      extraUrl: null,
      language: 'Python',
      description: 'ブラウザに描いた数字を自作の CNN で判定する Web アプリ。FastAPI で推論 API を作り、Docker 化した。',
      topics: ['FastAPI', 'PyTorch', 'CNN', 'Docker'],
    },
  ],
};

export default openSource;
