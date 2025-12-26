import type { IBaseItem } from "./baseitem";

export const weapons: Array<IBaseItem> = [
  {
    type: "Weapon",
    name: "ファフニール武器",
    level: 150,
    baseStat: [
      { type: "AMA", amount: -1, defindByJob: true },
      { type: "MainStat", amount: 40 },
      { type: "SubStat1", amount: 40 },
      { type: "IgnoreDefence", amount: 10 },
      { type: "BossDamage", amount: 30 },
    ],
  },

  {
    type: "Weapon",
    name: "アブソレス武器",
    level: 150,
    baseStat: [
      { type: "AMA", amount: -1, defindByJob: true },
      { type: "MainStat", amount: 40 },
      { type: "SubStat1", amount: 40 },
      { type: "IgnoreDefence", amount: 10 },
      { type: "BossDamage", amount: 30 },
    ],
  },

  {
    type: "Weapon",
    name: "アーケイン武器",
    level: 200,
    baseStat: [
      { type: "AMA", amount: -1, defindByJob: true },
      { type: "MainStat", amount: 100 },
      { type: "SubStat1", amount: 100 },
      { type: "IgnoreDefence", amount: 20 },
      { type: "BossDamage", amount: 30 },
    ],
  },

  {
    type: "Weapon",
    name: "ジェネシス武器",
    level: 200,
    baseStat: [
      { type: "AMA", amount: -1, defindByJob: true },
      { type: "MainStat", amount: 150 },
      { type: "SubStat1", amount: 150 },
      { type: "IgnoreDefence", amount: 20 },
      { type: "BossDamage", amount: 30 },
      { type: "FinalDamage", amount: 10 },
    ],
  },

  {
    type: "Weapon",
    name: "ディスティニー武器",
    level: 200,
    baseStat: [
      { type: "AMA", amount: -1, defindByJob: true },
      { type: "MainStat", amount: 150 },
      { type: "SubStat1", amount: 150 },
      { type: "IgnoreDefence", amount: 20 },
      { type: "BossDamage", amount: 30 },
      { type: "FinalDamage", amount: 10 },
    ],
  },
];
