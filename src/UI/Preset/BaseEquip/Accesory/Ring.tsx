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

export const Ring = () => {

    return (
        <>
            <table className="border-collapse border border-slate-500">
                <caption>
                    指輪
                </caption>
                <tbody>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={verrad_ring}></img>
                            <img src={fear}></img>
                            <img src={oath}></img>
                            <img src={restraint}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                ヴェラッドリング<br />凄まじい恐怖<br />根源の囁き<br />シードリング
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={verrad_ring}></img>
                            <img src={fear}></img>
                            <img src={guardian_angel}></img>
                            <img src={restraint}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                ヴェラッドリング<br />凄まじい恐怖<br />ガデスラ指<br />シードリング
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={verrad_ring}></img>
                            <img src={guardian_angel}></img>
                            <img src={strong_demonic_ring}></img>
                            <img src={restraint}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                ヴェラッドリング<br />ガデスラ指<br />強力魔性<br />シードリング
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={verrad_ring}></img>
                            <img src={tenebris}></img>
                            <img src={tenebris}></img>
                            <img src={restraint}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                ヴェラッドリング<br />イベント指×2<br />シードリング
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={tenebris}></img>
                            <img src={tenebris}></img>
                            <img src={tenebris}></img>
                            <img src={silver_blossom}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                イベント指×3<br />シルブロ指
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}