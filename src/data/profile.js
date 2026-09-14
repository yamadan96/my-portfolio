// トップページの Hero / About / Contact / Achievements で使う人物データ。
//
// 文章のルール:
//   - Hero は「何者か（title / tagline）」と「証拠（proofPoints 3つ）」だけ。会社名・案件の説明は Experience に置く
//   - Hero と About ではモデル名・手法名を出さない（それらは Skills / Research が担当）
//   - 数字は指標名と対象が分かる形でだけ出す（Recall 57%→86%、Accuracy +14.1pt など）
//   - 数字（value）・指標名（metric）・条件（condition）は別のフィールドに分ける。文に埋めない
const profile = {
  name: '山田 悠人',
  nameEn: 'Yuto Yamada',
  // Hero の固定肩書き（タイピング表示はやめた。5秒で読める1つだけ）
  title: 'AI Engineer — LLM Agents / RAG / Computer Vision',
  // Hero の1行。「何者か」を役割の広さ（研究・検証〜実運用）で言い切る
  // 2要素に分けてあるのは、モバイルでこの位置で改行させるため（PC では1行に繋がる）
  tagline: ['LLM Agent・RAG・Computer Vision を中心に、', '研究・PoC から本番実装まで経験。'],
  // Hero の実績チップ3つ。数字は experiences.js の summary.result と一致させる。
  // experienceId は該当の経歴ページ（/experience/:id）へのリンク先
  proofPoints: [
    {
      experienceId: 'matsuo-institute-gui-rag',
      axis: 'RAG',
      value: '57% → 86%',
      metric: '検索 Recall',
      condition: '7ケース',
    },
    {
      experienceId: 'airion',
      axis: 'Computer Vision',
      value: '96.6%',
      metric: '束単位の検出成功率',
      condition: '200〜300本・28/29枚・社内評価',
    },
    {
      experienceId: 'legalon',
      axis: 'LLM / NLP',
      value: '+14.1pt',
      metric: 'Accuracy',
      condition: '76.0% → 90.1%',
    },
  ],
  // Hero の CTA の隣に出す文字リンクはこの2つだけ
  heroSocial: ['github', 'linkedin'],
  affiliation: '東京理科大学大学院 創域理工学研究科 電気電子情報工学専攻 M2',
  // About 末尾の補助情報1行。就職先のブランド名は出さない（技術的なシグナルにならないため）
  status: '東京理科大学大学院 修士2年 ／ 2027年3月 修士課程修了予定',

  // About: 実務 → 研究の順の2段落。実務行は「領域・体制・担当範囲」だけを書き、数字は Hero と Experience に任せる
  bio: [
    '実務：LLM Agent / RAG / Computer Vision を中心に、研究・PoCから本番実装まで経験。約12名のLLM Agent開発ではRAG部分を設計・実装し、製造業向けComputer Visionでは4名チームのテックリードを担当。LegalOnでは契約書分類モデルのLLM化から本番導入可能なマイクロサービスの実装まで、別のLegalTech案件では2名体制で設計から本番リリースまで担当。',
    '研究：少量の専門家アノテーションで被災建物の損傷度を分類する研究（能登半島地震の画像 1,040枚・6分類）。FIT2025 では LoRA 適用で DINOv2 の Macro F1 を 0.37→0.56 に改善。IEICE 2026、映像情報メディア学会 2026 でも発表。',
  ],

  // トップページの About に出す3行。bio の語を短く並べ直したもので、数字・学会名・社名は出さない
  // （数字は Hero と Experience、学会名は Research が持つ）。bio は履歴書生成などの一次情報源として残す
  aboutLines: [
    'LLM Agent / RAG / Computer Vision を中心に、研究・PoC から本番実装まで経験。',
    '実務では、LLM Agent の RAG 部分の設計・実装、製造業向け Computer Vision のテックリード、契約書分類モデルの LLM 化と本番導入可能なマイクロサービスの実装。',
    '研究では、限られた専門家ラベルの下での被災建物の損傷度分類（Vision Foundation Models / Parameter-Efficient Fine-Tuning）。',
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
  // フッター（全ページ共通）に出す外部プロフィール。X / note / Wantedly は social に残すが表には出さない
  footerSocial: ['github', 'linkedin', 'qiita', 'zenn'],
  email: 'yuto.yamada0101@gmail.com',
  // Contact 冒頭の1行。何の相談なら連絡してよいかを明示する（Hero には出さない）
  contactIntro: '副業・業務委託・共同研究のご相談を歓迎します。お気軽にご連絡ください。',

  // Awards & Recognition: 第三者による受賞・選抜・掲載だけ（研究成果は Research が担当）。
  // line は1行だけ。長い説明は書かない（LLMATCH の意匠特許は Research の research-09 が持つ）
  achievements: [
    {
      title: 'DECC 2025 ファイナリスト',
      line: 'DISCOプログラミングコンテスト本戦出場（半導体製造装置の実機制御）',
      links: [
        { label: 'マイナビ記事', url: 'https://news.mynavi.jp/techplus/kikaku/disco_decc-2/' },
        { label: '本戦参加レポート', url: 'https://qiita.com/yamadan96/items/fadd4ba4749fff97899f' },
      ],
    },
    {
      title: '松尾研 LLMATCHプログラム 第2期（2025年4月〜）',
      line: '選抜制プログラム。図表を含む文書の検索（マルチモーダル RAG）',
    },
  ],
};

export default profile;
