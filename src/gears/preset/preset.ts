import type { Updater } from "use-immer"
import { baseItems, getBaseItemByName } from "../BaseItem/baseitem"
import type { BonusPotential } from "../bonuspotential"
import { strToGearType, type GearSet, type SlotType } from "../Gearset/gearset"
import type { Potential } from "../potential"
import type { IStat } from "../stat"

export class Preset{
    internalName: string
    JMSName: string
    procedures: Array<Procedure>
    // apply: (currentGearSet: GearSet) => void

    constructor(internalName: string, JMSName: string, procedures: Array<Procedure>){
        this.internalName = internalName
        this.JMSName = JMSName
        this.procedures = procedures
        // this.apply = (currentGearSet: GearSet) => {
        //     // プリセットで指定された内容で装備スロットを上書き
        //     this.procedures.map((procedure) => {
        //         // スロット名からスロット番号を取得
        //         const slotIndex = currentGearSet.getSlotIndexBySlotType(procedure.slot)

        //         // 装備名の指定があるならベースアイテムで上書き
        //         if (typeof procedure.baseItemName === "string"){
        //             currentGearSet.setSlotWithBaseItem(procedure.slot, procedure.baseItemName, {name: "JMS"})
        //         }

        //         // UGの指定があるなら上書き
        //         if (procedure.UG != null){
        //             currentGearSet.slots[slotIndex]!.gear.UG = procedure.UG
        //         }
                
        //         // スタフォ数の指定があるなら上書き
        //         if (procedure.starForce != null){
        //             currentGearSet.slots[slotIndex]!.gear.starForce = procedure.starForce
        //         }
                
        //         // 潜在能力の指定があるなら上書き
        //         if (procedure.potential != null){
        //             currentGearSet.slots[slotIndex]!.gear.potential = procedure.potential
        //         }

        //         // アディショナル潜在能力の指定があるなら上書き
        //         if (procedure.bonusPotential != null){
        //             currentGearSet.slots[slotIndex]!.gear.bonusPotential = procedure.bonusPotential
        //         }

        //         // 転生の指定があるなら上書き
        //         if (procedure.bonusStat != null){
        //             currentGearSet.slots[slotIndex]!.gear.bonusStat = procedure.bonusStat
        //         }
        //     })
        // }
    }
}

export class Procedure{
    slot: SlotType
    baseItemName?: string
    UG?: Array<IStat>
    starForce?: number
    potential?: Array<Potential>;
    bonusPotential?: Array<BonusPotential>;
    bonusStat?: Array<IStat>;

    constructor(slot: SlotType, baseItemName?: string, UG?: Array<IStat>, starForce?: number, potential?: Array<Potential>, bonusPotential?: Array<BonusPotential>, bonusStat?: Array<IStat>){
        this.slot = slot
        this.baseItemName = baseItemName
        this.UG = UG
        this.starForce = starForce
        this.potential = potential
        this.bonusPotential = bonusPotential
        this.bonusStat = bonusStat
    }
}
