import verrad_ring from "@/assets/images/Accesory/verrad_ring.png"
import verrad_earring from "@/assets/images/Accesory/verrad_earring.png"
import verrad_pendant from "@/assets/images/Accesory/verrad_pendant.png"
import verrad_belt from "@/assets/images/Accesory/verrad_belt.png"
import { Ring } from "./Accesory/Ring"
import { Face } from "./Accesory/Face"

export const Accesory = () => {

    return (
        <>
            {Ring()}
            {Face()}
            {Ring()}
            {Ring()}
        </>
    )
}