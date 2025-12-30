import verrad_ring from "@/assets/images/Accesory/verrad_ring.png"
import verrad_earring from "@/assets/images/Accesory/verrad_earring.png"
import verrad_pendant from "@/assets/images/Accesory/verrad_pendant.png"
import verrad_belt from "@/assets/images/Accesory/verrad_belt.png"
import pain   from "@/assets/images/Accesory/pain.png"
import fear  from "@/assets/images/Accesory/fear.png"
import tenebris  from "@/assets/images/Accesory/tenebris.png"
import complete_under_control  from "@/assets/images/Accesory/complete_under_control.png"
import lose_control_machine  from "@/assets/images/Accesory/lose_control_machine.png"
import magical_eyepatch  from "@/assets/images/Accesory/magical_eyepatch.png"
import strong_demonic_pendant  from "@/assets/images/Accesory/strong_demonic_pendant.png"
import strong_demonic_ring  from "@/assets/images/Accesory/strong_demonic_ring.png"
import oath from "@/assets/images/Accesory/oath.png"
import whisper  from "@/assets/images/Accesory/whisper.png"
import restraint  from "@/assets/images/Accesory/restraint.png"
import guardian_angel  from "@/assets/images/Accesory/guardian_angel.png"
import silver_blossom  from "@/assets/images/Accesory/silver_blossom.png"
import aquatic_letter from "@/assets/images/Accesory/aquatic_letter.png"
import condensed  from "@/assets/images/Accesory/condensed.png"
import twilight from "@/assets/images/Accesory/twilight.png"

export const Face = () => {

    return (
        <>
            <table className="border-collapse border border-slate-500">
                <caption>
                    顔の飾り
                </caption>
                <tbody>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={condensed}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                凝縮された力の結晶石
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={twilight}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                トワイライトマーク
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={magical_eyepatch}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                魔力が宿った眼帯
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}