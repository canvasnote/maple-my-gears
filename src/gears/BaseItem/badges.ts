import type { IBaseItem } from "./baseitem";

export const badges: Array<IBaseItem> = [
  {
    type: "Badge",
    JMSName: "クリスタルウェントゥスバッジ",
    level: 130,
    setEffectName: ["Boss"],
    baseStat: [
      { type: "AMA", amount: 5 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
      { type: "SubStat2", amount: 10 },
    ],
  },

  {
    type: "Badge",
    JMSName: "七曜のバッジ",
    level: 100,
    setEffectName: ["MonsterPark"],
    baseStat: [
      { type: "AMA", amount: 7 },
      { type: "MainStat", amount: 7 },
      { type: "SubStat1", amount: 7 },
      { type: "SubStat2", amount: 7 },
      { type: "IgnoreDefence", amount: 10 },
    ],
  },

  {
    type: "Badge",
    JMSName: "オルカのバッジ(パッシブ無し)",
    level: 10,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 10 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
      { type: "SubStat2", amount: 10 },
    ],
  },

  {
    type: "Badge",
    JMSName: "オルカのバッジ(パッシブ有り)",
    level: 10,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 10 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
      { type: "SubStat2", amount: 10 },
      { type: "AMA%", amount: 5 },
    ],
  },

  {
    type: "Badge",
    JMSName: "創世のバッジ",
    level: 200,
    setEffectName: ["Pitched"],
    baseStat: [
      { type: "AMA", amount: 10 },
      { type: "MainStat", amount: 15 },
      { type: "SubStat1", amount: 15 },
      { type: "SubStat2", amount: 15 },
    ],
  },
];
