import type { IBaseItem } from "./baseitem";

export const pendants: Array<IBaseItem> = [
  {
    type: "Pendant",
    JMSName: "なし",
    level: 0,
    setEffectName: [],
    baseStat: [
    ],
  }, 
  {
    type: "Pendant",
    JMSName: "メーカーネイターペンダント",
    level: 120,
    setEffectName: ["Boss"],
    baseStat: [
      { type: "AMA", amount: 2 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
      { type: "SubStat2", amount: 10 },
      { type: "HP", amount: 250 },
      { type: "MP", amount: 250 },
    ],
  },
  
  {
    type: "Pendant",
    JMSName: "ドミネーターペンダント",
    level: 140,
    setEffectName: ["Boss"],
    baseStat: [
      { type: "AMA", amount: 3 },
      { type: "MainStat", amount: 20 },
      { type: "SubStat1", amount: 20 },
      { type: "SubStat2", amount: 20 },
      { type: "HP%", amount: 10 },
      { type: "MP%", amount: 10 },
    ],
  },

  {
    type: "Pendant",
    JMSName: "カオスホーンテイルのネックレス",
    level: 120,
    setEffectName: ["Boss"],
    baseStat: [
      { type: "AMA", amount: 2 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
      { type: "SubStat2", amount: 10 },
      { type: "HP%", amount: 10 },
      { type: "MP%", amount: 10 },
    ],
  },

  {
    type: "Pendant",
    JMSName: "ヴェラッド刻印ペンダント(最上級)",
    level: 150,
    setEffectName: ["Verrad"],
    baseStat: [
      { type: "AMA", amount: 5 },
      { type: "MainStat", amount: 28 },
      { type: "SubStat1", amount: 28 },
      { type: "SubStat2", amount: 28 },
      { type: "HP", amount: 300 },
      { type: "MP", amount: 300 },
    ],
  },

  {
    type: "Pendant",
    JMSName: "強力な魔性のペンダント",
    level: 160,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 2 },
      { type: "MainStat", amount: 35 },
      { type: "SubStat1", amount: 35 },
      { type: "SubStat2", amount: 35 },
    ],
  },

  {
    type: "Pendant",
    JMSName: "デイブレイクペンダント",
    level: 150,
    setEffectName: ["Dawn"],
    baseStat: [
      { type: "AMA", amount: 2 },
      { type: "MainStat", amount: 8 },
      { type: "SubStat1", amount: 8 },
      { type: "SubStat2", amount: 8 },
      { type: "HP%", amount: 5 },
    ],
  },

  {
    type: "Pendant",
    JMSName: "苦痛の根源",
    level: 160,
    setEffectName: ["Pitched"],
    baseStat: [
      { type: "AMA", amount: 3 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
      { type: "SubStat2", amount: 10 },
      { type: "HP%", amount: 5 },
    ],
  },

  {
    type: "Pendant",
    JMSName: "死の誓い",
    level: 160,
    setEffectName: ["Brilliance"],
    baseStat: [
      { type: "AMA", amount: 5 },
      { type: "MainStat", amount: 15 },
      { type: "SubStat1", amount: 15 },
      { type: "SubStat2", amount: 15 },
      { type: "HP%", amount: 5 },
    ],
  },
];
