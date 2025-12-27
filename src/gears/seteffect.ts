import type { GearType } from "./gear"
import type { IStat } from "./stat"

export interface ISetEffect {
    internalName: SetEffectName
    JMSName: string
    applying: Array<GearType>
    stats: Array<Array<IStat>>
} 

export type SetEffectName =
// ファフニール/アブソレス/アーケインシェード/エテルネル
"Fafnir" | "Absolab" | "ArcaneShade" | "Eternel" | 
// ボスアクセ/黎明/漆黒/光輝
"Boss" | "Dawn" | "Pitched" | "Brilliance" |
// ヴェラッド/マイスター
"Verrad" | "Meister" | 
// ラッキーアイテム
"Luckey"

export const setEffects: Array<ISetEffect> = [
    {
        internalName: "Fafnir",
        JMSName: "ファフニールセット",
        applying: ["Weapon", "Head", "Armour", "Pants"],
        stats: [
            [], // 1セット
            [ // 2セット
                { type: "MainStat", amount: 20 },
                { type: "SubStat1", amount: 20 },
                { type: "HP", amount: 1000 },
                { type: "MP", amount: 1000 }
            ],
            [ // 3セット
                { type: "AMA", amount: 50 },
                { type: "HP%", amount: 10 },
                { type: "MP%", amount: 10 }
            ],
            [ // 4セット
                { type: "BossDamage", amount: 30 }
            ]

        ]
    },

    {
        internalName: "Absolab",
        JMSName: "アブソレスセット",
        applying: ["Weapon", "Head", "FullCloth", "Shoulder", "Mantle", "Gloves", "Boots"],
        stats: [
            [], // 1セット
            [ // 2セット
                { type: "AMA", amount: 20 },
                { type: "HP", amount: 1500 },
                { type: "MP", amount: 1500 },
                { type: "BossDamage", amount: 10}
            ],
            [ // 3セット
                { type: "AMA", amount: 20 },
                { type: "MainStat", amount: 30},
                { type: "SubStat1", amount: 30},
                { type: "SubStat2", amount: 30},
                { type: "BossDamage", amount: 10}
            ],
            [ // 4セット
                { type: "AMA", amount: 25 },
                { type: "IgnoreDefence", amount: 10 }
            ],
            [ // 5セット
                { type: "AMA", amount: 30 },
                { type: "BossDamage", amount: 10}
            ],
            [ // 6セット
                { type: "AMA", amount: 20 },
                { type: "HP%", amount: 20 },
                { type: "MP%", amount: 20 },
            ],
            [ // 7セット
                { type: "AMA", amount: 20 },
                { type: "IgnoreDefence", amount: 10 }
            ]
        ]
    },

    {
        internalName: "Meister",
        JMSName: "マイスターセット",
        applying: ["Weapon", "Ring", "Shoulder", "EarRing"],
        stats: [
            [], // 1セット
            [ // 2セット
                { type: "HP%", amount: 10 },
                { type: "MP%", amount: 10 }
            ],
            [ // 3セット
                { type: "AMA", amount: 40 }
            ],
            [ // 4セット
                { type: "BossDamage", amount: 20 }
            ]
        ]
    },

　　　{
        internalName: "Boss",
        JMSName: "ボスアクセサリーセット",
        applying: ["Face", "Eyes", "Ring", "Pendant", "Shoulder", "Belt", "EarRing", "Pocket", "Badge"],
        stats: [
            [], // 1セット
            [], // 2セット
            [ // 3セット
                { type: "AMA", amount: 5 },
                { type: "MainStat", amount: 10},
                { type: "SubStat1", amount: 10},
                { type: "SubStat2", amount: 10},
                { type: "HP%", amount: 5},
                 { type: "MP%", amount: 5}
            ],
            [], // 4セット
            [ // 5セット
                { type: "AMA", amount: 5 },
                { type: "MainStat", amount: 10},
                { type: "SubStat1", amount: 10},
                { type: "SubStat2", amount: 10},
                { type: "HP%", amount: 5},
                 { type: "MP%", amount: 5}
            ],
            [], // 6セット
            [ // 7セット
                { type: "AMA", amount: 10 },
                { type: "MainStat", amount: 10},
                { type: "SubStat1", amount: 10},
                { type: "SubStat2", amount: 10},
                { type: "IgnoreDefence", amount: 10 }
            ],
            [], // 8セット
            [ // 9セット
                { type: "AMA", amount: 10 },
                { type: "MainStat", amount: 15},
                { type: "SubStat1", amount: 15},
                { type: "SubStat2", amount: 15},
                { type: "BossDamage", amount: 10 }
            ],
        ]
    },

    {
        internalName: "Dawn",
        JMSName: "黎明のボスアクセサリーセット",
        applying: ["Face", "Eye", "Ring", "EarRing"],
        stats: [
            [], // 1セット
            [ // 2セット
                { type: "AMA", amount: 10 },
                { type: "MainStat", amount: 10 },
                { type: "SubStat1", amount: 10 },
                { type: "SubStat2", amount: 10 },
                { type: "HP", amount: 250 },
                { type: "BossDamage", amount: 10 }
            ],
            [ // 3セット
                { type: "AMA", amount: 10 },
                { type: "MainStat", amount: 10 },
                { type: "SubStat1", amount: 10 },
                { type: "SubStat2", amount: 10 },
                { type: "HP", amount: 250 },
            ],
            [ // 4セット
                { type: "AMA", amount: 10 },
                { type: "MainStat", amount: 10 },
                { type: "SubStat1", amount: 10 },
                { type: "SubStat2", amount: 10 },
                { type: "HP", amount: 250 },
                { type: "IgnoreDefence", amount: 10 }
            ]
        ]
    },

    {
        internalName: "Pitched",
        JMSName: "漆黒のボスアクセサリーセット",
        applying: ["Face", "Eyes", "Ring", "Pendant", "EarRing", "Belt", "Pocket", "Badge", "Heart", "Embrem"],
        stats: [
            [], // 1セット
            [ // 2セット
                { type: "AMA", amount: 10 },
                { type: "MainStat", amount: 10},
                { type: "SubStat1", amount: 10},
                { type: "SubStat2", amount: 10},
                { type: "HP", amount: 250},
                { type: "BossDamage", amount: 10 }
            ],
            [ // 3セット
                { type: "AMA", amount: 10 },
                { type: "MainStat", amount: 10},
                { type: "SubStat1", amount: 10},
                { type: "SubStat2", amount: 10},
                { type: "HP", amount: 250},
                { type: "IgnoreDefence", amount: 10 }
            ],
            [ // 4セット
                { type: "AMA", amount: 15 },
                { type: "MainStat", amount: 15},
                { type: "SubStat1", amount: 15},
                { type: "SubStat2", amount: 15},
                { type: "HP", amount: 375},
                { type: "CriticalDamage", amount: 5 }
            ],
            [ // 5セット
                { type: "AMA", amount: 15 },
                { type: "MainStat", amount: 15},
                { type: "SubStat1", amount: 15},
                { type: "SubStat2", amount: 15},
                { type: "HP", amount: 375},
                { type: "BossDamage", amount: 10 }
            ],
            [// 6セット
                { type: "AMA", amount: 15 },
                { type: "MainStat", amount: 15},
                { type: "SubStat1", amount: 15},
                { type: "SubStat2", amount: 15},
                { type: "HP", amount: 375},
                { type: "IgnoreDefence", amount: 10 }
            ],
            [ // 7セット
                { type: "AMA", amount: 15 },
                { type: "MainStat", amount: 15},
                { type: "SubStat1", amount: 15},
                { type: "SubStat2", amount: 15},
                { type: "HP", amount: 375},
                { type: "CriticalDamage", amount: 5 }
            ],
            [ // 8セット
                { type: "AMA", amount: 15 },
                { type: "MainStat", amount: 15},
                { type: "SubStat1", amount: 15},
                { type: "SubStat2", amount: 15},
                { type: "HP", amount: 375},
                { type: "BossDamage", amount: 10 }
            ],
            [ // 9セット
                { type: "AMA", amount: 15 },
                { type: "MainStat", amount: 15},
                { type: "SubStat1", amount: 15},
                { type: "SubStat2", amount: 15},
                { type: "HP", amount: 375},
                { type: "CriticalDamage", amount: 5 }
            ],
            [ // 10セット
                { type: "AMA", amount: 20 },
                { type: "MainStat", amount: 20},
                { type: "SubStat1", amount: 20},
                { type: "SubStat2", amount: 20},
                { type: "HP", amount: 500},
                { type: "BossDamage", amount: 10 }
            ],
        ]
    },

    {
        internalName: "Brilliant",
        JMSName: "光輝のボスアクセサリーセット",
        applying: ["Ring", "Ring", "Pendant", "Medal", "Face"], // 一旦2025/12KMS実装分まで 指輪2個は仕様
        stats: [
            [], // 1セット
            [ // 2セット
                { type: "AMA", amount: 20 },
                { type: "MainStat", amount: 20},
                { type: "SubStat1", amount: 20},
                { type: "SubStat2", amount: 20},
                { type: "HP", amount: 500},
                { type: "BossDamage", amount: 15 }
            ],
            [ // 3セット
                { type: "AMA", amount: 20 },
                { type: "MainStat", amount: 20},
                { type: "SubStat1", amount: 20},
                { type: "SubStat2", amount: 20},
                { type: "HP", amount: 500},
                { type: "IgnoreDefence", amount: 15 }
            ],
            [ // 4セット
                { type: "AMA", amount: 20 },
                { type: "MainStat", amount: 20},
                { type: "SubStat1", amount: 20},
                { type: "SubStat2", amount: 20},
                { type: "HP", amount: 500},
                { type: "CriticalDamage", amount: 5 }
            ],
            [ // 5セット
                { type: "AMA", amount: 20 },
                { type: "MainStat", amount: 20},
                { type: "SubStat1", amount: 20},
                { type: "SubStat2", amount: 20},
                { type: "HP", amount: 500},
                { type: "BossDamage", amount: 15 }
                
            ],
            [// 6セット以降未実装
                
            ],
            [ // 7セット
                
            ],
            [ // 8セット
                
            ],
            [ // 9セット
                
            ],
            [ // 10セット
                
            ],
        ]
    },

    {
        internalName: "ArcaneShade",
        JMSName: "アーケインセット",
        applying: ["Weapon", "Head", "FullCloth", "Shoulder", "Mantle", "Gloves", "Boots"],
        stats: [
            [], // 1セット
            [ // 2セット
                { type: "AMA", amount: 30 },
                { type: "BossDamage", amount: 10}
            ],
            [ // 3セット
                { type: "AMA", amount: 30 },
                { type: "IgnoreDefence", amount: 10}
            ],
            [ // 4セット
                { type: "AMA", amount: 35 },
                { type: "MainStat", amount: 50},
                { type: "SubStat1", amount: 50},
                { type: "SubStat2", amount: 50},
                { type: "BossDamage", amount: 10 }
            ],
            [ // 5セット
                { type: "AMA", amount: 40 },
                { type: "HP", amount: 2000},
                { type: "MP", amount: 2000},
                { type: "BossDamage", amount: 10}
            ],
            [ // 6セット
                { type: "AMA", amount: 30 },
                { type: "HP%", amount: 30},
                { type: "MP%", amount: 30},
            ],
            [ // 7セット
                { type: "AMA", amount: 30 },
                { type: "IgnoreDefence", amount: 10}
            ]
        ]
    },

    {
        internalName: "Eternel",
        JMSName: "エテルネルセット",
        applying: ["Weapon", "Head", "Armour", "Pants", "Shoulder", "Mantle", "Gloves", "Boots"],
        stats: [
            [], // 1セット
            [ // 2セット
                { type: "HP", amount: 2500},
                { type: "MP", amount: 2500},
                { type: "AMA", amount: 40 },
                { type: "BossDamage", amount: 10}
            ],
            [ // 3セット
                { type: "AMA", amount: 40 },
                { type: "MainStat", amount: 50},
                { type: "SubStat1", amount: 50},
                { type: "SubStat2", amount: 50},
                { type: "BossDamage", amount: 10}
            ],
            [ // 4セット
                { type: "AMA", amount: 40 },
                { type: "HP%", amount: 15},
                { type: "MP%", amount: 15},
                { type: "BossDamage", amount: 10 }
            ],
            [ // 5セット
                { type: "AMA", amount: 40 },
                { type: "IgnoreDefence", amount: 20}
            ],
            [ // 6セット
                { type: "AMA", amount: 40 },
                { type: "BossDamage", amount: 15}
            ],
            [ // 7セット
                { type: "AMA", amount: 40 },
                { type: "IgnoreDefence", amount: 10},
                { type: "MainStat", amount: 50},
                { type: "SubStat1", amount: 50},
                { type: "SubStat2", amount: 50},
                { type: "HP", amount: 2500},
                { type: "MP", amount: 2500},
                { type: "BossDamage", amount: 10}
            ],
            [ // 8セット
                { type: "AMA", amount: 40 },
                { type: "BossDamage", amount: 15}
            ]
        ]
    },
    {
        internalName: "Verrad",
        JMSName: "ヴェラッドセット",
        applying: ["EarRing", "Pendant", "Ring", "Belt"],
        stats: [
            [], // 1セット
            [ // 2セット
                { type: "MainStat", amount: 20},
                { type: "SubStat1", amount: 20},
                { type: "SubStat2", amount: 20},
                 { type: "HP", amount: 1500},
                { type: "MP", amount: 1500},
            ],
            [ // 3セット
                { type: "AMA", amount: 35 },
                { type: "HP%", amount: 13 },
                 { type: "MP%", amount: 13 }
            ],
            [ // 4セット
                { type: "BossDamage", amount: 30 },
                { type: "IgnoreDefence", amount: 30}
            ]

        ]
    },
]

