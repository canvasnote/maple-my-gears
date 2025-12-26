import type { IBaseItem } from "./baseitem";

export const subweapons: Array<IBaseItem> = [
  {
    type: "SubWeapon",
    name: "補助武器(通常)",
    level: 100,
    baseStat: [
      { type: "AMA", amount: 3 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
    ],
  },
  {
    type: "SubWeapon",
    name: "補助武器(ブラック)",
    level: 100,
    baseStat: [
      { type: "AMA", amount: 5 },
      { type: "MainStat", amount: 8 },
      { type: "SubStat1", amount: 8 },
    ],
  },
  {
    type: "SubWeapon",
    name: "補助武器(ノウヒメ)",
    level: 100,
    baseStat: [
      { type: "AMA", amount: 9 },
      { type: "MainStat", amount: 14 },
      { type: "SubStat1", amount: 14 },
    ],
  },
  {
    type: "SubWeapon",
    name: "130盾",
    level: 130,
    baseStat: [
      { type: "AMA", amount: "" },
      { type: "MainStat", amount: "" },
      { type: "SubStat1", amount: "" },
    ],
  },
  {
    type: "SubWeapon",
    name: "ファフニールラピッドフエッジ",
    level: 150,
    baseStat: [
      { type: "AMA", amount: 81 },
      { type: "MainStat", amount: 40 },
    ],
  },
  {
    type: "SubWeapon",
    name: "アブソレスブレイド",
    level: 160,
    baseStat: [
      { type: "AMA", amount: 97 },
      { type: "MainStat", amount: 40 },
      { type: "BossDamage", amount: 30 },
      { type: "IgnoreDefence", amount: 10 },
    ],
  },
  {
    type: "SubWeapon",
    name: "スイングウォーターブレイド",
    level: 160,
    baseStat: [
      { type: "AMA", amount: 86 },
    ],
  },
  {
    type: "SubWeapon",
    name: "アーケインシェードブレイド",
    level: 200,
    baseStat: [
      { type: "AMA", amount: 140 },
    ],
  },
];
