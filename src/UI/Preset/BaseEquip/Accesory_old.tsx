import verrad_ring from "@/assets/images/Accesory/verrad_ring.png"
import verrad_earring from "@/assets/images/Accesory/verrad_earring.png"
import verrad_pendant from "@/assets/images/Accesory/verrad_pendant.png"
import verrad_belt from "@/assets/images/Accesory/verrad_belt.png"

export const Accesory = () => {

    return (
        <>
            <table className="border-collapse border border-slate-500 break-after-column">
                <caption>
                    アクセサリ
                </caption>
                <tbody>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={verrad_ring}></img>
                            <img src={verrad_earring}></img>
                            <img src={verrad_pendant}></img>
                            <img src={verrad_belt}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                ヴェラッド4セット+漆黒5セット+ガデスラ指+強力魔性+シードリング
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={verrad_ring}></img>
                            <img src={verrad_earring}></img>
                            <img src={verrad_pendant}></img>
                            <img src={verrad_belt}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                ヴェラッド4セット+黎明3セット+ビシャス目+マイスター指+強力魔性+シードリング
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={verrad_ring}></img>
                            <img src={verrad_earring}></img>
                            <img src={verrad_pendant}></img>
                            <img src={verrad_belt}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                ヴェラッド4セット+黎明2セット+ドミネーター+ビシャス目+マイスター指+強力魔性+シードリング
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={verrad_ring}></img>
                            <img src={verrad_earring}></img>
                            <img src={verrad_pendant}></img>
                            <img src={verrad_belt}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                ヴェラッド4セット+黎明2セット+ドミネーター+ビシャス目+マイスター指+強力魔性+シードリング
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}