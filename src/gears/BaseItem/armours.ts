import type { IBaseItem } from "./baseitem";

export const armours: Array<IBaseItem> = [
  {
    type: "Armour",
    JMSName: "なし",
    level: 0,
    setEffectName: [],
    baseStat: [
    ],
  }, 

  {
    type: "Armour",
    JMSName: "アビス鎧上",
    level: 150,
    setEffectName: ["Fafnir"],
    baseStat: [
      { type: "AMA", amount: 2 },
      { type: "MainStat", amount: 30 },
      { type: "SubStat1", amount: 30 },
      { type: "IgnoreDefence", amount: 5 },
    ],
  },

  {
    type: "FullCloth",
    JMSName: "アブソ全身服",
    setEffectName: ["Absolab"],
    level: 160,
    baseStat: [
      { type: "AMA", amount: 5 },
      { type: "MainStat", amount: 65 },
      { type: "SubStat1", amount: 65 },
    ],
  },

  {
    type: "FullCloth",
    JMSName: "アーケイン全身服",
    setEffectName: ["ArcaneShade"],
    level: 200,
    baseStat: [
      { type: "AMA", amount: 9 },
      { type: "MainStat", amount: 85 },
      { type: "SubStat1", amount: 85 },
      { type: "IgnoreDefence", amount: 10 },
    ],
  },

  {
    type: "Armour",
    JMSName: "エテルネル鎧上",
    setEffectName: ["Eternel"],
    level: 250,
    baseStat: [
      { type: "AMA", amount: 7 },
      { type: "MainStat", amount: 50 },
      { type: "SubStat1", amount: 50 },
      { type: "IgnoreDefence", amount: 5 },
    ],
  }
];
