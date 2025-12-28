import type { IBaseItem } from "./baseitem";

export const pockets: Array<IBaseItem> = [
  {
    type: "Pocket",
    JMSName: "なし",
    level: 0,
    setEffectName: [],
    baseStat: [
    ],
  }, 
  {
    type: "Pocket",
    JMSName: "ピンクの聖杯",
    level: 140,
    setEffectName: ["Boss"],
    baseStat: [
      { type: "AMA", amount: 5 },
      { type: "MainStat", amount: 5 },
      { type: "SubStat1", amount: 5 },
      { type: "SubStat2", amount: 5 },
      { type: "HP", amount: 50 },
      { type: "MP", amount: 50 },
    ],
  },

  {
    type: "Pocket",
    JMSName: "ザ・クロス",
    level: 160,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 9 },
      { type: "MainStat", amount: 9 },
      { type: "SubStat1", amount: 9 },
      { type: "SubStat2", amount: 9 },
      { type: "MP", amount: 300 },
    ],
  },

  {
    type: "Pocket",
    JMSName: "呪われた魔導書",
    level: 160,
    setEffectName: ["Pitched"],
    baseStat: [
      { type: "AMA", amount: 10 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
      { type: "SubStat2", amount: 10 },
      { type: "HP", amount: 100 },
      { type: "MP", amount: 100 },
    ],
  },  
];
