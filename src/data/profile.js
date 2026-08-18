const profile = {
  name: '山田 悠人',
  nameEn: 'Yuto Yamada',
  title: 'AI Engineer',
  roles: ['AI / ML Engineer', 'Research Engineer', 'Applied Scientist'],
  affiliation: '東京理科大学大学院 創域理工学研究科 電気電子情報工学専攻 M2',
  career: '2027年 外資系コンサルティングファーム AIアーキテクト職 入社予定',
  // Hero 直下に出す1行。「何が任せられる人か」を最初の3秒で伝える
  tagline:
    '視覚基盤モデルと LLM の適応・評価を、論文レベルの検証と本番システムの両方で回すエンジニア。',
  bio: [
    '視覚基盤モデル（DINOv2 / DINOv3）と LLM の「適応」と「信頼できる評価」を研究テーマにしている。少数ラベル下での LoRA 適応、選択的分類のコスト最適化、空間リークを排した評価プロトコル設計が中心。',
    '同時に、研究で使う手法をそのまま本番に載せる仕事もしている。ロボット向けリアルタイム音声合成（VITS2、トヨタイムズ掲載）、契約書分類 LLM の本番マイクロサービス化（+14pt）、GUI 自律操作エージェントへの RAG 知識注入（空回り 74%→7%）など。',
    '学会発表4件、国際会議3件へ投稿準備中（WACV 2027 / IWAIT 2027 / IGARSS 2027）。実務・インターンは17社。',
  ],
  bioEn:
    'AI engineer working on adaptation and trustworthy evaluation of vision foundation models and LLMs — low-rank adaptation under label scarcity, cost-sensitive selective classification, and leak-free evaluation protocols. I ship the same methods into production: real-time TTS for robots (featured on Toyota Times), an LLM contract classifier deployed as a production microservice (+14pt), and RAG knowledge injection for autonomous GUI agents (74%→7% wasted exploration). 4 domestic conference talks; 3 international submissions in preparation (WACV 2027 / IWAIT 2027 / IGARSS 2027).',
  stats: [
    { label: '学会発表', value: '4件' },
    { label: '国際会議 投稿準備中', value: '3件' },
    { label: '実務・インターン', value: '17社' },
  ],
  // About セクション右カラム。Hero の件数（stats）とは重複させず、
  // 「何をどれだけ動かしたか」が分かる数字だけを置く
  highlights: [
    {
      value: '3件',
      label: '公開ベンチマークで SoTA 更新',
      note: 'PHI-Net / AIDERv2 / MEDIC',
    },
    {
      value: '0.46 → 0.77',
      label: '被災建物6クラス分類 Macro F1',
      note: 'ResNet-50 → DINOv2 + LoRA（1,040枚）',
    },
    {
      value: '+36.6%',
      label: 'コスト考慮型選択的分類の相対改善',
      note: '逐次観測取得（SCAA）／3-seed 全て有意',
    },
    {
      value: '74% → 7%',
      label: 'GUIエージェントの探索空回り率',
      note: '55本の before/after A/B 検証',
    },
    {
      value: '+14pt',
      label: '契約書分類の精度改善',
      note: '既存MLモデル → LLM、本番マイクロサービス化',
    },
    {
      value: '0.2秒/枚',
      label: '鉄パイプ自動計数の推論速度',
      note: '既存8秒/枚・束単位成功率ほぼ0% → 96.6%',
    },
  ],
  // 採用担当が最初に見る「専門領域」。Hero / About のチップ表示に使う
  focusAreas: [
    'Vision Foundation Models (DINOv2 / DINOv3)',
    'Parameter-Efficient Fine-Tuning (LoRA)',
    'LLM Post-Training (GRPO / SFT)',
    'Selective Classification & Calibration',
    'LLM Agents & RAG',
    'Vision-Language-Action (VLA)',
  ],
  social: [
    { platform: 'github', url: 'https://github.com/yamadan96' },
    { platform: 'qiita', url: 'https://qiita.com/yamadan96' },
    { platform: 'x', url: 'https://x.com/dev2rich' },
    { platform: 'linkedin', url: 'https://www.linkedin.com/in/悠人-山田-156149304' },
    { platform: 'note', url: 'https://note.com/yuto_yamada398' },
    { platform: 'zenn', url: 'https://zenn.dev/yuto0' },
    { platform: 'wantedly', url: 'https://www.wantedly.com/id/yutoyamada0' },
  ],
  email: 'yuto.yamada0101@gmail.com',
  achievements: [
    {
      title: '国際会議 3件へ投稿準備中',
      icon: '🌏',
      description:
        'WACV 2027（Round 2・コスト考慮型選択的分類）、IWAIT 2027（韓国ソウル・アノテーション優先順位付け）、IGARSS 2027 / IEEE GRSL（GPS統合戦略の監査）。いずれも実験・検証は完了済み。',
    },
    {
      title: '学会発表 4件',
      icon: '📄',
      description:
        'FIT2025（口頭）、IEICE2026 総合大会（口頭）、映像情報メディア学会2026年年次大会（口頭）、第1回 知覚AIフォーラム（ポスター）。',
      links: [
        {
          label: 'FIT2025',
          url: 'https://www.ieice.org/publications/conferences/summary.php?id=FIT0000017580&expandable=2&ConfCd=F&session_num=7n&lecture_number=I-029&year=2025&conf_type=F',
        },
        { label: 'IEICE2026', url: 'https://pub.confit.atlas.jp/ja/event/general2026/presentation/D-12-80' },
        { label: '知覚AIフォーラム', url: 'https://www.rs.tus.ac.jp/perceptual-ai/#workshop-1' },
      ],
    },
    {
      title: '公開ベンチマーク3件でSoTA更新',
      icon: '📈',
      description:
        'PHI-Net 79.87%（先行報告74.50%）、AIDERv2 99.53%（同96.60%）、MEDIC 83.86% W-F1（同80.40%）。視覚基盤モデルの適応戦略の比較検証による。',
    },
    {
      title: 'DECC 2025 ファイナリスト',
      icon: '🏆',
      description:
        'DISCOプログラミングコンテスト本戦出場。実機の半導体製造装置をプログラムで制御し、動作の正確さと効率性を競う競技。',
      links: [
        { label: 'マイナビ記事', url: 'https://news.mynavi.jp/techplus/kikaku/disco_decc-2/' },
        { label: '本戦参加レポート', url: 'https://qiita.com/yamadan96/items/fadd4ba4749fff97899f' },
      ],
    },
    {
      title: '松尾研 LLMATCHプログラム',
      icon: '🎓',
      description: '東京大学 松尾・岩澤研究室 選抜制LLMプログラム参加。マルチモーダルRAG／意匠特許画像検索の研究を担当。',
    },
    {
      title: 'トヨタイムズ掲載',
      icon: '📺',
      description: 'Airionでの次世代ロボット向けリアルタイム音声合成AI開発の成果がトヨタイムズニュースに掲載。',
      link: 'https://prtimes.jp/main/html/rd/p/000000004.000118893.html',
    },
    {
      title: 'G検定 2026#4 合格',
      icon: '✅',
      description:
        '日本ディープラーニング協会（JDLA）Deep Learning for GENERAL 2026#4。受験者9,241名中の合格者7,677名。',
    },
  ],
};

export default profile;
