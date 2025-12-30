import { Accesory } from "./BaseEquip/Accesory"
import { Accesory_old } from "./BaseEquip/Accesory_old"
import { Armour } from "./BaseEquip/Armour"
import { Badge } from "./BaseEquip/Badge"
import { Embrem } from "./BaseEquip/Embrem"
import { Heart } from "./BaseEquip/Heart"
import { Weapon } from "./BaseEquip/Weapon"

export const BaseEquip = () => {


    return (
        <div className="container columns-7 gap-8">
            <div className="break-after-column">ベース装備</div>
            <div className="break-after-column">{Weapon()}</div>
            <div className="break-after-column">{Armour()}</div>
            <div className="break-after-column">{Accesory()}</div>
            {/* <div className="break-after-column">{Accesory_old()}</div> */}
            <div className="break-after-column">{Embrem()}</div>
            <div className="break-after-column">{Heart()}</div>
            <div className="break-after-column">{Badge()}</div>
        </div>
    )
}