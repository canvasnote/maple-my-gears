import type { SlotType } from "@/gears/Gearset/gearset"
import { baseItems } from "@/gears/BaseItem/baseitem"
import { slotTypeToGearType } from "@/gears/Gearset/gearset"

import noneimg from "@/assets/images/noneimg.png"
import { useState } from "react"
import { useImmer, type Updater } from "use-immer"
import type { Region } from "@/i18n"
import type { ChooseMatrix } from "@/models/chooseMatrix"

export const ListSlot = (typeName: string, slotTypeList: Array<SlotType>, region: Region, currentChooseMatrix: ChooseMatrix, updateCurrentChooseMatrix: Updater<ChooseMatrix>) => {
    const [listShow, setListShow] = useImmer(slotTypeList.map(() => [false, false, false, false, false, false, false, false]))

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
            {slotTypeList.map((slotType, index) => { return (
                <>
                    <tr>
                        {/* 装備スロット名 */}
                        <td className="border border-slate-700">{slotType}</td>
                        {/* ベース装備 */}
                        <td className="relative border border-slate-700">
                            <div className="">
                                {/* 現在選択中のベース装備 */}
                                <span onClick={() => setListShow((draft) => {draft[index]![0] = !listShow[index]![0]})}>
                                    {
                                        currentChooseMatrix.chooses.filter((choose) => choose.slot === slotType).map((choose) => choose.images.map((image) => <>
                                            <img src={image} className="rounded-xl border border-solid outline-gray-500 cursor-pointer" alt={currentChooseMatrix.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)]?.baseItemName}></img>
                                        </>))
                                    }
                                    
                                    
                                </span>
                                
                                {/* このスロットに装備可能な装備の一覧 */}
                                <div hidden={!listShow[index]![0]} className="absolute h-6 p-1 -top-0 left-12 w-fit h-fit z-99 bg-white rounded-lg text-left text-black whitespace-nowrap">
                                    {filterBaseItemsBySlotType(slotType).map((baseItem) => { return (
                                        <div 
                                            className="h-6 mr-8 mb-2 hover:bg-linear-to-r from-pink-200 to-white cursor-pointer" 
                                            onClick={() => {
                                                // リストをしまう
                                                setListShow((draft) => {draft[index]![0] = false})
                                                // 選択した装備の名前をchooseに格納
                                                updateCurrentChooseMatrix((draft) => { draft.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === baseItem.type)]!.baseItemName = baseItem.JMSName})
                                                // 選択した装備の画像パスをchooseに格納
                                                updateCurrentChooseMatrix((draft) => { draft.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === baseItem.type)]!.images = [baseItem.images!.default]})
                                                }}>
                                            <img src={baseItem.images?.default} width={30} height={30} className="rounded-xl border border-solid outline-gray-500"></img>
                                            {baseItem.JMSName}
                                        </div>
                                    )})}
                                </div>
                            </div>
                        </td>
                        {/* UG */}
                        <td className="relative border border-slate-700">
                            <div className="">
                                {/* 現在選択中のUG */}
                                <span onClick={() => setListShow((draft) => {draft[index]![1] = !listShow[index]![1]})}>
                                    {
                                        currentChooseMatrix.chooses.filter((choose) => choose.slot === slotType).map((choose) => choose.UG?.images.map((image, index) => <>
                                            <img src={image} className="rounded-xl border border-solid outline-gray-500 cursor-pointer" alt={currentChooseMatrix.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)]?.baseItemName}></img>
                                        </>))
                                    }
                                </span>
                                
                                {/* このスロットに適用可能なUGの一覧 */}
                                <div hidden={!listShow[index]![1]} className="absolute h-6 p-1 -top-0 left-12 w-fit h-fit z-99 bg-white rounded-lg text-left text-black whitespace-nowrap">
                                    {filterBaseItemsBySlotType(slotType).filter((baseItem) => true && baseItem.JMSName === currentChooseMatrix.chooses.filter((choose) => choose.slot === slotType)[0]?.baseItemName).map((baseItem) => { return (
                                        <div>
                                            {baseItem.UGPreset?.map((preset) => (<>
                                                <div className="h-6 mr-8 mb-2 hover:bg-linear-to-r from-pink-200 to-white cursor-pointer" onClick={() => {
                                                    // リストをしまう
                                                    setListShow((draft) => {draft[index]![1] = false}); 
                                                    // 選択したUGプリセットの名前をchooseに格納
                                                    updateCurrentChooseMatrix((draft) => { draft.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === baseItem.type)]!.UG = preset})
                                                    // 選択したUGプリセットの画像パスをchooseに格納
                                                    updateCurrentChooseMatrix((draft) => { draft.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === baseItem.type)]!.UG!.images = preset.images})
                                                    }}>
                                                    {preset.images.map((image) => (
                                                        <><img src={image} className="rounded-xl border border-solid outline-gray-500"></img>{preset.JMSName}</>
                                                    ))}
                                                </div>
                                            </>
                                            ))}
                                            {/* {baseItem.UGPreset?.JMSName}
                                            <img src={baseItem.UGPreset} width={30} height={30} className="rounded-xl border border-solid outline-gray-500"></img> */}
                                            {/* {baseItem.JMSName} */}
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