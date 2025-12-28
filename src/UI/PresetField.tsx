import { type IBaseItem, baseItems } from "@/gears/BaseItem/baseitem"
import { slotTypeToGearType, type GearSet } from "@/gears/Gearset/gearset"
import { presets } from "@/gears/preset/examples"
import type { Preset } from "@/gears/preset/preset"
import type { IStat } from "@/gears/stat"
import type { Region } from "@/i18n"
import { useState, type Dispatch, type JSX, type SetStateAction } from "react"
import type { IntRange } from "type-fest"
import type { Updater } from "use-immer"

export const PresetField = (globalRenderer: number, setGlobalRenderer: Dispatch<SetStateAction<number>>, currentGearSet: GearSet, updateCurrentGearSet: Updater<GearSet>, region: Region) => {
    const [choosingPreset, setChoosingPreset] = useState("default")
    const [applyCounter, setApplyCounter] = useState(0)

    const PresetOptions = () => {
        let result: Array<JSX.Element> = []
        presets.forEach((p) => result.push(<option key={p.internalName} value={p.internalName} className="bg-gray-600 justify-start">{p.JMSName}</option>))
        return <>{result}</>
    }

    const applyPreset = (currentGearSet: GearSet, preset: Preset) => {
        // プリセットで指定された内容で装備スロットを上書き
        preset.procedures.map((procedure) => {
            // スロット名からスロット番号を取得
            const slotIndex = currentGearSet.getSlotIndexBySlotType(procedure.slot)

            updateCurrentGearSet((draft) => {
                // 装備名の指定があるならベースアイテムで上書き
                const equipName = procedure.baseItemName
                if (typeof equipName === "string") {
                    draft.slots
                    // currentGearSet.setSlotWithBaseItem(procedure.slot, procedure.baseItemName, {name: "JMS"})

                    /// 装備スロットと装備名とリージョンから該当するベース装備を探してきて装備名と基礎能力とレベルをセットし、更新済みのギアセットを返す
                    const slotType = procedure.slot
                    let matchedSlotIndex = -1
                    let matchedBaseItem: IBaseItem | null = null
                    let matchedStat: Array<IStat> | null = null
                    let matchedLevel: IntRange<0, 251> = 0

                    if (region.name === "JMS") {

                        // 指定されたスロットがどこにあるのか探す
                        draft.slots.map((slot, index) => {
                            if (slot.type === slotType) {
                                matchedSlotIndex = index
                            }
                        });

                        if (matchedSlotIndex === 1) {
                            // スロットが見つからなかったらエラー
                            throw TypeError("setSlotBaseItem: 装備スロットが見つかりません(" + { slotType: slotType, equipName: equipName, region: region } + ")")
                        }
                        else {
                            // スロットが見つかったらベース装備を探してきて装備名と基礎能力とレベルをセット
                            baseItems.map((item, index) => {
                                if (item.JMSName === equipName && item.type === slotTypeToGearType(slotType)) {
                                    matchedBaseItem = item
                                    matchedStat = item.baseStat
                                    matchedLevel = item.level
                                }
                            });

                            // スロットにその装備の名前と基礎能力とレベルをセット
                            if (matchedBaseItem === null || matchedStat === null) {
                                // ベース装備が見つからなかったらエラー
                                throw TypeError("setSlotBaseItem: ベース装備が見つかりません(" + slotType + ", " + equipName + ", " + region.name + ")")
                            }
                            else {
                                // ベース装備が見つかったらスロットにその装備の名前と基礎能力とレベルをセット
                                draft.slots[matchedSlotIndex]!.gear.name = matchedBaseItem.JMSName;
                                draft.slots[matchedSlotIndex]!.gear.baseStat = matchedStat;
                                draft.slots[matchedSlotIndex]!.gear.level = matchedLevel;
                                console.log(draft.slots[matchedSlotIndex]!.gear.name)
                            }

                            // // スロットにその装備の名前と基礎能力とレベルをセット
                            // if (matchedBaseItem === null || matchedStat === null) {
                            //     // ベース装備が見つからなかったらエラー
                            //     throw TypeError("setSlotBaseItem: ベース装備が見つかりません(" + slotType + ", " + equipName + ", " + region.name + ")")
                            // }
                            // else {
                            //     // ベース装備が見つかったらスロットにその装備の名前と基礎能力とレベルをセット
                            //     draft.slots[matchedSlotIndex]!.gear.name = matchedBaseItem.JMSName;
                            //     draft.slots[matchedSlotIndex]!.gear.baseStat = matchedStat;
                            //     draft.slots[matchedSlotIndex]!.gear.level = matchedLevel;
                            // }
                        }

                        // UGの指定があるなら上書き
                        if (procedure.UG != null) {
                            draft.slots[slotIndex]!.gear.UG = procedure.UG
                        }

                        // スタフォ数の指定があるなら上書き
                        if (procedure.starForce != null) {
                            draft.slots[slotIndex]!.gear.starForce = procedure.starForce
                        }

                        // 潜在能力の指定があるなら上書き
                        if (procedure.potential != null) {
                            draft.slots[slotIndex]!.gear.potential = procedure.potential
                        }

                        // アディショナル潜在能力の指定があるなら上書き
                        if (procedure.bonusPotential != null) {
                            draft.slots[slotIndex]!.gear.bonusPotential = procedure.bonusPotential
                        }

                        // 転生の指定があるなら上書き
                        if (procedure.bonusStat != null) {
                            draft.slots[slotIndex]!.gear.bonusStat = procedure.bonusStat
                        }
                    }
                }
            })

        })
    }

    return (
        <>
            <h2>プリセットを適用</h2>
            <select
                name="selectPreset"
                onChange={e => {
                    setApplyCounter(applyCounter + 1)
                    const key = e.target.value;
                    if (key != null) { setChoosingPreset(e.target.value) }
                    else { throw TypeError("存在しないプリセットを選択しようとしました") }
                }}>
                {PresetOptions()}
            </select>
            <button onClick={e => {
                console.log(choosingPreset)
                setApplyCounter(applyCounter + 1)
                setGlobalRenderer(globalRenderer + 1)
                const preset = presets.get(choosingPreset)
                if (preset != null) { applyPreset(currentGearSet, preset) }
                else { throw TypeError("存在しないプリセットを適用しようとしました") }
                console.log(JSON.stringify(preset))
            }}>適用</button>
        </>
    )
}