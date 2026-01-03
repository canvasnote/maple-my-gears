import type { IBaseItem } from "./baseitem";

import noneimg from "@/assets/images/noneimg.png"
import fafnir from "@/assets/images/weapon/fafnir.png"
import absolab from "@/assets/images/weapon/absolab.png"
import arcaneshade from "@/assets/images/weapon/arcaneshade.png"
import genesis from "@/assets/images/weapon/genesis.png"
import destiny from "@/assets/images/weapon/destiny.webp"

export const weapons: Array<IBaseItem> = [
  {
    type: "Weapon",
    JMSName: "なし",
    images: {
      default: noneimg
    },
    level: 0,
    setEffectName: [],
    baseStat: [
    ],
  }, 

  {
    type: "Weapon",
    JMSName: "ファフニール武器",
    images: {
      default: fafnir
    },
    level: 150,
    setEffectName: ["Fafnir"],
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
    JMSName: "アブソレス武器",
    images: {
      default: absolab
    },
    setEffectName: ["Absolab"],
    level: 150,
    baseStat: [
      { type: "AMA", amount: -1, defindByJob: true },
      { type: "MainStat", amount: 60 },
      { type: "SubStat1", amount: 60 },
      { type: "IgnoreDefence", amount: 10 },
      { type: "BossDamage", amount: 30 },
    ],
  },

  {
    type: "Weapon",
    JMSName: "アーケイン武器",
    images: {
      default: arcaneshade
    },
    setEffectName: ["ArcaneShade"],
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
    JMSName: "ジェネシス武器",
    images: {
      default: genesis
    },
    setEffectName: ["Luckey", "Eternel"],
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
    JMSName: "ディスティニー武器",
    images: {
      default: destiny
    },
    setEffectName: ["Luckey", "Eternel"],
    level: 200,
    baseStat: [
      { type: "AMA", amount: -1, defindByJob: true },
      { type: "MainStat", amount: 190 },
      { type: "SubStat1", amount: 190 },
      { type: "IgnoreDefence", amount: 20 },
      { type: "BossDamage", amount: 30 },
      { type: "FinalDamage", amount: 10 },
    ],
  },
];
