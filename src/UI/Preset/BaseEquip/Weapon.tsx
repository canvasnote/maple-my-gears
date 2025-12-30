import fafnir from "@/assets/images/weapon/fafnir.png"
import absolab from "@/assets/images/weapon/absolab.png"
import arcaneshade from "@/assets/images/weapon/arcaneshade.png"
import genesis from "@/assets/images/weapon/genesis.png"
import destiny from "@/assets/images/weapon/destiny.webp"

export const Weapon = () => {

    return (
        <>
            <table className="border-collapse border border-slate-500 break-after-column">
                <caption>
                    武器
                </caption>
                <tbody>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={fafnir}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                ファフニール
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={absolab}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                アブソレス
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={arcaneshade}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                アーケインシェード
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={genesis}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                ジェネシス
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={destiny}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                ディスティニー
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}