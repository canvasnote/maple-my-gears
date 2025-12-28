import { useState, type ReactElement, type ReactNode } from "react"
import type { GearType } from "@/gears/gear"
import { baseItems, getBaseItemByName, type IBaseItem } from "@/gears/BaseItem/baseitem"
import { strToGearType, strToSlotType, type GearSet, type SlotType, GearSlot, slotTypeToGearType } from "@/gears/Gearset/gearset"
import { describeStat, type IStat } from "@/gears/stat"
import type { Region } from "@/i18n"
import type { Updater } from "use-immer"
import { randomUUIDv7 } from "bun"

export const GearsTable = (currentGearSet: GearSet, updateCurrentGearSet: Updater<GearSet>, region: Region) => {
    const [changeCount, setChangeCount] = useState(0)
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
        onChange={e => { 
            setChangeCount(changeCount + 1);
            updateCurrentGearSet(draft =>{
                const targetSlotIndex = currentGearSet.getSlotIndexBySlotType(strToSlotType(e.target.name))
                const matchedBaseItem = getBaseItemByName(baseItems, slotTypeToGearType(e.target.name), e.target.value)
                draft.slots[targetSlotIndex]!.gear.name = matchedBaseItem.JMSName
                draft.slots[targetSlotIndex]!.gear.baseStat = structuredClone(matchedBaseItem.baseStat)
                draft.slots[targetSlotIndex]!.gear.level = matchedBaseItem.level
                // console.log(JSON.stringify(draft.slots[targetSlotIndex]!.gear))
            }
        )}}
        >
            { Options(typeMatchedGears(type)) }
        </select>

    const StatList = (list: IStat[] | undefined) =>{
        if (list === undefined) {return <>qqq</>}

        const result = list.map((stat, index) => 
            <p>{stat.type}: {stat.amount}</p>
        )
        console.log(<>aaa</>)
        return <>{result}</>
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
                {
                    slot.gear.baseStat.map((stat, index) =><p key={slot.type + stat.type}>
                        {describeStat(
                            stat.type,
                            stat.amount,
                            currentGearSet.weaponType.mainStat,
                            currentGearSet.weaponType.subStat,
                            currentGearSet.weaponType.subStat2,
                            region,
                            slot.gear.type,
                            currentGearSet
                        )}
                    </p>)
                }
                {/* {describeStat(
                    slot.gear.baseStat[0]!.type,
                    slot.gear.baseStat[0]!.amount,
                    currentGearSet.weaponType.mainStat,
                    currentGearSet.weaponType.subStat,
                    currentGearSet.weaponType.subStat2,
                    region
                    )}
                {StatList(slot.gear?.baseStat)} */}
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