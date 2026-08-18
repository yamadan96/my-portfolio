// 進行中・投稿準備中の研究テーマ。
// 発表済み／確定済みの学会発表・論文は publications.js を参照。
const research = [
  {
    id: 'research-cwsc',
    title: 'コスト考慮型選択的分類における Divergence 定理と逐次観測取得（CWSC）',
    venue: 'WACV 2027 Round 2 投稿準備中',
    year: 2027,
    type: '国際会議（投稿準備中）',
    status: 'submitting',
    // ---- 採用担当向けの構造化サマリ ----
    problem:
      'AIに「わからない」と棄権させる選択的分類では、通常どの入力を棄権させるかを確信度だけで決める。しかし実務では誤分類の深刻さが一様ではない（軽症を重症と誤るのと、重症を軽症と誤るのは同じコストではない）。',
    contribution:
      '「棄権させるべき入力は誤分類の深刻さ（コスト行列）によって変わる」ことを Divergence Theorem として証明し、6データセット・3ドメインで実証。さらに post-hoc な再ランキングには十分統計量に由来する原理的な限界があることを示し、左右眼の逐次観測取得（SCAA）でそれを突破した。',
    results: [
      'EyePACS（糖尿病網膜症・test 53,576症例）で相対改善 +8.69%（3/3 seed 有意）。コスト行列の鋭さに対する単調性を確認（linear +1.46% → quadratic +8.69% → cubic +22.0% → quartic +38.2%）。90%カバレッジ時に危険な過小評価を11.4%削減',
      'SCAA（左右眼の逐次観測取得）で +36.6%（3/3 seed 有意）。post-hoc 単体の4倍以上の効果量で、改善の94.7%がランキング改善由来（単なるアンサンブル効果ではない）',
      'AFAD（顔年齢推定・ベース精度46.5%）+16.1%、Yelp Review Full（多言語BERTへ追加学習なしの post-hoc 適用）+7.67% と、モダリティを跨いで独立再現',
      'DDR（ベース精度88.0%・高コスト誤りがほぼ皆無）では −7.49% と有害化。「効かない条件」を実証し、HCER 事前チェックを実運用ゲートとして提案',
    ],
    lessons:
      '陽性結果だけでなく Null・陰性（有害）ケースを同じ実験系で並べたことで、手法の適用条件そのものが主張になった。K=3 が理論的に degenerate になる予測も事前に立てて確認している。',
    description:
      '「AIが間違えるとき、どの間違いに棄権させるべきかは誤分類の深刻さによって変わる」ことを定理として証明し、医療画像・NLP・顔画像・災害・骨格X線の6データセットで検証。post-hoc 再ランキングの限界（十分統計量の壁）を逐次観測取得（SCAA）で突破し +36.6% を達成。',
    tags: ['Selective Classification', 'Cost-Sensitive Learning', 'Theory + Empirical', 'Medical Imaging', 'NLP'],
    link: null,
  },
  {
    id: 'research-gps-audit',
    title: 'GPS統合戦略の系統的監査 — 何が効き、何が効かず、なぜか',
    venue: 'IGARSS 2027 / IEEE GRSL 投稿準備中',
    year: 2027,
    type: '国際会議・論文誌（投稿準備中）',
    status: 'submitting',
    problem:
      '地上災害画像には GPS 座標が付随することが多く、「位置情報を足せば精度が上がる」と素朴に期待される。しかし近い場所の画像が train/test に分かれるとリークが起き、利得が過大評価される。',
    contribution:
      'leak-free な空間グループ分割を前提に、複数の GPS 統合戦略を同一プロトコルで監査。B=1000 回の GPS 順列プラセボを全主張に課し、「見かけの改善」と「本物の改善」を切り分けた。',
    results: [
      '空間リーク監査：ランダム分割は GPS 利得を約40%水増しすることを定量化',
      'IDW-KNN 後処理較正：+3.81pp（Wilcoxon p=0.031、順列プラセボ p<0.001）',
      'Geophys-IDW：物理特徴は GPS 近接性に縮退し、プラセボを通過しない（negative result）',
      '極端地理転移：いずれの手法も方向一貫性と有意性を両立しない',
      'ベースライン：DINOv2+LoRA 分類器 61.8%±3.1%（空間グループ分割・n=6 seed）',
    ],
    lessons:
      '「効いた」を主張する前にプラセボを通すという設計にしたことで、当初有望に見えた手法（Geophys-IDW）を自分で棄却できた。監査論文としての価値はここにある。',
    description:
      '災害画像分類における GPS 情報の統合戦略を、空間リークを排した評価プロトコル下で系統的に監査。順列プラセボ検定を全主張に課し、有効な手法（IDW-KNN 較正 +3.81pp）と、見かけ上有望だが統計的に支持されない手法を切り分けた。',
    tags: ['Evaluation Protocol', 'Spatial Leakage', 'Calibration', 'DINOv2', 'LoRA', 'Permutation Test'],
    link: null,
  },
  {
    id: 'research-iwait2027',
    title: '較正の空間半径を利用したアノテーション優先順位付け',
    venue: 'IWAIT 2027（韓国・ソウル、2027年1月10〜12日）投稿準備中',
    year: 2027,
    type: '国際会議（投稿準備中）',
    status: 'submitting',
    problem:
      '災害画像の損傷度は専門家でないとラベル付けできず、全数アノテーションのコストが導入の障壁になる。どの画像から先にラベルを付ければ、少ない予算で最大の効果が得られるか。',
    contribution:
      'GPS 較正（IDW-KNN）の効果が及ぶ空間半径（実測約50m）を、アノテーションの優先順位付けに転用できることを示した。空間カバレッジ順（最遠点法）でラベル付けすると、全数ラベル付けと同等の便益の80%に、より少ない予算で到達する。',
    results: [
      '便益80%到達に必要なラベル予算：カバレッジ順 42% vs ランダム順 64%（ラベル予算 34%削減）',
      '10%予算時点の便益：カバレッジ順 +3.33±3.89pp vs ランダム順 +0.48±2.48pp',
      'Severity-Aware 変種：カバレッジ順 58% vs ランダム順 90%',
      '有害な順序も特定：クラスタ層化順・道路掃引順は低予算域（5%）で −11〜−16pt 悪化',
      'カバレッジ–便益相関 r=0.43（IDW-KNN）／ r=0.54（Severity-Aware）',
    ],
    lessons:
      'GPS 監査論文とのアーカイブ重複を避けるため、本テーマは IWAIT を本籍とし、監査論文側の該当節は運用含意の1段落へ格下げした。二重投稿にならない切り分けを事前に設計し、両 venue 向けの開示文も用意している。',
    description:
      'GPS 較正の効果半径（実測約50m）をアノテーション順序の設計に転用。空間カバレッジ順に専門家ラベルを付けることで、ランダム順に比べてラベル予算を34%削減しても同等の較正便益を得られることを示した。',
    tags: ['Active Learning', 'Annotation Budget', 'Calibration', 'Disaster Assessment'],
    link: 'https://iwait.online/',
  },
  {
    id: 'research-06',
    title: '拡散モデルにおけるアーキテクチャ依存の損失関数最適性の検証（NFDM × Transformer）',
    venue: '東京理科大学 修士研究',
    year: 2026,
    type: '修士研究',
    problem:
      '拡散モデルの学習レシピ（損失設計・ノイズスケジュール）は CNN（U-Net）バックボーンを前提に磨かれてきた。同じレシピが Transformer バックボーンでも最適なのかは自明でない。',
    contribution:
      'Neural Flow Diffusion Models（NFDM）を Just Image Transformer 上で体系的に検証。stop-gradient・decoupled loss・GVP型ノイズスケジュールを自前実装し、要因実験でアーキテクチャ間の「非転移性」を実証。',
    results: [
      'JiT-S/4（32.56M）・JiT-B/4 に加え、比較対象として U-Net（38M）・DiT-B（130M）で CIFAR-10・12条件＋マルチシードの実験を実施',
      'FID を 312 → 13.90 まで改善',
      'CNN バックボーンで最適とされる学習レシピが Transformer では逆転することを要因実験で確認',
    ],
    description:
      'NFDM を Transformer バックボーン上で系統的に検証し、CNN で最適とされる学習レシピの非転移性を実証。FID 312 → 13.90。',
    tags: ['Diffusion Model', 'Flow Matching', 'NFDM', 'Vision Transformer', 'DiT', 'CIFAR-10'],
    link: null,
  },
  {
    id: 'research-09',
    title: '視覚基盤モデルと Metric Learning による意匠特許の画像検索',
    venue: '東京大学 松尾・岩澤研究室 LLMATCHプログラム',
    year: 2026,
    type: '研究プロジェクト',
    problem:
      '意匠特許の先行意匠調査は、線画のみで構成された図面同士を視点差を跨いで照合する必要があり、汎用の画像検索がそのままでは使えない。',
    contribution:
      'DINOv2 に ArcFace による Metric Learning を組み合わせた Image-to-Image Retrieval モデルを構築。複数の目的関数を比較検証し、VLM によるキャプション生成の妥当性も往復検証で確認した。',
    results: [
      'IMPACT データセット1万件で Cross-View R@1 = 0.867',
      'DeepPatent で mAP = 0.138',
      'MVCL・Proxy Anchor・EMA Prototype InfoNCE など複数の目的関数を比較検証',
      'VLM（Qwen3-VL-4B）による図面キャプションを、画像→テキスト→画像の再生成で往復検証し、テキスト生成バイアスを確認',
    ],
    description:
      'DINOv2 + ArcFace による意匠特許の画像検索。IMPACT 1万件で Cross-View R@1 = 0.867。VLM キャプションの往復検証で生成バイアスも定量化。',
    tags: ['DINOv2', 'ArcFace', 'Metric Learning', 'Image Retrieval', 'VLM', 'Qwen3-VL'],
    link: null,
  },
  {
    id: 'research-05',
    title: 'マルチモーダルRAGによる日本語専門文書の要約・分析システム開発',
    venue: '東京大学 松尾・岩澤研究室 LLMATCHプログラム',
    year: 2025,
    type: '選抜制プログラム',
    problem:
      '日本語の専門文書は図表・画像に情報が偏在しており、テキストのみを対象とした RAG では回答根拠を取り逃す。',
    contribution:
      '画像・表・テキストの埋め込みを統合したマルチモーダル RAG を設計し、生成系 LLM と連携させた検索拡張生成パイプラインを構築。',
    results: ['CLIP / LangChain を用いた画像・表・テキストの埋め込み統合と、生成LLMとの連携を実装'],
    description:
      '図表や画像を含む日本語専門文書を対象としたマルチモーダルRAGシステムの開発。CLIPやLangChainを活用し、画像・表・テキストの埋め込み統合と生成系LLMとの連携による検索拡張生成を設計。',
    tags: ['RAG', 'Multimodal', 'CLIP', 'LangChain', 'LLM'],
    link: null,
  },
];

export default research;
