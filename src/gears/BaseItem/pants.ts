import type { IBaseItem } from "./baseitem";

export const pants: Array<IBaseItem> = [
  {
    type: "Pants",
    JMSName: "なし",
    level: 0,
    setEffectName: [],
    baseStat: [
    ],
  }, 
  {
    type: "Pants",
    JMSName: "アビス鎧下",
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
    type: "Pants",
    JMSName: "エテルネル鎧下",
    setEffectName: ["Eternel"],
    level: 250,
    baseStat: [
      { type: "AMA", amount: 6 },
      { type: "MainStat", amount: 50 },
      { type: "SubStat1", amount: 50 },
      { type: "IgnoreDefence", amount: 5 },
    ],
  }
];
