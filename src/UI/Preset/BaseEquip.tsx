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
import { useState } from "react"

export const BaseEquip = () => {
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
            
            {SelectPreset(options, "防具")}
            <h1 className="text-2xl font-bold my-4 leading-tight">ベース装備のプリセット</h1>
            <table>
                <tbody>
                    <tr>
                        <td>
                            武器
                        </td>
                        <td>
                            <button style={{border:'solid 1px', borderRadius: 14, padding: 2}} onClick={() => setWpshow(!wpshow)}><img src={fafnir} height={30} width={30}></img></button>
                            <div hidden={wpshow}>
                                <button style={{border:'solid 1px', borderRadius: 14, padding: 2}}><img src={fafnir} height={30} width={30}></img></button>
                                <button style={{border:'solid 1px', borderRadius: 14, padding: 2}}><img src={fafnir} height={30} width={30}></img></button>
                                <button style={{border:'solid 1px', borderRadius: 14, padding: 2}}><img src={absolab} height={30} width={30}></img></button>
                                <button style={{border:'solid 1px', borderRadius: 14, padding: 2}}><img src={arcaneshade} height={30} width={30}></img></button>
                                <button style={{border:'solid 1px', borderRadius: 14, padding: 2}}><img src={genesis} height={30} width={30}></img></button>
                                <button style={{border:'solid 1px', borderRadius: 14, padding: 2}}><img src={destiny} height={30} width={30}></img></button>
                            </div>
                        </td>
                        <td>
                            あああああ
                        </td>
                    </tr>
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