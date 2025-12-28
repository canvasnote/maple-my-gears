import type { IBaseItem } from "./baseitem";

export const heads: Array<IBaseItem> = [
  {
    type: "Head",
    JMSName: "なし",
    level: 0,
    setEffectName: [],
    baseStat: [
    ],
  }, 

  {
    type: "Head",
    JMSName: "アビス頭",
    level: 150,
    setEffectName: ["Fafnir"],
    baseStat: [
      { type: "AMA", amount: 2 },
      { type: "MainStat", amount: 40 },
      { type: "SubStat1", amount: 40 },
      { type: "IgnoreDefence", amount: 10 },
    ],
  },

  {
    type: "Head",
    JMSName: "アブソ頭",
    setEffectName: ["Absolab"],
    level: 160,
    baseStat: [
      { type: "AMA", amount: 3 },
      { type: "MainStat", amount: 45 },
      { type: "SubStat1", amount: 45 },
      { type: "IgnoreDefence", amount: 10 }
    ],
  },

  {
    type: "Head",
    JMSName: "アーケイン頭",
    setEffectName: ["ArcaneShade"],
    level: 200,
    baseStat: [
      { type: "AMA", amount: 7 },
      { type: "MainStat", amount: 65 },
      { type: "SubStat1", amount: 65 },
      { type: "IgnoreDefence", amount: 15 },
    ],
  },

  {
    type: "Head",
    JMSName: "エテルネル頭",
    setEffectName: ["Eternel"],
    level: 250,
    baseStat: [
      { type: "AMA", amount: 10 },
      { type: "MainStat", amount: 80 },
      { type: "SubStat1", amount: 80 },
      { type: "IgnoreDefence", amount: 15 },
    ],
  },

  {
    type: "Head",
    JMSName: "カオスベルルムのヘルム",
    setEffectName: ["Luckey"],
    level: 140,
    baseStat: [
      { type: "AMA", amount: 1 },
      { type: "MainStat", amount: 23 },
      { type: "SubStat1", amount: 23 },
      { type: "SubStat2", amount: 23 },
    ],
  },

  {
    type: "Head",
    JMSName: "カオスバンバン/ピエール/クイーン頭",
    setEffectName: ["Luckey"],
    level: 140,
    baseStat: [
      { type: "AMA", amount: 1 },
      { type: "MainStat", amount: 23 },
      { type: "SubStat1", amount: 23 },
      { type: "SubStat2", amount: 23 },
    ],
  },
];
