import type { IBaseItem } from "./baseitem";

export const hearts: Array<IBaseItem> = [
  {
    type: "Heart",
    JMSName: "アイアンハート",
    level: 30,
    setEffectName: [],
    baseStat: [
    ],
  },

  {
    type: "Heart",
    JMSName: "リチウムハート",
    level: 30,
    setEffectName: [],
    baseStat: [
      { type: "MainStat", amount: 3 },
      { type: "SubStat1", amount: 3 },
      { type: "SubStat2", amount: 3 },
      { type: "HP", amount: 50 },
    ],
  },

  {
    type: "Heart",
    JMSName: "チタンハート",
    level: 100,
    setEffectName: [],
    baseStat: [
      { type: "MainStat", amount: 3 },
      { type: "SubStat1", amount: 3 },
      { type: "SubStat2", amount: 3 },
      { type: "HP", amount: 50 },
    ],
  },

  {
    type: "Heart",
    JMSName: "フェアリーハート(JMS未実装)",
    level: 100,
    setEffectName: [],
    baseStat: [
      { type: "HP", amount: 100 },
    ],
  },

  {
    type: "Heart",
    JMSName: "コンプリートアンダーコントロール",
    level: 200,
    setEffectName: ["Pitched"],
    baseStat: [
      { type: "AMA", amount: 15 },
      { type: "MainStat", amount: 25 },
      { type: "SubStat1", amount: 25 },
      { type: "SubStat2", amount: 25 },
      { type: "HP", amount: 1250 },
      { type: "IgnoreDefence", amount: 30 },
    ],
  },

  {
    type: "Heart",
    JMSName: "ブラックハート",
    level: 120,
    setEffectName: ["Pitched"],
    baseStat: [
      { type: "AMA", amount: 77 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
      { type: "SubStat2", amount: 10 },
      { type: "HP", amount: 100 },
      { type: "BossDamage", amount: 30 },
      { type: "IgnoreDefence", amount: 30 },
    ],
  },

  {
    type: "Heart",
    JMSName: "プラズマハート(JMS未実装)",
    level: 130,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 5 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
      { type: "SubStat2", amount: 10 },
      { type: "HP", amount: 500 },
    ],
  },

  {
    type: "Heart",
    JMSName: "ビューティーロイド専用心臓",
    level: 130,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 1 },
      { type: "MainStat", amount: 5 },
      { type: "SubStat1", amount: 5 },
      { type: "SubStat2", amount: 5 },
      { type: "HP", amount: 300 },
    ],
  },
];
