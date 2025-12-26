import type { IntRange } from 'type-fest'

import type { Potential } from "./potential"
import type { BonusPotential } from "./bonuspotential"
import type { IStat } from "./stat"


export type GearType = 
    // 3種の神器
    "Weapon" | "SubWeapon" | "Embrem" |
    // 防具1
    "Head" | "FullCloth" | "Armor" | "Pants" | 
    // 防具2
    "Shoulder" | "Mantle" | "Gloves" | "Boots" |
    // アクセサリ
    "Pendant" | "Ring" | "Belt" | "EarRing" | "Face" | "Eyes" | "Pocket" | "Badge" |
    // "Valuables"にあるやつ
    "Totem" | "Jewel" |
    // シンボル
    "ArcaneSymbol" | "AuthenticSymbol" | "GrandAuthenticSymbol"

interface IGear{
    type: GearType | undefined
    name: string | undefined
    level: IntRange<0, 251> | undefined
    symbolLevel?: IntRange<1, 12>
    baseStat: Array<IStat>
    UG: Array<IStat>
    potential: Array<Potential>
    bonusPotential: Array<BonusPotential>
    bonusStat: Array<IStat>
    starForce: number
}

interface IGearSets{
    slots: Array<IGearSet>
}

interface IGearSet{
    slots: Array<IGearSlot>
}

interface IGearSlot{
    gear: IGear
}