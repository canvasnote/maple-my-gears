import type { IBaseItem } from "./baseitem";

export const eyes: Array<IBaseItem> = [
  {
    type: "Eyes",
    JMSName: "アクアティックレター目飾り",
    level: 100,
    setEffectName: ["Boss"],
    baseStat: [
      { type: "AMA", amount: 1 },
      { type: "MainStat", amount: 6 },
      { type: "SubStat1", amount: 6 },
      { type: "SubStat2", amount: 6 },
    ],
  },

  {
    type: "Eyes",
    JMSName: "ブラックビーンマーク",
    level: 135,
    setEffectName: ["Boss"],
    baseStat: [
      { type: "AMA", amount: 1 },
      { type: "MainStat", amount: 7 },
      { type: "SubStat1", amount: 7 },
      { type: "SubStat2", amount: 7 },
    ],
  },

  {
    type: "Eyes",
    JMSName: "ビシャスプラントマーク",
    level: 145,
    setEffectName: ["Boss"],
    baseStat: [
      { type: "AMA", amount: 1 },
      { type: "MainStat", amount: 8 },
      { type: "SubStat1", amount: 8 },
      { type: "SubStat2", amount: 8 },
    ],
  },

  {
    type: "Eyes",
    JMSName: "魔力が宿った眼帯",
    level: 160,
    setEffectName: ["Pitched"],
    baseStat: [
      { type: "AMA", amount: 3 },
      { type: "MainStat", amount: 15 },
      { type: "SubStat1", amount: 15 },
      { type: "SubStat2", amount: 15 },
    ],
  },
];
