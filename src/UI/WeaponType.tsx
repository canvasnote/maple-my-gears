import { useState, type ReactElement, type ReactNode } from "react"
import { weapons } from "@/gears/BaseItem/weapons"
import { jobs } from "@/gears/weapontype/weaponType"
import type { GearSet } from "@/gears/Gearset/gearset";
import type { Region } from "@/i18n";
import type { Updater } from "use-immer";

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

export const WeaponType = (currentGearSet: GearSet, updateCurrentGearSet: Updater<GearSet>, region: Region) => {
    const [changeCount, setChangeCount] = useState(0)
    return <>
        あなたの武器種＝ 
        <select name="weapontype" 
        onChange={
            e => { 
            setChangeCount(changeCount + 1);
            updateCurrentGearSet(draft =>{
                const weaponInternalName = e.target.value
                const matchedJob = jobs.filter((job, index) => job.internalName === weaponInternalName)
                if (matchedJob.length !== 1) {throw TypeError("武器種の選択がおかしいです")}
                draft.weaponType = matchedJob[0]!
            })
            }}>
        {
            Options()
        }
        </select>
    </>
}