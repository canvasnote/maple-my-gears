import type { IBaseItem } from "./baseitem";

export const subweapons: Array<IBaseItem> = [
  {
    type: "SubWeapon",
    JMSName: "なし",
    level: 0,
    setEffectName: [],
    baseStat: [
    ],
  }, 
  {
    type: "SubWeapon",
    JMSName: "補助武器(通常)",
    level: 100,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 3 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
    ],
  },
  {
    type: "SubWeapon",
    JMSName: "補助武器(通常, 能力なし--メルセデス等)",
    level: 100,
    setEffectName: [],
    baseStat: [],
  },
  {
    type: "SubWeapon",
    JMSName: "補助武器(ブラック)",
    level: 100,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 5 },
      { type: "MainStat", amount: 8 },
      { type: "SubStat1", amount: 8 },
    ],
  },
  {
    type: "SubWeapon",
    JMSName: "補助武器(ノウヒメ)",
    level: 100,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 9 },
      { type: "MainStat", amount: 14 },
      { type: "SubStat1", amount: 14 },
    ],
  },
  {
    type: "SubWeapon",
    JMSName: "130(ダイモス)盾",
    level: 130,
    setEffectName: [],
    baseStat: [
      { type: "MainStat", amount: 10 },
    ],
  },
  {
    type: "SubWeapon",
    JMSName: "ルインフォースシールド",
    level: 100,
    setEffectName: [],
    baseStat: [
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
      { type: "HP", amount: 560 },
      { type: "FinalDamage", amount: 10 },
    ],
  },
  {
    type: "SubWeapon",
    JMSName: "ラヴァナイフ",
    level: 150,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 15 },
      { type: "MainStat", amount: 2 },
    ],
  },
  {
    type: "SubWeapon",
    JMSName: "アブソレスブレイド",
    level: 160,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 97 },
      { type: "MainStat", amount: 40 },
      { type: "BossDamage", amount: 30 },
      { type: "IgnoreDefence", amount: 10 },
    ],
  },
  {
    type: "SubWeapon",
    JMSName: "スイングウォーターブレイド",
    level: 160,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 86 },
    ],
  },
  {
    type: "SubWeapon",
    JMSName: "アーケインシェードブレイド",
    level: 200,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 140 },
    ],
  },
  {
    type: "SubWeapon",
    JMSName: "ラピス 7型(170LV/ベータ)",
    level: 170,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 173 },
      { type: "MainStat", amount: 40 },
      { type: "SubStat1", amount: 40 },
      { type: "IgnoreDefence", amount: 10 },
      { type: "BossDamage", amount: 30 },
    ],
  },
  {
    type: "SubWeapon",
    JMSName: "ラピス 8型(180LV/アブソレス/ベータ)",
    level: 180,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 207 },
      { type: "MainStat", amount: 60 },
      { type: "SubStat1", amount: 60 },
      { type: "IgnoreDefence", amount: 10 },
      { type: "BossDamage", amount: 30 },
    ],
  },
  {
    type: "SubWeapon",
    JMSName: "ラピス 9型(200LV/アーケイン/ベータ)",
    level: 200,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 297 },
      { type: "MainStat", amount: 100 },
      { type: "SubStat1", amount: 100 },
      { type: "IgnoreDefence", amount: 20 },
      { type: "BossDamage", amount: 30 },
    ],
  },
  {
    type: "SubWeapon",
    JMSName: "ラピス 10型(200LV/ジェネシス/ベータ)",
    level: 200,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 342 },
      { type: "MainStat", amount: 150 },
      { type: "SubStat1", amount: 150 },
      { type: "IgnoreDefence", amount: 20 },
      { type: "BossDamage", amount: 30 },
    ],
  },
{
    type: "SubWeapon",
    JMSName: "ディスティニーラピス(250LV/ベータ)",
    level: 250,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 375 },
      { type: "MainStat", amount: 190 },
      { type: "SubStat1", amount: 190 },
      { type: "IgnoreDefence", amount: 20 },
      { type: "BossDamage", amount: 30 },
    ],
  },
  {
    type: "SubWeapon",
    JMSName: "アブソレス扇(UGとスタフォと転生は魔力の半分を入力してください)",
    level: 160,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 241 / 2 },
    ],
  },
  {
    type: "SubWeapon",
    JMSName: "アーケインシェード扇(UGとスタフォと転生は魔力の半分を入力してください)",
    level: 200,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 347 / 2 },
    ],
  },
];
