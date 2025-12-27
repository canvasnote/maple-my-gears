import type { IntRange } from "type-fest"
import type { BonusPotential } from "../bonuspotential"
import type { GearType } from "../gear"
import type { Potential } from "../potential"
import type { IStat } from "../stat"
import type { ISetEffect, SetEffectName } from "../seteffect"
import { weapons } from "./weapons"
import { heads } from "./heads"
import { armours } from "./armours"
import { pants } from "./pants"
import { shoulders } from "./shoulders"
import { mantles } from "./mantles"
import { gloves } from "./gloves"
import { boots } from "./boots"
import { subweapons } from "./subweapon"
import { embrems } from "./emblems"

export interface IBaseItem{
    type: GearType
    JMSName: string
    level: IntRange<0, 251>
    baseStat: Array<IStat>,
    setEffectName: Array<SetEffectName>
    // symbolLevel?: IntRange<1, 12>
    // UG: undefined
    // potential: undefined
    // bonusPotential: undefined
    // bonusStat: undefined
    // starForce: undefined
}

export const baseItems: Array<IBaseItem> = [
    ...weapons, 
    ...subweapons,
    ...embrems,
    ...heads, 
    ...armours,
    ...pants,
    ...shoulders,
    ...mantles,
    ...gloves,
    ...boots,
]