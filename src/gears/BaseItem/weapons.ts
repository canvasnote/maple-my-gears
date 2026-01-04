import type { IBaseItem } from "./baseitem";

import noneimg from "@/assets/images/noneimg.png"
import fafnir from "@/assets/images/weapon/fafnir.png"
import absolab from "@/assets/images/weapon/absolab.png"
import arcaneshade from "@/assets/images/weapon/arcaneshade.png"
import genesis from "@/assets/images/weapon/genesis.png"
import destiny from "@/assets/images/weapon/destiny.webp"
import { UG_15 as UG_15_Weapon, UG_30 as UG_30_Weapon, UG_Magical } from "@/models/UGPreset/weapon";
import { StarForce150LV, StarForce160LV, StarForce200LV, StarForce_None, StarForceDisteny, StarForceGenesis } from "@/models/starforce";
import { Potential_None, Potential_Weapon_150LV, Potential_Weapon_160LV, Potential_Weapon_200LV, Potential_Weapon_Destiny, Potential_Weapon_Genesis } from "@/models/PotentialPreset/weapon";

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
    UGPreset: [

    ],
    StarForcePreset: [
      StarForce_None
    ],
    PotentialPreset: [
      Potential_None
    ]
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
    UGPreset: [
      UG_Magical,
      UG_15_Weapon,
      UG_30_Weapon
    ],
    StarForcePreset: [
      ...StarForce150LV
    ],
    PotentialPreset: [
      ...Potential_Weapon_150LV
    ]
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
    UGPreset: [
      UG_Magical,
      UG_15_Weapon,
      UG_30_Weapon
    ],
    StarForcePreset: [
      ...StarForce160LV
    ],
    PotentialPreset: [
      ...Potential_Weapon_160LV
    ]
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
    UGPreset: [
      UG_Magical,
      UG_15_Weapon,
      UG_30_Weapon
    ],
    StarForcePreset: [
      ...StarForce200LV
    ],
    PotentialPreset: [
      ...Potential_Weapon_200LV
    ]
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
    UGPreset: [
      UG_15_Weapon,
    ],
    StarForcePreset: [
      ...StarForceGenesis
    ],
    PotentialPreset: [
      ...Potential_Weapon_Genesis
    ]
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
    UGPreset: [
      UG_15_Weapon,
    ],
    StarForcePreset: [
      ...StarForceDisteny
    ],
    PotentialPreset: [
      ...Potential_Weapon_Destiny
    ]
  },
];
