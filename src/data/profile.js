// トップページの Hero / About / Contact / Achievements で使う人物データ。
//
// 文章のルール:
//   - Hero は紹介文（intro）3行だけ。1行1事実、説明は bio に分ける
//   - Hero と About ではモデル名・手法名を出さない（それらは Skills / Research が担当）
//   - 数字は単位と対象が一目で分かるものだけ（学会発表3件・実務17社 など）
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
    '研究：災害の写真から建物の壊れ具合を AI で判定する。少ないデータでも精度を出す方法を研究し、学会で3件発表。',
    '実務：AI を製品や業務システムに組み込む開発を担当。ロボットの音声合成、LLM による契約書の自動分類、画面を見て業務ソフトを自動操作する AI エージェントなど。',
  ],

  social: [
    { platform: 'github', label: 'GitHub', handle: 'yamadan96', url: 'https://github.com/yamadan96' },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      handle: 'Yuto Yamada',
      url: 'https://www.linkedin.com/in/yuto-yamada-ai/',
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

  // Awards & Recognition: 第三者による受賞・選抜・掲載だけ（研究成果は Research が担当）
  achievements: [
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
      description: '東京大学 松尾・岩澤研究室の選抜制プログラム。図表を含む文書を検索する AI と、デザイン特許の画像検索を研究。',
    },
  ],
};

export default profile;
