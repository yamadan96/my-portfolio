// トップページの Hero / About / Contact / Achievements で使う人物データ。
//
// 文章のルール:
//   - Hero は「何者か（title / tagline）」と「証拠（proofPoints 3つ）」だけ。会社名・案件の説明は Experience に置く
//   - Hero と About ではモデル名・手法名を出さない（それらは Skills / Research が担当）
//   - 数字は指標名と対象が分かる形でだけ出す（Recall 57%→86%、Accuracy +14.1pt など）
const profile = {
  name: '山田 悠人',
  nameEn: 'Yuto Yamada',
  // Hero の固定肩書き（タイピング表示はやめた。5秒で読める1つだけ）
  title: 'AI Engineer — LLM Agents / RAG / Computer Vision',
  // Hero の1行。「何者か」を役割の広さ（研究・検証〜実運用）で言い切る
  // 2要素に分けてあるのは、モバイルでこの位置で改行させるため（PC では1行に繋がる）
  tagline: ['LLM Agent・RAG・Computer Vision を、', '研究・検証から実運用まで一貫して実装。'],
  // Hero の実績チップ3つ。数字は experiences.js の summary.result と一致させる
  proofPoints: [
    { axis: 'RAG', value: '57% → 86%', metric: '検索 Recall（業務システムを操作する LLM Agent への知識注入）' },
    { axis: 'Computer Vision', value: '96.6%', metric: '束単位の検出成功率（製造ライン向け物体検出）' },
    { axis: 'LLM / NLP', value: '+14.1pt', metric: 'Accuracy（契約書分類モデルの LLM 化）' },
  ],
  // Hero に出す SNS はこの2つだけ。残りは Contact 末尾に文字リンクで置く
  heroSocial: ['github', 'linkedin'],
  affiliation: '東京理科大学大学院 創域理工学研究科 電気電子情報工学専攻 M2',
  career: '2027年4月〜 外資系コンサルティングファーム AIアーキテクト職 入社予定',


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
      description: '東京大学 松尾・岩澤研究室の選抜制プログラム。第1期は図表を含む文書の検索（マルチモーダル RAG）、第2期は意匠特許の画像検索に取り組む。',
    },
  ],
};

export default profile;
