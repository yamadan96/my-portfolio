// GitHub 上で公開しているリポジトリ。private の研究リポジトリは含めない。
const openSource = {
  githubUrl: 'https://github.com/yamadan96',
  summary:
    '論文再現・スクラッチ実装・研究成果のデモを公開している。コードを読める形で残すことを重視し、実験の再現手順まで含めてリポジトリに置いている。',
  repositories: [
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
      name: 'vit-from-scratch',
      url: 'https://github.com/yamadan96/vit-from-scratch',
      language: 'Python',
      description:
        'Vision Transformer（Dosovitskiy et al., 2020）を PyTorch でゼロから再現。CIFAR-10 で学習。',
      topics: ['ViT', 'PyTorch', 'Paper Reproduction'],
    },
    {
      name: 'llm-finetune',
      url: 'https://github.com/yamadan96/llm-finetune',
      language: 'Python',
      description:
        'LoRA（Hu et al., 2021）を自前実装し、Qwen2.5-7B を日本語 instruction tuning。PEFT 非依存。',
      topics: ['LoRA', 'Qwen2.5', 'Instruction Tuning'],
    },
    {
      name: 'sdxl-lora',
      url: 'https://github.com/yamadan96/sdxl-lora',
      language: 'Python',
      description: 'Stable Diffusion XL + LoRA の DreamBooth 方式ファインチューニングと Gradio WebApp。',
      topics: ['SDXL', 'LoRA', 'Diffusers', 'Gradio'],
    },
    {
      name: 'disaster-app',
      url: 'https://github.com/yamadan96/disaster-app',
      language: 'Python',
      description: '学会発表した DINOv2 + LoRA の損傷度分類モデルを WebApp 化（研究論文の実装）。',
      topics: ['DINOv2', 'LoRA', 'Gradio'],
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
  ],
};

export default openSource;
