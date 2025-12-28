import type { IBaseItem } from "./baseitem";

export const totems: Array<IBaseItem> = [
  {
    type: "Totem",
    JMSName: "なし",
    level: 0,
    setEffectName: [],
    baseStat: [
    ],
  }, 
  {
    type: "Totem",
    JMSName: "アフターランド(メインステ)",
    level: 0,
    setEffectName: ["AfterLand"],
    baseStat: [
      { type: "AMA", amount: 7 },
      { type: "MainStat", amount: 20 },
    ],
  },

  {
    type: "Totem",
    JMSName: "アフターランド(サブステ)",
    level: 0,
    setEffectName: ["AfterLand"],
    baseStat: [
      { type: "AMA", amount: 7 },
      { type: "SubStat1", amount: 20 },
    ],
  },

  {
    type: "Totem",
    JMSName: "アフターランド(ステ関係なし)",
    level: 0,
    setEffectName: ["AfterLand"],
    baseStat: [
      { type: "AMA", amount: 7 },
    ],
  },

  {
    type: "Totem",
    JMSName: "ギルド城ブローチ",
    level: 0,
    setEffectName: ["GuildCastle"],
    baseStat: [
      { type: "AMA", amount: 7 },
      { type: "MainStat", amount: 7 },
      { type: "SubStat1", amount: 7 },
      { type: "SubStat2", amount: 7 },
    ],
  },

  {
    type: "Totem",
    JMSName: "シャオショウ精霊トーテム",
    level: 0,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 8 },
      { type: "MainStat", amount: 18 },
      { type: "SubStat1", amount: 18 },
      { type: "SubStat2", amount: 18 },
    ],
  },

  {
    type: "Totem",
    JMSName: "フリーレンのトーテム",
    level: 0,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 10 },
      { type: "MainStat", amount: 20 },
      { type: "SubStat1", amount: 20 },
      { type: "SubStat2", amount: 20 },
    ],
  },

  {
    type: "Totem",
    JMSName: "古代石板のレプリカ",
    level: 200,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 5 },
      { type: "MainStat", amount: 20 },
      { type: "SubStat1", amount: 20 },
      { type: "SubStat2", amount: 20 },
    ],
  },
];
