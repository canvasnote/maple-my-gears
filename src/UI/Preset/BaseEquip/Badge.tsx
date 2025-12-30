export const Badge = () => {

    return (
        <>
            <table className="border-collapse border border-slate-500 break-after-column">
                <thead>
                    <tr className="border border-slate-600">
                        <thead>
                            バッジ
                        </thead>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-700">
                        <button>
                            クリスタルウェントゥスバッジ
                        </button></td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                        <button>
                            創世のバッジ
                        </button></td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">
                        <button>
                            オルカのバッジ
                        </button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}