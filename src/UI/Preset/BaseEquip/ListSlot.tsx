import type { SlotType } from "@/gears/Gearset/gearset"
import { baseItems } from "@/gears/BaseItem/baseitem"
import { slotTypeToGearType } from "@/gears/Gearset/gearset"

import noneimg from "@/assets/images/noneimg.png"
import { useState } from "react"
import { useImmer } from "use-immer"

export const ListSlot = (typeName: string, slotTypeList: Array<SlotType>) => {
    const [listShow, setListShow] = useImmer(slotTypeList.map(() => false))

    const filterBaseItemsBySlotType = (slotType: SlotType) => {
        return baseItems.filter((baseItem) => baseItem.type === slotTypeToGearType(slotType))
    }

    return (
        <>
            <tr>
                <td className="border border-slate-700">{typeName}</td>
                <td className="border border-slate-700">ベース装備</td>
                <td className="border border-slate-700">呪文書強化</td>
                <td className="border border-slate-700">スターフォース</td>
                <td className="border border-slate-700">潜在能力</td>
                <td className="border border-slate-700">アディショナル潜在</td>
                <td className="border border-slate-700">追加オプション(転生)</td>
                <td className="border border-slate-700">シンボルレベル</td>
                <td className="border border-slate-700">その他</td>
            </tr>
            {slotTypeList.map((slot, index) => { return (
                <>
                    {/* ベース装備 */}
                    <tr>
                        <td className="border border-slate-700">{slot}</td>
                        <td className="relative border border-slate-700">
                            <div className="">
                                {/* 現在選択中のベース装備 */}
                                <span onClick={() => setListShow((draft) => {draft[index] = !listShow[index]})}>
                                    <img src={noneimg} className="rounded-xl border border-solid outline-gray-500 cursor-pointer"></img>
                                </span>
                                
                                {/* このスロットに装備可能な装備の一覧 */}
                                <div hidden={!listShow[index]} className="absolute h-6 p-1 -top-0 left-12 w-fit h-fit bg-white rounded-lg text-left text-black whitespace-nowrap">
                                    {filterBaseItemsBySlotType(slot).map((baseItem) => { return (
                                        <div className="h-6 mr-8 mb-2 hover:bg-linear-to-r from-pink-200 to-white cursor-pointer" onClick={() => {setListShow((draft) => {draft[index] = false}); }}>
                                            <img src={baseItem.images?.default} width={30} height={30} className="rounded-xl border border-solid outline-gray-500"></img>
                                            {baseItem.JMSName}
                                        </div>
                                    )})}
                                </div>
                            </div>
                        </td>
                    </tr>
                {   
                    /* 呪文書強化 */

                }
                {
                    // スターフォース

                }
                {
                    // 潜在能力
                    
                }
                {
                    // アディショナル潜在

                }
                {
                    // 追加オプション(転生)

                }
                {
                    // シンボルレベル

                }
                {
                    // その他

                }
                </>
            )})}
            {/* <tr>
                <td>{typeName}</td>
                {slotTypeList.map((slot) => (<>{
                    <td>
                        <div className="h-6 " onClick={() => setWpshow(!wpshow)}>
                            <img src={fafnir} className="rounded-xl border border-solid outline-gray-500"></img>
                        </div>
                    </td>
                }</>))}
            </tr> */}
        </>
    )
}