import verrad_ring from "@/assets/images/Accesory/verrad_ring.png"
import verrad_earring from "@/assets/images/Accesory/verrad_earring.png"
import verrad_pendant from "@/assets/images/Accesory/verrad_pendant.png"
import verrad_belt from "@/assets/images/Accesory/verrad_belt.png"
import { Ring } from "./Accesory/Ring"
import { Face } from "./Accesory/Face"
import { Eyes } from "./Accesory/Eyes"
import { Pocket } from "./Accesory/Pocket"

export const Accesory = () => {

    return (
        <>
            {Ring()}
            {Face()}
            {Eyes()}
            {Ring()}
            {Pocket()}
        </>
    )
}