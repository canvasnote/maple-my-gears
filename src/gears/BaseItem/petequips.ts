import type { IBaseItem } from "./baseitem";

export const petequips: Array<IBaseItem> = [

  {
    type: "PetEquip",
    JMSName: "なし",
    level: 0,
    setEffectName: [],
    baseStat: [
    ],
  },

  {
    type: "PetEquip",
    JMSName: "攻撃力/魔力5",
    level: 0,
    setEffectName: [],
    baseStat: [
      {type: "AMA", amount: 5}
    ],
  },

  {
    type: "PetEquip",
    JMSName: "攻撃力/魔力10",
    level: 0,
    setEffectName: [],
    baseStat: [
      {type: "AMA", amount: 10}
    ],
  },
];
