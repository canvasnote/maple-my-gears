import grail from "@/assets/images/Pocket/grail.png"
import grimoire from "@/assets/images/Pocket/grimoire.png"

export const Pocket = () => {

    return (
        <>
            <table className="border-collapse border border-slate-500 break-after-column">
                <caption>
                    ポケット装備
                </caption>
                <tbody>
                    <tr>
                        <td className="border border-slate-700 w-7">
                            <img src={grimoire}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                呪われた魔導書
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={grail}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                ピンクの聖杯
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}