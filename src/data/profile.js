// トップページの Hero / About / Contact / Achievements で使う人物データ。
//
// 文章のルール:
//   - Hero は紹介文（intro）3行だけ。1行1事実、説明は bio に分ける
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

  // Hero: 紹介文3行（所属 / 今の仕事 / 来年から）。1行1事実、略語は使わない。件数は書かない
  intro: [
    '東京理科大学大学院 修士2年（2027年3月修了見込み）',
    '松尾研究所・Airion で AI エンジニアとして勤務中',
    '2027年4月から 外資系コンサルティングファームの AI アーキテクト',
  ],

  // About: 研究と実務の2段落。専門用語は使わず「何をしている人か」だけを書く
  bio: [
    '研究：災害の写真から建物の壊れ具合を AI で判定する。少ないデータでも精度を出す方法を研究し、学会で4件発表。',
    '実務：研究で使う AI をそのまま製品に組み込む。ロボットの音声合成、契約書の自動分類、業務システムを操作する AI など。',
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
      title: 'IWAIT 2027 に投稿（査読中）',
      icon: '🌏',
      description:
        'Building Damage Classification Using Post-Disaster Images with Limited Expert Annotations（韓国・ソウル、2027年1月）。専門家ラベルが一部しかない状況で、位置事前分布を災害種別の軸に限定して損傷度を補完する手法。',
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
