import { Accesory } from "./BaseEquip/Accesory"
import { Accesory_old } from "./BaseEquip/Accesory_old"
import { Armour } from "./BaseEquip/Armour"
import { Badge } from "./BaseEquip/Badge"
import { Embrem } from "./BaseEquip/Embrem"
import { Heart } from "./BaseEquip/Heart"
import { Weapon } from "./BaseEquip/Weapon"

import fafnir from "@/assets/images/weapon/fafnir.png"
import absolab from "@/assets/images/weapon/absolab.png"
import arcaneshade from "@/assets/images/weapon/arcaneshade.png"
import genesis from "@/assets/images/weapon/genesis.png"
import destiny from "@/assets/images/weapon/destiny.webp"

import { SelectPreset } from "./SelectPreset"
import { useState, type Dispatch, type SetStateAction } from "react"
import { ListSlot } from "./ListSlot"
import type { GearSet } from "@/gears/Gearset/gearset"
import type { Region } from "@/i18n"
import type { Updater } from "use-immer"

export const BaseEquip = (globalRenderer: number, setGlobalRenderer: Dispatch<SetStateAction<number>>, currentGearSet: GearSet, updateCurrentGearSet: Updater<GearSet>, region: Region) => {
    const options = [
        {value: "キノコ装備7セット", label: "キノコ装備7セット"},
        {value: "アビス3セット", label: "アビス3セット"},
        {value: "アブソレス4セット", label: "アブソレス4セット"},
        {value: "アーケイン4セット", label: "アーケイン4セット"},
        {value: "エテルネル4セット", label: "エテルネル4セット"},
        {value: "エテルネル7セット", label: "エテルネル7セット"},
    ]
    const [wpshow, setWpshow] = useState(false)


    return (
        <>
            <h1 className="text-2xl font-bold my-4 leading-tight">ベース装備のプリセット</h1>
            <table>
                <tbody className="border-collapse border border-slate-500 break-after-column">
                    
                    {/* <tr>
                        <td>
                            武器
                        </td>
                        <td className="relative">
                            <div className="h-6 " onClick={() => setWpshow(!wpshow)}><img src={fafnir} className="rounded-xl border border-solid outline-gray-500"></img></div>
                            <div hidden={wpshow} className="absolute p-1 -top-0 left-12 w-fit bg-white rounded-lg text-left text-black whitespace-nowrap">
                                
                                <div className="h-6 mr-8 mb-2"><img src={fafnir} width={30} height={30} className="rounded-xl border border-solid outline-gray-500"></img>ファフニール武器</div>
                                <div className="h-6 mr-8 mb-2"><img src={absolab} width={30} height={30} className="rounded-xl border border-solid outline-gray-500"></img>アブソレス武器</div>
                                <div className="h-6 mr-8 mb-2"><img src={arcaneshade} width={30} height={30} className="rounded-xl border border-solid outline-gray-500"></img>アーケインシェード武器</div>
                                <div className="h-6 mr-8 mb-2"><img src={genesis} width={30} height={30} className="rounded-xl border border-solid outline-gray-500"></img>ジェネシス武器</div>
                                <div className="h-6 mr-8 mb-2"><img src={destiny} width={30} height={30} className="rounded-xl border border-solid outline-gray-500"></img>ディスティニー武器</div>
                                
                                
                            </div>
                        </td>
                        <td className="whitespace-nowrap">
                            あああああ<img src={fafnir}></img>いいいいい
                        </td>
                    </tr> */}
                </tbody>
            </table>
            <div className="container columns-10 gap-2">
                <div className="break-after-column">{Weapon()}</div>
                <div className="break-after-column">{Armour()}</div>
                <div className="break-after-column">{Accesory()}</div>
                <div className="break-after-column">{Embrem()}</div>
                <div className="break-after-column">{Heart()}</div>
                <div className="break-after-column">{Badge()}</div>
            </div>
        </>
    )
}