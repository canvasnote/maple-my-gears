import { UG_Magical_Blade_Zero, UG_15_SubWeapon, UG_30_SubWeapon, UG_Magical_Kanna, UG_15_Kanna, UG_30_Kanna, UG_None_SubWeapon } from "@/models/UGPreset/subweapon";
import type { IBaseItem } from "./baseitem";

import noneimg from "@/assets/images/noneimg.png"

export const subweapons: Array<IBaseItem> = [
  {
    type: "SubWeapon",
    JMSName: "なし",
    images: {
      default: noneimg
    },
    level: 0,
    setEffectName: [],
    baseStat: [
    ],
    UGPreset: [
      UG_None_SubWeapon
    ]
  }, 
  {
    type: "SubWeapon",
    JMSName: "補助武器(通常)",
    images: {
      default: noneimg
    },
    level: 100,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 3 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
    ],
    UGPreset: [
      UG_None_SubWeapon
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "補助武器(通常, 能力なし--メルセデス等)",
    images: {
      default: noneimg
    },
    level: 100,
    setEffectName: [],
    baseStat: [],
    UGPreset: [
      UG_None_SubWeapon
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "補助武器(ブラック)",
    images: {
      default: noneimg
    },
    level: 100,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 5 },
      { type: "MainStat", amount: 8 },
      { type: "SubStat1", amount: 8 },
    ],
    UGPreset: [
      UG_None_SubWeapon
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "補助武器(ノウヒメ)",
    images: {
      default: noneimg
    },
    level: 100,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 9 },
      { type: "MainStat", amount: 14 },
      { type: "SubStat1", amount: 14 },
    ],
    UGPreset: [
      UG_None_SubWeapon
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "130(ダイモス)盾",
    images: {
      default: noneimg
    },
    level: 130,
    setEffectName: [],
    baseStat: [
      { type: "MainStat", amount: 10 },
    ],
    UGPreset: [
      UG_15_SubWeapon,
      UG_30_SubWeapon
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "ルインフォースシールド",
    images: {
      default: noneimg
    },
    level: 100,
    setEffectName: [],
    baseStat: [
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
      { type: "HP", amount: 560 },
      { type: "FinalDamage", amount: 10 },
    ],
    UGPreset: [

    ]
  },
  {
    type: "SubWeapon",
    JMSName: "ラヴァナイフ",
    images: {
      default: noneimg
    },
    level: 150,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 15 },
      { type: "MainStat", amount: 2 },
    ],
    UGPreset: [
      UG_15_SubWeapon,
      UG_30_SubWeapon
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "アブソレスブレイド",
    images: {
      default: noneimg
    },
    level: 160,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 97 },
      { type: "MainStat", amount: 40 },
      { type: "BossDamage", amount: 30 },
      { type: "IgnoreDefence", amount: 10 },
    ],
    UGPreset: [
      UG_Magical_Blade_Zero,
      UG_15_SubWeapon,
      UG_30_SubWeapon
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "スイングウォーターブレイド",
    images: {
      default: noneimg
    },
    level: 160,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 86 },
    ],
    UGPreset: [
      UG_Magical_Blade_Zero,
      UG_15_SubWeapon,
      UG_30_SubWeapon
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "アーケインシェードブレイド",
    images: {
      default: noneimg
    },
    level: 200,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 140 },
    ],
    UGPreset: [
      UG_Magical_Blade_Zero,
      UG_15_SubWeapon,
      UG_30_SubWeapon
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "ラピス 7型(170LV/ベータ)",
    images: {
      default: noneimg
    },
    level: 170,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 173 },
      { type: "MainStat", amount: 40 },
      { type: "SubStat1", amount: 40 },
      { type: "IgnoreDefence", amount: 10 },
      { type: "BossDamage", amount: 30 },
    ],
    UGPreset: [
      UG_Magical_Blade_Zero,
      UG_15_SubWeapon,
      UG_30_SubWeapon
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "ラピス 8型(180LV/アブソレス/ベータ)",
    images: {
      default: noneimg
    },
    level: 180,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 207 },
      { type: "MainStat", amount: 60 },
      { type: "SubStat1", amount: 60 },
      { type: "IgnoreDefence", amount: 10 },
      { type: "BossDamage", amount: 30 },
    ],
    UGPreset: [
      UG_Magical_Blade_Zero,
      UG_15_SubWeapon,
      UG_30_SubWeapon
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "ラピス 9型(200LV/アーケイン/ベータ)",
    images: {
      default: noneimg
    },
    level: 200,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 297 },
      { type: "MainStat", amount: 100 },
      { type: "SubStat1", amount: 100 },
      { type: "IgnoreDefence", amount: 20 },
      { type: "BossDamage", amount: 30 },
    ],
    UGPreset: [
      UG_Magical_Blade_Zero,
      UG_15_SubWeapon,
      UG_30_SubWeapon
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "ラピス 10型(200LV/ジェネシス/ベータ)",
    images: {
      default: noneimg
    },
    level: 200,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 342 },
      { type: "MainStat", amount: 150 },
      { type: "SubStat1", amount: 150 },
      { type: "IgnoreDefence", amount: 20 },
      { type: "BossDamage", amount: 30 },
    ],
    UGPreset: [
      UG_15_SubWeapon,
    ]
  },
{
    type: "SubWeapon",
    JMSName: "ディスティニーラピス(250LV/ベータ)",
    images: {
      default: noneimg
    },
    level: 250,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 375 },
      { type: "MainStat", amount: 190 },
      { type: "SubStat1", amount: 190 },
      { type: "IgnoreDefence", amount: 20 },
      { type: "BossDamage", amount: 30 },
    ],
    UGPreset: [
      UG_15_SubWeapon,
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "アブソレス扇(UGとスタフォと転生は魔力の半分を入力してください)",
    images: {
      default: noneimg
    },
    level: 160,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 241 / 2 },
    ],
    UGPreset: [
      UG_Magical_Kanna,
      UG_15_Kanna,
      UG_30_Kanna
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "アーケインシェード扇(UGとスタフォと転生は魔力の半分を入力してください)",
    images: {
      default: noneimg
    },
    level: 200,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 347 / 2 },
    ],
    UGPreset: [
      UG_Magical_Kanna,
      UG_15_Kanna,
      UG_30_Kanna
    ]
  },
];
