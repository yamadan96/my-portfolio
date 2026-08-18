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
        'RAG知識注入パイプラインの設計と多段の検索品質改善（keyword recall 0.57→0.86、汎用化後は7/7全合格）、' +
        '探索エージェントの挙動改善（メニュー探索の空回り 74%→7%）、55本規模のbefore/after検証まで、' +
        '設計・実装・定量評価を一貫して担当。',
      responsibilities: [
        '【RAG知識注入パイプラインの再設計】1トラック一律配信方式から、3つの消費先（業務フロー判断／項目割当判断／実行時の候補選択）ごとに専用の検索クエリ生成・Vector Store検索・要約を並列実行するsurface分割方式へ再設計。1トラックの失敗が他へ波及しないfail-closed設計とし、用途別のfocus指示によってドメイン固有語をハードコードせずにクエリを生成できる構造とした',
        '【検索品質の多段改善と定量評価】ベースライン keyword recall 0.5714（7ケース中4件合格）→ surface分割で0.7143 → 検索・合成プロンプト改善で0.8571（6/7合格）へ改善。各段階で3回実行による安定性確認、surface別のhit/txt突き合わせによる失敗段階の切り分け（検索段階か合成段階か）、証拠ログの原文抜粋による根拠提示まで実施し、要件カバレッジ指標とsurface別recallを新設',
        '【汎用化と全ケース合格の達成】ドメイン固有の語彙をアプリ別プロファイルへ切り出して本体を汎用化し、検索品質7/7全合格を達成。入力漏れを機械的に検知するチェックを追加して特定フィールドのスキップ再発を防止。6ラウンドのAIコードレビューで指摘8件を全件対応しApproveを取得',
        '【探索エージェントへのRAG適用とA/B検証】初期探索フェーズへの知識注入基盤を実装し、3種の業務シナリオ×RAG有無の計7本を実行条件固定で実測。RAG適用時に所要時間が約半分に短縮されるケースを確認し、完走しなかったケースについては同名データの判別不能が原因であることを特定して3案の対策を提案',
        '【挙動改善6件と55本規模のbefore/after検証】メニュー項目と同名の要素（バナー・パンくず等）との混同対策、値の生存判定ロジックの修正（出現回数×フィールド数の比較方式へ変更）など6件を実装。改修前25本・改修後30本の計55本でA/B検証を行い、メニュー探索の空回りを74%→7%に削減したことを定量実証。8タスク中7タスクで全試行が最短2手で到達',
        '【探索記録の自動整理と無駄ステップの定量化】LLMを使わない決定的処理で探索記録から無駄なステップを自動除去する後処理を実装。253イベント中128件（51%）が無駄であり、うち29件（11%）が後処理で除去可能と定量化。グラフ構築の前処理として論理エッジを97→80（-18%）に削減',
        '【検証インフラとコードレビュー】チャンク分割実行・集計・before/after比較レンダリングからなる検証自動化スクリプト群を構築し、大量検証の再現性を確保。PRレビューでは8件を指摘し7件の修正とテスト4件の追加に反映、330件のテストをグリーンに維持',
      ],
      achievements:
        'RAG知識注入により検索品質を keyword recall 0.57→0.86 に改善し、汎用化後は7ケース全合格を達成。' +
        '探索エージェントのメニュー空回り率を55本のA/B検証で74%→7%に削減し、RAG適用時には所要時間が約半分に短縮されることを実証',
      techStack: [
        'Python',
        'OpenAI API',
        'LLM Agents',
        'RAG (Vector Store / File Search)',
        'Prompt Engineering',
        'Playwright',
        'GitHub Actions',
        'pytest',
        'uv',
      ],
    },
  },
  {
    id: 'matsuo-institute-grpo',
    company: '株式会社松尾研究所',
    role: 'Research Engineer（LLM性格制御・強化学習 研究開発）',
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
        '先行研究サーベイによる方針策定から、報酬関数の設計比較・報酬ハック分析・モデル評価まで、学習パイプラインの検証を幅広く担当。',
      responsibilities: [
        '先行研究サーベイ（論文10本）: ペルソナ・性格シミュレーション（BIG5-CHAT / PersonaLLM / CharacterBot）、RL-Zero系手法（DeepSeek-R1 / OLMo 3 / DeepSeekMath）、構造化報酬設計（RewardAnything / Rubrics-as-Rewards）の3領域を調査。個別サマリー・統合サマリー・実装ロードマップを作成し、前フェーズの報酬ハック（Judge LLMのアシスタント性バイアス）への対策として原則ベース報酬＋ルーブリック型報酬の導入方針を策定',
        '報酬関数の設計比較: Listwise／Pointwise／Listwise単一ファセットの3方式を比較検証し、単一ファセット方式を採用。Pointwiseは学習が不安定、Listwiseで複数ファセットを同時提示するとJudge LLMが表層キーワードに依存する問題を特定。1プロンプトにつき8候補を生成してJudge LLMへ一括提示する順位ベースの連続値報酬を設計し、性格ファセット報酬と応答品質報酬を別プロンプトへ分離して重み比率を制御可能にした',
        '3層の評価パイプライン構築: IPIP-NEO 120問によるBig Five 30ファセットのリッカート測定（性格獲得度）、状況設定付き4択問題による性格特性の発現率測定（行動レベルの一貫性）、JMMLUによる学術知識の正答率測定（性格付与が一般能力を劣化させるalignment taxの検出）を組み合わせ、性格獲得と能力維持のトレードオフを定量評価',
        '報酬ハック（Reward Hacking）の類型化と対策特定: 「一貫性」「厳密に遵守」等の定型句の反復、応答冒頭への性格宣言の挿入、攻撃的表現への収束という3類型を同定し、条件別に発生頻度を定量化。ファセット数よりも性格報酬と応答品質報酬の重み比率が支配的因子であることを突き止め、安全なモデル選定基準の策定に反映',
        'GRPO学習の実行と実験管理: ベースモデルQwen3-8Bに対し、4bit量子化＋LoRA（rank 64 / alpha 128 / 全線形層）によるGRPO学習をNVIDIA H200環境上で実行。訓練6,880件・評価1,732件、実効バッチサイズ16、1エポックあたり約15時間。評価粒度・プロンプト形式を変えた複数条件をWandBで実験管理し、条件間の差分要因を分析',
      ],
      achievements:
        '単一ファセット方式による性格特性の獲得に成功。報酬設計の感度分析で重み比率が支配因子であることを特定し、報酬ハックの類型化とあわせてチームの最終モデル選定基準の策定に貢献',
      techStack: [
        'Python',
        'PyTorch',
        'Qwen3-8B',
        'Unsloth',
        'GRPO',
        'LoRA',
        'vLLM',
        'WandB',
        'TRL',
        'HuggingFace',
        'IPIP-NEO',
        'JMMLU',
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
      '音声合成・画像認識・文書処理・デスクトップGUI自動化など、10件超のAI開発プロジェクトに従事。ロボット向け音声合成の成果はトヨタイムズに掲載。',
    descriptionEn:
      'Built AI systems across voice synthesis (featured on Toyota Times), computer vision, document automation, and desktop GUI agents.',
    tags: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'VITS2', 'LLM Agent'],
    url: 'https://airion.co.jp/',
    mediaLinks: [
      { label: 'トヨタイムズ YouTube', url: 'https://www.youtube.com/watch?v=xsmQ9Slnvds' },
      { label: '音声合成 PR TIMES', url: 'https://prtimes.jp/main/html/rd/p/000000004.000118893.html' },
    ],
    hasDetail: true,
    details: {
      overview:
        'AI開発事業部に所属し、音声合成・画像処理・物体検出・最適化・3Dデータ解析・業務自動化などの領域で多数のプロジェクトに従事。' +
        'モデル選定・データ設計・学習・評価・サービング・顧客報告までを一貫して担当。',
      responsibilities: [
        '【音声合成 / モデル選定】トヨタのコミュニケーションロボット向けリアルタイム音声合成。MeloTTS・StyleTTS2・GPT-SoVITS・Fish Speech・VOICEVOXなど10モデルを比較し、日本語のみ約800時間の事前学習・アクセントの手動制御・WavLMDiscriminatorによる自然性向上を理由にStyle-Bert-VITS2 JP-Extraを選定。AGPL v3のライセンス影響範囲を精査し、ソース改変を避けてAPI経由で利用する構成へ設計変更した',
        '【音声合成 / データ設計】読み上げ40分＋会話20分の収録データに対し、Aivisとpy-webrtcvadでスライス・文字起こしを行い、他話者の混入・雑音・笑い声・言い間違えを除外する基準を定めてアノテーション。会話データは407発話中251発話（13分27秒）を採用。ピンマイク収録によるデータ品質改善も提案した',
        '【音声合成 / 学習と推論】Azure GPUサーバー上でbatch_size=2・エポック制御による学習パイプラインを構築し、TensorBoardで損失を可視化（読み上げ40分のデータで約3.5時間）。推論はFastAPIで2話者モデルを別ポートに並列起動し、実測レイテンシは12文字0.43秒〜99文字0.91秒（最大1.09秒）と文字数にほぼ線形。漢字入力とひらがな入力を10ペアで比較し、漢字入力の方が生成時間が短い傾向を確認。成果はトヨタイムズニュース・PR TIMESに掲載',
        '【音声合成 / 失敗と知見】会話データ単独で学習したモデルは雑音が多く実用に耐えなかったため、読み上げデータとの併用に切り替え。改行のない長文ではメモリ使用量が増大して停止するため実用上限を特定。学習ステップ数を指定しても2,000で頭打ちになる問題を発見し、エポック数による制御へ変更した',
        '【鉄パイプ自動計数AI】テックリードとしてPoCを担当。既存システムは1本単位で約9割の精度ながら束単位の成功率はほぼ0%、処理に8秒/枚を要していた。提供画像341枚に公開データ3,809枚を加えた計5,173枚で学習し、YOLOv8-segはアノテーション負荷、CenterNet/FCOSは初期精度の不安定さを理由に不採用としてYOLOv8を選定。公開データでの事前学習→浅層フリーズ再学習→全層再学習の3段階構成とコントラスト・ガウシアンノイズによる拡張を適用し、Precision 0.9996／Recall 0.9994／mAP50 0.9949、束単位成功率は200〜300本で96.6%、推論0.2秒/枚を達成。TTAは効果がなく、切り出し画像による小物体検出の強化が成功率を大きく押し上げた',
        '【製造業向けラダー図LLMシステム（設備メーカー）】ラダー図とIL/ST変換コードを対象に、自動要約・自然言語検索・設備情報抽出を行うRAGシステムをコンサルティング案件として設計。現場方言を含む表現への対応、およびオンプレ／クラウド／APIの実行環境選定を担当。評価は専用ベンチマークを策定し、LLM-as-a-Judgeを含む多面的評価として設計した',
        '【GX Works 3 デスクトップGUI自動化エージェント】DOMを持たないWindowsネイティブアプリを対象に、Claude Codeによる座標ベースGUI操作でエージェントを構築。①特殊命令123個を9バッチに分割し、AIがCSV生成→PDF照合→差分検出時にコードを自動修正するループで89個を完了（残りは通信系・ハード依存のため対象外と判定）、照合結果からPR本文を自動生成、②ラダー解読ツールの表示表記をGX Worksへ統一し1〜8ページすべて自動照合で合格、③Windowsタスクスケジューラで毎晩GUIを自動操作しCSVエクスポート→新バージョン自動登録、の3ユースケースを実装',
        '【その他のPoC】建築パース画像の補正自動化（作業時間70%短縮見込み）、内視鏡画像の画質パラメータ最適化、3D形状解析による工業部品の穴検出・異常検出、PDF解析とOCRによる仕様書作成の自動化を担当。いずれもPoC段階で、定量評価は未完了',
      ],
      achievements:
        '鉄パイプ計数で既存システムの束単位成功率ほぼ0%・8秒/枚に対し、200〜300本で96.6%・0.2秒/枚を達成（mAP50 0.9949）。' +
        'ロボット向け音声合成では10モデルの比較選定から実測0.43〜0.91秒の推論までを担当し、成果がトヨタイムズ・PR TIMESに掲載。' +
        'GX Works 3のGUI自動化エージェントでは特殊命令123個中89個の自動照合・自動修正を実現し、夜間バッチによるバージョン登録まで無人化',
      techStack: [
        'Python',
        'PyTorch',
        'Style-Bert-VITS2',
        'YOLOv8',
        'OpenCV',
        'FastAPI',
        'Azure (GPU VM)',
        'TensorBoard',
        'Roboflow / CVAT',
        'LoRA',
        'Optuna',
        'Pandas / NumPy',
        'RAG / LLM-as-a-Judge',
        'Claude Code (GUI Agent)',
        'pyautogui',
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
        '人事・会計系業務システム企業のDX統括部にて、2年10ヶ月にわたりAI開発全般を担当。' +
        'Azure OpenAI / AI Search / Speech to Text / Bot Service を軸に、' +
        'RAG検索・感情分析・音声認識・チャットボット・退職予測など10件以上のAIプロトタイプ開発を主導。' +
        '企画・技術選定からPoC開発・社内デモ展開まで一貫して遂行し、社内AI活用の基盤を構築した。',
      responsibilities: [
        '【RAG型社内ドキュメント検索】Azure Blob Storage上の社内文書をAzure AI Searchでインデックス化し、LLMと組み合わせたRAG検索システムを構築。LangChain + FAISSによるベクトル検索パイプラインも別途Azure VM上に実装し、社内デモ環境への導入まで完了',
        '【メール感情分析・誤送信検出】Azure OpenAI Service APIでメール本文の感情分析を行い、クレームリスクの高い誤送信を自動検出するシステムを構築。業務リスク管理へのAI適用事例として社内展開',
        '【音声認識サービスの比較検証】Azure Speech to Text・Google Cloud STT・OpenAI Whisperの3サービスを、男性単数朗読・男性複数会話・女性単数朗読・女性会話調・男女混合の5種類計60分のサンプル音声で比較。MeCabによる形態素解析を用いてWER（単語誤り率）を算出し、プラットフォーム選定の根拠資料を作成',
        '【話者分離フロントエンド】Azure Speech to TextのSpeaker Diarizationを活用し、mp3→wav変換・ステレオ→モノラル変換を経てAPIへ送信、話者ごとに発言を分離表示するGradioフロントエンドを構築。話者名を任意に変更できる機能も実装',
        '【生成AIチャットボット】Azure AI Bot Service + Azure OpenAIによるチャットボットをNode.jsで構築し、Bot Framework Emulatorで動作検証',
        '【退職予測モデル】勤怠・評価等の社内人材データから離職リスクスコアを算出するモデルをPython + scikit-learnで構築',
        '【文章自動校正】LSTMによる異常箇所検知をベースとした校正ツールの調査・プロトタイプ開発',
        '【ソースコードレビュー自動化】Git上のソースコードに対し、Word形式の社内開発規約に基づく自動レビュー処理を実装',
        '【業務自動化】Webスクレイピングによる勤務実績データの自動取得・CSV出力・スクリーンショット保存を自動化。レシート読取OCRの画像前処理・精度チューニングも担当',
        '【Webアプリ開発】Django × React × Next.js（Redux Toolkit / Tailwind CSS）によるタスク管理アプリを開発',
      ],
      achievements:
        'RAG検索・感情分析・音声認識比較検証・チャットボット等、10件以上のAIプロトタイプを開発し社内デモ環境へ展開。Azureクラウドサービスを横断的に活用したAI開発とPoCの型を確立',
      techStack: [
        'Python',
        'Java',
        'SQL',
        'Node.js',
        'Django',
        'React',
        'Next.js',
        'Azure OpenAI',
        'Azure AI Search',
        'Azure Blob Storage',
        'Azure Speech to Text',
        'Azure AI Bot Service',
        'LangChain',
        'FAISS',
        'Gradio',
        'scikit-learn',
        'MeCab',
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
    blogUrl: 'https://qiita.com/yamadan96/items/8926e19382896bc72bbf',
    hasDetail: true,
    details: {
      overview:
        'AI法務プラットフォームにおける契約書自動分類機能のLLM化プロジェクトに従事。' +
        '日本語58カテゴリ・英語26カテゴリの契約書をGemini 2.5 Flash（Vertex AI）で自動分類するシステムを研究開発し、' +
        '従来の機械学習モデルを大幅に上回る精度を達成。' +
        'PoCでの実験・検証から本番マイクロサービスの実装まで一貫して担当し、5PRマージ・約6,160行・60件超のテストを納品。',
      responsibilities: [
        '【プロンプトエンジニアリング】システムプロンプト・カテゴリカタログ・Few-shot例を体系的に設計し、4段階のアブレーション実験で反復最適化。V0（Acc 0.689）→ V1（0.828）→ V2（0.869）→ V3（0.901）と累積+21.2ptの精度向上を達成',
        '【Few-shot学習戦略】例題をAnchor（出力フォーマットの定着）・Boundary（境界判別）・Error-targeted（頻出誤分類の是正）の3役割で戦略的に設計し、精度向上とトークンコスト増のトレードオフを最適化',
        '【言語別入力戦略の解明】英語契約書に日本語の説明文を使うとAccuracyが0.575まで低下する問題を発見。アブレーションにより英語カテゴリ名の導入が最大の精度寄与（+0.022）であることを特定し、全文入力は英語で+0.022・日本語で-0.005と言語依存性を定量化',
        '【非契約文書の検出】報告書・社内メモ等の非契約文書を識別する機能を設計・評価。V0では対象20件が全て誤分類（F1=0.000）だったものをFew-shot設計で解消',
        '【本番マイクロサービス実装】PoCコードを型安全なサービスとして再設計（FastAPI POST /classify）。Pydanticによるデータモデル、LLM応答のJSONパースとリトライ、バッチ処理（Parquet→API→JSONL）、コスト追跡を実装し、pytest 60件超でCI/CDを整備',
        '【ML vs LLM の比較評価】同一評価データで従来MLモデル（XGBoost + vaporettoトークナイザ）とAccuracy・F1・Precision・Recall・混同行列を多角的に比較し、導入判断の根拠を提供',
      ],
      achievements:
        '日本語契約書で従来ML比+14.1pt（Acc 0.760→0.901）、英語契約書で+5.0pt（Acc 0.843→0.893）の精度改善を達成。4段階のプロンプト反復で累積+21.2ptを実現し、5PRマージ・57件のコードレビュー対応を経てプロダクション品質のコードを納品',
      techStack: [
        'Python',
        'Gemini 2.5 Flash',
        'Google Cloud (Vertex AI)',
        'FastAPI',
        'Pydantic',
        'XGBoost',
        'Bazel',
        'pytest',
        'ruff',
        'mypy',
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
    blogUrl: 'https://qiita.com/yamadan96/items/9e29293f1bc6d03c1c46',
    hasDetail: true,
    details: {
      overview:
        'みてね事業本部 Data Engineeringグループにて、Vision-Language Model（Qwen3-VL）による画像処理パイプラインの高速化・コスト削減・コード品質改善を担当。' +
        'New Relic・Grafanaで収集した実データに基づいて最適化施策を設計し、共通モジュールを先行リリースするステージドロールアウトで本番投入した。',
      responsibilities: [
        '【Image Captioning高速化】Vision Encoderの出力ベクトルをキャッシュして複数プロンプト間で再利用し、全体処理時間を42.8%短縮（2Bモデル 9.53s→5.45s）／28.1%短縮（4Bモデル 17.43s→12.54s）。画像処理部分は3.2秒→0.001秒（99.97%削減）、追加VRAMは約19MBで品質劣化ゼロを確認。GPU・CPU双方で検証しGradioデモで効果を可視化',
        '【MLパイプラインのリファクタリング】顔抽出・感情推定・頭部姿勢推定に散在した重複処理を、Pydantic Field制約による宣言的バリデーションへ刷新（23行→4行、83%削減）。重複フィルタリングロジックの統合とあわせて約130行（約50%）を削減し、テストコードもparametrize化で196行→97行に圧縮。本番環境で18時間監視し、エラー・挙動変化がないことを確認',
        '【SQS Visibility Timeout最適化】New Relicで30日間のデータを収集・統計分析（p50=0.35秒、p99≦1秒、p99.9=7.625秒、最大60秒、エラー率0.01%未満）。「最大処理時間60秒＋安全マージン5秒」という算出根拠を明示し、900秒→65秒（92.8%短縮）へ変更。エラー復旧時間を15分から1分強に短縮し、段階的な追加短縮計画（65→40→25→20秒）をTerraformでIaC管理',
        '【S3アップロード並列化】ThreadPoolExecutor（max_workers=4）を導入し、スレッド安全性確保のためboto3クライアントをスレッド別に生成。高解像度画像（6.5MB）で0.789→0.547秒（30.7%短縮）、通常サイズ（331KB）で0.305→0.267秒（12.5%短縮）を達成',
      ],
      achievements:
        '推論処理を42.8%高速化（追加VRAM約19MB・品質劣化ゼロ）、エラー復旧時間を92.8%短縮、コード約130行を削減。共通モジュール先行リリースのステージドロールアウトで本番投入し、18時間の監視で無影響を実証',
      techStack: [
        'Python',
        'PyTorch',
        'Transformers',
        'Qwen3-VL',
        'AWS (SQS / S3 / ECS)',
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
      'カメラで周囲を「見て」状況を判断し、サーボを動かす自律型AIエージェントを単独で設計・開発。単一パスの推論では危険物を見落とす問題を、推論を3段階に分けることで解消した。',
    tags: ['Python', 'VLM', 'Semantic Kernel', 'Arduino', 'AI Agent'],
    url: 'https://exawizards.com/',
    blogUrl: null,
    hasDetail: true,
    details: {
      overview:
        'オフィス環境を対象としたAIエージェント開発プロジェクトに単独で従事。' +
        'Semantic Kernelのプラグイン構成で、深度カメラ・サーボ制御・VLM推論を疎結合に統合し、' +
        'カメラ映像から環境を認識して「見て→判断して→動く」プロセスを実現した。',
      responsibilities: [
        '【技術選定】MCPとSemantic Kernelを比較し、MCPは対応ツールと実装例が少なく短期PoCでは環境構築コストが見合わないと判断してSemantic Kernelを採用。Device / VLM / Hazard Detection の3プラグインに責務を分割し、各モジュールを差し替え可能な構造とした',
        '【推論基盤の選定】当初はローカルVLMでの実行を前提に検証を進めたが、オフィス利用というスコープではAPI経由（GPT-4o-mini）の方が精度と開発速度で優位と判断して最終構成を切り替え。機密データを扱う将来フェーズに向けては、プラグイン境界を保ったままローカルモデルへ差し替えられる構造にした',
        '【失敗からの改善】単一パス推論では目立つ物体（ボトル・ハサミ）のみを検出して停止し、他の危険物を見落とす問題が発生。列挙→計画→評価の3段階推論に分割することで検出対象を6種類以上へ拡大し、危険理由・優先度・即時アクションまで出力できるようにした。Inner monologue方式も検討したが、出力の粒度が安定しないため不採用とした',
        '【ハードウェア統合】深度カメラ（Intel RealSense）とサーボモーター（DS3225MG）をArduino経由で制御し、VLM（GPT-4o-mini、API経由）の解析結果に応じてPan/Tiltを動かすリアルタイム制御ループを実装',
        '【今後の方向性の提案】機密データへの対応を見据えたローカルモデル化、応答遅延を抑える分散処理、ウェアラブルカメラ・移動ロボットとの統合を軸に、次フェーズへの発展方針を整理して提案した',
      ],
      achievements:
        '3段階推論への分割により検出対象を6種類以上へ拡大し、見落としの削減と判断根拠の一貫性向上を確認。設計・実装・検証・報告までを単独で完遂し、フィジカルAI領域への発展方針を提案',
      techStack: [
        'Python',
        'Vision-Language Model',
        'Semantic Kernel',
        'Intel RealSense',
        'Arduino',
        'Computer Vision',
        'Edge Inference',
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
        'AIデータ推進チームにて、ポイントサイトにおけるアフィリエイト承認/否認予測・承認月予測モデルを構築。' +
        'BigQueryによる大規模データ抽出から特徴量エンジニアリング、LightGBMアンサンブル学習、信頼度スコアによる3段階モデル切替、' +
        'BigQuery→スプレッドシートへの週次自動反映パイプラインまで一貫して設計・実装し、最終日の成果発表会で業務導入を提案した。',
      responsibilities: [
        '【承認/否認予測モデル構築】LightGBMのアンサンブル学習で精度96.1%・AUC 0.965・F1 0.978を達成。データリーケージ防止のため承認日等の未来情報を明示的に除外し、申込時点で取得可能な情報のみで予測する設計とした',
        '【特徴量エンジニアリング】時間系（曜日・時間帯・月末月初・季節イベント）、金額系（対数変換）、テキスト系（取引説明文のTF-IDFベクトル化）、カテゴリ系、交互作用系（高額取引×月末タイミング）の5種を設計',
        '【承認時期予測モデル開発】日次予測でMAE 1.3日を達成。高・中・低の3段階信頼度スコアを導入し、信頼度に応じてモデルと補正ロジックを動的に切り替えることで、高信頼度予測では月次正解率99%以上を実現',
        '【データパイプライン構築】BigQueryのスキーマ定義・テーブル生成・重複排除・差分挿入からなる品質保証パイプラインを構築し、週次でスプレッドシートへ自動反映して経理業務の工数を削減',
      ],
      achievements:
        '精度96.1%・AUC 0.965の承認予測モデルを構築。高信頼度予測で月次正解率99%以上を実現し、キャッシュフロー計画の精度向上と経理業務の工数削減に貢献',
      techStack: [
        'Python',
        'LightGBM',
        'scikit-learn',
        'pandas',
        'numpy',
        'BigQuery',
        'GCP',
        'TF-IDF',
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
        'ドメイン駆動設計（DDD）とスクラム開発を実践し、会計システム（損益計算書・貸借対照表の生成）の設計・実装を5日間で担当。' +
        'sudoモデリングによる4種の設計図作成、Entity・Value Object・Aggregateパターンの適用、' +
        'Inception Deck・Working Agreementによるチーム合意形成を経て、2スプリント（2.5日×2）で動作するプロトタイプを完成させた。',
      responsibilities: [
        '【ドメインモデリング】sudoモデリング手法で4種の設計図（システム関連図・ユースケース図・オブジェクト図・ドメインモデル図）を作成。Department・Account（勘定科目）・JournalEntry（借方・貸方構造）のドメインエンティティを設計',
        '【アーキテクチャ設計】レイヤードアーキテクチャ（Domain / Application / Infrastructure）と依存性逆転の原則（DIP）を適用し、Entity・Value Object・Aggregateパターンでモデリングとコードの整合性を維持',
        '【スクラム開発の実践】Inception Deck・Working Agreementでチームの合意形成を行った上で、2スプリント（2.5日×2）を実施（プランニング・デイリースクラム・レビュー・KPTレトロスペクティブ）',
        '【ペア/モブプログラミング】ペアプログラミングとモブプログラミングを実践し、AIコーディング支援も併用して開発効率を向上',
        '【経営陣レビュー】VPoE・CTOへ成果を報告し、事業視点での設計判断についてフィードバックを受領',
      ],
      achievements:
        '5日間で損益計算書・貸借対照表を生成する動作可能なプロトタイプを完成。ドメインモデリングからスクラム実践まで一貫して経験し、保守性と拡張性を両立する設計手法を習得',
      techStack: [
        'Kotlin',
        'Spring Boot',
        'MySQL',
        'Docker',
        'DDD (Entity / Value Object / Aggregate)',
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
        '広告主300〜450社・リクエスト100件・制限時間5秒という評価条件のもとで、' +
        'DSP入札パイプライン（サイズフィルタ→ドメインブロック→カテゴリ制御→特徴量マッチング→最高価格選定）のボトルネックを特定し、複数の最適化施策を実装・検証した。',
      responsibilities: [
        '【N+1問題の解消】ループ内で個別に発行していたDBフェッチを一括取得へ変換し、DBアクセスの計算量をO(n)→O(1)に削減',
        '【TTLキャッシュ導入】頻出データをTTL 300秒のローカルキャッシュに保持し、安定したデータへの繰り返しクエリを排除',
        '【適応型並列処理】広告リストが100件を超える場合に限りThreadPoolExecutorによるスレッド並列化を適用し、データサイズに応じて逐次処理と並列処理を自動で切り替え',
        '【GILの回避】ThreadingHTTPServerからForkingHTTPServer（プリフォーク構成）へ移行し、multiprocessingによる真のCPU並列処理を実現',
        '【メトリクス監視】Prometheusでリクエスト数等のメトリクスを公開し、Grafanaダッシュボードでパフォーマンスを可視化',
      ],
      achievements:
        '実運用を想定した負荷条件（広告主300〜450社・制限時間5秒）で処理時間を大幅に短縮。N+1解消・キャッシュ・適応型並列化・プリフォーク構成の4施策を実装し、計測に基づいて効果を検証',
      techStack: [
        'Python 3.12',
        'MySQL',
        'Prometheus',
        'Grafana',
        'Docker',
        'multiprocessing',
        'ThreadPoolExecutor',
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
        '選考制の対面ワークショップにて、アーティストのファンクラブサイトを複数ホストするマルチテナントプラットフォームのアーキテクチャ設計に取り組む。' +
        'ECS Fargate・API Gateway・Auroraを中心としたスケーラブルなマイクロサービス構成を設計し、社員エンジニアからレビューを受けた。',
      responsibilities: [
        '【高可用性設計】マルチAZ構成・ECS Fargateのオートスケーリング・Auroraの自動フェイルオーバーによる耐障害設計',
        '【マルチテナント分離設計】データ層はテナント別スキーマによる論理分離、アプリケーション層は共有インフラという方針を採用し、ノイジーネイバー問題に対してテナント別のリクエスト制御・リソース制限を設計',
        '【セキュリティ設計】WAF・JWT認証・RBAC・Secrets Managerによる多層防御',
        '【スケーラビリティ設計】CloudFront（CDN）・SQS（非同期処理）・ElastiCache（分散キャッシュ）による負荷分散',
        '【可観測性設計】CloudWatch LogsとX-Rayの分散トレーシングによるマイクロサービス間の可視化',
      ],
      achievements:
        'マルチテナント設計における分離と共通化のバランス、およびノイジーネイバー問題への対策を設計。社員エンジニアのレビューを通じてプラットフォーム視点での構成力と説明力を強化',
      techStack: [
        'AWS',
        'ECS Fargate',
        'API Gateway',
        'Aurora',
        'CloudFront',
        'SQS',
        'ElastiCache',
        'WAF',
        'Secrets Manager',
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
        'データサイエンティストとして、NLPを活用した受託開発プロジェクトおよびブロックチェーン関連プロジェクトに参画。' +
        '大学生・大学院生で構成されたチームの中で、論文調査から実装・テスト・後輩指導まで幅広く担当した。',
      responsibilities: [
        '【日記生成AI（受託開発）】多様性のある文章を生成する日記生成AIの開発に参画。Paraphrase（言い換え）手法に関するNLP論文を調査して最新のアプローチを把握し、NLPライブラリを用いたPython実装と実データでの評価を実施。プロンプト設計による出力品質の改善も担当',
        '【再生可能エネルギー×ブロックチェーン】太陽光発電データに基づくトークン板取引シミュレーションシステムのテストを担当。単体テスト・統合テストのテストケース作成と実行を行い、バグ検出・報告を通じてシステム品質の向上に貢献',
        '【コードレビュー・後輩育成】Python基礎文法のレビュワーとして後輩エンジニアのコードレビューを継続的に実施。コーディング規約への準拠確認に加え、バグ・パフォーマンス問題・セキュリティ上の懸念を早期に指摘し、具体的な改善提案を通じてチーム全体の開発品質を向上',
      ],
      achievements:
        'NLPを活用した受託開発を完遂し納品。ブロックチェーンプロジェクトではテスト設計・実行を通じてシステム品質に貢献し、コードレビューによるチーム全体の品質向上にも寄与',
      techStack: [
        'Python',
        'NLP',
        'Paraphrasing',
        'Prompt Engineering',
        'Blockchain',
        'Unit / Integration Testing',
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
        '株式会社松尾研究所にて、大手食品企業のDX推進プロジェクト（数千万円規模）における戦略コンサルティング補佐として従事。' +
        '役員層や事業企画部門の責任者へのAI・DX提案活動を支援し、市場分析からリソース配分の意思決定支援までを担当した。',
      responsibilities: [
        '【市場規模推定・リソース配分支援】フェルミ推定による市場規模の定量推定を行い、市場拡大シナリオの予測とリソース配分の意思決定を支援',
        '【市場調査・競合分析】市場調査と競合リサーチを実施し、戦略立案に必要な基礎データを整備・提供',
        '【経営陣向け提案活動】週1回の経営陣ミーティングに出席し、役員層・事業企画部門責任者向けの戦略資料を作成。AI・DX導入の提案を技術面から支援',
      ],
      achievements:
        '数千万円規模のDX案件において、市場分析から経営陣への提案までを一貫して経験し、技術と経営の両視点で議論する基礎を習得',
      techStack: [
        'Market Research',
        'Fermi Estimation',
        'Strategy Consulting',
        'DX Strategy',
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
