import type { IBaseItem } from "./baseitem";

export const embrems: Array<IBaseItem> = [
  {
    type: "Embrem",
    JMSName: "なし",
    level: 0,
    setEffectName: [],
    baseStat: [
    ],
  }, 

  {
    type: "Embrem",
    JMSName: "ゴールドエンブレム",
    level: 100,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 2 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
    ],
  },{
    type: "Embrem",
    JMSName: "ハイブリッドハート",
    level: 100,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 2 },
      { type: "HP", amount: 300 },
      { type: "MP", amount: 100 },
    ],
  },
  {
    type: "Embrem",
    JMSName: "ミトラの怒り",
    level: 200,
    setEffectName: ["Pitched"],
    baseStat: [
      { type: "AMA", amount: 2 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },],
  },
];
