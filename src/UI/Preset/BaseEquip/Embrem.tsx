import gold from "@/assets/images/Embrem/gold.png"
import hybrid from "@/assets/images/Embrem/hybrid.png"
import mitra from "@/assets/images/Embrem/mitra.png"

export const Embrem = () => {

    return (
        <>
            <table className="border-collapse border border-slate-500">
                <caption>
                    エンブレム
                </caption>
                <tbody>
                    <tr>
                        <td className="border border-slate-700 w-7">
                            <img src={gold}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                ゴールドエンブレム
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={hybrid}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                ハイブリッドハート
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={mitra}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                ミトラの怒り
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}