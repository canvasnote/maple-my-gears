export interface IStat{
    type: StatType
    amount: number
    defindByJob?: true
}

type StatType = 
    // Flatステ(潜在乗る)
    "MainStat" | "SubStat1" | "SubStat2" | "MainStatPerLevel" | "SubStat1PerLevel" | "SubStat2PerLevel" |
    // Flatステ(潜在乗らない)
    "MainStatNot%" | "SubStat1Not%" | "SubStat2Not%" |
    // ステ％
    "MainStat%" | "SubStat1%" | "SubStat2%" | "AllStat%" |
    // FlatHPMP(潜在乗る)
    "HP" | "MP" |
    // HPMP%
    "HP%" | "MP%" |
    // 攻撃力/魔力
    "AMA" | "AMA%" |
    // ダメージ％
    "Damage" | "BossDamage" | "NormalDamage" |
    // クリティカル系
    "CriticalRate" | "CriticalDamage" |
    // 最終ダメージ
    "FinalDamage" |
    // 防御率無視
    "IgnoreDefence" |
    // CT減少
    "CoolTimeReduction" |
    // フォース
    "ArcaneForce" | "AuthenticForce" |
    // メル獲得量/ドロップ率増加
    "MesoAmount" | "DropRate" |
    // 能力なし(セット効果付き装備を1個着用したときに使う)
    "None"

