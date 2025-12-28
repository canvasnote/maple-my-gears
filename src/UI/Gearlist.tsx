import type { ReactElement, ReactNode } from "react"
import type { GearType } from "@/gears/gear"
import { baseItems, type IBaseItem } from "@/gears/BaseItem/baseitem"
import { strToGearType, strToSlotType, type GearSet, type SlotType, GearSlot, slotTypeToGearType } from "@/gears/Gearset/gearset"
import type { IStat } from "@/gears/stat"
import type { Region } from "@/i18n"
import type { Updater } from "use-immer"

export const GearsTable = (currentGearSet: GearSet,updateCurrentGearSet: Updater<GearSet>, region: Region) => {
    const typeMatchedGears = (slotType: SlotType) => {
        const gearType = strToGearType(slotTypeToGearType(slotType))
        return baseItems.filter((item) => {
            if (item.type === gearType) { return true }
        })
    }

    const Options = (list: Array<IBaseItem>) => {
        const result = list.map(
            element => 
            <option key={element.JMSName} value={element.JMSName} className="bg-gray-600 justify-start">
                {element.JMSName}
                </option>
                )
        return <>{result}</>
    }

    const matchedGearList = (type: SlotType, acceptType: GearType) =>
        <select 
        name={type} 
        className="w-60" 
        onChange={e => { updateCurrentGearSet(currentGearSet.setSlotBaseItem(strToSlotType(e.target.name), e.target.value, region))}}
        >
            { Options(typeMatchedGears(type)) }
        </select>

    const statListToString = (list: IStat[] | undefined) =>{
        if (list === undefined) {return ""}

        let result = ""
        list.map((stat, index) => {
            result += stat.type + ": " + stat.amount + "<br /><br />"
        })
        return result
    }

    const rows = currentGearSet.slots.map((slot, index) => 
        <tr key={slot.type}>
            <td>
                {index + 1}
            </td>
            <td>
                {slot.JMSName}
            </td>
            <td>
                {matchedGearList(strToSlotType(slot.type), slot.acceptType)}
            </td>
            <td>
                {statListToString(slot.gear?.baseStat)}
            </td>
        </tr>
    )

    return (
      <table border={1} cellSpacing={0} className="justify-start">
         <thead>
            <tr>
               <th>No.</th>
               <th>種別</th>
               <th>名前</th>
               <th>基礎値</th>
            </tr>
         </thead>
         <tbody>
           {rows}
         </tbody> 
      </table>
    )
}