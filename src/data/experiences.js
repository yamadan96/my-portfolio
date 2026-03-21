const experiences = [
  {
    id: 'matsuo-institute-2',
    company: '株式会社松尾研究所',
    role: 'AIエンジニア（LLM / Reasoning研究開発）',
    period: '2026年2月〜現在',
    description:
      'LLMにBig Five性格特性を獲得させる研究開発。強化学習（GRPO）による報酬モデル設計・実験・評価を担当。',
    tags: ['Python', 'PyTorch', 'GRPO', 'LoRA', 'vLLM', 'WandB'],
    url: 'https://matsuo-institute.com/',
    blogUrl: null,
    hasDetail: true,
    details: {
      overview:
        'LLMに心理学的性格特性（Big Five）を獲得させる研究プロジェクトに従事。' +
        'GRPO（Group Relative Preference Optimization）を用いた強化学習で8Bパラメータモデルの性格制御手法を研究し、' +
        '報酬モデルの設計・複数条件での実験・定量評価・報酬ハック分析まで一貫して担当。',
      responsibilities: [
        '複数の報酬関数パターン（Listwise/Pointwise×評価粒度）を比較検証し、最適な報酬設計を選定',
        '評価粒度・プロンプト形式を変えた複数条件の実験を設計・実施し、性格獲得度と応答品質のトレードオフを定量分析',
        'Judge LLMを用いた性格ファセット評価プロンプトの設計・反復的な改善',
        '学習済みモデルの報酬ハック（Reward Hacking）兆候を定性・定量の両面から分析し、安全なモデル選定基準を策定',
        'Big Five性格検査（IPIP）および日本語知識ベンチマーク（JMMLU）によるモデル評価の実行・分析',
      ],
      achievements:
        '目標水準の性格特性スコアを達成するモデルの学習に成功。' +
        '報酬ハック分析により信頼性の高いモデル選定基準を確立し、チームの最終モデル選定に貢献',
      techStack: [
        'Python',
        'PyTorch',
        'Unsloth',
        'GRPO',
        'LoRA',
        'vLLM',
        'WandB',
        'TRL',
        'HuggingFace',
        'NVIDIA H200',
      ],
    },
  },
  {
    id: 'legalon',
    company: '株式会社LegalOn Technologies',
    role: 'AIエンジニア',
    period: '2026年2月〜3月',
    description:
      '自然言語処理・機械学習を中心としたAI機能の開発。字句解析、構文解析、テキスト生成等。',
    tags: ['Python', 'NLP', 'MLOps', 'DevOps'],
    url: 'https://legalontech.jp/',
    blogUrl: null,
    hasDetail: true,
    details: {
      overview:
        '自然言語処理・機械学習を中心としたAI機能の開発業務を遂行。' +
        'コンピュータサイエンスの知見に基づいた課題解決に取り組んだ。',
      responsibilities: [
        '自然言語処理: 字句解析、構文解析、テキスト生成、意味解析、固有表現・関係性の抽出',
        '形式言語、文字列解析、アルゴリズム・データ構造の応用',
        'インフラストラクチャ: DevOps、MLOps関連業務',
      ],
      achievements:
        'NLP・機械学習を活用したAI機能の開発に貢献',
      techStack: ['Python', 'NLP', 'MLOps', 'DevOps'],
    },
  },
  {
    id: 'mixi',
    company: '株式会社MIXI',
    role: '機械学習エンジニア',
    period: '2025年10月〜11月（2ヶ月）',
    description:
      '家族アルバム「みてね」のMLグループにて、機械学習パイプラインの最適化とAWSインフラ効率化に従事。',
    tags: ['Python', 'PyTorch', 'AWS', 'Kubernetes', 'Docker'],
    url: 'https://mixi.co.jp/',
    blogUrl: null,
    hasDetail: true,
    details: {
      overview:
        'みてね事業本部 Data Engineeringグループにて、Vision-Language Modelによる画像処理システムの高速化とコスト削減を実現。' +
        'データ駆動型アプローチでNew Relic・Grafana分析を活用。',
      responsibilities: [
        'Image Captioning高速化: Vision Encoderのベクトル再利用により推論速度42.8%向上',
        'MLパイプラインのリファクタリング: コード130行削減（50%）、DRY原則・Pydantic導入',
        'SQS Visibility Timeout最適化: データ駆動で900秒→65秒に短縮、エラー復旧15分→1分強',
        'S3アップロード並列化: ThreadPoolExecutorで30.7%高速化、約1万円/回のコスト削減',
      ],
      achievements:
        '処理速度42.8%向上、エラー復旧92.8%短縮、コスト削減、コード50%削減',
      techStack: [
        'Python',
        'PyTorch',
        'Transformers',
        'Qwen3-VL',
        'AWS (SQS, S3, EC2, ECS)',
        'Kubernetes',
        'Docker',
        'Terraform',
        'New Relic',
        'Grafana',
        'Pydantic',
        'pytest',
        'Gradio',
      ],
    },
  },
  {
    id: 'en-japan',
    company: 'エン・ジャパン株式会社',
    role: 'フルスタックエンジニア',
    period: '2025年9月（4日間）',
    description:
      '求人サイトを題材としたモダンWebアプリケーション開発。Next.js/React + Django。',
    tags: ['Python', 'Next.js', 'React', 'Docker', 'GitHub Flow'],
    url: 'https://corp.en-japan.com/',
    blogUrl: null,
    hasDetail: true,
    details: {
      overview:
        'デジタルプロダクト開発本部にて、求人サイトを題材にしたモダンWeb開発（フロント・バック分離／Next.js-React SPA／MVC+S+Rアーキテクチャ）を4日間で実装・検証。',
      responsibilities: [
        'Docker／devcontainerで環境構築し、API仕様に沿ったサーバーサイド機能を実装',
        'GitHub Flowに基づくfeatureブランチ運用・PR作成・レビュー対応の反復',
        '検索機能における部分一致の可用性 vs DB負荷などの設計トレードオフの検討',
        '認証・認可、エラーハンドリング、例外時のUX改善提案',
      ],
      achievements:
        'バックエンド課題を完了し、フロントエンドも一部実装。「小さく実装→早めにPR→指摘を都度反映」の開発サイクルを実践',
      techStack: [
        'Python',
        'Django',
        'Next.js',
        'React',
        'Docker',
        'devcontainer',
        'GitHub Flow',
      ],
    },
  },
  {
    id: 'exawizards',
    company: '株式会社エクサウィザーズ',
    role: '機械学習エンジニア',
    period: '2025年8月〜9月（1.5ヶ月）',
    description:
      'オフィス環境向けAIエージェント開発。カメラ×VLM×Arduino制御で「見て→判断→動く」自律システムを構築。',
    tags: ['Python', 'VLM', 'Arduino', 'Computer Vision', 'AI Agent'],
    url: 'https://exawizards.com/',
    blogUrl: null,
    hasDetail: true,
    details: {
      overview:
        'オフィス環境を対象としたAIエージェント開発プロジェクトに参画。' +
        '自律エージェント×ワークフロー型制御を組み合わせ、環境入力に応じて「見て→判断して→動く」プロセスを実現。' +
        'エッジデバイス上でマルチモーダルLLMを活用し、100%ローカル実行可能なデモシステムを開発。',
      responsibilities: [
        'プラグイン構造によるArduino＋RealSense＋VLMの統合設計・実装',
        '危険物・異常（刃物・転倒リスク物・通路障害物等）の検知タスク設計',
        '3段階推論（検出→優先度判断→対応提案）による説明可能なAIシステムの構築',
        'リアルタイム環境認識・解析・制御が可能なプロトタイプの開発・検証',
      ],
      achievements:
        'プロトタイプAIエージェントを開発し、見落としの削減・説明の一貫性向上を確認。ローカルモデル化・分散処理・ロボット統合の方向性を提案',
      techStack: [
        'Python',
        'Vision-Language Model',
        'Arduino',
        'Intel RealSense',
        'Semantic Kernel',
        'Computer Vision',
        'Explainable AI',
      ],
    },
  },
  {
    id: 'loglass',
    company: '株式会社ログラス',
    role: 'ソフトウェアエンジニア',
    period: '2025年8月（5日間）',
    description:
      'DDD×スクラム開発で損益計算書・貸借対照表（PL/BS）生成システムを開発。',
    tags: ['Kotlin', 'Spring Boot', 'MySQL', 'Docker', 'DDD'],
    url: 'https://www.loglass.co.jp/',
    blogUrl: 'https://qiita.com/yamadan96/items/6b48c0ff270c02878943',
    hasDetail: true,
    details: {
      overview:
        'ドメイン駆動設計（DDD）とスクラム開発を実践し、会計システム（損益計算書・貸借対照表作成）の設計・実装を担当。' +
        'ユーザー課題の発見から仕様設計・実装・発表までを一貫して行い、経営陣（VPoE・CTO）からのフィードバックを受けて事業視点での開発思考を強化。',
      responsibilities: [
        'DDDとスクラム開発手法を用いたPL/BS生成システムの設計・実装',
        'システム関連図・ユースケース図・オブジェクト図・ドメインモデル図の作成',
        'レイヤードアーキテクチャと依存性逆転の原則（DIP）の適用',
        '2スプリント（2.5日×2）のスクラム実施（プランニング、デイリースクラム、レビュー、KPT）',
        'ペアプログラミング・モブプログラミング、AI支援による開発効率向上',
      ],
      achievements:
        '5日間で損益計算書・貸借対照表生成の動作可能なプロトタイプを完成。モデリングとコードの整合性を維持し保守性・拡張性を強化',
      techStack: [
        'Kotlin',
        'Spring Boot',
        'MySQL',
        'Docker',
        'DDD',
        'UML',
        'Scrum',
      ],
    },
  },
  {
    id: 'goldman-sachs',
    company: 'ゴールドマン・サックス証券株式会社',
    role: 'エンジニアリング部門 ワークショップ',
    period: '2025年8月（1日）',
    description:
      '金融×テクノロジーのワークショップ。模擬FXトレードシステムの設計・実装・発表。',
    tags: ['Finance', 'Algorithm', 'Trading System'],
    url: null,
    blogUrl: null,
    hasDetail: true,
    details: {
      overview:
        '金融×テクノロジーの最前線におけるエンジニアの役割・実務を体感。' +
        '模擬FXトレードシステムの設計・実装・発表を通じて、アルゴリズム構築から成果検証までを実践。',
      responsibilities: [
        '模擬FXトレードシステムの設計・アルゴリズム構築',
        'トレードシステムの実装と成果検証・発表',
        '現役エンジニア社員との交流によるグローバル開発環境の理解',
      ],
      achievements:
        '即応性・論理的思考が求められる開発姿勢を体感。技術力に加えてビジネス視点・意思決定力の重要性を学習',
      techStack: ['Algorithm', 'Trading System', 'Finance'],
    },
  },
  {
    id: 'gmo-media',
    company: 'GMOメディア株式会社',
    role: '機械学習エンジニア',
    period: '2025年7月〜8月（1ヶ月）',
    description:
      'ポイントサイトにおける承認売上予測・承認月予測モデルを構築。',
    tags: ['Python', 'LightGBM', 'BigQuery', 'GCP'],
    url: 'https://www.gmo.media/',
    blogUrl: 'https://qiita.com/yamadan96/items/99c0e6757a6da8786626',
    hasDetail: true,
    details: {
      overview:
        'AIデータ推進チームにて、ポイントサイトにおける承認売上予測・承認月予測モデルを構築。' +
        'BigQueryによる大規模データ抽出、特徴量エンジニアリング、信頼度スコアによるモデル切替で高精度を実現。',
      responsibilities: [
        '承認/否認予測モデルの構築（精度96.1%、AUC 0.965、F1 0.978）',
        '承認時期予測モデルの開発（MAE 1.3日、高信頼度で月予測正解率99%以上）',
        '時間・金額・テキスト・カテゴリ・交互作用の特徴量エンジニアリング',
        '信頼度スコアを導入し、高・中・低信頼に分類してモデル切替による精度改善',
        'BigQuery→Googleスプレッドシートへの週次自動反映パイプライン構築',
        '最終日の成果発表会にて業務導入に向けた提案を実施',
      ],
      achievements:
        '精度96.1%の承認予測モデルを構築。業務工数削減とキャッシュフロー計画精度の向上に貢献',
      techStack: [
        'Python',
        'LightGBM',
        'scikit-learn',
        'pandas',
        'numpy',
        'BigQuery',
        'GCP',
        'matplotlib',
        'seaborn',
      ],
    },
  },
  {
    id: 'standby',
    company: 'スタンバイ株式会社',
    role: 'MLエンジニア',
    period: '2025年7月（4日間）',
    description:
      'LINEヤフー×ビズリーチ合弁。実務課題の要因分析→解決策立案→ML実装→CTO成果発表。',
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
    url: null,
    blogUrl: null,
    hasDetail: true,
    details: {
      overview:
        'LINEヤフー×ビズリーチの合弁企業にて、実プロダクトの課題をもとにした実務課題型インターンに参加。' +
        '要因分析→解決策立案→ML実装→CTOへの成果発表までを一貫して担当。',
      responsibilities: [
        '実務データに基づく課題の要因分析',
        'ML手法を用いた解決策の立案・実装',
        'CTOへの成果発表・プレゼンテーション',
      ],
      achievements:
        'インターンシップ優秀者受賞。MLによる課題解決力とエンジニア視点での企画力を体得',
      techStack: ['Python', 'Machine Learning', 'Data Analysis'],
    },
  },
  {
    id: 'geniee',
    company: '株式会社ジーニー',
    role: 'バックエンドエンジニア',
    period: '2025年7月（1日）',
    description:
      '広告配信DSPの高速化。N+1解消、TTLキャッシュ、並列処理、Prometheus+Grafana可視化。',
    tags: ['Python', 'MySQL', 'Prometheus', 'Grafana', 'Docker'],
    url: null,
    blogUrl: 'https://qiita.com/yamadan96/items/8018a6e5cab074737cb2',
    hasDetail: true,
    details: {
      overview:
        '広告配信（DSP）システムの高速化を目的としたインターン。' +
        '処理のボトルネックを特定し、複数の最適化施策を実装・検証。',
      responsibilities: [
        'N+1問題の解消: 一括取得によるDBアクセスの削減（O(n)→O(1)）',
        'TTLキャッシュ導入: 頻出データをローカルキャッシュしレスポンス高速化',
        '並列処理: 特徴量マッチングをデータサイズに応じて動的にスレッド並列化',
        'GIL対策: multiprocessing＋プリフォーク構成による真の並列処理実現',
        'Prometheus + Grafanaによるメトリクス監視・パフォーマンス分析の可視化',
      ],
      achievements:
        '処理時間を大幅に短縮。実運用を想定した負荷条件下での最適化設計・実装・可視化を一貫して体験',
      techStack: [
        'Python 3.12',
        'MySQL',
        'Prometheus',
        'Grafana',
        'Docker',
        'multiprocessing',
      ],
    },
  },
  {
    id: 'cyberagent',
    company: '株式会社サイバーエージェント',
    role: 'Architecture Challenge',
    period: '2025年6月（1日）',
    description:
      'マルチテナンシープラットフォームのアーキテクチャ設計。ECS Fargate、API Gateway等。',
    tags: ['AWS', 'ECS Fargate', 'API Gateway', 'Microservices'],
    url: null,
    blogUrl: 'https://qiita.com/yamadan96/items/790b4a5e5b7f12543c21',
    hasDetail: true,
    details: {
      overview:
        '選考制の対面ワークショップにて、マルチテナンシーなプラットフォームのアーキテクチャ設計に取り組む。' +
        'ECS FargateやAPI Gatewayなどを用いたスケーラブルなマイクロサービス構成を設計し、社員エンジニアからレビューを受けた。',
      responsibilities: [
        'マルチAZ構成・オートスケーリングによる高可用性設計',
        'WAF・JWT認証・RBACによるセキュリティ設計',
        'CloudFront・SQS・ElastiCacheによるスケーラビリティ設計',
        'CloudWatch・X-Rayによる可観測性の設計',
      ],
      achievements:
        'マルチテナント設計における分離・共通化のバランスやノイジーネイバー問題の対策を学び、構成力と説明力を強化',
      techStack: [
        'AWS',
        'ECS Fargate',
        'API Gateway',
        'CloudFront',
        'SQS',
        'ElastiCache',
        'WAF',
        'CloudWatch',
        'X-Ray',
      ],
    },
  },
  {
    id: 'airion',
    company: '株式会社Airion（東大発スタートアップ）',
    role: 'AI開発事業部 AIエンジニア',
    period: '2024年4月〜現在',
    description:
      'GENIACプロジェクト参画、音声合成、画像処理、物体検出、3D解析等の多数AIプロジェクトに従事。大手製造業・医療機器メーカーとの直接取引。',
    tags: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'VITS2', 'LLM', 'IEC 61131'],
    url: 'https://airion.co.jp/',
    mediaLinks: [
      { label: 'GENIAC PR TIMES', url: 'https://prtimes.jp/main/html/rd/p/000000011.000118893.html' },
      { label: 'トヨタイムズ YouTube', url: 'https://www.youtube.com/watch?v=xsmQ9Slnvds' },
      { label: '音声合成 PR TIMES', url: 'https://prtimes.jp/main/html/rd/p/000000004.000118893.html' },
      { label: '経産省 GENIAC', url: 'https://www.meti.go.jp/policy/mono_info_service/geniac/geniac_magazine/kickoffevents_3.html' },
    ],
    hasDetail: true,
    details: {
      overview:
        'AI開発事業部に所属し、設備メーカー・トヨタ・医療機器メーカー・重工業メーカー業など大手製造業・医療機器メーカーとの直接取引で、' +
        '音声合成・PLC制御・画像処理・物体検出・内視鏡画像最適化・3Dデータ解析・業務自動化など多岐にわたるAIプロジェクトに従事。' +
        'AI技術の研究開発・実装・最適化に加え、報告書作成・プレゼンテーションを通じて技術成果を社内外に伝達。' +
        '経済産業省・NEDOが主導する国家プロジェクト「GENIAC」でのLLM研究開発にも参画。',
      responsibilities: [
        '【GENIAC】製造業のPLC制御に特化したラダープログラム自動要約生成LLMの研究開発。現場提供データ（実機ラダーコード、仕様書、図面）を用いた前処理・アノテーション、ラダー特有の記法や制約に最適化したトークナイザ・デコーダーのカスタム設計、LLM-as-a-Judgeによる自動要約評価スクリプトの開発（正確性・簡潔性・可読性・一貫性の4軸評価）',
        '【音声合成】次世代ロボット向けリアルタイム音声合成システム開発（VITS2）。自然な音質と1秒以内の低遅延を両立。固有名詞の辞書拡張、感情・抑揚の自然な再現のための音声データ前処理を担当。モデル選定から実装・検証・精度改善まで一貫して遂行。成果はトヨタイムズニュース・PR TIMESに掲載',
        '【鉄パイプ自動計数AI】製造現場における鉄パイプの画像自動計数AIをテックリードとして開発（PoC）。YOLOv8ベースの物体検出を中心に、ヒートマップ系（CenterNet/FCOS）やセグメンテーション系（YOLOv8-seg）との比較検証を実施。三段階学習・データ拡張・TTA・NMSを活用し、200〜300本で束単位精度100%、600本で正解率99%以上、推論0.2秒/枚を達成',
        '【建築パース画像補正】建築設計における画像処理技術を活用し、パース画像の補正を自動化。手作業を削減し画像編集プロセスを効率化',
        '【内視鏡画像最適化】医療画像の画質向上を目的とした最適化アルゴリズムを開発。顧客環境での再現性を考慮した堅牢なシステム設計と手順書を作成し、現場導入を支援',
        '【3Dセグメンテーション】3D形状解析技術を活用し、工業部品の穴検出・形状認識・異常検出を自動化。品質管理の精度向上に貢献',
        '【仕様書自動生成】文書処理技術（PDF解析・テーブル抽出・OCR）を活用し、校正仕様書作成の業務を自動化。業務フローの効率化と作業時間の短縮を実現',
      ],
      achievements:
        '鉄パイプ計数で束単位精度100%・推論0.2秒/枚達成（テックリード）、音声合成がトヨタイムズ・PR TIMESに掲載、GENIACプロジェクトでLLM研究開発に参画、7つのプロジェクトを並行して推進',
      techStack: [
        'Python',
        'PyTorch',
        'YOLOv8',
        'OpenCV',
        'VITS2',
        'LoRA',
        'ControlNet',
        'Optuna',
        'SMAC3',
        'Roboflow',
        'CVAT',
        'Pandas',
        'NumPy',
        'Matplotlib',
      ],
      projects: [
        {
          name: 'GENIAC ― PLC制御LLM研究開発',
          client: '設備メーカー',
          icon: '🏭',
          category: 'LLM / 製造業DX',
          period: '2024年10月〜現在',
          summary:
            '経済産業省・NEDO主導の国家プロジェクト「GENIAC」にて、製造業のPLC（プログラマブルロジックコントローラ）制御に特化したLLMの研究開発を推進。',
          details: [
            'IEC 61131-10 XML（ラダー図）→ IEC 61131-3 IL（命令リスト）への自動変換エンジンを開発。65万行超の大規模PLCファイルを処理可能',
            '現場提供の実機ラダーコード・仕様書・図面を用いた前処理パイプライン・アノテーション基盤を構築',
            'ラダー特有の記法・制約に最適化したカスタムトークナイザ・デコーダーを設計',
            'LLM-as-a-Judgeによる自動要約評価（正確性・簡潔性・可読性・一貫性の4軸）を開発',
            'ニーモニック自動生成・サジェスト生成・検証基盤など、複数のサブシステムをPython + Conda環境で構築',
            'フロントエンド + バックエンドによるデモアプリケーションを開発し、CI/CDパイプライン（Claude API・OpenAI API連携）を構築',
          ],
          techStack: ['Python', 'PyTorch', 'LLM', 'Claude API', 'OpenAI API', 'IEC 61131-10/3', 'XML', 'CI/CD', 'Conda'],
          impact: '国家プロジェクトとして製造業のDX推進に貢献。PLC制御の自動化・効率化の基盤技術を確立',
        },
        {
          name: 'リアルタイム音声合成AI',
          client: 'トヨタ自動車株式会社',
          icon: '🎙️',
          category: '音声合成 / ロボティクス',
          period: '2024年4月〜2024年12月',
          summary:
            '次世代ロボット向けリアルタイム音声合成システムを開発。Style-Bert-VITS2・OpenJTalkを活用し、自然な日本語音声をリアルタイムで生成。',
          details: [
            'VITS2（Variational Inference Text-to-Speech 2）をベースに、Style-Bert-VITS2で感情・話者スタイルを制御',
            'OpenJTalk（日本語テキスト→音声エンジン）と連携し、固有名詞辞書の拡張・アクセント制御を実装',
            '1秒以内の低遅延を維持しつつ、自然な音質・感情表現・抑揚を実現',
            '音声データの前処理パイプライン（ノイズ除去・正規化・セグメンテーション）を構築',
            'CycleGANを用いた音声変換や、Stable Diffusionによる関連画像生成も並行して検証',
            '成果はトヨタイムズニュースYouTubeおよびPR TIMESに掲載',
          ],
          techStack: ['Python', 'VITS2', 'Style-Bert-VITS2', 'OpenJTalk', 'PyTorch', 'CycleGAN', 'TensorFlow'],
          impact: 'トヨタイムズニュース・PR TIMESに掲載。次世代ロボットの音声インタフェース基盤を確立',
        },
        {
          name: '鉄パイプ自動計数AI',
          client: '製造業の顧客',
          icon: '🔧',
          category: '物体検出 / 製造業',
          period: '2024年10月〜2025年5月',
          summary:
            '製造現場における鉄パイプの画像自動計数AIをテックリードとしてPoC開発。束単位精度100%を達成。',
          details: [
            'YOLOv8ベースの物体検出モデルを中心に、CenterNet・FCOSなどヒートマップ系手法、YOLOv8-segなどセグメンテーション系手法との比較検証を実施',
            '三段階学習戦略（事前学習→ファインチューニング→テスト時拡張）により精度を段階的に向上',
            'データ拡張（回転・反転・色調変化・モザイク等）とTTA（Test-Time Augmentation）・NMS（Non-Maximum Suppression）を活用',
            'COCO形式でのアノテーション管理、ヒートマップによる検出精度の可視化・評価',
            '複数のシグマパラメータでの比較実験を行い、最適なモデル構成を選定',
            '200〜300本の束で精度100%、600本でも正解率99%以上、推論速度0.2秒/枚を達成',
          ],
          techStack: ['Python', 'YOLOv8', 'CenterNet', 'FCOS', 'OpenCV', 'COCO', 'Roboflow', 'CVAT'],
          impact: 'テックリードとしてPoC完遂。束単位精度100%を達成し、製造現場の計数作業自動化の実現可能性を実証',
        },
        {
          name: '内視鏡画像フォーカス最適化',
          client: '医療機器メーカー',
          icon: '🏥',
          category: '医療画像処理 / 画質評価',
          period: '2024年7月〜2025年3月',
          summary:
            '医療内視鏡画像の自動フォーカス最適化システム（IPF Optimizer）を開発。複数の撮像モードに対応した画質評価基盤を構築。',
          details: [
            'IPF Optimizer（Image Focus Optimizer）を開発し、内視鏡画像のフォーカス品質を自動最適化',
            'IQA-PyTorch（Image Quality Assessment）ライブラリを活用した定量的な画質評価パイプラインを構築',
            'WLI（White Light Imaging）、NBI（Narrow Band Imaging）、RDI（Red Dichromatic Imaging）など複数の撮像モードに対応',
            'リファレンス画像データセットを用いたAGC（Auto Gain Control）最大値での評価・キャリブレーションを実施',
            'IPFシミュレーターの開発・納品。口腔内視鏡のサンプル動画を用いた検証環境を構築',
            '顧客環境での再現性を考慮した堅牢なシステム設計と詳細な導入手順書を作成し、現場導入を支援',
          ],
          techStack: ['Python', 'PyTorch', 'IQA-PyTorch', 'OpenCV', 'NumPy', 'Optuna', 'SMAC3'],
          impact: '医療機器メーカーへの納品を完了。複数撮像モード対応の画質最適化基盤を確立',
        },
        {
          name: '3D形状解析・セグメンテーション',
          client: '重工業メーカー',
          icon: '⚙️',
          category: '3D解析 / CAD / 品質管理',
          period: '2024年9月〜2025年1月',
          summary:
            '工業部品の3D形状解析・セグメンテーションシステムを開発。OpenCASCADE・STEPファイル処理による穴検出・形状認識・異常検出を自動化。',
          details: [
            'OpenCASCADE（3D CAD/幾何学計算ライブラリ）を用いた3D形状解析基盤を構築',
            'ISO 10303-21標準（STEP形式）のCADデータ読み込み・解析パイプラインを実装',
            '工業部品の穴検出・形状認識・表面異常検出を3Dデータから自動的に実行',
            'Python OpenCASCADE環境（pyocc_env）でのプロトタイプ開発・検証',
            '3Dモデルデータの前処理・正規化・特徴量抽出のワークフローを確立',
          ],
          techStack: ['Python', 'OpenCASCADE', 'STEP (ISO 10303)', '3D Segmentation', 'CAD'],
          impact: '重工業における品質管理の自動化に貢献。3D形状解析による検査工程の効率化を実現',
        },
        {
          name: '建築パース画像補正',
          client: '非公開',
          icon: '🏗️',
          category: '画像処理 / 建築',
          period: '2024年6月〜2024年9月',
          summary:
            '建築設計におけるパース画像の自動補正システムを開発。ControlNet・LoRAを活用した高品質な画像補正を実現。',
          details: [
            'ControlNetを活用した建築パース画像の構図・パース補正の自動化',
            'LoRA（Low-Rank Adaptation）によるドメイン特化型の画像生成モデルのファインチューニング',
            '手作業での画像編集プロセスを大幅に効率化し、設計ワークフローを改善',
          ],
          techStack: ['Python', 'ControlNet', 'LoRA', 'Stable Diffusion', 'OpenCV'],
          impact: '建築設計における画像編集の工数を削減。AIによるクリエイティブ業務支援を実現',
        },
        {
          name: '仕様書自動生成',
          client: '非公開',
          icon: '📄',
          category: '文書処理 / 業務自動化',
          period: '2024年5月〜2024年8月',
          summary:
            '校正仕様書作成の自動化システムを開発。PDF解析・テーブル抽出・OCRを活用し、業務フローを効率化。',
          details: [
            'PDF解析エンジンによる文書構造の自動認識・テーブルデータの抽出',
            'OCR技術を活用したスキャン文書からのテキスト・図表の自動読み取り',
            '抽出データから校正仕様書のテンプレートへの自動マッピング・出力',
            '業務フローの効率化と作業時間の大幅短縮を実現',
          ],
          techStack: ['Python', 'PDF解析', 'OCR', 'Pandas', 'テーブル抽出'],
          impact: '仕様書作成の業務工数を削減。文書処理の自動化基盤を確立',
        },
      ],
    },
  },
  {
    id: 'solty',
    company: '株式会社ソリューション・アンド・テクノロジー',
    role: 'システムエンジニア / DX統括部',
    period: '2023年7月〜現在',
    description:
      '社内向けAI開発・業務効率化。退職予測モデル、RAGシステム、感情分析・誤送信検出等。',
    tags: ['Python', 'Azure OpenAI', 'Azure AI Search', 'Django', 'React'],
    url: 'https://www.solty.co.jp/',
    blogUrl: null,
    hasDetail: true,
    details: {
      overview:
        '人事・会計などの業務システム企業にて、DX統括部でAI開発を担当。' +
        '退職予測、文章類似度調査、感情分析、RAGシステム構築など幅広いAIソリューションを開発。',
      responsibilities: [
        '退職予測モデルの開発: 社内人材データを活用したリスクスコア算出モデルの構築',
        'Azure OpenAIによるメール感情分析・誤送信検出システムの構築',
        'Azure AI Search + LLMによるRAG型社内ドキュメント検索システムの構築',
        '自然言語処理による文書間の類似性評価ロジックの実装',
        'Webスクレイピングによる勤務実績データの自動取得・CSV出力自動化',
        'OCR精度改善（レシート読取の画像処理・OCRチューニング）',
        'Django×ReactによるTo-Doリストアプリの開発',
      ],
      achievements:
        'RAG型検索システム・感情分析システム等複数のAIソリューションを実用化',
      techStack: [
        'Python',
        'Java',
        'SQL',
        'Django',
        'React',
        'Next.js',
        'Redux Toolkit',
        'Tailwind CSS',
        'Azure OpenAI',
        'Azure AI Search',
        'OCR',
      ],
    },
  },
  {
    id: 'rakuten',
    company: '楽天グループ株式会社',
    role: 'アプリケーションエンジニア インターン',
    period: '2023年8月（1週間）',
    description:
      'Flutterを用いたクロスプラットフォームモバイルアプリのプロトタイプ開発。',
    tags: ['Flutter', 'Dart', 'Mobile', 'UI/UX'],
    url: 'https://corp.rakuten.co.jp/',
    blogUrl: null,
    hasDetail: true,
    details: {
      overview:
        '新規プロトタイプ開発コースに参加。テーマに沿って、Flutterを用いたモバイルアプリのデザイン、企画、開発をチームで担当。',
      responsibilities: [
        'Flutterを用いたモバイルアプリのUI設計・機能実装・デバッグ',
        'チームでの要件定義から開発・検証までのプロセスを経験',
        'クロスプラットフォーム開発の実践',
      ],
      achievements:
        '短期間で要件定義から開発・検証までを完了。Flutterによる効率的なクロスプラットフォーム開発を実践',
      techStack: ['Flutter', 'Dart'],
    },
  },
  {
    id: 'matsuo-institute-1',
    company: '株式会社松尾研究所',
    role: 'AI Engineer / 戦略コンサルティング補佐',
    period: '2023年1月〜5月（5ヶ月）',
    description:
      '大手食品企業のDX推進プロジェクト。戦略コンサルティング補佐として市場規模推定・競合分析。',
    tags: ['Market Research', 'Fermi Estimation', 'Strategy', 'DX'],
    url: 'https://matsuo-institute.com/',
    blogUrl: null,
    hasDetail: true,
    details: {
      overview:
        '日本トップの食品企業のDX推進プロジェクトに参画。' +
        'AIエンジニアとしての立場で参加しつつ、主に戦略コンサルタントとしての役割を担った。' +
        '数千万円規模のDX案件における実務を経験。',
      responsibilities: [
        '市場規模推定（フェルミ推定）: DX化による市場拡大・影響予測、リソース配分の意思決定支援',
        '市場調査・競合リサーチに基づく戦略立案の基礎データ提供、経営陣向け資料作成',
        '週1回の経営陣ミーティングに出席し、意思決定プロセスやビジョン形成に関する洞察を獲得',
        '議事録・プロジェクト推進管理、意思決定の透明性確保',
      ],
      achievements:
        '数千万円規模のDX案件での実務経験。経営陣との直接的な議論を通じた戦略視点の習得',
      techStack: [
        'Market Research',
        'Fermi Estimation',
        'Strategy Consulting',
        'DX',
      ],
    },
  },
  {
    id: 'shinonome',
    company: '株式会社Shinonome',
    role: 'データサイエンティスト',
    period: '2021年4月〜2023年6月（2年3ヶ月）',
    description:
      '日記生成AI開発（NLP）、銀行太陽光ブロックチェーンプロジェクトのテスト設計。',
    tags: ['Python', 'NLP', 'Blockchain', 'Testing'],
    url: 'https://shinonome.com/',
    blogUrl: null,
    hasDetail: true,
    details: {
      overview:
        'データサイエンティストとして、NLPを活用した受託開発プロジェクトやブロックチェーン関連プロジェクトに参画。' +
        '後輩エンジニアへのコードレビュー・教育も担当。',
      responsibilities: [
        '日記生成AI（受託開発）: Paraphrase手法の論文調査・実装・評価、プロンプトエンジニアリングによる出力品質向上',
        '銀行太陽光システムプロジェクト: 太陽光発電データに基づくブロックチェーン取引のテスト設計・検証',
        '単体テスト・統合テストのテストケース作成・実行、バグ検出・報告',
        '後輩エンジニアへのコードレビュー支援、品質向上への貢献',
      ],
      achievements:
        'NLP活用の受託開発を完遂。コードレビューを通じたチーム品質向上に貢献',
      techStack: [
        'Python',
        'NLP',
        'Prompt Engineering',
        'Blockchain',
        'Testing',
      ],
    },
  },
  {
    id: 'infratop',
    company: '株式会社インフラトップ',
    role: 'プログラミングスクール メンター',
    period: '2022年6月〜2023年1月（8ヶ月）',
    description:
      'DMM WebCampにて受講生の学習支援。Ruby/Rails, HTML/CSS/Gitの質問対応・レビュー。',
    tags: ['Ruby', 'Ruby on Rails', 'HTML/CSS', 'Git', 'Mentoring'],
    url: 'https://infratop.jp/',
    blogUrl: null,
    hasDetail: true,
    details: {
      overview:
        'DMMのプログラミングスクール「DMM WebCamp」にて、完全フルリモートで受講生の学習支援を担当。' +
        'プログラミングスキルの向上だけでなく、指導力やコミュニケーション力も向上。',
      responsibilities: [
        'カリキュラムに基づく質問対応・課題レビュー',
        '受講生との個別指導・メンタリング',
        '先輩メンターとのロールプレイを通じた指導スキルの向上',
        'コーディングスタンダード・ベストプラクティスに基づいたコードレビュー',
      ],
      achievements:
        '的確な言語化能力と指導力・共感力を習得。学習者一人ひとりの課題に寄り添った教育的支援を実践',
      techStack: [
        'Ruby',
        'Ruby on Rails',
        'HTML',
        'CSS',
        'Git',
      ],
    },
  },
];

export default experiences;
