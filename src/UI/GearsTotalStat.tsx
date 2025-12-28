import { useState, type ReactElement, type ReactNode } from "react"
import type { GearType } from "@/gears/gear"
import { baseItems, getBaseItemByName, type IBaseItem } from "@/gears/BaseItem/baseitem"
import { strToGearType, strToSlotType, type GearSet, type SlotType, GearSlot, slotTypeToGearType } from "@/gears/Gearset/gearset"
import { describeStat, getLocaledStat, type IStat } from "@/gears/stat"
import type { Region } from "@/i18n"
import type { Updater } from "use-immer"
import { randomUUIDv7 } from "bun"

export const GearsTotalStat = (currentGearSet: GearSet, updateCurrentGearSet: Updater<GearSet>, region: Region) => {
    const gatherStat = () => {
        let result: Array<Array<IStat>> = []
        currentGearSet.slots.map((slot) => {
            result.push(slot.gear.baseStat)
        })
        return result
    }

    const stackStat = () => {
        const classificationStat = {
            "MainStat":         gatherStat().flat().filter((stat) => stat.type === "MainStat").map((item) => item.amount),
            "SubStat1":         gatherStat().flat().filter((stat) => stat.type === "SubStat1").map((item) => item.amount),
            "SubStat2":         gatherStat().flat().filter((stat) => stat.type === "SubStat2").map((item) => item.amount),
            "MainStatPerLevel": gatherStat().flat().filter((stat) => stat.type === "MainStatPerLevel").map((item) => item.amount),
            "SubStat1PerLevel": gatherStat().flat().filter((stat) => stat.type === "SubStat1PerLevel").map((item) => item.amount),
            "SubStat2PerLevel": gatherStat().flat().filter((stat) => stat.type === "SubStat2PerLevel").map((item) => item.amount),
            "MainStatNot%":     gatherStat().flat().filter((stat) => stat.type === "MainStatNot%").map((item) => item.amount),
            "SubStat1Not%":     gatherStat().flat().filter((stat) => stat.type === "SubStat1Not%").map((item) => item.amount),
            "SubStat2Not%" :    gatherStat().flat().filter((stat) => stat.type === "SubStat2Not%").map((item) => item.amount),
            "MainStat%":        gatherStat().flat().filter((stat) => stat.type === "MainStat%").map((item) => item.amount),
            "SubStat1%":        gatherStat().flat().filter((stat) => stat.type === "SubStat1%").map((item) => item.amount),
            "SubStat2%":        gatherStat().flat().filter((stat) => stat.type === "SubStat2%").map((item) => item.amount),
            "AllStat%":         gatherStat().flat().filter((stat) => stat.type === "AllStat%").map((item) => item.amount),
            "HP":               gatherStat().flat().filter((stat) => stat.type === "HP").map((item) => item.amount),
            "MP":               gatherStat().flat().filter((stat) => stat.type === "MP").map((item) => item.amount),
            "HP%":              gatherStat().flat().filter((stat) => stat.type === "HP%").map((item) => item.amount),
            "MP%":              gatherStat().flat().filter((stat) => stat.type === "MP%").map((item) => item.amount),
            "AMA":              gatherStat().flat().filter((stat) => stat.type === "AMA").map((item) => item.amount),
            "AMA%":             gatherStat().flat().filter((stat) => stat.type === "AMA%").map((item) => item.amount),
            "Damage":           gatherStat().flat().filter((stat) => stat.type === "Damage").map((item) => item.amount),
            "BossDamage":       gatherStat().flat().filter((stat) => stat.type === "BossDamage").map((item) => item.amount),
            "NormalDamage":     gatherStat().flat().filter((stat) => stat.type === "NormalDamage").map((item) => item.amount),
            "CriticalRate":     gatherStat().flat().filter((stat) => stat.type === "CriticalRate").map((item) => item.amount),
            "CriticalDamage":   gatherStat().flat().filter((stat) => stat.type === "CriticalDamage").map((item) => item.amount),
            "FinalDamage":      gatherStat().flat().filter((stat) => stat.type === "FinalDamage").map((item) => item.amount),
            "IgnoreDefence":    gatherStat().flat().filter((stat) => stat.type === "IgnoreDefence").map((item) => item.amount),
            "CoolTimeReduction":gatherStat().flat().filter((stat) => stat.type === "CoolTimeReduction").map((item) => item.amount),
            "ArcaneForce":      gatherStat().flat().filter((stat) => stat.type === "ArcaneForce").map((item) => item.amount),
            "AuthenticForce":   gatherStat().flat().filter((stat) => stat.type === "AuthenticForce").map((item) => item.amount),
            "MesoAmount":       gatherStat().flat().filter((stat) => stat.type === "MesoAmount").map((item) => item.amount),
            "DropRate":         gatherStat().flat().filter((stat) => stat.type === "DropRate").map((item) => item.amount),
            // "None":             gatherStat().flat().filter((stat) => stat.type === "None").map((item) => item.amount),
        }
        const accumilacionStat = {
            "MainStat":         classificationStat["MainStat"].length===0          ? 0 : classificationStat["MainStat"].reduce((acc, cur) => acc += cur)                        ,
            "SubStat1":         classificationStat["SubStat1"].length===0          ? 0 : classificationStat["SubStat1"].reduce((acc, cur) => acc += cur)                        ,
            "SubStat2":         classificationStat["SubStat2"].length===0          ? 0 : classificationStat["SubStat2"].reduce((acc, cur) => acc += cur)                        ,
            "MainStatPerLevel": classificationStat["MainStatPerLevel"].length===0  ? 0 : classificationStat["MainStatPerLevel"].reduce((acc, cur) => acc += cur)                ,
            "SubStat1PerLevel": classificationStat["SubStat1PerLevel"].length===0  ? 0 : classificationStat["SubStat1PerLevel"].reduce((acc, cur) => acc += cur)                ,
            "SubStat2PerLevel": classificationStat["SubStat2PerLevel"].length===0  ? 0 : classificationStat["SubStat2PerLevel"].reduce((acc, cur) => acc += cur)                ,
            "MainStatNot%":     classificationStat["MainStatNot%"].length===0      ? 0 : classificationStat["MainStatNot%"].reduce((acc, cur) => acc += cur)                +"%",
            "SubStat1Not%":     classificationStat["SubStat1Not%"].length===0      ? 0 : classificationStat["SubStat1Not%"].reduce((acc, cur) => acc += cur)                +"%",
            "SubStat2Not%" :    classificationStat["SubStat2Not%"].length===0      ? 0 : classificationStat["SubStat2Not%"].reduce((acc, cur) => acc += cur)                +"%",
            "MainStat%":        classificationStat["MainStat%"].length===0         ? 0 : classificationStat["MainStat%"].reduce((acc, cur) => acc += cur)                   +"%",
            "SubStat1%":        classificationStat["SubStat1%"].length===0         ? 0 : classificationStat["SubStat1%"].reduce((acc, cur) => acc += cur)                   +"%",
            "SubStat2%":        classificationStat["SubStat2%"].length===0         ? 0 : classificationStat["SubStat2%"].reduce((acc, cur) => acc += cur)                   +"%",
            "AllStat%":         classificationStat["AllStat%"].length===0          ? 0 : classificationStat["AllStat%"].reduce((acc, cur) => acc += cur)                    +"%",
            "HP":               classificationStat["HP"].length===0                ? 0 : classificationStat["HP"].reduce((acc, cur) => acc += cur)                              ,
            "MP":               classificationStat["MP"].length===0                ? 0 : classificationStat["MP"].reduce((acc, cur) => acc += cur)                              ,
            "HP%":              classificationStat["HP%"].length===0               ? 0 : classificationStat["HP%"].reduce((acc, cur) => acc += cur)                         +"%",
            "MP%":              classificationStat["MP%"].length===0               ? 0 : classificationStat["MP%"].reduce((acc, cur) => acc += cur)                         +"%",
            "AMA":              classificationStat["AMA"].length===0               ? 0 : classificationStat["AMA"].reduce((acc, cur) => acc += cur)                             ,
            "AMA%":             classificationStat["AMA%"].length===0              ? 0 : classificationStat["AMA%"].reduce((acc, cur) => acc += cur)                        +"%",
            "Damage":           classificationStat["Damage"].length===0            ? 0 : classificationStat["Damage"].reduce((acc, cur) => acc += cur)                      +"%",
            "BossDamage":       classificationStat["BossDamage"].length===0        ? 0 : classificationStat["BossDamage"].reduce((acc, cur) => acc += cur)                  +"%",
            "NormalDamage":     classificationStat["NormalDamage"].length===0      ? 0 : classificationStat["NormalDamage"].reduce((acc, cur) => acc += cur)                +"%",
            "CriticalRate":     classificationStat["CriticalRate"].length===0      ? 0 : classificationStat["CriticalRate"].reduce((acc, cur) => acc += cur)                +"%",
            "CriticalDamage":   classificationStat["CriticalDamage"].length===0    ? 0 : classificationStat["CriticalDamage"].reduce((acc, cur) => acc += cur)              +"%",
            "FinalDamage":      classificationStat["FinalDamage"].length===0       ? 0 : classificationStat["FinalDamage"].reduce((acc, cur) => acc *= (1 + cur * 0.01))    +"%",
            "IgnoreDefence":    classificationStat["IgnoreDefence"].length===0     ? 0 : classificationStat["IgnoreDefence"].reduce((acc, cur) => acc *= (1 - cur * 0.01))  +"%",
            "CoolTimeReduction":classificationStat["CoolTimeReduction"].length===0 ? 0 : classificationStat["CoolTimeReduction"].reduce((acc, cur) => acc += cur)           +"秒",
            "ArcaneForce":      classificationStat["ArcaneForce"].length===0       ? 0 : classificationStat["ArcaneForce"].reduce((acc, cur) => acc += cur)                     ,
            "AuthenticForce":   classificationStat["AuthenticForce"].length===0    ? 0 : classificationStat["AuthenticForce"].reduce((acc, cur) => acc += cur)                  ,
            "MesoAmount":       classificationStat["MesoAmount"].length===0        ? 0 : classificationStat["MesoAmount"].reduce((acc, cur) => acc += cur)                  +"%",
            "DropRate":         classificationStat["DropRate"].length===0          ? 0 : classificationStat["DropRate"].reduce((acc, cur) => acc += cur)                    +"%",
            // "None":             classificationStat["None"].length===0              ? 0 : classificationStat["None"].reduce((acc, cur) => acc += cur),
        }

        let result = 
            Object.entries(accumilacionStat).
            // 使わないサブステ等、不要なステータスを除外
            filter((item) => getLocaledStat(item[0], currentGearSet.weaponType.mainStat, currentGearSet.weaponType.subStat, currentGearSet.weaponType.subStat2, region).length !== 0).
            // 集計結果が0の能力を除外
            filter((item) => item[1] !== 0).
            // 行を作成
            map((item, index) => 
                <tr>
                    <td>{getLocaledStat(item[0], currentGearSet.weaponType.mainStat, currentGearSet.weaponType.subStat, currentGearSet.weaponType.subStat2, region)}</td>
                    <td>+{item[1]}</td>
                </tr>)
        return (result)
    }

    return (
        // <>
            /* <h2>装備から得られる能力の合計</h2> */
            <table border={1} cellSpacing={0} className="justify-start">
                <thead>
                    <tr>
                        <th>能力名</th>
                        <th>上昇値</th>
                    </tr>
                </thead>
                <tbody>
                    {stackStat()}
                </tbody> 
            </table>
        // </>
    )
}