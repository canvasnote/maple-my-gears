import type { IBaseItem } from "./baseitem";

export const shoulders: Array<IBaseItem> = [
  {
    type: "Shoulder",
    JMSName: "なし",
    level: 0,
    setEffectName: [],
    baseStat: [
    ],
  }, 
  {
    type: "Shoulder",
    JMSName: "アブソ肩",
    level: 160,
    setEffectName: ["Absolab"],
    baseStat: [
      { type: "AMA", amount: 2 },
      { type: "MainStat", amount: 15 },
      { type: "SubStat1", amount: 15 },
    ],
  },

  {
    type: "Shoulder",
    JMSName: "アーケイン肩",
    level: 200,
    setEffectName: ["Absolab"],
    baseStat: [
      { type: "AMA", amount: 20 },
      { type: "MainStat", amount: 35 },
      { type: "SubStat1", amount: 35 },
    ],
  },

  {
    type: "Shoulder",
    JMSName: "エテルネル肩",
    setEffectName: ["Eternel"],
    level: 250,
    baseStat: [
      { type: "AMA", amount: 28 },
      { type: "MainStat", amount: 51 },
      { type: "SubStat1", amount: 51 },
    ],
  }
];
