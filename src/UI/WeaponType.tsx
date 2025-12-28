import type { ReactElement, ReactNode } from "react"
import { weapons } from "@/gears/BaseItem/weapons"
import { jobs } from "@/gears/weapontype/weaponType"
import type { GearSet } from "@/gears/Gearset/gearset";

const Options = () => {
    const result = jobs.map(
    element => 
        <option 
            key={element.internalName} 
            value={element.internalName} 
            disabled={element.disabled} 
            className="bg-gray-600 justify-start">
                {element.JMSName}
        </option>
    )
    return <>{result}</>
    };

export const WeaponType = (currentGearSet: GearSet) => {
    return <>
        あなたの武器種＝ 
        <select name="weapontype">
        {
            Options()
        }
        </select>
    </>
}