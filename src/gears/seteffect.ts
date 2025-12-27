// ラッキーアイテムのせいでもっと具体的に該当アイテムを書かなきゃいけない

import type { IStat } from "./stat"

export interface ISetEffect {
    internalName: string
    JMSName: string
    stats: Array<Array<IStat>>
} 

export const setEffects: Array<ISetEffect> = [
    {
        internalName: "Fafnir",
        JMSName: "ファフニールセット",
        stats: [
            [],
            [
                { type: "MainStat", amount: 20 },
                { type: "SubStat1", amount: 20 },
                { type: "HP", amount: 1000 },
                { type: "MP", amount: 1000 }
            ],
            [
                { type: "AMA", amount: 50 },
                { type: "HP%", amount: 10 },
                { type: "MP%", amount: 10 }
            ],
            [
                { type: "BossDamage", amount: 30 }
            ]

        ]
    }
]

// ファフニール/アブソレス/アーケインシェード/エテルネル
"Fafnir" | "absolab" | "ArcaneShade" | "Eternel" | 
// ボスアクセ/黎明/漆黒/光輝
"Boss" | "Dawn" | "Pitched" | "Brilliance" |
// ヴェラッド/マイスター
"Verrad" | "Meister" | 
// ラッキーアイテム
"Luckey"