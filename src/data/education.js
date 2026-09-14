// topPage: トップページでの見せ方。'full'（既定）/ false（出さない）。
// 本郷高等学校・本郷中学校はトップページには出さないがデータは残す（履歴書生成などで使う）。
const education = [
  {
    id: 'edu-01',
    school: '東京理科大学大学院',
    faculty: '創域理工学研究科 電気電子情報工学専攻',
    degree: '修士課程',
    period: '2025年4月〜2027年3月（修了見込み）',
    description: '災害の写真から建物の壊れ具合を判定する AI の研究',
  },
  {
    id: 'edu-02',
    school: '東京理科大学',
    faculty: '創域理工学部 電気電子情報工学科',
    degree: '学士（工学）',
    period: '2021年4月〜2025年3月',
    description: '',
  },
  {
    id: 'edu-03',
    school: '本郷高等学校',
    // 高校以下はトップページには出さない（データは履歴書生成などのために残す）
    topPage: false,
    faculty: '普通科',
    degree: '',
    period: '2017年4月〜2020年3月',
    description: '2017年7月 カナダ・バンクーバー 語学留学（3週間）',
  },
  {
    id: 'edu-04',
    school: '本郷中学校',
    topPage: false,
    faculty: '',
    degree: '',
    period: '2014年4月〜2017年3月',
    description: '',
  },
];

export default education;
