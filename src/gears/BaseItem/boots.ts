import type { IBaseItem } from "./baseitem";

export const boots: Array<IBaseItem> = [
  {
    type: "Boots",
    JMSName: "アブソ靴",
    level: 160,
    setEffectName: ["Absolab"],
    baseStat: [
      { type: "AMA", amount: 5 },
      { type: "MainStat", amount: 20 },
      { type: "SubStat1", amount: 20 },
    ],
  },

  {
    type: "Boots",
    JMSName: "アーケイン靴",
    level: 200,
    setEffectName: ["Absolab"],
    baseStat: [
      { type: "AMA", amount: 9 },
      { type: "MainStat", amount: 40 },
      { type: "SubStat1", amount: 40 },
    ],
  },

  {
    type: "Boots",
    JMSName: "エテルネル靴",
    setEffectName: ["Eternel"],
    level: 250,
    baseStat: [
      { type: "AMA", amount: 12 },
      { type: "MainStat", amount: 55 },
      { type: "SubStat1", amount: 55 },
    ],
  }
];
