import { UG_Magical_Blade_Zero, UG_15_SubWeapon, UG_30_SubWeapon, UG_Magical_Kanna, UG_15_Kanna, UG_30_Kanna, UG_None_SubWeapon } from "@/models/UGPreset/subweapon";
import type { IBaseItem } from "./baseitem";

import noneimg from "@/assets/images/noneimg.png"
import absolab_blade from "@/assets/images/SubWeapon/absolab_blade.png"
import absolab_fan from "@/assets/images/SubWeapon/absolab_fan.png"
import arcaneshade_blade from "@/assets/images/SubWeapon/arcaneshade_blade.png"
import arcaneshade_fan from "@/assets/images/SubWeapon/arcaneshade_fan.png"
import black from "@/assets/images/SubWeapon/black.png"
import daimos from "@/assets/images/SubWeapon/daimos.png"
import fafnir_fan from "@/assets/images/SubWeapon/fafnir_fan.png"
import lapis_7 from "@/assets/images/SubWeapon/lapis_7.png"
import lapis_8 from "@/assets/images/SubWeapon/lapis_8.png"
import lapis_9 from "@/assets/images/SubWeapon/lapis_9.png"
import lapis_destiny from "@/assets/images/SubWeapon/lapis_destiny.png"
import lapis_genesis from "@/assets/images/SubWeapon/lapis_genesis.png"
import normal from "@/assets/images/SubWeapon/normal.png"
import normal_nostat from "@/assets/images/SubWeapon/normal_nostat.png"
import nouhime from "@/assets/images/SubWeapon/nouhime.png"
import rava_knife from "@/assets/images/SubWeapon/rava_knife.png"
import ruinforce from "@/assets/images/SubWeapon/ruinforce.png"
import swingwater_blade from "@/assets/images/SubWeapon/swingwater_blade.png"
import { StarForce120LV, StarForce130LV, StarForce160LV, StarForce200LV, StarForce_None, StarForceDisteny as StarForceDestiny, StarForceGenesis } from "@/models/starforce";

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
    ],
    StarForcePresets: [
      StarForce_None
    ]
  }, 
  {
    type: "SubWeapon",
    JMSName: "補助武器(通常)",
    images: {
      default: normal
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
    ],
    StarForcePresets: [
      StarForce_None
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "補助武器(通常, 能力なし--メルセデス等)",
    images: {
      default: normal_nostat
    },
    level: 100,
    setEffectName: [],
    baseStat: [],
    UGPreset: [
      UG_None_SubWeapon
    ],
    StarForcePresets: [
      StarForce_None
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "補助武器(ブラック)",
    images: {
      default: black
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
    ],
    StarForcePresets: [
      StarForce_None
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "補助武器(ノウヒメ)",
    images: {
      default: nouhime
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
    ],
    StarForcePresets: [
      StarForce_None
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "130(ダイモス)盾",
    images: {
      default: daimos
    },
    level: 130,
    setEffectName: [],
    baseStat: [
      { type: "MainStat", amount: 10 },
    ],
    UGPreset: [
      UG_15_SubWeapon,
      UG_30_SubWeapon
    ],
    StarForcePresets: [
      ...StarForce130LV
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "ルインフォースシールド",
    images: {
      default: ruinforce
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

    ],
    StarForcePresets: [
      StarForce_None
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "ラヴァナイフ",
    images: {
      default: rava_knife
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
    ],
    StarForcePresets: [
      ...StarForce120LV
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "アブソレスブレイド",
    images: {
      default: absolab_blade
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
    ],
    StarForcePresets: [
      ...StarForce160LV
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "スイングウォーターブレイド",
    images: {
      default: swingwater_blade
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
    ],
    StarForcePresets: [
      ...StarForce160LV
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "アーケインシェードブレイド",
    images: {
      default: arcaneshade_blade
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
    ],
    StarForcePresets: [
      ...StarForce200LV
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "ラピス 7型(170LV/ベータ)",
    images: {
      default: lapis_7
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
    ],
    StarForcePresets: [
      ...StarForce160LV
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "ラピス 8型(180LV/アブソレス/ベータ)",
    images: {
      default: lapis_8
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
    ],
    StarForcePresets: [
      ...StarForce160LV
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "ラピス 9型(200LV/アーケイン/ベータ)",
    images: {
      default: lapis_9
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
    ],
    StarForcePresets: [
      ...StarForce200LV
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "ラピス 10型(200LV/ジェネシス/ベータ)",
    images: {
      default: lapis_genesis
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
    ],
    StarForcePresets: [
      ...StarForceGenesis
    ]
  },
{
    type: "SubWeapon",
    JMSName: "ディスティニーラピス(250LV/ベータ)",
    images: {
      default: lapis_destiny
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
    ],
    StarForcePresets: [
      ...StarForceDestiny
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "アブソレス扇(UGとスタフォと転生は魔力の半分を入力してください)",
    images: {
      default: absolab_fan
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
    ],
    StarForcePresets: [
      ...StarForce160LV
    ]
  },
  {
    type: "SubWeapon",
    JMSName: "アーケインシェード扇(UGとスタフォと転生は魔力の半分を入力してください)",
    images: {
      default: arcaneshade_fan
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
    ],
    StarForcePresets: [
      ...StarForce160LV
    ]
  },
];
