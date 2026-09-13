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
    { axis: 'RAG', value: '57% → 86%', metric: '検索 Recall・7ケース（業務システムを操作する LLM Agent への知識注入）' },
    { axis: 'Computer Vision', value: '96.6%', metric: '束単位の検出成功率・社内評価（製造ライン向け物体検出の PoC）' },
    { axis: 'LLM / NLP', value: '+14.1pt', metric: 'Accuracy（契約書分類モデルの LLM 化）' },
  ],
  // Hero に出す SNS はこの2つだけ。残りは Contact 末尾に文字リンクで置く
  heroSocial: ['github', 'linkedin'],
  affiliation: '東京理科大学大学院 創域理工学研究科 電気電子情報工学専攻 M2',
  // About 末尾の補助情報1行。就職先のブランド名は出さない（技術的なシグナルにならないため）
  status: '東京理科大学大学院 修士2年 ／ 2027年3月 修士課程修了予定 ／ 2027年4月 AI アーキテクトとして入社予定',

  // About: 実務 → 研究の順の2段落。実務行は数字ではなく「どういう体制で何を持ったか」（数字は Hero と Experience が担当）
  bio: [
    '実務：LLM Agent / RAG / Computer Vision を製品・業務システムへ実装。約12名のプロジェクトでは RAG 部分の設計・実装と効果検証を担当、4名体制の物体検出 PoC ではテックリード、2名体制の案件では設計から本番リリースまでを1ヶ月で担当。',
    '研究：少量の専門家アノテーションを用いた被災建物の損傷度分類を研究。FIT2025、IEICE 2026、映像情報メディア学会 2026 で発表。',
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
  // Contact 冒頭の1行。何の相談なら連絡してよいかを明示する（Hero には出さない）
  contactNote: '副業・業務委託・共同研究のご相談を歓迎します。',

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
