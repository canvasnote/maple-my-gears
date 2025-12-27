import type { IBaseItem } from "./baseitem";

export const gloves: Array<IBaseItem> = [
  {
    type: "Gloves",
    JMSName: "アブソ手袋",
    level: 160,
    setEffectName: ["Absolab"],
    baseStat: [
      { type: "AMA", amount: 5 },
      { type: "MainStat", amount: 20 },
      { type: "SubStat1", amount: 20 },
    ],
  },

  {
    type: "Gloves",
    JMSName: "アーケイン手袋",
    level: 200,
    setEffectName: ["Absolab"],
    baseStat: [
      { type: "AMA", amount: 9 },
      { type: "MainStat", amount: 40 },
      { type: "SubStat1", amount: 40 },
    ],
  },

  {
    type: "Gloves",
    JMSName: "エテルネル手袋",
    setEffectName: ["Eternel"],
    level: 250,
    baseStat: [
      { type: "AMA", amount: 12 },
      { type: "MainStat", amount: 55 },
      { type: "SubStat1", amount: 55 },
    ],
  }
];
