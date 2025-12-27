import type { IBaseItem } from "./baseitem";

export const earrings: Array<IBaseItem> = [
  {
    type: "EarRing",
    JMSName: "ヴェラッドイヤリング",
    level: 150,
    setEffectName: ["Verrad"],
    baseStat: [
      { type: "AMA", amount: 10 },
      { type: "MainStat", amount: 15 },
      { type: "SubStat1", amount: 15 },
      { type: "SubStat2", amount: 15 },
      { type: "HP", amount: 150 },
      { type: "MP", amount: 150 },
    ],
  },
  
  {
    type: "EarRing",
    JMSName: "デアセデュースイヤリング",
    level: 130,
    setEffectName: ["Boss"],
    baseStat: [
      { type: "AMA", amount: 2 },
      { type: "MainStat", amount: 5 },
      { type: "SubStat1", amount: 5 },
      { type: "SubStat2", amount: 5 },
    ],
  },

  {
    type: "EarRing",
    JMSName: "エステライヤリング",
    level: 160,
    setEffectName: ["Dawn"],
    baseStat: [
      { type: "AMA", amount: 2 },
      { type: "MainStat", amount: 7 },
      { type: "SubStat1", amount: 7 },
      { type: "SubStat2", amount: 7 },
      { type: "HP", amount: 300 },
      { type: "MP", amount: 300 },
    ],
  },

  {
    type: "EarRing",
    JMSName: "コマンダーフォースイヤリング",
    level: 200,
    setEffectName: ["Pitched"],
    baseStat: [
      { type: "AMA", amount: 5 },
      { type: "MainStat", amount: 7 },
      { type: "SubStat1", amount: 7 },
      { type: "SubStat2", amount: 7 },
      { type: "HP", amount: 500 },
      { type: "MP", amount: 500 },
    ],
  },
];
