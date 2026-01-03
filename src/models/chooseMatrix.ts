import type { IBaseItem } from "@/gears/BaseItem/baseitem"
import type { SlotType } from "@/gears/Gearset/gearset"
import type { UGPreset } from "./UGPreset"
import type { Potential } from "@/gears/potential"
import type { BonusPotential } from "@/gears/bonuspotential"
import type { IStat } from "@/gears/stat"

export class ChooseMatrix{
    choose: Array<Choose> = []
}

export class Choose{
    slot: SlotType
    baseItemName: string
    UG: UGPreset | undefined
    starForce: number | undefined
    potential: Array<Potential> | undefined
    bonusPotential: Array<BonusPotential> | undefined
    additionalStat: Array<IStat>
    symbolLevel: number | undefined

    constructor(
        slot: SlotType, 
        baseItemName: string, 
        UG: UGPreset | undefined, 
        starForce: number | undefined, 
        potential: Array<Potential> | undefined, 
        bonusPotential: Array<BonusPotential> | undefined, 
        additionalStat: Array<IStat>,
        symbolLevel: number | undefined){
            this.slot = slot
            this.baseItemName = baseItemName
            this.UG = UG
            this.starForce = starForce
            this.potential = potential
            this.bonusPotential = bonusPotential
            this.additionalStat = additionalStat
            this.symbolLevel = symbolLevel
    }
}