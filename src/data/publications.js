// 発表済み・発表確定の学会発表と学位論文。
// 各項目の使い分け:
//   highlight   … トップページの1行。数字ではなく「何が分かったか」を言葉で書く（数字は原稿・スライドに）
//   shortTitle  … 一覧行の短い題名（トップページ・/research）
//   claim       … 一覧行の1行の主張。数字は description・metrics にあるものだけを使う
//   resultCards … /research の一覧行に出す結果カード3枚（value + label）。数字は description・metrics と一致させる
//   detail      … 個別ページ（/research/:id）の本文。研究課題 → データセット → 手法 → 実験 → 結果 → 解釈。
//                 既存の abstract・description・metrics を並べ直したもので、新しい事実は足さない
// 投稿中のものは research.js を参照。
const publications = [
  {
    id: 'pub-ite2026',
    shortVenue: '映像情報メディア学会 2026年年次大会／知覚AIフォーラム',
    shortTitle: '視覚基盤モデルの比較',
    // トップページの行に出す表示用フィールド。finding（見出し1行）・conditions（条件1行）・
    // presentations（会場と発表形式のバッジ）に分ける。数字は description / metrics にあるものだけを使い、
    // 会場名と発表形式は venue / type の文字列から切り出す（publications.test.js で検査）
    finding: 'DINOv2 が DINOv3 を +5.53pt 上回った',
    conditions: '能登半島地震 · 学習832枚 · 6シード · Wilcoxon p=0.031',
    presentations: [
      { venue: '映像情報メディア学会 2026年年次大会', type: '口頭' },
      { venue: '第1回 知覚AIフォーラム', type: 'ポスター' },
    ],
    // 5.53pt は最小規模の能登データに限った結果なので、どこに出すときも「能登半島地震の小規模データ」と結び付けて書く
    claim:
      '能登半島地震の小規模データ（学習832枚）では DINOv2 が最新の DINOv3 を 5.53pt 上回った。4データセット・6シードでモデル世代とデータ規模の関係を検証',
    resultCards: [
      { value: '4', label: 'データセット' },
      { value: '6', label: 'シード' },
      { value: '+5.53pt', label: 'DINOv2 vs DINOv3（能登・学習832枚）' },
    ],
    // Level 3（数字）: 3件とも「公開ベンチマークでの自手法スコア（先行報告）」で粒度を揃える。
    // 先行報告との比較は実験条件の異なる論文間比較なので、この数字は個別ページにだけ出し、metricsNote を必ず添える
    metrics: [
      { value: '79.87%', label: 'PHI-Net Accuracy（先行報告 74.50%）' },
      { value: '99.53%', label: 'AIDERv2 Weighted-F1（同 96.60%）' },
      { value: '83.86%', label: 'MEDIC Weighted-F1（同 80.40%）' },
    ],
    metricsNote: '3件とも各原著の報告値との比較。実験条件の異なる論文間比較で、同一条件での直接比較ではない。',
    title: '視覚基盤モデルによる小・中規模被災建物画像データセットの分類性能の比較',
    venue:
      '映像情報メディア学会 2026年年次大会（口頭）／第1回 知覚AIフォーラム（ポスター、2026年8月24日・東京理科大学 葛飾キャンパス）',
    year: 2026,
    type: '学会発表（口頭・ポスター）',
    highlight:
      '新しい基盤モデルが常に良いとは限らない。能登半島地震の小規模データ（学習832枚・6シード）では DINOv2 が DINOv3 を 5.53pt 上回った',
    // 原稿（ite2026-paper.pdf）掲載の Abstract をそのまま転記。
    abstract:
      'Since datasets for training dedicated models for such tasks are limited, utilization of general-purpose ' +
      'visual foundation models (VFMs) is beneficial. In this paper, we found that a newer VFM is not necessarily ' +
      'better: the previous-generation DINOv2 with LoRA outperformed the newer alternative in our comparative study.',
    description:
      '被災建物の損傷度分類において、視覚基盤モデル（DINOv2 ViT-L/14・DINOv3 ViT-L/16）の選択と適応戦略を、' +
      '規模の異なる4種の災害画像データセット（能登半島地震 832枚／PHI-Net 4,138枚／AIDERv2 13,399枚／MEDIC 49,353枚）で系統的に比較。' +
      'より大規模に事前学習されたDINOv3が最小規模の能登データではDINOv2を5.53ポイント下回り（6シード全てでDINOv2が優位、Wilcoxon p=0.031）、' +
      'PHI-Net（4,138枚）では差が0.25ポイントに縮小、最大規模のMEDICでは実質的に消失した。予想に反して、新しいモデルが常に良いとは限らないことを報告。' +
      'またPHI-NetではFull Fine-Tuning（約3.04億パラメータ更新・76.20%）に対し、' +
      'LoRA r=8（79万パラメータ＝全体の0.26%のみ更新）が79.82%と上回った（6シード）。論文ではこれを、低ランク制約が正則化として働く可能性を支持する結果と解釈している。' +
      'PHI-Net 79.87%（先行報告74.50%）、AIDERv2 99.53% W-F1（同96.60%）、MEDIC 83.86% W-F1（同80.40%）と、' +
      '3つの公開ベンチマークで各原著の報告値を上回った（実験条件の異なる論文間比較）。',
    detail: {
      question:
        '被災建物の損傷度分類では、専用モデルを学習するためのデータセットが限られるため、汎用の視覚基盤モデル（VFM）を使うのが有効である。' +
        'では、より新しい世代の基盤モデルを選べば常に良いのか。データ規模によってその答えは変わるのか。',
      dataset:
        '規模の異なる4種の災害画像データセット：能登半島地震 学習832枚／PHI-Net 4,138枚／AIDERv2 13,399枚／MEDIC 49,353枚。',
      method:
        '視覚基盤モデル DINOv2 ViT-L/14 と DINOv3 ViT-L/16 を、LoRA と Full Fine-Tuning の2つの適応戦略で被災建物の損傷度分類に適用し、' +
        'モデルの選択と適応戦略を系統的に比較した。',
      experiments:
        'モデル世代（DINOv2 / DINOv3）× データ規模（4データセット）の比較を6シードで実施。' +
        'PHI-Net では Full Fine-Tuning（約3.04億パラメータ更新）と LoRA r=8（79万パラメータ＝全体の0.26%のみ更新）も6シードで比較した。',
      results:
        'より大規模に事前学習された DINOv3 は、最小規模の能登半島地震データ（学習832枚）では DINOv2 を 5.53 ポイント下回った（6シード全てで DINOv2 が優位、Wilcoxon p=0.031）。' +
        'この差は能登データに限った結果で、PHI-Net（4,138枚）では 0.25 ポイントに縮小し、最大規模の MEDIC では実質的に消失した。' +
        'PHI-Net では Full Fine-Tuning 76.20% に対し、LoRA r=8 が 79.82% と上回った（6シード）。' +
        '公開ベンチマーク3件では PHI-Net 79.87%（先行報告 74.50%）、AIDERv2 99.53% W-F1（同 96.60%）、MEDIC 83.86% W-F1（同 80.40%）と、' +
        '各原著の報告値を上回った。ただしこれは実験条件の異なる論文間比較であり、同一条件での直接比較ではない。',
      interpretation:
        '予想に反して、新しいモデルが常に良いとは限らない。ただし DINOv2 の優位は最小規模の能登データで見られたもので、' +
        'データ規模が大きくなるほど差は縮まり、全データセットに共通する結果ではない。' +
        'PHI-Net で LoRA r=8 が Full Fine-Tuning を上回った点は、論文ではこれを、低ランク制約が正則化として働く可能性を支持する結果と解釈している。' +
        '先行報告との比較は実験条件の異なる論文間比較であり、同一条件での直接比較ではない。',
    },
    tags: ['Vision Foundation Model', 'DINOv2', 'DINOv3', 'LoRA', 'Disaster Assessment'],
    link: 'https://www.ite.or.jp/annual/2026/',
    citation:
      '山田悠人, 鈴木海友, 松田一朗, 多賀祥平, 松澤智史, 柏田 仁, 二瓶泰雄: 「視覚基盤モデルによる小・中規模被災建物画像データセットの分類性能の比較」, 映像情報メディア学会2026年年次大会講演予稿集, 2026年8月.',
    materials: [
      { label: '原稿PDF', url: '/papers/ite2026-paper.pdf' },
      { label: 'スライドPDF', url: '/papers/ite2026-slides.pdf' },
      { label: 'ポスターPDF（知覚AIフォーラム）', url: '/papers/ite2026-poster.pdf' },
      { label: '知覚AIフォーラム 開催案内', url: 'https://rist.tus.ac.jp/news/15938/' },
    ],
  },
  {
    id: 'pub-ieice2026',
    shortVenue: 'IEICE 2026 総合大会',
    shortTitle: 'マルチタスク学習',
    finding: 'Accuracy 68.99% → 71.04%、Macro F1 0.6366 → 0.6556',
    conditions: '能登半島地震 1,040枚 · 10シード平均 · 有意差検定は未実施',
    presentations: [{ venue: 'IEICE2026 電子情報通信学会 総合大会', type: '口頭' }],
    claim: '災害の種類・程度・有無を補助タスクにすると、10シード平均で精度が上がった（有意差検定は未実施）',
    resultCards: [
      { value: '1,040枚', label: '能登半島地震の画像' },
      { value: '10', label: 'シード' },
      { value: '68.99→71.04%', label: 'Accuracy（10シード平均）' },
    ],
    metrics: [
      { value: '71.04%', label: 'Accuracy（単一タスク 68.99% → MTL、10シード平均）' },
      { value: '0.656', label: 'Macro F1（同 0.637 →）' },
    ],
    title: '被災建物画像の多クラス損傷度分類におけるマルチタスク学習の有効性',
    venue: 'IEICE2026 電子情報通信学会 総合大会',
    year: 2026,
    type: '学会発表（口頭）',
    highlight: '災害の種類・程度・有無も同時に学習させたところ、10シード平均で精度が 68.99%→71.04% に上がった',
    description:
      '損傷度ラベルの階層構造から自動派生した3つの補助タスク（被害程度・災害種別・被害の有無）を主タスクと同時に学習するマルチタスク学習を提案。' +
      '能登半島地震の被災建物画像1,040枚（DINOv2 ViT-L/14＋LoRA r=16、10シード）で、Accuracy 68.99±2.95% → 71.04±3.10%、' +
      'Macro F1 0.6366±0.0272 → 0.6556±0.0488（差はいずれも1標準偏差以内、有意差検定は未実施）。' +
      'Macro F1 の改善から少数クラスでの性能向上が示唆された。補助タスクの損失は固定重み（0.2／0.2／0.3）で主タスク損失に加算。',
    detail: {
      question:
        '被災建物画像の多クラス損傷度分類で、損傷度ラベルの階層構造から派生する補助タスク（被害程度・災害種別・被害の有無）を' +
        '主タスクと同時に学習させると、主タスクの精度は上がるか。',
      dataset: '能登半島地震の被災建物画像 1,040枚。',
      method:
        '損傷度ラベルの階層構造から自動派生した3つの補助タスク（被害程度・災害種別・被害の有無）を主タスクと同時に学習するマルチタスク学習。' +
        'バックボーンは DINOv2 ViT-L/14 ＋ LoRA r=16。補助タスクの損失は固定重み（0.2／0.2／0.3）で主タスク損失に加算する。',
      experiments: '主タスクのみの単一タスク学習とマルチタスク学習をそれぞれ10シードで学習し、Accuracy と Macro F1 の平均で比較した。',
      results:
        'Accuracy 68.99±2.95% → 71.04±3.10%、Macro F1 0.6366±0.0272 → 0.6556±0.0488（10シード平均）。' +
        '差はいずれも1標準偏差以内、有意差検定は未実施。',
      interpretation:
        'Macro F1 の改善から少数クラスでの性能向上が示唆された。ただし差はいずれも1標準偏差以内、有意差検定は未実施。',
    },
    tags: ['Multi-task Learning', 'DINOv2', 'LoRA', 'Class Imbalance'],
    link: 'https://pub.confit.atlas.jp/ja/event/general2026/presentation/D-12-80',
    citation:
      '山田悠人, 鈴木海友, 松田一朗, 多賀祥平, 松澤智史, 二瓶泰雄, 柏田 仁: 「被災建物画像の多クラス損傷度分類におけるマルチタスク学習の有効性」, 2026年電子情報通信学会総合大会講演論文集, 2026年3月13日.',
    materials: [
      { label: '東理大研究業績DB', url: 'https://www.tus.ac.jp/ridai/doc/ji/RIJIA01User.php?kin=soc&diu=18e8' },
      { label: '原稿PDF', url: '/papers/ieice2026-paper.pdf' },
      { label: 'スライドPDF', url: '/papers/ieice2026-slides.pdf' },
    ],
  },
  {
    id: 'pub-fit2025',
    shortVenue: 'FIT2025',
    shortTitle: 'LoRA による損傷度分類',
    finding: 'LoRA で DINOv2 の Macro F1 0.37 → 0.56',
    conditions: '能登半島地震 1,040枚 · 6クラス · 訓練832枚／評価208枚',
    presentations: [
      { venue: 'FIT2025 第24回情報科学技術フォーラム', type: '口頭' },
      { venue: '総合研究院フォーラム2025', type: 'ポスター' },
    ],
    topNote: 'ConvNeXt の標準学習が最も安定',
    claim: 'LoRA で基盤モデル DINOv2 の精度は大きく上がるが、少量データでは ConvNeXt の標準学習が最も安定',
    resultCards: [
      { value: '1,040枚', label: '自作データセット' },
      { value: '6', label: 'クラス' },
      { value: '0.37 → 0.56', label: 'Macro F1（DINOv2、LoRA 適用前→後）' },
    ],
    metrics: [
      { value: '0.37 → 0.56', label: 'Macro F1（DINOv2 ViT-B、標準学習 → LoRA 適用）' },
      { value: '1,040枚', label: '能登半島地震の自作データセット（6クラス）' },
    ],
    title: 'ファインチューニング手法に基づく被災建物画像の多クラス損傷度分類の精度改善',
    venue: 'FIT2025 第24回情報科学技術フォーラム（口頭）／東京理科大学 総合研究院フォーラム2025（ポスター、2025年11月21日・野田キャンパス）',
    year: 2025,
    type: '学会発表（口頭・ポスター）',
    highlight: 'LoRA で基盤モデル DINOv2 の精度は大きく上がるが、少量データでは ConvNeXt の標準学習が最も安定',
    description:
      '地震・津波などの大規模災害直後の被災建物損傷度分類の自動化。' +
      '2024年能登半島地震の被災家屋を現地撮影した独自データセット（1,040枚・6クラス・518×518画素／訓練832枚・評価208枚の固定分割）を使用。' +
      'クラス分布は最大313枚〜最小88枚と不均衡で、専門家によるラベル付与でも判断が分かれる難易度の高いタスク。' +
      '標準ファインチューニングでは ConvNeXt-Tiny（Acc 0.66／Macro F1 0.54）が最も高く、DINOv2（ViT-B）は 0.45／0.37 にとどまった。' +
      'LoRA を適用すると DINOv2 は 0.65／0.56 まで改善したが、ConvNeXt-Tiny／Base（0.64／0.58、0.66／0.56）には及ばなかった。',
    detail: {
      question:
        '地震・津波などの大規模災害直後に、被災建物の損傷度分類を自動化したい。' +
        '専門家によるラベル付与でも判断が分かれ、写真も少ない条件で、どのファインチューニング手法が精度を出せるか。',
      dataset:
        '2024年能登半島地震の被災家屋を現地撮影した独自データセット。1,040枚・6クラス・518×518画素、訓練832枚・評価208枚の固定分割。' +
        'クラス分布は最大313枚〜最小88枚と不均衡。',
      method:
        'ResNet-50・EfficientNetV2-S・ConvNeXt-Tiny／Base・Swin-Tiny・ViT-Base・DINOv2（ViT-B）の7モデルを、標準ファインチューニングと LoRA 適用の2方式で比較。' +
        'LoRA は基盤モデルの一部のパラメータだけを学習する。',
      experiments: '固定分割の訓練832枚で各モデルを学習し、評価208枚で Accuracy と Macro F1 を比較した。',
      results:
        '標準学習：ResNet-50 Acc 0.51／Macro F1 0.46、ConvNeXt-Tiny 0.66／0.54、DINOv2 0.45／0.37。' +
        'LoRA 適用：DINOv2 0.65／0.56、ConvNeXt-Tiny 0.64／0.58、ConvNeXt-Base 0.66／0.56。' +
        '初稿では DINOv2＋LoRA を Acc 0.80／Macro F1 0.77 と誤記しており、2025-08-25 の正誤表で訂正した（掲載 PDF は訂正後の版）。',
      interpretation: 'ConvNeXt 系は標準学習で安定して高精度を示し、このタスクでは CNN が有効。DINOv2 は LoRA で大きく改善しており、自己教師あり学習の汎用表現にタスク特化の調整を加える有効性が示唆される（論文の結論）。',
    },
    tags: ['Deep Learning', 'LoRA', 'CNN', 'ViT', 'Disaster Assessment'],
    link: 'https://www.ieice.org/publications/conferences/summary.php?id=FIT0000017580&expandable=2&ConfCd=F&session_num=7n&lecture_number=I-029&year=2025&conf_type=F',
    citation:
      '山田悠人, 鈴木海友, 松田一朗, 多賀祥平, 松澤智史, 柏田 仁, 二瓶泰雄: 「ファインチューニング手法に基づく被災建物画像の多クラス損傷度分類の精度改善」, 第24回情報科学技術フォーラム(FIT 2025)講演論文集, Vol.3, No.I-029, pp.339-340, (2025年9月).',
    materials: [
      { label: '原稿PDF', url: '/papers/fit2025-paper.pdf' },
      { label: 'スライドPDF', url: '/papers/fit2025-slides.pdf' },
    ],
  },
  {
    id: 'pub-bachelor-thesis',
    shortVenue: '東京理科大学 卒業論文',
    shortTitle: '動画異常検知',
    claim: '動画の長い文脈を使って、事故などの異常を検知する',
    // /research の Thesis 行に出す手法・データセット名（結果カードは持たない）
    keywords: ['CW-VAE', 'OOPS!'],
    title: '長期文脈を活用したフレーム外挿モデルによる動画異常検知',
    venue: '東京理科大学 創域理工学部 2024年度 卒業論文',
    year: 2024,
    type: '卒業論文',
    highlight: '動画の長い文脈を使って、事故などの異常を検知する（卒業論文）',
    description:
      '事故などの異常を動画から検知するタスクにおいて、従来手法が苦手とする長期的な背景変化や動作パターンの抽出を目的に、' +
      'Clockwork Variational Autoencoder（CW-VAE）を活用した手法を提案。' +
      'OOPS! データセットで ConvLSTM と定量比較し、ROC 曲線の AUC（SSIM）は ConvLSTM 0.534 に対し CW-VAE 0.726 と上回った（入力49フレーム）。',
    // 卒業論文は「解釈」に当たる記述が無いので detail に持たない（個別ページでは見出しごと出ない）
    detail: {
      question: '事故などの異常を動画から検知するとき、従来手法が苦手とする長期的な背景変化や動作パターンをどう捉えるか。',
      dataset: 'OOPS! データセット。',
      method: 'Clockwork Variational Autoencoder（CW-VAE）を活用したフレーム外挿モデル。動画の長期文脈を使って異常を検知する。',
      experiments: 'SSIM と PSNR による異常スコアで ROC 曲線の AUC と PR 曲線の AP を算出し、入力フレーム数を変えて ConvLSTM と比較した。',
      results: 'ROC 曲線の AUC（SSIM）は ConvLSTM 0.534 に対し CW-VAE 0.726、PR 曲線の AP（SSIM）は 0.464 に対し 0.672（CW-VAE は入力49フレーム・時間的抽象化7）。',
    },
    tags: ['VAE', 'CW-VAE', 'Anomaly Detection', 'Video Analysis', 'ConvLSTM', 'OOPS!'],
    link: 'https://github.com/yamadan96/cwvae-anomaly-detection-thesis',
    citation: null,
    materials: [],
  },
];

// 学会発表（type が「学会発表」で始まる）だけを新しい順に。トップページと /research の一覧が使う
export const conferencePapers = publications
  .filter((pub) => typeof pub.type === 'string' && pub.type.startsWith('学会発表'))
  .sort((a, b) => b.year - a.year);

// 学位論文（卒業論文・修士論文）
export const theses = publications.filter((pub) => typeof pub.type === 'string' && pub.type.endsWith('論文'));

export default publications;
