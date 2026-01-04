import type { GearSet, SlotType } from "@/gears/Gearset/gearset"
import { baseItems } from "@/gears/BaseItem/baseitem"
import { slotTypeToGearType, strToSlotType } from "@/gears/Gearset/gearset"

import noneimg from "@/assets/images/noneimg.png"
import { useState } from "react"
import { useImmer, type Updater } from "use-immer"
import type { Region } from "@/i18n"
import type { ChooseMatrix } from "@/models/chooseMatrix"
import fafnir from "@/assets/images/weapon/fafnir.png"
import { describeStat, getLocaledStat } from "@/gears/stat"

export const ListSlot = (typeName: string, slotTypeList: Array<SlotType>, region: Region, currentGearSet: GearSet, updateCurrentGearSet: Updater<GearSet>, currentChooseMatrix: ChooseMatrix, updateCurrentChooseMatrix: Updater<ChooseMatrix>) => {
    const [listShow, setListShow] = useImmer(slotTypeList.map(() => [[false], [false], [false], [false, false, false], [false], [false], [false], [false]]))

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
                                <span onClick={() => setListShow((draft) => {draft[index]![0]![0] = !listShow[index]![0]![0]})}>
                                    {
                                        currentChooseMatrix.chooses.filter((choose) => choose.slot === slotType).map((choose) => choose.images.map((image) => <>
                                            <img src={image} className="rounded-xl border border-solid outline-gray-500 cursor-pointer" alt={currentChooseMatrix.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)]?.baseItemName}></img>
                                        </>))
                                    }
                                    
                                    
                                </span>
                                
                                {/* このスロットに装備可能な装備の一覧 */}
                                <div hidden={!listShow[index]![0]![0]} className="absolute h-6 p-1 -top-0 left-12 w-fit h-fit z-99 bg-white rounded-lg text-left text-black whitespace-nowrap">
                                    {filterBaseItemsBySlotType(slotType).map((baseItem) => { return (
                                        <div 
                                            className="h-6 mr-8 mb-2 hover:bg-linear-to-r from-pink-200 to-white cursor-pointer" 
                                            onClick={() => {
                                                // リストをしまう
                                                setListShow((draft) => {draft[index]![0]![0] = false})
                                                // 選択した装備の名前をchooseに格納
                                                console.log(currentChooseMatrix.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)])
                                                updateCurrentChooseMatrix((draft) => { draft.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)]!.baseItemName = baseItem.JMSName})
                                                // 選択した装備の画像パスをchooseに格納
                                                updateCurrentChooseMatrix((draft) => { draft.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)]!.images = [baseItem.images!.default]})
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
                                <span onClick={() => setListShow((draft) => {draft[index]![1]![0] = !listShow[index]![1]![0]})}>
                                    {
                                        currentChooseMatrix.chooses.filter((choose) => choose.slot === slotType).map((choose) => choose.UG?.images.map((image) => <>
                                            <img src={image} className="rounded-xl border border-solid outline-gray-500 cursor-pointer" alt={currentChooseMatrix.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)]?.baseItemName}></img>
                                        </>))
                                    }
                                </span>
                                
                                {/* このスロットに適用可能なUGの一覧 */}
                                <div hidden={!listShow[index]![1]![0]} className="absolute h-6 p-1 -top-0 left-12 w-fit h-fit z-99 bg-white rounded-lg text-left text-black whitespace-nowrap">
                                    {filterBaseItemsBySlotType(slotType).filter((baseItem) => true && baseItem.JMSName === currentChooseMatrix.chooses.filter((choose) => choose.slot === slotType)[0]?.baseItemName).map((baseItem) => { return (
                                        <div>
                                            {baseItem.UGPreset?.map((preset) => (<>
                                                <div className="h-6 mr-8 mb-2 hover:bg-linear-to-r from-pink-200 to-white cursor-pointer" onClick={() => {
                                                    // リストをしまう
                                                    setListShow((draft) => {draft[index]![1]![0] = false}); 
                                                    // 選択したUGプリセットの名前をchooseに格納
                                                    updateCurrentChooseMatrix((draft) => { draft.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)]!.UG = preset})
                                                    // 選択したUGプリセットの画像パスをchooseに格納
                                                    updateCurrentChooseMatrix((draft) => { draft.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)]!.UG!.images = preset.images})
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
                        {/* スターフォース */}
                        <td className="relative border border-slate-700">
                            <div className="">
                                {/* 現在選択中のスターフォース */}
                                <span onClick={() => setListShow((draft) => {draft[index]![2]![0] = !listShow[index]![2]![0]})}>
                                    {
                                        currentChooseMatrix.chooses.filter((choose) => choose.slot === slotType).map((choose) => choose.starForce?.images.map((image) => <>
                                            {/* <img src={image} className="rounded-xl border border-solid outline-gray-500 cursor-pointer" alt={currentChooseMatrix.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)]?.starForce?.JMSName}></img> */}
                                            <div className="rounded-xl border border-solid outline-gray-500 cursor-pointer">{currentChooseMatrix.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)]?.starForce?.JMSName}</div>
                                        </>))
                                    }
                                </span>
                                
                                {/* このスロットに適用可能なスターフォースの一覧 */}
                                <div hidden={!listShow[index]![2]![0]} className="absolute h-6 p-1 -top-0 left-12 w-fit h-fit z-99 bg-white rounded-lg text-left text-black whitespace-nowrap">
                                    {filterBaseItemsBySlotType(slotType).filter((baseItem) => true && baseItem.JMSName === currentChooseMatrix.chooses.filter((choose) => choose.slot === slotType)[0]?.baseItemName).map((baseItem) => { return (
                                        <div>
                                            {baseItem.StarForcePresets?.map((preset) => (<>
                                                <div className="h-6 mr-8 mb-2 hover:bg-linear-to-r from-pink-200 to-white cursor-pointer" onClick={() => {
                                                    // リストをしまう
                                                    setListShow((draft) => {draft[index]![2]![0] = false}); 
                                                    // 選択したスターフォースプリセットの名前をchooseに格納
                                                    updateCurrentChooseMatrix((draft) => { draft.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)]!.starForce = preset})
                                                    // 選択したスターフォースプリセットの画像パスをchooseに格納
                                                    updateCurrentChooseMatrix((draft) => { draft.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)]!.starForce!.images = preset.images})
                                                    }}>
                                                    {preset.images.map((image) => (
                                                        <><img src={image} className="rounded-xl border border-solid outline-gray-500"></img>{preset.JMSName}</>
                                                    ))}
                                                </div>
                                            </>
                                            ))}
                                        </div>
                                    )})}
                                </div>
                            </div>
                        </td>
                        {/* 潜在能力 */}
                        <td className="relative border border-slate-700">
                            <div className="">
                                {/* 現在選択中の潜在能力 */}
                                <span>
                                    {
                                        currentChooseMatrix.chooses
                                        .filter((choose) => choose.slot === slotType)
                                        .map((choose) => 
                                            choose.potentialPresets
                                            ?.map((potential, index_pot) => <>
                                                <div 
                                                className="relative rounded-xl border border-solid outline-gray-500 cursor-pointer"  
                                                onClick={() => setListShow((draft) => {draft[index]![3]![index_pot] = !listShow[index]![3]![index_pot]})}>
                                                    {describeStat(potential.stat.type, potential.stat.amount, currentGearSet.weaponType.mainStat, currentGearSet.weaponType.subStat, currentGearSet.weaponType.subStat2, region, slotTypeToGearType(slotType), currentGearSet)}
                                                    
                                                    {/* このスロットに適用可能な潜在能力の一覧 */}
                                                    <div hidden={!listShow[index]![3]![index_pot]} className="absolute h-6 p-1 -top-0 left-12 w-fit h-fit z-99 bg-white rounded-lg text-left text-black whitespace-nowrap">
                                                        {filterBaseItemsBySlotType(slotType).filter((baseItem) => true && baseItem.JMSName === currentChooseMatrix.chooses.filter((choose) => choose.slot === slotType)[0]?.baseItemName).map((baseItem, index2) => { return (
                                                            <div>
                                                                {baseItem.PotentialPresets?.map((preset) => (<>
                                                                    <div className="h-6 mr-8 mb-2 hover:bg-linear-to-r from-pink-200 to-white cursor-pointer" onClick={() => {
                                                                        // リストをしまう
                                                                        setListShow((draft) => {draft[index]![3]![index_pot] = false}); 
                                                                        // 選択した潜在能力プリセットの名前をchooseに格納
                                                                        updateCurrentChooseMatrix((draft) => { draft.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)]!.potentialPresets![index_pot] = preset})
                                                                        }}>
                                                                        {preset.images.map((image) => (
                                                                            <><img src={image} className="rounded-xl border border-solid outline-gray-500"></img>{preset.JMSName}</>
                                                                        ))}
                                                                    </div>
                                                                </>
                                                                ))}
                                                            </div>
                                                        )})}
                                                    </div>
                                                </div>
                                            </>)
                                        )
                                    }
                                </span>
                            </div>
                        </td>
                        {/* アディショナル潜在能力 */}
                        <td className="relative border border-slate-700">
                            <div className="">
                                {/* 現在選択中のアディショナル潜在能力 */}
                                <span>
                                    {
                                        currentChooseMatrix.chooses
                                        .filter((choose) => choose.slot === slotType)
                                        .map((choose) => 
                                            choose.bonusPotentialPresets
                                            ?.map((bpotential, index_pot) => <>
                                                <div 
                                                className="relative rounded-xl border border-solid outline-gray-500 cursor-pointer"  
                                                onClick={() => setListShow((draft) => {draft[index]![4]![index_pot] = !listShow[index]![4]![index_pot]})}>
                                                    {describeStat(bpotential.stat.type, bpotential.stat.amount, currentGearSet.weaponType.mainStat, currentGearSet.weaponType.subStat, currentGearSet.weaponType.subStat2, region, slotTypeToGearType(slotType), currentGearSet)}
                                                    
                                                    {/* このスロットに適用可能なアディショナル潜在能力の一覧 */}
                                                    <div hidden={!listShow[index]![4]![index_pot]} className="absolute h-6 p-1 -top-0 left-12 w-fit h-fit z-99 bg-white rounded-lg text-left text-black whitespace-nowrap">
                                                        {filterBaseItemsBySlotType(slotType).filter((baseItem) => true && baseItem.JMSName === currentChooseMatrix.chooses.filter((choose) => choose.slot === slotType)[0]?.baseItemName).map((baseItem, index2) => { return (
                                                            <div>
                                                                {baseItem.PotentialPresets?.map((preset) => (<>
                                                                    <div className="h-6 mr-8 mb-2 hover:bg-linear-to-r from-pink-200 to-white cursor-pointer" onClick={() => {
                                                                        // リストをしまう
                                                                        setListShow((draft) => {draft[index]![4]![index_pot] = false}); 
                                                                        // 選択したアディショナル潜在能力プリセットの名前をchooseに格納
                                                                        updateCurrentChooseMatrix((draft) => { draft.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)]!.bonusPotentialPresets![index_pot] = preset})
                                                                        }}>
                                                                        {preset.images.map((image) => (
                                                                            <><img src={image} className="rounded-xl border border-solid outline-gray-500"></img>{preset.JMSName}</>
                                                                        ))}
                                                                    </div>
                                                                </>
                                                                ))}
                                                            </div>
                                                        )})}
                                                    </div>
                                                </div>
                                            </>)
                                        )
                                    }
                                </span>
                            </div>
                        </td>
                        {/* 追加オプション(転生) */}
                        <td className="relative border border-slate-700">
                            <div className="">
                                {/* 現在選択中の追加オプション */}
                                <span>
                                    {
                                        currentChooseMatrix.chooses
                                        .filter((choose) => choose.slot === slotType)
                                        .map((choose) => 
                                            choose.bonusStats
                                            ?.map((bstat, index_bstat) => <>
                                                <div 
                                                className="relative rounded-xl border border-solid outline-gray-500 gap-2"  
                                                
                                                >
                                                    <span className="text-left">{getLocaledStat(bstat.type, currentGearSet.weaponType.mainStat, currentGearSet.weaponType.subStat, currentGearSet.weaponType.subStat2, region)} </span>
                                                    <span>　　</span>
                                                    <input 
                                                    className="text-right" 
                                                    type="number" 
                                                    max={999} min={0} placeholder="0" step={1} 
                                                    name={slotType + " " + bstat.type}
                                                    onChange={(e) => {updateCurrentChooseMatrix(draft => {
                                                        draft.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)]!.bonusStats![index_bstat]!.amount = Number(e.target.value)
                                                    })}}></input>
                                                </div>
                                            </>)
                                        )
                                    }
                                </span>
                            </div>
                        </td>
                        {/* シンボルレベル */}
                        <td className="relative border border-slate-700">
                            <div className="">
                                {/* 現在選択中のシンボルレベル */}
                                <span onClick={() => setListShow((draft) => {draft[index]![6]![0] = !listShow[index]![6]![0]})}>
                                    {
                                        currentChooseMatrix.chooses.filter((choose) => choose.slot === slotType).map((choose) => choose.symbolLevel?.images.map((image) => <>
                                            {/* <img src={image} className="rounded-xl border border-solid outline-gray-500 cursor-pointer" alt={currentChooseMatrix.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)]?.starForce?.JMSName}></img> */}
                                            <div className="rounded-xl border border-solid outline-gray-500 cursor-pointer">{currentChooseMatrix.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)]?.symbolLevel?.JMSName}</div>
                                        </>))
                                    }
                                </span>
                                
                                {/* このスロットに適用可能なシンボルレベルの一覧 */}
                                <div hidden={!listShow[index]![6]![0]} className="absolute h-6 p-1 -top-0 left-12 w-fit h-fit z-99 bg-white rounded-lg text-left text-black whitespace-nowrap">
                                    {filterBaseItemsBySlotType(slotType).filter((baseItem) => true && baseItem.JMSName === currentChooseMatrix.chooses.filter((choose) => choose.slot === slotType)[0]?.baseItemName).map((baseItem) => { return (
                                        <div>
                                            {baseItem.SymbolLevelPresets?.map((preset) => (<>
                                                <div className="h-6 mr-8 mb-2 hover:bg-linear-to-r from-pink-200 to-white cursor-pointer" onClick={() => {
                                                    // リストをしまう
                                                    setListShow((draft) => {draft[index]![6]![0] = false}); 
                                                    // 選択したシンボルレベルプリセットの名前をchooseに格納
                                                    updateCurrentChooseMatrix((draft) => { draft.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)]!.symbolLevel = preset})
                                                    // 選択したシンボルレベルプリセットの画像パスをchooseに格納
                                                    updateCurrentChooseMatrix((draft) => { draft.chooses[currentChooseMatrix.chooses.findIndex((choose) => choose.slot === slotType)]!.symbolLevel!.images = preset.images})
                                                    }}>
                                                    {preset.images.map((image) => (
                                                        <><img src={image} className="rounded-xl border border-solid outline-gray-500"></img>{preset.JMSName}</>
                                                    ))}
                                                </div>
                                            </>
                                            ))}
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