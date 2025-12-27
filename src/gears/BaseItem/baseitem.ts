import type { IntRange } from "type-fest"
import type { BonusPotential } from "../bonuspotential"
import type { GearType } from "../gear"
import type { Potential } from "../potential"
import type { IStat } from "../stat"
import type { ISetEffect } from "../seteffect"

export interface IBaseItem{
    type: GearType
    name: string
    level: IntRange<0, 251>
    baseStat: Array<IStat>,
    setEffect: ISetEffect
    // symbolLevel?: IntRange<1, 12>
    // UG: undefined
    // potential: undefined
    // bonusPotential: undefined
    // bonusStat: undefined
    // starForce: undefined
}