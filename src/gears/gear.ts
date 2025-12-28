import type { IntRange } from "type-fest";

import type { Potential } from "./potential";
import type { BonusPotential } from "./bonuspotential";
import type { IStat } from "./stat";
import { baseItems } from "./BaseItem/baseitem";

export type GearType =
  // 3種の神器
  | "Weapon"
  | "SubWeapon"
  | "Embrem"
  // 防具1
  | "Head"
  | "FullCloth"
  | "Armour"
  | "Pants"
  // 防具2
  | "Shoulder"
  | "Mantle"
  | "Gloves"
  | "Boots"
  // アクセサリ
  | "Pendant"
  | "Ring"
  | "Belt"
  | "EarRing"
  | "Face"
  | "Eyes"
  | "Pocket"
  | "Badge"
  // "Valuables"にあるやつ
  | "Totem"
  | "Jewel"
  // シンボル
  | "ArcaneSymbol"
  | "AuthenticSymbol"
  | "GrandAuthenticSymbol"
  // ペット装備
  | "PetEquip"
  // その他
  | "Heart"
  | "Medal"
  | "Title";

// export const GearType = {
//     // 3種の神器
//     "Weapon": 1, "SubWeapon":2,  "Embrem":3,
//     // 防具1
//     "Head":4,  "FullCloth":5,  "Armour":6,  "Pants":7,
//     // 防具2
//     "Shoulder":8,  "Mantle":9,  "Gloves":10,  "Boots":11,
//     // アクセサリ
//     "Pendant":12,  "Ring":13,  "Belt":14,  "EarRing":15,  "Face":16,  "Eyes":17,  "Pocket":18,  "Badge":19,
//     // "Valuables"にあるやつ
//     "Totem":20,  "Jewel":21,
//     // シンボル
//     "ArcaneSymbol":22,  "AuthenticSymbol":23,  "GrandAuthenticSymbol":24
// } as const

export class Gear {
  type: GearType;
  name: string;
  level: IntRange<0, 251>;
  symbolLevel?: IntRange<1, 12>;
  baseStat: Array<IStat>;
  UG: Array<IStat>;
  potential: Array<Potential>;
  bonusPotential: Array<BonusPotential>;
  bonusStat: Array<IStat>;
  starForce: number;

  constructor(type: GearType, name: string){
    this.type = type
    this.name = name

    // 該当するベース装備を取得
    const matchedBaseItem = baseItems.filter((item, index) => {
      if (item.type === type && item.JMSName === name){ return true }
    })

    // console.log(matchedBaseItem)
    if (matchedBaseItem.length === 0 || matchedBaseItem.length > 1){ throw TypeError("指定された装備はありません: " + type + ", " + name)}
    
    const level = matchedBaseItem[0]?.level
    if (level != undefined){ this.level = level} else throw TypeError("指定された装備はありません: " + type + ", " + name)
    
    const baseStat = matchedBaseItem[0]?.baseStat
    if (baseStat != undefined){ this.baseStat = baseStat} else throw TypeError("指定された装備はありません: " + type + ", " + name)

    this.UG = []
    this.potential = []
    this.bonusPotential = []
    this.bonusStat = []
    this.starForce = 0
  }
}


