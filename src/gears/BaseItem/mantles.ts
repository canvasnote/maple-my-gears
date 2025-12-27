import type { IBaseItem } from "./baseitem";

export const mantles: Array<IBaseItem> = [
  {
    type: "Mantle",
    JMSName: "アブソマント",
    level: 160,
    setEffectName: ["Absolab"],
    baseStat: [
      { type: "AMA", amount: 2 },
      { type: "MainStat", amount: 15 },
      { type: "SubStat1", amount: 15 },
    ],
  },

  {
    type: "Mantle",
    JMSName: "アーケインマント",
    level: 200,
    setEffectName: ["Absolab"],
    baseStat: [
      { type: "AMA", amount: 6 },
      { type: "MainStat", amount: 35 },
      { type: "SubStat1", amount: 35 },
    ],
  },

  {
    type: "Mantle",
    JMSName: "エテルネルマント",
    setEffectName: ["Eternel"],
    level: 250,
    baseStat: [
      { type: "AMA", amount: 9 },
      { type: "MainStat", amount: 50 },
      { type: "SubStat1", amount: 50 },
    ],
  }
];
