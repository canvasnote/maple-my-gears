import complete_under_control from "@/assets/images/Heart/complete_under_control.png"
import titan_heart from "@/assets/images/Heart/iron_heart.png"
import lithium_heart from "@/assets/images/Heart/iron_heart.png"
import iron_heart from "@/assets/images/Heart/iron_heart.png"

export const Heart = () => {

    return (
        <>
            <table className="border-collapse border border-slate-500 break-after-column">
                <caption>
                    顔の飾り
                </caption>
                <tbody>
                    <tr>
                        <td className="border border-slate-700 w-7">
                            <img src={complete_under_control}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                コンプリートアンダーコントロール
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={titan_heart}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                チタンハート(旧BH4品/UG13)
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={titan_heart}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                チタンハート(旧BH3品/UG12)
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={titan_heart}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                チタンハート(通常品/UG11)
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={lithium_heart}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                リチウムハート
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={iron_heart}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                アイアンハート
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}