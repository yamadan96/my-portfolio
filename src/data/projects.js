// category: 'ml'（モデル開発・論文再現）/ 'tool'（開発者向けツール）/ 'product'（プロダクト）
const projects = [
  {
    id: 'project-parc2026-vla',
    featured: true,
    category: 'ml',
    title: 'PARC2026 予選 — SmolVLA ポリシーサーバー（Vision-Language-Action）',
    description:
      'AIRoA × 東京大学松尾・岩澤研究室「PARC2026 予選 Track 1」向けに、LIBERO-plus 上で lerobot/smolvla_libero_plus を LoRA 微調整し、採点環境（Python 3.10 / CUDA 13 / ネットワーク遮断）で動く HTTP ポリシーサーバーとして提出。ネットワーク遮断という制約から、LeRobot v0.6.0 を zip へ同梱して Python 3.10 へバックポートするベンダリング機構を自作した。環境を挟まないオープンループ検証を用意し、統合バグとモデル性能低下を切り分けられるようにしている。',
    tags: ['VLA', 'SmolVLA', 'LeRobot', 'LIBERO', 'LoRA', 'Robotics', 'Python'],
    github: null,
    demo: null,
    image: null,
    summary: {
      built: 'ロボットが「言葉の指示」を受けて物を操作するAIモデルを学習させ、コンテストの採点システムから呼び出せるサーバーとして提出した。',
      problem: '採点環境はインターネットに接続できず、こちらが用意したプログラムだけで動かす必要があった。ライブラリを普通にインストールする方法が使えない。',
      role: 'モデルの追加学習、採点環境で動くサーバーの実装、必要なライブラリを提出物に同梱する仕組みの自作までを担当。',
      tech: 'SmolVLA（カメラ画像と言葉の指示から、ロボットの動きを直接出力するモデル）をLoRA（モデル全体ではなく、ごく一部だけを学習し直す省メモリな手法）で追加学習した。',
      result: 'ネットワーク遮断・Python 3.10 という制約下で動作するサーバーを完成させ、予選に提出。ロボット環境を介さない検証手順も用意し、不具合の原因が「つなぎ込み」か「モデルの性能」かを切り分けられるようにした。',
    },
    technical: [
      { label: 'システム構成', body: '学習済みポリシーを HTTP サーバーとして公開し、採点側からの観測入力に対して行動を返す構成。ベースは lerobot/smolvla_libero_plus で、LIBERO-plus タスク上で LoRA 微調整を行った。' },
      { label: '依存関係のベンダリング', body: '採点環境はネットワーク遮断かつ Python 3.10 のため、LeRobot v0.6.0 を提出 zip に同梱し 3.10 へバックポートする機構を自作した。pip install に頼れない前提での配布設計。' },
      { label: '検証方法', body: 'ロボット環境を挟まないオープンループ検証を用意し、統合バグとモデル性能低下を切り分けられるようにした。採点環境と同条件（CUDA 13）での事前確認も実施。' },
      { label: '学んだこと', body: '実行環境の制約が設計を決めるという点。精度以前に「相手の環境で確実に起動すること」が提出物の価値を左右する。' },
    ],
    diagram: {
      alt: '採点環境からHTTPで観測が送られ、SmolVLAポリシーが行動を返す構成図',
      caption: 'ネットワーク遮断された採点環境で動くよう、依存ライブラリを提出物に同梱している',
      chart: `flowchart LR
  subgraph SCORE["採点環境（ネットワーク遮断 / Python 3.10）"]
    SIM["LIBERO-plus<br/>ロボットシミュレータ"]
  end
  subgraph ZIP["提出 zip（自作ベンダリング）"]
    SRV["HTTP ポリシーサーバー"]
    POL["SmolVLA + LoRA<br/>学習済みポリシー"]
    LR["LeRobot v0.6.0<br/>（3.10 へバックポート）"]
  end
  TRAIN["LoRA 微調整<br/>（事前に実施）"] -.-> POL
  SIM -- "観測（画像 + 指示文）" --> SRV
  SRV --> POL
  POL -- "行動（関節の目標値）" --> SIM
  SRV --- LR`,
    },
  },
  {
    id: 'project-llm-finetune',
    featured: true,
    category: 'ml',
    title: 'LoRA スクラッチ実装による LLM ファインチューニング',
    description:
      'PEFT 等のライブラリを使わず LoRA（LoRALinear / apply_lora）を自前実装し、Qwen2.5-7B-Instruct を日本語 instruction tuning。h = Wx + BAx×(α/r) の定式に沿って A を kaiming 初期化・B をゼロ初期化し、学習開始時 ΔW=0 を保証。全パラメータの約0.1%のみを学習対象とした。',
    tags: ['LoRA (from scratch)', 'Qwen2.5-7B', 'PyTorch', 'Instruction Tuning', 'uv'],
    github: 'https://github.com/yamadan96/llm-finetune',
    demo: null,
    image: null,
    summary: {
      built: '大規模言語モデルを日本語の指示に沿って答えられるように追加学習する仕組みを、既存ライブラリを使わずゼロから実装した。',
      problem: 'LoRA という省メモリな学習手法は広く使われているが、ライブラリを呼ぶだけでは中で何が起きているか分からない。仕組みを理解するために自分で書いた。',
      role: 'LoRA の中核部分（線形層の差し替えとモデルへの適用処理）を自前実装し、学習から対話デモまで一通り作成。',
      tech: '70億パラメータのモデル（Qwen2.5-7B-Instruct）に対し、全体ではなく追加した小さな行列だけを学習。学習対象は全体の約0.1%に抑えた。',
      result: '既製のライブラリ（PEFT）を一切使わずに動作。学習前の時点でモデルの出力が変わらないことを数式レベルで保証する初期化も再現できた。',
    },
    technical: [
      { label: '実装した数式', body: 'h = Wx + BAx × (α/r) の形で低ランク行列を追加。元の重み W は凍結し、A は kaiming_uniform、B はゼロで初期化することで学習開始時に ΔW = 0 を保証している。' },
      { label: 'モデル構成', body: 'ベースは Qwen2.5-7B-Instruct。rank=16 / alpha=32 で日本語 Dolly データセットを3エポック学習。学習対象パラメータは全体の約0.1%。' },
      { label: '工夫した点', body: 'LoRALinear / apply_lora を独立したモジュールに切り出し、任意のモデルの線形層に後から差し込める構造にした。学習後は対話デモから即座に挙動を確認できる。' },
      { label: '学んだこと', body: 'B をゼロ初期化する理由（学習開始時点で元モデルの出力を壊さない）のように、論文の一行が実装上の必然であることを体感できた。' },
    ],
    diagram: {
      alt: 'LoRAを自前実装して大規模言語モデルの線形層に差し込む構成図',
      caption: '元の重みは凍結し、追加した小さな行列 A・B だけを学習する',
      chart: `flowchart TB
  IN["日本語の指示データ"] --> MODEL
  subgraph MODEL["Qwen2.5-7B-Instruct"]
    W["元の重み W<br/>（凍結・学習しない）"]
    subgraph LORA["自前実装した LoRALinear"]
      A["行列 A<br/>kaiming 初期化"]
      B["行列 B<br/>ゼロ初期化"]
    end
  end
  W --> SUM
  A --> B --> SUM["h = Wx + BAx × α/r"]
  SUM --> OUT["応答"]
  SUM -. "勾配は A・B のみ<br/>（全体の約0.1%）" .-> LORA`,
    },
  },
  {
    id: 'project-vit-scratch',
    featured: true,
    category: 'ml',
    title: 'Vision Transformer スクラッチ実装（論文再現）',
    description:
      '"An Image is Worth 16x16 Words"（Dosovitskiy et al., ICLR 2021）を PyTorch でゼロから再現。Patch Embedding・学習可能な位置埋め込み・Multi-Head Attention・MLP ブロックの全コンポーネントを論文の式と対応付けて自作し、CIFAR-10 で学習（ViT-Small 構成、d_model=256・8ヘッド・6層）。',
    tags: ['Vision Transformer', 'PyTorch', 'Paper Reproduction', 'CIFAR-10'],
    github: 'https://github.com/yamadan96/vit-from-scratch',
    demo: null,
    image: null,
    summary: {
      built: '画像認識で広く使われる Vision Transformer というモデルを、論文だけを見てゼロから実装し、実際に学習させた。',
      problem: '既存の実装をコピーすれば動くが、なぜその構造なのかは分からない。論文の数式と自分のコードを一対一で対応させることで理解を確かめた。',
      role: '画像の分割、位置情報の埋め込み、注意機構、分類部分まで全コンポーネントを自作。',
      tech: '画像を小さなタイル（パッチ）に切り分け、それぞれを単語のように扱って Transformer で処理する。文章処理の技術を画像に応用した構造。',
      result: '32×32ピクセルの画像を4×4の64タイルに分割し、6層・8ヘッド構成で学習。全コンポーネントに論文の該当式を注記して対応関係を明示した。',
    },
    technical: [
      { label: '再現対象', body: '"An Image is Worth 16x16 Words"（Dosovitskiy et al., ICLR 2021）。CIFAR-10（32×32）に合わせた ViT-Small 相当の構成。' },
      { label: 'モデルアーキテクチャ', body: 'Patch Embedding（4×4 パッチ、48→256 の線形射影）→ CLS トークン付加 → 学習可能な1次元位置埋め込み → Transformer ブロック×6（LayerNorm → Multi-Head Attention 8ヘッド → 残差 → LayerNorm → MLP 256→512、GELU → 残差）→ CLS トークンのみを LayerNorm して Linear(256→10)。' },
      { label: '工夫した点', body: '各コンポーネントを自己完結させ、論文の式番号への参照をコード内に残した。どのハイパーパラメータが論文由来で、どれが CIFAR-10 向けの調整かを区別できるようにしている。' },
    ],
    diagram: {
      alt: '画像をパッチに分割しTransformerで分類するVision Transformerの構成図',
      caption: '論文の各式に対応するコンポーネントをすべて自作した',
      chart: `flowchart TB
  IMG["入力画像 32×32"] --> PATCH["Patch Embedding<br/>4×4 の64タイル → Linear(48→256)"]
  PATCH --> CLS["CLS トークンを先頭に付加"]
  CLS --> POS["+ 学習可能な位置埋め込み"]
  POS --> BLK
  subgraph BLK["Transformer Block × 6"]
    LN1["LayerNorm"] --> ATT["Multi-Head Attention<br/>8ヘッド / d_model=256"]
    ATT --> R1["+ 残差"]
    R1 --> LN2["LayerNorm"] --> MLP["MLP 256→512<br/>GELU"]
    MLP --> R2["+ 残差"]
  end
  BLK --> HEAD["CLS のみ取り出し<br/>LayerNorm → Linear(256→10)"]
  HEAD --> OUT["10クラス分類<br/>CIFAR-10"]`,
    },
  },
  {
    id: 'project-sdxl-lora',
    featured: true,
    category: 'ml',
    title: 'SDXL + LoRA 画像生成（DreamBooth 方式）',
    description:
      'Stable Diffusion XL を LoRA でファインチューニングし、被写体画像5〜20枚から任意のシーンでの 1024×1024 画像を生成。UNet の to_q/k/v に LoRA を適用し、VAE エンコード → DDPM ノイズ付加 → ノイズ予測の MSE 損失で LoRA パラメータのみを更新する学習パイプラインを実装。',
    tags: ['Stable Diffusion XL', 'LoRA', 'DreamBooth', 'Diffusers', 'Python'],
    github: 'https://github.com/yamadan96/sdxl-lora',
    demo: null,
    image: null,
    summary: {
      built: '特定の人や物の写真を5〜20枚与えると、その被写体を任意の場面で描いた画像を生成できるようにする学習の仕組み。',
      problem: '画像生成モデルは一般的な絵は描けるが、特定の被写体は知らない。モデル全体を学習し直すのは計算量が大きすぎるため、一部だけを学習する方法を試した。',
      role: 'ノイズを加えて元に戻す学習ループ、学習対象の限定、画像生成までのパイプラインを実装。',
      tech: 'Stable Diffusion XL（テキストから画像を生成するモデル）に対し、LoRA で注意機構の一部だけを学習。DreamBooth という「少数の写真から被写体を覚えさせる」方式を採用した。',
      result: '5〜20枚の入力から1024×1024の画像を生成。学習対象を UNet の一部に絞ることで、モデル全体を学習し直さずに被写体を再現できることを確認した。',
    },
    technical: [
      { label: '学習パイプライン', body: '学習画像を VAE エンコーダで潜在表現 z に変換 → ランダムな時刻 t の DDPM ノイズを付加 → UNet がノイズ ε を予測 → 真のノイズとの MSE 損失 → LoRA パラメータ（A, B）のみを更新。' },
      { label: 'LoRA の適用箇所', body: 'UNet の to_q / to_k / to_v に限定。元の重みは凍結し、追加した低ランク行列のみが勾配を受ける。' },
      { label: '推論フロー', body: 'プロンプトを CLIP テキストエンコーダで埋め込み → UNet で30ステップのノイズ除去 → VAE デコーダで 1024×1024 画像へ復元。' },
      { label: '苦労した点', body: '被写体の再現度と、プロンプトで指定した場面への追従性がトレードオフになる。学習を進めすぎると場面指示を無視して学習画像に寄る挙動が出る。' },
    ],
    diagram: {
      alt: '画像にノイズを加えて復元させる学習と、プロンプトから画像を生成する推論の構成図',
      caption: '上段が学習、下段が生成。学習対象は UNet の注意機構の一部だけ',
      chart: `flowchart TB
  subgraph TR["学習（被写体の写真 5〜20枚）"]
    IMGS["学習画像"] --> VAE_E["VAE エンコーダ"] --> Z["潜在表現 z"]
    Z --> NOISE["ランダム時刻 t の<br/>DDPM ノイズを付加"]
    NOISE --> UNET1["UNet<br/>（to_q/k/v に LoRA）"]
    UNET1 --> PRED["ノイズ ε を予測"]
    PRED --> LOSS["MSE 損失"]
    LOSS -. "LoRA のみ更新" .-> UNET1
  end
  subgraph INF["生成"]
    P["プロンプト"] --> CLIP["CLIP テキストエンコーダ"]
    CLIP --> UNET2["UNet で30ステップ<br/>ノイズ除去"]
    UNET2 --> VAE_D["VAE デコーダ"] --> RESULT["1024×1024 画像"]
  end`,
    },
  },
  {
    id: 'project-disaster-app',
    featured: true,
    category: 'ml',
    title: '被災建物損傷度分類 WebApp（研究成果のデプロイ）',
    description:
      '学会発表した研究成果（DINOv2 + LoRA）を、画像をアップロードすると地震・津波による建物の損傷度を判定する WebApp として実装。Selective Classification を組み込み、確信度が低い入力については判定を棄権する設計とした。',
    tags: ['DINOv2', 'LoRA', 'Gradio', 'Selective Classification', 'Python'],
    github: 'https://github.com/yamadan96/disaster-app',
    demo: null,
    image: null,
    summary: {
      built: '被災した建物の写真をアップロードすると、地震や津波でどの程度壊れているかを判定するWebアプリ。',
      problem: '災害直後の被害調査は専門家が現地で目視するため時間がかかる。学会で発表した分類モデルを、誰でも試せる形にした。',
      role: '研究で作ったモデルをWebアプリとして実装し、自信のない判定を「分からない」と返す仕組みを追加。',
      tech: 'DINOv2（大量の画像で事前学習された画像認識の基盤モデル）に LoRA で少量の被災画像を学習させたものを使用。',
      result: '判定の確信度が低い入力については、誤った答えを返す代わりに判定を棄権する設計にした。専門家の確認が必要な画像だけを人に回せる。',
    },
    technical: [
      { label: 'モデル構成', body: 'DINOv2 をバックボーンとし、LoRA で災害画像ドメインへ適応させた分類器。学会発表（FIT2025 / IEICE2026 / 映像情報メディア学会2026）で検証した構成をそのまま使用している。' },
      { label: 'Selective Classification', body: '最大ソフトマックス値を確信度として用い、閾値を下回る入力は分類を棄権する。全件を無理に分類するより、確信できるものだけ自動化して残りを人に回す方が実運用に適するという判断。' },
      { label: '実装', body: 'Gradio による画像アップロード UI。研究コードと推論コードを共有し、論文の結果とアプリの挙動が乖離しないようにしている。' },
    ],
    diagram: {
      alt: '被災建物の写真を分類し、確信度が低い場合は判定を棄権する構成図',
      caption: '確信度が閾値を下回る画像は自動判定せず、専門家の確認に回す',
      chart: `flowchart LR
  UP["建物写真を<br/>アップロード"] --> GR["Gradio UI"]
  GR --> BB["DINOv2 ViT-L/14<br/>（凍結した基盤モデル）"]
  BB --> LORA["LoRA アダプタ<br/>災害画像へ適応"]
  LORA --> CLS["6クラス分類<br/>被害なし / 地震大破・中・軽 / 津波大破・軽"]
  CLS --> SC{"確信度 ≧ 閾値？"}
  SC -- "はい" --> ANS["損傷度を提示"]
  SC -- "いいえ" --> ABST["判定を棄権<br/>→ 専門家が確認"]`,
    },
  },
  {
    id: 'project-arxiv-ingest',
    featured: true,
    category: 'tool',
    title: 'arxiv-ingest（PyPI 公開）',
    description:
      'arXiv の新着論文をキーワードで自動収集し、構造化された研究ノートへ変換する CLI ツール。sources（メタデータ）/ evidence（主張）/ wiki（統合）の3層構成、記入済みファイルを上書きしない安全な再実行、LLM による自動要約、GitHub Actions での平日自動実行に対応。PyPI で公開中。',
    tags: ['Python', 'CLI', 'PyPI', 'arXiv API', 'GitHub Actions', 'Claude API'],
    github: 'https://github.com/yamadan96/arxiv-ingest',
    demo: 'https://pypi.org/project/arxiv-ingest/',
    image: null,
    summary: {
      built: '興味のある分野の新しい論文を毎日自動で集め、読むための下書きノートまで作ってくれるコマンドラインツール。誰でも使えるように公開している。',
      problem: '論文は毎日大量に出るため、探すだけで時間が溶ける。集める作業を自動化し、読んで考える時間に充てたかった。',
      role: '設計・実装・公開まで単独。キーワード設定だけで動くようにし、自動実行の仕組みも用意した。',
      tech: 'arXiv（論文公開サイト）から条件に合う論文を取得し、要約はAIに任せる。毎日の実行は GitHub Actions（自動実行の仕組み）に任せている。',
      result: 'PyPI（Pythonのライブラリ公開サイト）で公開中。平日は自動で動き、すでに書き込んだノートは上書きしないため、繰り返し実行しても手作業が消えない。',
    },
    technical: [
      { label: '3層のノート構造', body: 'sources（論文のメタデータ）/ evidence（論文が主張していること）/ wiki（自分の統合的な理解）の3層に分離。生の情報と自分の解釈が混ざらないようにしている。' },
      { label: '安全な再実行', body: '記入済みのファイルは決して上書きしない設計。日次実行しても手で書いた内容が失われないため、長期運用に耐える。' },
      { label: '周辺機能', body: 'LLM による自動要約（--summarize）、日付範囲を指定した遡り取得（--since）、GitHub Issues / BibTeX / CSV へのエクスポート、Slack / Discord への通知、Obsidian の wikilink と Quartz サイトへの publish に対応。' },
      { label: '運用', body: 'GitHub Actions のテンプレートを同梱し、平日の定期実行と手動実行の両方に対応。CI でテストを回している。' },
    ],
    diagram: {
      alt: 'arXivから論文を集めて3層のノートを生成し、外部サービスへ連携する構成図',
      caption: '記入済みのノートは上書きしないため、日次実行しても手書きの内容が残る',
      chart: `flowchart LR
  CRON["GitHub Actions<br/>平日に自動実行"] --> CLI
  CFG["config.yaml<br/>キーワード設定"] --> CLI["arxiv-ingest CLI"]
  CLI -- "検索" --> ARX["arXiv API"]
  ARX --> CLI
  CLI --> LLM["Claude API<br/>要約（--summarize）"]
  LLM --> NOTES
  subgraph NOTES["3層のノート（上書きしない）"]
    S["sources/<br/>論文メタデータ"]
    E["evidence/<br/>論文の主張"]
    W["wiki/<br/>自分の理解"]
  end
  NOTES --> OUT1["Obsidian / Quartz"]
  NOTES --> OUT2["GitHub Issues<br/>BibTeX / CSV"]
  NOTES --> OUT3["Slack / Discord 通知"]`,
    },
  },
  {
    id: 'project-local-claude-code',
    featured: true,
    category: 'tool',
    title: 'local-claude-code（ローカルLLM版コーディングエージェント CLI）',
    description:
      'Ollama / LM Studio / vLLM など OpenAI 互換のローカル LLM サーバー上で動作するコーディングエージェント CLI。read_file・write_file・edit_file・bash・glob・grep・list_dir の7ツールを内蔵し、ワークスペースサンドボックスと ask/auto 権限モードを実装。小型モデル特有の不安定さに対し、JSON 復旧・ファジーなツール名照合・無限ループ検出で対処した。',
    tags: ['Python', 'CLI', 'Local LLM', 'Tool Calling', 'Ollama', 'uv'],
    github: null,
    demo: null,
    image: null,
    summary: {
      built: '自分のパソコン内で動くAIに、ファイルの読み書きやコマンド実行を任せられるコーディング支援ツール。',
      problem: '一般的なAIコーディングツールは外部サービスにコードを送る。手元だけで完結させたかった。',
      role: '設計・実装を単独で担当。小型モデル特有の不安定さへの対処も自分で見つけて実装した。',
      tech: 'Ollama など「自分のPCでAIを動かすソフト」に接続し、AIがファイル操作やコマンド実行を自分で選んで実行する（Tool Calling という仕組み）。',
      result: 'ファイル読み書き・コマンド実行・検索など7種類の操作をAIに任せられる。作業できる範囲を1つのフォルダ内に制限し、実行前に確認を求めるモードも用意した。',
    },
    technical: [
      { label: 'ツール構成', body: 'read_file / write_file / edit_file / bash / glob / grep / list_dir の7ツールを内蔵。ワークスペース外へのアクセスを拒否するサンドボックスと、ask / auto の権限モードを備える。' },
      { label: '小型モデルへの対応', body: '小型モデルは JSON を壊す・ツール名を微妙に間違える・同じ操作を無限に繰り返すという失敗をする。JSON の復旧処理、ファジーなツール名照合、ループ検出をそれぞれ実装して対処した。' },
      { label: '接続先', body: 'OpenAI 互換 API を話すサーバー（Ollama / LM Studio / vLLM）であれば差し替え可能。特定ベンダーに依存しない構成。' },
      { label: '苦労した点', body: '同一ポートで別プロセスが待ち受けていたため、localhost の IPv6/IPv4 解決の違いで意図しないサービスへリクエストが飛ぶ問題に遭遇した。lsof で全リスナーを列挙して原因を特定し、IPv4 を明示して解決した。' },
    ],
    diagram: {
      alt: 'ローカルのLLMがツールを選んで実行するエージェントループの構成図',
      caption: '外部にコードを送らず、操作範囲は1つのフォルダ内に制限される',
      chart: `flowchart TB
  USER["利用者の指示"] --> LOOP
  subgraph LOOP["エージェントループ"]
    LLMS["ローカル LLM サーバー<br/>Ollama / LM Studio / vLLM<br/>（OpenAI 互換 API）"]
    GUARD["復旧処理<br/>JSON修復 / ツール名照合 / ループ検出"]
    PERM{"ask / auto<br/>権限モード"}
  end
  LLMS -- "ツール呼び出し" --> GUARD --> PERM
  PERM -- "許可" --> TOOLS
  subgraph TOOLS["内蔵7ツール（サンドボックス内）"]
    T1["read_file / write_file / edit_file"]
    T2["bash"]
    T3["glob / grep / list_dir"]
  end
  TOOLS -- "実行結果" --> LLMS
  TOOLS --- WS["ワークスペース<br/>外部へのアクセスは拒否"]`,
    },
  },
  {
    id: 'project-paper-survey',
    featured: true,
    category: 'tool',
    title: 'Paper Survey（論文サーベイ公開サイト）',
    description:
      'AI 分野の最新論文を読んで整理した個人ノートを、ノート同士のつながりが見える Web サイトとして公開。ViT / LoRA / MAE / CLIP / DINOv2 / QLoRA / DoRA などを継続的に追加中。',
    tags: ['Quartz', 'Markdown', 'LLM', 'VLM', 'GitHub Pages'],
    github: 'https://github.com/yamadan96/paper-survey',
    demo: 'https://yamadan96.github.io/paper-survey/',
    image: null,
    summary: {
      built: '読んだAI論文の要点をまとめたノートを、論文同士の関連が見える形でWebサイトとして公開している。',
      problem: '論文は単独で読んでも身につかない。「この手法はあの論文の改良版」といった関係を可視化したかった。',
      role: 'サイト構築とノート執筆。継続的に追加している。',
      tech: 'ノート間のリンクからネットワーク図を自動生成する静的サイト生成ツール（Quartz）を使用。ノートは Markdown で書く。',
      result: 'ViT / LoRA / MAE / CLIP / DINOv2 / QLoRA / DoRA など、画像認識と大規模言語モデルの基礎論文を公開中。',
    },
    technical: [
      { label: '構成', body: 'Quartz v4 による静的サイト生成。Markdown の wikilink からノート間のグラフを自動構築し、関連論文をたどれるようにしている。日本語表示に合わせて locale と Noto Sans JP を設定。' },
      { label: '運用', body: 'GitHub Pages へ自動デプロイ。ノート追加の手順を定型化してあり、読了から公開までの手間を最小にしている。' },
    ],
    diagram: {
      alt: 'Markdownノートからリンク構造を解析して公開サイトを生成する構成図',
      caption: 'ノート間のリンクからネットワーク図が自動生成され、関連論文をたどれる',
      chart: `flowchart LR
  MD["Markdown ノート<br/>wikilink で相互参照"] --> Q["Quartz v4<br/>静的サイト生成"]
  Q --> GRAPH["リンク解析<br/>→ ネットワーク図"]
  Q --> PAGES["各論文ページ"]
  GRAPH --> GHA["GitHub Actions"]
  PAGES --> GHA
  GHA --> GP["GitHub Pages<br/>公開サイト"]`,
    },
  },
  {
    id: 'project-musclemon',
    featured: false,
    category: 'product',
    title: 'MuscleMon（筋トレ×モンスター育成）',
    description:
      '筋トレ記録を「相棒モンスターを育てる行為」に変換する Flutter Web アプリ。3種族×4段階進化、重量×回数×セットにストリークボーナスを加えた XP 設計、Claude API による AI チャットコーチ、RPE 入力と PR 自動検知を実装。LLM API キーはサーバーレス関数側に隔離し、共有シークレットで保護している。',
    tags: ['Flutter', 'Dart', 'Claude API', 'Gamification', 'Vercel'],
    github: null,
    demo: 'https://musclemon.vercel.app',
    image: null,
    summary: {
      built: '筋トレの記録が、相棒モンスターの育成になるアプリ。記録すると経験値が入り、モンスターが進化する。',
      problem: '筋トレは効果が見えるまで時間がかかり、続かない。記録そのものが楽しくなる仕組みを作りたかった。',
      role: '企画から実装・公開まで単独。継続率を上げる機能を仮説を立てて追加している。',
      tech: 'スマホとPCの両方で動くようにアプリ開発フレームワーク（Flutter）を使用。AIコーチとの会話部分は Claude を利用。',
      result: '3種族×4段階の進化、重量×回数×セット数から経験値を計算する設計、連続記録ボーナス、AIチャットコーチ、主観的なきつさ（RPE）の記録、自己最高記録の自動検知を実装。',
    },
    technical: [
      { label: '経験値設計', body: '重量×回数×セット数を基礎値とし、連続記録日数のボーナスを加算する。数値が伸びる実感と、休んだ日のペナルティが強すぎないバランスを狙った。' },
      { label: 'AIコーチ', body: 'モンスターの性格・口調データをシステムプロンプトに埋め込み、直近のワークアウト要約だけを文脈として渡す（全履歴は送らずトークンを節約）。' },
      { label: 'APIキーの保護', body: 'クライアントアプリに API キーを埋め込まず、サーバーレス関数側に隔離。共有シークレットヘッダーで呼び出しを制限し、加えて提供元コンソール側で使用量上限を設定している。' },
      { label: '効果音', body: '音声ファイルを一切持たず、PCM WAV をメモリ上で生成して data URI として再生する方式にした。アセット管理のコストがゼロになる。' },
    ],
    diagram: {
      alt: '筋トレ記録から経験値を計算しモンスターを進化させる構成図とAPIキーの保護',
      caption: 'API キーはアプリに埋め込まず、サーバーレス関数側に隔離している',
      chart: `flowchart TB
  REC["筋トレを記録<br/>重量 × 回数 × セット"] --> XP["経験値の計算<br/>+ 連続記録ボーナス"]
  XP --> MON["モンスター<br/>3種族 × 4段階進化"]
  REC --> PR["自己最高記録の自動検知"]
  subgraph APP["Flutter Web アプリ（端末側）"]
    XP
    MON
    PR
  end
  APP -- "共有シークレット付きで呼び出し" --> FN["サーバーレス関数<br/>（API キーはここだけ）"]
  FN --> CLAUDE["Claude API<br/>AI チャットコーチ"]
  CLAUDE --> FN --> APP`,
    },
  },
  {
    id: 'project-gapless-keyboard',
    featured: true,
    category: 'product',
    title: 'GapLess Keyboard（AI 返信 iOS カスタムキーボード）',
    description:
      'キーボードを切り替えるだけで AI が会話の文脈を読み取り、3パターンの返信案を生成する iOS カスタムキーボード。シーン切替・性格プリセット・トーン調整スライダーを搭載。Gemini 2.5 Flash と Next.js バックエンド API を連携し、実機での動作まで確認済み。',
    tags: ['Swift', 'iOS', 'Keyboard Extension', 'Gemini API', 'Next.js'],
    github: null,
    demo: null,
    image: null,
    summary: {
      built: 'キーボードを切り替えるだけで、AIが会話の流れを読んで返信案を出してくれる iPhone 用のキーボード。',
      problem: '返信案を出すアプリは、アプリを開いて貼り付ける手間がかかる。キーボード自体に組み込めば、その手間が消える。',
      role: 'iOS のキーボード拡張とバックエンドAPIの両方を実装し、実機で動作するところまで到達。',
      tech: 'iOS のキーボード拡張機能（Keyboard Extension）として実装。返信案の生成は Gemini を利用している。',
      result: 'カジュアル・ビジネスなどの場面切替、性格プリセット、トーン調整スライダーを搭載。実機インストールまで完了。',
    },
    technical: [
      { label: '構成', body: 'Swift による Keyboard Extension が入力欄の文脈を取得し、Next.js のバックエンド API 経由で Gemini 2.5 Flash に返信案を生成させる。APIキーはバックエンド側に隔離。' },
      { label: '制約への対応', body: 'iOS のキーボード拡張はメモリ制限が厳しく、ネットワークアクセスにも Full Access の許可が必要。UI を軽量に保ち、生成処理をすべてサーバー側へ寄せる設計にした。' },
      { label: '苦労した点', body: '拡張機能はホストアプリと別プロセスで動くため、設定の共有と権限周りの取り扱いが通常のアプリ開発とは異なる。' },
    ],
    diagram: {
      alt: 'iOSキーボード拡張から自前APIを経由してAIが返信案を生成する構成図',
      caption: 'キーボード拡張は軽量に保ち、生成処理はすべてサーバー側に寄せた',
      chart: `flowchart LR
  subgraph IOS["iPhone"]
    KB["Keyboard Extension<br/>Swift"]
    FIELD["入力欄<br/>会話の文脈"]
  end
  FIELD --> KB
  KB -- "文脈 + 場面 + トーン" --> API["Next.js バックエンド API<br/>（API キーを保持）"]
  API --> GEM["Gemini 2.5 Flash"]
  GEM --> API -- "返信案 3パターン" --> KB
  KB -- "選んだ案を直接入力" --> FIELD`,
    },
  },
  {
    id: 'project-10',
    featured: false,
    category: 'product',
    title: 'GapLess Reply（スクリーンショット → 返信案生成 PWA）',
    description:
      'チャット画面のスクリーンショットを読み込むと、VLM が文脈を解釈して複数パターンの返信案を提案する PWA。スマホのホーム画面から起動できる構成にした。',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'PWA', 'Vercel'],
    github: null,
    demo: 'https://gapless-reply.vercel.app/',
    image: null,
    summary: {
      built: 'チャット画面のスクリーンショットを読み込むと、AIが文脈を理解して返信案を複数出してくれるアプリ。',
      problem: '会話の内容を手で打ち直してAIに渡すのは面倒。画像をそのまま渡せば済むようにした。',
      role: '画像を解釈させるプロンプト設計とアプリ実装を担当。',
      tech: '画像と文章を同時に理解できるAI（Gemini）に画面画像を渡し、会話の流れを読ませて返信案を生成する。',
      result: 'スマホのホーム画面から起動できる形式（PWA）で公開。複数の方向性の返信案を並べて提示する。',
    },
    technical: [
      { label: '構成', body: 'Next.js + TypeScript の PWA。スクリーンショットを Gemini に渡し、発話者の左右関係と時系列を推定させてから返信案を生成させる。' },
      { label: 'プロンプト設計', body: '「無難」「ウケ狙い」「誘い」など方向性の異なる案を同時に出させることで、ユーザーが選べる状態を作る。単一の最適解を返すより実用的だという判断。' },
    ],
    diagram: {
      alt: 'チャット画面のスクリーンショットをAIに解釈させ返信案を生成する構成図',
      caption: '画像をそのまま渡すため、会話を手で打ち直す必要がない',
      chart: `flowchart LR
  SS["チャット画面の<br/>スクリーンショット"] --> PWA["PWA<br/>Next.js + TypeScript"]
  PWA --> VLM["Gemini<br/>画像と文章を同時に理解"]
  VLM --> PARSE["発話者の左右関係<br/>と時系列を推定"]
  PARSE --> GEN["方向性の異なる<br/>返信案を生成"]
  GEN --> PWA
  PWA --> PICK["利用者が選ぶ"]`,
    },
  },
  {
    id: 'project-nurserhythm',
    featured: false,
    category: 'product',
    title: 'NurseRhythm（夜勤ナース向けシフト管理×スキマ学習 PWA）',
    description:
      '夜勤で働く病棟ナース向けの PWA。シフト表のまとめて入力、夜勤回数・総労働時間・手当の自動集計、5連勤や月9夜勤の負荷アラート、誤答優先の間隔反復による看護クイズ、暖色ローライトの夜勤モードを搭載。外部依存ゼロ・データは端末内で完結。',
    tags: ['PWA', 'Vanilla JS', 'localStorage', 'Vercel'],
    github: null,
    demo: 'https://nurserhythm.vercel.app',
    image: null,
    summary: {
      built: '夜勤で働く看護師向けに、シフト管理と隙間時間の勉強をまとめたアプリ。',
      problem: '夜勤のシフトは不規則で、労働時間や手当の把握が煩雑。勉強時間もまとまって取れない。',
      role: '利用者像の設定から機能設計・実装・公開まで単独。',
      tech: '外部サービスに一切依存せず、データは端末内だけに保存する設計にした（プライバシー配慮）。',
      result: 'シフト表のまとめて入力、夜勤回数・総労働時間・手当の自動集計、5連勤や月9夜勤の負荷アラート、疲労度と睡眠の14日推移グラフ、間違えた問題を優先的に再出題する看護クイズ、暖色の夜勤モードを搭載。',
    },
    technical: [
      { label: '構成', body: 'バニラ JavaScript の単一ファイル PWA。localStorage のみでデータを永続化し、サーバーを持たない。オフラインでも動作する。' },
      { label: '負荷アラートの設計', body: '5連勤・月9夜勤といった具体的な閾値でアラートを出す。抽象的な「働きすぎ」ではなく、現場で使われている基準に合わせた。' },
      { label: '復習アルゴリズム', body: '誤答した問題を優先的に再出題する間隔反復方式。学習履歴も端末内に保持する。' },
    ],
    diagram: {
      alt: 'シフト入力から集計・アラート・学習機能へ分岐する構成図。データは端末内に保存',
      caption: '外部サービスを使わず、データは端末内だけに保存される',
      chart: `flowchart TB
  IN["シフト表を<br/>まとめて入力"] --> LS
  subgraph APP["PWA（バニラ JavaScript / オフライン動作）"]
    LS["localStorage<br/>端末内のみに保存"]
    AGG["自動集計<br/>夜勤回数 / 労働時間 / 手当"]
    ALERT["負荷アラート<br/>5連勤 / 月9夜勤"]
    GRAPH["疲労度 × 睡眠<br/>14日推移グラフ"]
    QUIZ["看護クイズ<br/>誤答を優先して再出題"]
  end
  LS --> AGG
  LS --> ALERT
  LS --> GRAPH
  LS --> QUIZ`,
    },
  },
  {
    id: 'project-09',
    featured: false,
    category: 'tool',
    title: 'テニスコート予約自動化システム',
    description:
      '市営テニスコートの空き状況を毎日自動チェックし、条件に合う枠を通知・予約する仕組み。Selenium + SQLite + GitHub Actions（cache による DB 永続化）で構成し、家族が実際に日常利用している。実 DOM を probe してから実装する運用で、サイト構造変更にも追従。',
    tags: ['Python', 'Selenium', 'SQLite', 'GitHub Actions', 'Automation'],
    github: 'https://github.com/yamadan96/Tennis-Court-Availability-Notification-System',
    demo: null,
    image: null,
    summary: {
      built: '市営テニスコートの空き状況を毎日自動で確認し、条件に合う枠を通知・予約する仕組み。家族が実際に日常的に使っている。',
      problem: '人気のコートは公開直後に埋まる。毎日手で確認するのは現実的でない。',
      role: '設計・実装・運用を単独。利用者（家族）からの不具合報告を受けて修正を続けている。',
      tech: 'ブラウザを自動操作して予約サイトを巡回し、結果をデータベースに記録。毎日の実行は GitHub Actions に任せている。',
      result: '実運用中。予約サイトのHTML構造が変わっても追従できるよう、実際の構造を取得してから実装する手順を確立した。',
    },
    technical: [
      { label: '構成', body: 'Selenium でサイトを巡回し、SQLite に予約状態を記録。GitHub Actions で日次実行し、cache 機構で DB ファイルを永続化している（CI は毎回クリーンな環境で起動するため、これがないと状態が残らない）。' },
      { label: 'DOM 変更への対応', body: '推測でパーサーを書くと必ず外れるため、まず実際のページ構造を取得する probe スクリプトを用意し、それをコミットして資産化した。構造変更時の調査を短時間で再開できる。' },
      { label: '運用で見つけた問題', body: '施設×曜日ごとにルールが違うため、一律の条件判定では誤通知が出た。実利用者からの「平日に大量通知が来る」という報告を受けて、施設別ルールと時間帯除外を追加した。' },
      { label: '学んだこと', body: '外部サイトを相手にするコードは、ユニットテストでは壊れを検出できない。本番デプロイ後の挙動観察が唯一の検証手段になる場面がある。' },
    ],
    diagram: {
      alt: 'GitHub Actionsが毎日予約サイトを巡回し条件に合う枠を通知する構成図',
      caption: 'CI は毎回クリーンな環境で起動するため、cache で DB を永続化している',
      chart: `flowchart LR
  CRON["GitHub Actions<br/>日次実行"] --> SEL["Selenium<br/>予約サイトを巡回"]
  SEL --> RULE["施設 × 曜日ごとの<br/>条件判定"]
  RULE --> DB["SQLite<br/>予約状態を記録"]
  DB --- CACHE["Actions cache<br/>で DB を永続化"]
  RULE --> NOTIFY["条件に合う枠を通知"]
  NOTIFY --> USER["家族が実際に利用"]
  PROBE["probe スクリプト<br/>実DOM構造を取得"] -. "サイト変更時の調査" .-> SEL`,
    },
  },
];

export default projects;
