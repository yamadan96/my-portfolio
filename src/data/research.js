// 進行中・投稿中の研究テーマ。
// 発表済み／確定済みの学会発表・論文は publications.js を参照。
const research = [
  {
    id: 'research-iwait2027',
    shortVenue: 'IWAIT 2027',
    title: 'Building Damage Classification Using Post-Disaster Images with Limited Expert Annotations',
    titleJa: '限られた専門家ラベルによる災害後画像からの被災家屋分類',
    venue: 'IWAIT 2027（韓国・ソウル、2027年1月10〜12日）投稿済み・査読中',
    year: 2027,
    type: '国際会議（査読中）',
    // 2026-08-20 締切の拡張アブストラクトを EasyChair へ提出済み（採否は未定）
    status: 'submitted',
    problem:
      '被災家屋の損傷度は専門家でないとラベル付けできず、全数アノテーションが導入の障壁になる。写真だけでは災害の種別は分かっても、同じ種別内の損傷度の差は外観から判別しにくい。',
    contribution:
      '一部の建物だけ専門家がラベルを付け、残りをモデルが補完する「ラベル補完」として定式化。GPS による位置事前分布を災害種別の軸だけに限定する axis-selective prior を提案し、近隣の多数決で少数クラス（中程度の損傷）が押し切られるのを防ぐ。',
    results: [
      '能登半島地震の1,040枚・6シード：6クラス一律の位置事前分布は中損傷の再現率を13のラベル割合すべてで下げる（平均 −7.2pt）のに対し、提案法は2割合でしか下げず平均 +2.7pt',
      'ラベル割合5%以下では精度でも提案法が上回る',
    ],
    description:
      '専門家ラベルが一部しかない状況で、GPS の位置事前分布を災害種別の軸だけに限定して補完する axis-selective prior を提案。能登半島地震 1,040枚で、6クラス一律の事前分布が壊す中損傷の再現率を平均 +2.7pt 改善。',
    tags: ['Label Completion', 'Location Prior', 'Disaster Assessment', 'DINOv2', 'LoRA'],
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
