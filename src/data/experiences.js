const experiences = [
  {
    id: 'matsuo-institute-gui-rag',
    company: '株式会社松尾研究所',
    role: 'AIエンジニア（GUI自律探索エージェント×RAG 研究開発）',
    period: '2026年7月〜現在',
    description:
      '業務システムを人の代わりに自動操作するAIエージェントの研究開発。社内文書の知識をAIに参照させて操作の成功率を高める仕組みを設計・実装し、比較実験で効果を数値で実証。',
    descriptionEn:
      'R&D on autonomous GUI agents — designed a RAG-based knowledge injection pipeline and proved its impact through unattended A/B evaluation.',
    tags: ['Python', 'LLM Agent', 'RAG', 'OpenAI API', 'Prompt Engineering'],
    url: 'https://matsuo-institute.com/',
    blogUrl: null,
    hasDetail: true,
    details: {
      overview:
        '株式会社松尾研究所にて、業務Webシステムを自律操作するGUI探索エージェントの研究開発に従事。' +
        'エージェントへのRAG知識注入機構の実装と、A/B検証による効果の定量評価を担当。',
      responsibilities: [
        'RAG知識注入機構の設計・実装: タスク文からLLMが検索クエリを自動生成し、vector store（業務文書群）を検索、要点を「探索ヒント集」に統合してエージェントの指示文へ注入するパイプラインを実装。コードレビュー指摘への対応まで完了',
        '無人A/B検証と多層の定量評価: 複数業務フロー×RAG有無の比較実験を実行条件固定・実行前ゲートチェック付きで無人実行し、完遂率（プロセス完遂と実登録成功の2レイヤー）・項目単位の入力精度・実行時間・コストを定量評価',
        '失敗原因のフォレンジック分析とPM向け報告: ステップログから超過ステップを作業フェーズ別に帰属させて根本原因を特定し、恒久対策の比較資料と報告資料（結論と検証結果の1対1対応表・読み順ガイド）を整備',
      ],
      achievements:
        'RAG知識注入により対象業務フロー全てで完遂率・入力精度・実行時間・コストが改善することを定量実証',
      techStack: [
        'Python',
        'OpenAI API',
        'LLM Agents',
        'RAG (Vector Store / File Search)',
        'Prompt Engineering',
        'pytest',
        'uv',
      ],
    },
  },
  {
    id: 'matsuo-institute-grpo',
    company: '株式会社松尾研究所',
    role: 'AIエンジニア（LLM性格制御・強化学習 研究開発）',
    period: '2026年2月〜2026年6月（5ヶ月）',
    description:
      'AIチャットボットに狙った「性格」を持たせる研究開発。強化学習を用いた学習方法の比較検証と、性能・安全性の評価を担当。',
    descriptionEn:
      'Taught an LLM to express targeted personality traits via reinforcement learning (GRPO), covering reward design and safety evaluation.',
    tags: ['Python', 'GRPO', 'PyTorch', 'LoRA', 'vLLM'],
    url: 'https://matsuo-institute.com/',
    blogUrl: null,
    hasDetail: true,
    details: {
      overview:
        '株式会社松尾研究所にて、強化学習（GRPO）でLLMにBig Five性格特性を獲得させる研究開発に従事。' +
        '報酬関数の設計比較から報酬ハック分析・モデル評価まで、学習パイプラインの検証を幅広く担当。',
      responsibilities: [
        '複数の報酬関数パターン（Listwise/Pointwise×評価粒度）を比較検証し、最適な報酬設計を選定',
        '評価粒度・プロンプト形式を変えた複数条件の実験を設計・実施し、性格獲得度と応答品質のトレードオフを定量分析。Judge LLMによる性格ファセット評価プロンプトも設計・改善',
        '報酬ハック（Reward Hacking）兆候を定性・定量の両面から分析して安全なモデル選定基準を策定し、IPIP・JMMLUによるモデル評価を実行',
      ],
      achievements:
        '目標水準の性格特性スコアを達成するモデルの学習に成功し、報酬ハック分析でチームの最終モデル選定に貢献',
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
    id: 'legaltech-freelance',
    company: 'リーガルテックスタートアップ',
    role: 'フリーランスエンジニア（Python / FastAPI / React）',
    period: '2026年6月（1ヶ月）',
    description:
      '法務専門職向けAIサービスの機能開発をフリーランスとして担当。利用状況が一目で分かる管理画面や、週次レポートの自動生成など複数の機能を、1ヶ月で設計から本番リリースまで完遂。',
    descriptionEn:
      'Freelance full-stack development for a legal-tech AI platform — shipped usage dashboards and automated weekly reporting, from design to production in one month.',
    tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'MCP', 'PostgreSQL'],
    url: null,
    blogUrl: null,
    hasDetail: true,
    details: {
      overview:
        'リーガルテックスタートアップにて、専門職向けAIプラットフォームの機能開発・運用支援にフリーランスとして従事。' +
        'AI契約書チェックOSSの品質検証・リリース準備から、大規模ドキュメントの変換スクリプト開発、' +
        'FastAPI + Reactによる管理画面ダッシュボード実装、週次レポート自動生成（PydanticAI + Gemini）まで、' +
        'バックエンド・フロントエンド・インフラを横断して担当。',
      responsibilities: [
        'AI契約書チェックOSSのリリース前品質検証: NDA・業務委託・システム開発・売買の4契約類型で仕込み問題点を全件検出し、OSSのPublic公開・初回リリースに貢献',
        'ドキュメント変換スクリプト開発（Python）: 大規模ドキュメントのシート別Markdown変換・セクション分割・SHA256ハッシュによるstale検知の3スクリプトを実装。Python 3.9互換・CI通過・PRマージ済み',
        'MCP利用頻度ダッシュボード実装: バックエンドに集計クエリ・APIエンドポイントを追加、フロントエンドにランク番号+プログレスバーのテーブルUIを実装。ステージングデプロイ成功',
        'ドリルダウン機能実装: ツール別・会員別の詳細データを取得する2エンドポイントを追加し、ドロワー方式のUIコンポーネントを実装してPRマージ',
        '週次レポート自動生成: PydanticAI + Geminiによる自動レポート生成システムをGitHub Actions化。PR/Issue収集・CI失敗検出・サニタイズ処理を実装',
        'Cloud Monitoringインフラ整備: Cloud Run向けアラートポリシーをTerraformモジュール化し、staging/productionへの組み込みと運用Runbookを追加',
      ],
      achievements:
        '複数のPRをマージ。AI契約書チェックOSS公開貢献、MCPダッシュボード・ドリルダウン機能のステージング本番リリース、週次レポート自動生成のCI/CD組み込み完了',
      techStack: [
        'Python',
        'FastAPI',
        'SQLAlchemy',
        'PostgreSQL',
        'Pydantic',
        'PydanticAI',
        'Gemini API',
        'React',
        'TypeScript',
        'Mantine v8',
        'TanStack Router',
        'MCP (Model Context Protocol)',
        'Terraform',
        'Google Cloud Monitoring',
        'GitHub Actions',
      ],
    },
  },
  {
    id: 'airion',
    company: '株式会社Airion（東大発スタートアップ）',
    role: 'AI開発事業部 AIエンジニア',
    period: '2024年4月〜現在',
    description:
      '音声合成・画像認識・文書処理の自動化など、10件近いAI開発プロジェクトに従事。ロボット向け音声合成の成果はトヨタイムズに掲載。国のAI開発プロジェクト「GENIAC」にも参画。',
    descriptionEn:
      'Built AI systems across voice synthesis (featured on Toyota Times), computer vision, and document automation; joined Japan\'s national GENIAC LLM project.',
    tags: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'VITS2', 'LLM'],
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
        'AI開発事業部に所属し、音声合成・画像処理・物体検出・最適化・3Dデータ解析・業務自動化などの領域で多数のプロジェクトに従事。' +
        'AI技術の開発・実装・最適化に加え、報告書作成・プレゼンテーションを通じて技術成果を社内外に伝達。' +
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
        '鉄パイプ計数で束単位精度100%・推論0.2秒/枚達成（テックリード）、音声合成がトヨタイムズ・PR TIMESに掲載、GENIACプロジェクトでLLM研究開発に参画',
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
    },
  },
  {
    id: 'solty',
    company: '株式会社ソリューション・アンド・テクノロジー',
    role: 'システムエンジニア / DX統括部',
    period: '2023年7月〜2026年5月（2年10ヶ月）',
    description:
      '業務システム企業の社内AI開発を担当。社員の退職リスク予測、メール誤送信の自動検出、社内文書をAIで検索できる仕組みなど、複数のシステムを実用化。',
    descriptionEn:
      'In-house AI development: employee attrition prediction, email misdelivery detection, and RAG-based document search — multiple systems shipped to production.',
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
    id: 'legalon',
    company: '株式会社LegalOn Technologies',
    role: 'AIエンジニア（NLP / LLM）',
    period: '2026年2月〜3月（2ヶ月）',
    description:
      '契約書の種類をAIで自動判別するシステムを研究開発。従来の仕組みから精度を大幅に改善（日本語契約書で+14pt）し、試作から本番サービスへの組み込みまで一貫して担当。',
    descriptionEn:
      'LLM-based contract classification R&D — improved accuracy by +14pt over the legacy ML model and shipped it as a production microservice.',
    tags: ['Python', 'LLM', 'GCP', 'Prompt Engineering', 'Pydantic'],
    url: 'https://legalontech.jp/',
    blogUrl: null,
    hasDetail: true,
    details: {
      overview:
        'AI法務プラットフォームにおける契約書自動分類機能のLLM化プロジェクトに従事。' +
        '日本語・英語の契約書を多数のカテゴリに自動分類するLLMベースのシステムを研究開発し、' +
        '従来の機械学習モデルを大幅に上回る精度を達成。' +
        'PoCでの実験・検証から本番サービスへの実装まで一貫して担当した。',
      responsibilities: [
        'プロンプトエンジニアリング: システムプロンプト・カテゴリカタログ・Few-shot例の体系的な設計と、複数段階のアブレーション実験による反復的な最適化',
        'Few-shot学習戦略の設計: フォーマット定着・境界判別・頻出誤分類是正の3種の例題を戦略的に設計し、精度向上とコスト増のトレードオフを最適化',
        '非契約文書検出の実装: 報告書・社内メモ等の非契約文書を高精度で識別する機能を設計・評価',
        'テキスト前処理パイプラインの設計: 文書長・言語に応じた最適な入力テキスト選択戦略を実装・比較検証',
        '誤分類パターン分析: 混同行列に基づく類似カテゴリ間の誤分類傾向を特定し、カテゴリ説明文の改善により精度向上',
        '本番サービス実装: PoCコードを型安全なマイクロサービスとして再設計。LLM応答の堅牢なパース処理・バッチ処理・コスト追跡機能を実装',
        'ML vs LLM比較評価: 同一評価データで従来MLモデルとの精度・コスト・レイテンシを多角的に比較分析し、導入判断の根拠を提供',
      ],
      achievements:
        '日本語契約書で従来MLモデル比+14pt、英語契約書で+5ptの精度改善を達成。' +
        'Few-shot学習により最小限のコスト増で精度を効果的に改善。' +
        'PoCから本番導入可能なマイクロサービスまで一貫して構築',
      techStack: [
        'Python',
        'LLM (Gemini)',
        'Google Cloud (Vertex AI)',
        'Pydantic',
        'pytest',
      ],
    },
  },
  {
    id: 'mixi',
    company: '株式会社MIXI',
    role: '機械学習エンジニア',
    period: '2025年10月〜11月（2ヶ月）',
    description:
      '家族アルバムアプリ「みてね」にて、画像を扱うAIシステムの高速化とコスト削減を担当。処理速度を最大42.8%改善。',
    descriptionEn:
      'Optimized the image-processing AI pipeline for the FamilyAlbum app — up to 42.8% faster processing with lower infrastructure cost.',
    tags: ['Python', 'PyTorch', 'AWS', 'Kubernetes', 'Docker'],
    url: 'https://mixi.co.jp/',
    blogUrl: null,
    hasDetail: true,
    details: {
      overview:
        'みてね事業本部 Data Engineeringグループにて、Vision-Language Modelによる画像処理システムの高速化とコスト削減を実現。' +
        'データ駆動型アプローチでNew Relic・Grafana分析を活用。',
      responsibilities: [
        'Image Captioning高速化: Vision Encoderベクトル再利用で全体処理時間42.8%短縮（2Bモデル）/28.1%短縮（4Bモデル）。画像処理部分3.2秒→0.001秒（99.97%削減）。CPUでも15.4倍高速（ベクトル再利用時）。Gradioデモアプリで効果を検証',
        'MLパイプラインリファクタリング: 顔抽出・感情推定・頭部姿勢推定の重複処理をPydanticベースに刷新しコード量約130行削減（約50%）、テストコード約40%削減。本番環境で18時間監視しエラー・挙動変化なしを確認',
        'SQS Visibility Timeout最適化: New Relicで30日間のデータ収集・統計分析（平均0.35秒、99%ile 1秒以下、最大60秒、エラー率0.01%未満）。900秒→65秒（92.8%短縮）でエラー復旧15分→1分強。段階的短縮計画（65→40→25→20秒）を策定しTerraformでIaC管理',
        'S3アップロード並列化: ThreadPoolExecutorで高解像度画像（6.5MB）0.789→0.547秒（30.7%短縮）、通常サイズ（331KB）0.305→0.267秒（12.5%短縮）。グリーティングカードで約1万円/回、将来的にステッカーで約10万円/回の削減見込み',
      ],
      achievements:
        '処理速度42.8%向上（2B）/28.1%（4B）、コスト1万円/回削減（将来10万円/回見込み）、エラー復旧時間92.8%短縮、コード130行削減、本番18h監視で問題なし',
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
    short: true,
    company: 'エン・ジャパン株式会社',
    role: 'フルスタックエンジニア',
    period: '2025年9月（4日間）',
    description:
      '求人サイトを題材にした4日間のWebアプリ開発プログラム。画面からサーバーまで一通り実装。',
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
    secondary: true,
    company: '株式会社エクサウィザーズ',
    role: '機械学習エンジニア',
    period: '2025年8月〜9月（1.5ヶ月）',
    description:
      'カメラで周囲を「見て」状況を判断し、ロボットを動かす自律型AIシステムを開発。インターネット接続なしで完結するデモまで作り上げた。',
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
    id: 'gmo-media',
    secondary: true,
    company: 'GMOメディア株式会社',
    role: '機械学習エンジニア',
    period: '2025年7月〜8月（1ヶ月）',
    description:
      'ポイントサイトの売上を予測するAIモデルを構築し、精度96.1%を達成。経理業務の効率化に貢献。',
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
    id: 'loglass',
    short: true,
    company: '株式会社ログラス',
    role: 'ソフトウェアエンジニア',
    period: '2025年8月（5日間）',
    description:
      '経営管理クラウド企業にて、決算書類（損益計算書・貸借対照表）を自動生成するシステムを5日間で設計・実装。',
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
    short: true,
    company: 'ゴールドマン・サックス証券株式会社',
    role: 'エンジニアリング部門 ワークショップ',
    period: '2025年8月（1日）',
    description:
      '金融×テクノロジーの1日ワークショップ。模擬の為替取引システムを設計・実装し発表。',
    tags: ['Finance', 'Algorithm', 'Trading System'],
    url: 'https://www.goldmansachs.com/japan/',
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
    id: 'standby',
    short: true,
    company: 'スタンバイ株式会社',
    role: 'MLエンジニア',
    period: '2025年7月（4日間）',
    description:
      '求人検索サービスの実データを使い、課題の分析からAIによる解決策の実装、CTOへの発表までを4日間で実施。優秀者に選出。',
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
    url: 'https://jp.stanby.com/',
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
    short: true,
    company: '株式会社ジーニー',
    role: 'バックエンドエンジニア',
    period: '2025年7月（1日）',
    description:
      '広告配信システムの高速化に挑戦。処理のボトルネックを特定して改善し、応答速度を大幅に短縮。',
    tags: ['Python', 'MySQL', 'Prometheus', 'Grafana', 'Docker'],
    url: 'https://geniee.co.jp/',
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
    short: true,
    company: '株式会社サイバーエージェント',
    role: 'Architecture Challenge',
    period: '2025年6月（1日）',
    description:
      '大規模Webサービスを支えるクラウド基盤の設計演習に参加。',
    tags: ['AWS', 'ECS Fargate', 'API Gateway', 'Microservices'],
    url: 'https://www.cyberagent.co.jp/',
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
    id: 'rakuten',
    short: true,
    company: '楽天グループ株式会社',
    role: 'アプリケーションエンジニア インターン',
    period: '2023年8月（1週間）',
    description:
      'iOS/Android両対応のスマホアプリのプロトタイプを1週間で開発。',
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
    id: 'shinonome',
    secondary: true,
    company: '株式会社Shinonome',
    role: 'データサイエンティスト',
    period: '2021年4月〜2023年6月（2年3ヶ月）',
    description:
      '日記の文章を自動生成するAIの開発や、銀行系ブロックチェーンプロジェクトのテスト設計を担当。後輩エンジニアの育成も経験。',
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
    id: 'matsuo-institute-dx',
    secondary: true,
    company: '株式会社松尾研究所',
    role: '戦略コンサルティング補佐（大手食品企業DX推進）',
    period: '2023年1月〜5月（5ヶ月）',
    description:
      '大手食品企業のデジタル変革プロジェクトを戦略面から支援。市場規模の試算や競合調査、経営陣向け資料の作成を担当。',
    tags: ['Strategy', 'Market Research', 'DX'],
    url: 'https://matsuo-institute.com/',
    blogUrl: null,
    hasDetail: true,
    details: {
      overview:
        '株式会社松尾研究所にて、大手食品企業のDX推進プロジェクトにおける戦略コンサルティング補佐として従事。' +
        '市場分析からリソース配分の意思決定支援まで、経営陣に近い立場で戦略立案を支援。',
      responsibilities: [
        '市場規模推定（フェルミ推定）による市場拡大・影響予測、リソース配分の意思決定支援',
        '市場調査・競合リサーチに基づく戦略立案の基礎データ提供',
        '経営陣向け資料作成、週1回の経営陣ミーティング出席',
      ],
      achievements:
        '数千万円規模のDX案件での実務経験、経営陣との直接議論を通じた戦略視点の習得',
      techStack: [
        'Market Research',
        'Strategy Consulting',
      ],
    },
  },
  {
    id: 'infratop',
    secondary: true,
    company: '株式会社インフラトップ',
    role: 'プログラミングスクール メンター',
    period: '2022年6月〜2023年1月（8ヶ月）',
    description:
      'プログラミングスクール「DMM WebCamp」で受講生の学習をサポート。質問対応とコードレビューを担当。',
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
