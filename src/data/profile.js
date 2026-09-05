// トップページの Hero / About / Contact / Achievements で使う人物データ。
//
// 文章のルール:
//   - Hero の見出し（headline）は 15〜25 文字。事実だけを書き、説明は intro / bio に分ける
//   - Hero と About ではモデル名・手法名を出さない（それらは Skills / Research が担当）
//   - 数字は単位と対象が一目で分かるものだけ（学会発表4件・実務17社 など）
const profile = {
  name: '山田 悠人',
  nameEn: 'Yuto Yamada',
  roleLabel: 'AI Engineer / Research Engineer',
  // Hero のタイピング表示で順に出す肩書き
  roles: ['AI Engineer', 'Research Engineer', 'Applied Scientist'],
  affiliation: '東京理科大学大学院 創域理工学研究科 電気電子情報工学専攻 M2',
  career: '2027年4月〜 外資系コンサルティングファーム AIアーキテクト職 入社予定',

  // Hero: 見出し1行 + 紹介文2行（件数は About の stats に置き、ここには書かない）
  headline: '視覚基盤モデルの研究と、LLM システムの本番実装。',
  intro:
    '東京理科大学大学院 M2。松尾研究所と Airion で AI エンジニアとして勤務。' +
    '2027年4月から外資系コンサルティングファームで AI アーキテクト。',

  // About: 研究と実務の2段落
  bio: [
    '視覚基盤モデルと大規模言語モデルを少ないデータで適応させる方法と、その評価設計を研究。災害画像の損傷度分類を題材に学会で4件発表。',
    '実務では研究で使う手法を本番システムに実装。ロボット向け音声合成、契約書分類の LLM 化、業務システムを操作するエージェントへの知識注入など。',
  ],

  // About: 数字3つ。単位と対象が一目で分かるものだけ
  stats: [
    { label: '学会発表', value: '4件' },
    { label: '実務・インターン', value: '17社' },
    { label: '国際会議 投稿準備中', value: '3件' },
  ],

  social: [
    { platform: 'github', label: 'GitHub', handle: 'yamadan96', url: 'https://github.com/yamadan96' },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      handle: 'Yuto Yamada',
      url: 'https://www.linkedin.com/in/悠人-山田-156149304',
    },
    { platform: 'x', label: 'X', handle: '@dev2rich', url: 'https://x.com/dev2rich' },
    { platform: 'qiita', label: 'Qiita', handle: 'yamadan96', url: 'https://qiita.com/yamadan96' },
    { platform: 'zenn', label: 'Zenn', handle: 'yuto0', url: 'https://zenn.dev/yuto0' },
    { platform: 'note', label: 'note', handle: 'yuto_yamada398', url: 'https://note.com/yuto_yamada398' },
    {
      platform: 'wantedly',
      label: 'Wantedly',
      handle: 'yutoyamada0',
      url: 'https://www.wantedly.com/id/yutoyamada0',
    },
  ],
  email: 'yuto.yamada0101@gmail.com',

  // CV ページ（/more）の受賞・表彰セクション
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
