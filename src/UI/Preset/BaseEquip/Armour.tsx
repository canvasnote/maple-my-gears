import hyness from "@/assets/images/Armour/hyness.png"
import eagleeye from "@/assets/images/Armour/eagleeye.png"
import trickster from "@/assets/images/Armour/trickster.png"
import absolab_cape from "@/assets/images/Armour/absolab_cape.png"
import absolab_glove from "@/assets/images/Armour/absolab_glove.png"
import absolab_shoes from "@/assets/images/Armour/absolab_shoes.png"
import absolab_shoulder from "@/assets/images/Armour/absolab_shoulder.png"
import arcaneshade_cape from "@/assets/images/Armour/arcaneshade_cape.png"
import arcaneshade_glove from "@/assets/images/Armour/arcaneshade_glove.png"
import arcaneshade_shoes from "@/assets/images/Armour/arcaneshade_shoes.png"
import arcaneshade_shoulder from "@/assets/images/Armour/arcaneshade_shoulder.png"
import eternel_helm from "@/assets/images/Armour/eternel_helm.png"
import eternel_armour from "@/assets/images/Armour/eternel_armour.png"
import eternel_pants from "@/assets/images/Armour/eternel_pants.png"
import eternel_cape from "@/assets/images/Armour/eternel_cape.png"
import eternel_glove from "@/assets/images/Armour/eternel_glove.png"
import eternel_shoes from "@/assets/images/Armour/eternel_shoes.png"
import eternel_shoulder from "@/assets/images/Armour/eternel_shoulder.png"

export const Armour = () => {

    return (
        <>
            <table className="border-collapse border border-slate-500 break-after-column">
                <caption>
                    防具
                </caption>
                <tbody>
                    <tr>
                        <select>
                            <option>
                                
                                <img src={hyness}></img>
                                <img src={eagleeye}></img>
                                <img src={trickster}></img>
                                <img src={absolab_cape}></img>
                                <img src={absolab_glove}></img>
                                <img src={absolab_shoes}></img>
                                <img src={absolab_shoulder}></img>
                                <br />
                                キノコ装備7セット
                            </option>
                        </select>
                    </tr>
                    <tr>
                        <td className="border border-slate-700 w-7">
                            <img src={hyness}></img>
                            <img src={eagleeye}></img>
                            <img src={trickster}></img>
                            <img src={absolab_cape}></img>
                            <img src={absolab_glove}></img>
                            <img src={absolab_shoes}></img>
                            <img src={absolab_shoulder}></img>
                        </td>
                        <td className="border border-slate-700">
                        <button>
                            キノコ装備7セット
                        </button></td>
                    </tr>
                {/* </tbody>
            </table>
            <table className="border-collapse border border-slate-500 break-after-column">
                <tbody> */}
                    <tr>
                        <td className="border border-slate-700">
                            <img src={hyness}></img>
                            <img src={eagleeye}></img>
                            <img src={trickster}></img>
                        </td>
                        <td className="border border-slate-700">
                        <button>
                            アビス3セット
                        </button></td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={absolab_cape}></img>
                            <img src={absolab_glove}></img>
                            <img src={absolab_shoes}></img>
                            <img src={absolab_shoulder}></img>
                        </td>
                        <td className="border border-slate-700">
                        <button>
                            アブソレス4セット
                        </button></td>
                    </tr>
                    <tr>
                            <img src={arcaneshade_cape}></img>
                            <img src={arcaneshade_glove}></img>
                            <img src={arcaneshade_shoes}></img>
                            <img src={arcaneshade_shoulder}></img>
                        <td className="border border-slate-700">
                        <button>
                            アーケイン4セット
                        </button></td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={eternel_helm}></img>
                            <img src={eternel_armour}></img>
                            <img src={eternel_pants}></img>
                            <img src={eternel_shoulder}></img>
                        </td>
                        <td className="border border-slate-700">
                        <button>
                            エテルネル3セット
                        </button></td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={eternel_helm}></img>
                            <img src={eternel_armour}></img>
                            <img src={eternel_pants}></img>
                            <img src={eternel_cape}></img>
                        </td>
                        <td className="border border-slate-700">
                        <button>
                            エテルネル4セット
                        </button></td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={eternel_helm}></img>
                            <img src={eternel_armour}></img>
                            <img src={eternel_pants}></img>
                            <img src={eternel_shoulder}></img>
                            <img src={eternel_cape}></img>
                            <img src={eternel_glove}></img>
                            <img src={eternel_shoes}></img>
                        </td>
                        <td className="border border-slate-700">
                        <button>
                            エテルネル7セット
                        </button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}