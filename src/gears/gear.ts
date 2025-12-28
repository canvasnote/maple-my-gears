import type { IntRange } from "type-fest";

import type { Potential } from "./potential";
import type { BonusPotential } from "./bonuspotential";
import type { IStat } from "./stat";

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

export interface IGear {
  type: GearType | undefined;
  name: string | undefined;
  level: IntRange<0, 251> | undefined;
  symbolLevel?: IntRange<1, 12>;
  baseStat: Array<IStat>;
  UG: Array<IStat>;
  potential: Array<Potential>;
  bonusPotential: Array<BonusPotential>;
  bonusStat: Array<IStat>;
  starForce: number;
}


