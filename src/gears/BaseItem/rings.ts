import type { IBaseItem } from "./baseitem";

export const rings: Array<IBaseItem> = [
  {
    type: "Ring",
    JMSName: "イベント指輪(AMA25/All40)",
    level: 120,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 25 },
      { type: "MainStat", amount: 40 },
      { type: "SubStat1", amount: 40 },
      { type: "SubStat2", amount: 40 },
      { type: "HP", amount: 4000 },
      { type: "MP", amount: 4000 },
    ],
  },

  {
    type: "Ring",
    JMSName: "イベント指輪(AMA20/All20)",
    level: 120,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 20 },
      { type: "MainStat", amount: 20 },
      { type: "SubStat1", amount: 20 },
      { type: "SubStat2", amount: 20 },
      { type: "HP", amount: 2000 },
      { type: "MP", amount: 2000 },
    ],
  },

  {
    type: "Ring",
    JMSName: "ダーククリティカルリング",
    level: 120,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 20 },
      { type: "MainStat", amount: 20 },
      { type: "SubStat1", amount: 20 },
      { type: "SubStat2", amount: 20 },
      { type: "CriticalRate", amount: 15 },
      { type: "CriticalDamage", amount: 5 },
    ],
  },

  {
    type: "Ring",
    JMSName: "シルバーブロッサムリング",
    level: 110,
    setEffectName: ["Boss"],
    baseStat: [
      { type: "AMA", amount: 2 },
      { type: "MainStat", amount: 5 },
      { type: "SubStat1", amount: 5 },
      { type: "SubStat2", amount: 5 },
    ],
  },

  {
    type: "Ring",
    JMSName: "ヴェラッドリング(最上級)",
    level: 150,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 8 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
      { type: "SubStat2", amount: 10 },
      { type: "HP", amount: 250 },
      { type: "MP", amount: 250 },
    ],
  },

  {
    type: "Ring",
    JMSName: "シードリング(全種AMA4/All4)",
    level: 110,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 4 },
      { type: "MainStat", amount: 4 },
      { type: "SubStat1", amount: 4 },
      { type: "SubStat2", amount: 4 },
    ],
  },

  {
    type: "Ring",
    JMSName: "マイスターリング",
    level: 140,
    setEffectName: ["Meister"],
    baseStat: [
      { type: "AMA", amount: 1 },
      { type: "MainStat", amount: 5 },
      { type: "SubStat1", amount: 5 },
      { type: "SubStat2", amount: 5 },
      { type: "HP", amount: 200 },
      { type: "MP", amount: 200 },
    ],
  },

  {
    type: "Ring",
    JMSName: "強力な魔性の指輪",
    level: 160,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 3 },
      { type: "MainStat", amount: 4 },
      { type: "SubStat1", amount: 4 },
      { type: "SubStat2", amount: 4 },
      { type: "HP", amount: 800 },
      { type: "MP", amount: 800 },
    ],
  },

  {
    type: "Ring",
    JMSName: "ガーディアンエンジェルスライムリング",
    level: 160,
    setEffectName: ["Boss"],
    baseStat: [
      { type: "AMA", amount: 2 },
      { type: "MainStat", amount: 5 },
      { type: "SubStat1", amount: 5 },
      { type: "SubStat2", amount: 5 },
      { type: "HP", amount: 200 },
      { type: "MP", amount: 200 },
    ],
  },

  {
    type: "Ring",
    JMSName: "黎明のガーディアンエンジェルスライムリング",
    level: 160,
    setEffectName: ["Dawn"],
    baseStat: [
      { type: "AMA", amount: 2 },
      { type: "MainStat", amount: 5 },
      { type: "SubStat1", amount: 5 },
      { type: "SubStat2", amount: 5 },
      { type: "HP", amount: 200 },
      { type: "MP", amount: 200 },
    ],
  },

  {
    type: "Ring",
    JMSName: "凄まじい恐怖",
    level: 200,
    setEffectName: ["Pitched"],
    baseStat: [
      { type: "AMA", amount: 5 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
      { type: "SubStat2", amount: 10 },
      { type: "HP", amount: 500 },
      { type: "MP", amount: 500 },
    ],
  },

  {
    type: "Ring",
    JMSName: "根源の囁き",
    level: 250,
    setEffectName: ["Brilliance"],
    baseStat: [
      { type: "AMA", amount: 5 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
      { type: "SubStat2", amount: 10 },
      { type: "HP", amount: 500 },
      { type: "MP", amount: 500 },
    ],
  },
];
