import { Accesory } from "./BaseEquip/Accesory"
import { Accesory_old } from "./BaseEquip/Accesory_old"
import { Armour } from "./BaseEquip/Armour"
import { Badge } from "./BaseEquip/Badge"
import { Embrem } from "./BaseEquip/Embrem"
import { Heart } from "./BaseEquip/Heart"
import { Weapon } from "./BaseEquip/Weapon"

export const BaseEquip = () => {
    return (
        <>
            <h1 className="text-2xl font-bold my-4 leading-tight">ベース装備のプリセット</h1>
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