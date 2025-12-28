import type { IBaseItem } from "./baseitem";

export const belts: Array<IBaseItem> = [
  {
    type: "Belt",
    JMSName: "なし",
    level: 0,
    setEffectName: [],
    baseStat: [
    ],
  }, 

  {
    type: "Belt",
    JMSName: "ゴールデンクローバーベルト",
    level: 140,
    setEffectName: ["Boss"],
    baseStat: [
      { type: "AMA", amount: 1 },
      { type: "MainStat", amount: 15 },
      { type: "SubStat1", amount: 15 },
      { type: "SubStat2", amount: 15 },
      { type: "HP", amount: 150 },
      { type: "MP", amount: 150 },
    ],
  },
  
  {
    type: "Belt",
    JMSName: "ヴェラッドベルト(最上級)",
    level: 150,
    setEffectName: ["Verrad"],
    baseStat: [
      { type: "AMA", amount: 35 },
      { type: "MainStat", amount: 60 },
      { type: "SubStat1", amount: 60 },
      { type: "SubStat2", amount: 60 },
      { type: "HP", amount: 200 },
      { type: "MP", amount: 200 },
    ],
  },

  {
    type: "Belt",
    JMSName: "夢幻のベルト",
    level: 200,
    setEffectName: ["Pitched"],
    baseStat: [
      { type: "AMA", amount: 6 },
      { type: "MainStat", amount: 50 },
      { type: "SubStat1", amount: 50 },
      { type: "SubStat2", amount: 50 },
      { type: "HP", amount: 150 },
      { type: "MP", amount: 150 },
    ],
  },
];
