import type { IBaseItem } from "./baseitem";

export const faces: Array<IBaseItem> = [
  {
    type: "Face",
    JMSName: "なし",
    level: 0,
    setEffectName: [],
    baseStat: [
    ],
  }, 

  {
    type: "Face",
    JMSName: "凝縮された力の結晶石",
    level: 110,
    setEffectName: ["Boss"],
    baseStat: [
      { type: "AMA", amount: 5 },
      { type: "MainStat", amount: 5 },
      { type: "SubStat1", amount: 5 },
      { type: "SubStat2", amount: 5 },
    ],
  },
  
  {
    type: "Face",
    JMSName: "トワイライトマーク",
    level: 140,
    setEffectName: ["Dawn"],
    baseStat: [
      { type: "AMA", amount: 5 },
      { type: "MainStat", amount: 5 },
      { type: "SubStat1", amount: 5 },
      { type: "SubStat2", amount: 5 },
    ],
  },

  {
    type: "Face",
    JMSName: "スイングウォータータトゥー",
    level: 160,
    setEffectName: [],
    baseStat: [
      { type: "MainStat", amount: 5 },
      { type: "SubStat1", amount: 5 },
      { type: "SubStat2", amount: 5 },
      { type: "HP", amount: 120 },
      { type: "MP", amount: 120 },
    ],
  },

  {
    type: "Face",
    JMSName: "ミスティック紋様",
    level: 150,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 5 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
      { type: "SubStat2", amount: 10 },
      { type: "HP", amount: 200 },
      { type: "MP", amount: 200 },
    ],
  },

  {
    type: "Face",
    JMSName: "ルージュコントロールマシンマーク",
    level: 160,
    setEffectName: ["Pitched"],
    baseStat: [
      { type: "AMA", amount: 10 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
      { type: "SubStat2", amount: 10 },
    ],
  },
];
