import genesis from "@/assets/images/Badge/genesis.png"
import magnus from "@/assets/images/Badge/magnus.png"
import orca from "@/assets/images/Badge/orca.png"

export const Badge = () => {

    return (
        <>
            <table className="border-collapse border border-slate-500 break-after-column">
                <caption>
                    バッジ
                </caption>
                <tbody>
                    <tr>
                        <td className="border border-slate-700 w-7">
                            <img src={genesis}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                創世のバッジ
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={magnus}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                クリスタルウェントゥスバッジ
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={orca}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                オルカのバッジ(パッシブ有り)
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                            <img src={orca}></img>
                        </td>
                        <td className="border border-slate-700">
                            <button>
                                オルカのバッジ(パッシブ無し)
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}