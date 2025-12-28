import type { Region } from "@/i18n"
import { main } from "bun"
import type { GearType } from "./gear"
import type { GearSet } from "./Gearset/gearset"

export interface IStat {
    type: StatType
    amount: number
    defindByJob?: true
}

export type MainStat = "STR" | "INT" | "DEX" | "LUK" | "HP"

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

export const describeStat = (statType: StatType, amount: number, mainStat: MainStat, subStat: MainStat, subStat2: MainStat | undefined, region: Region, gearType: GearType, currentGearSet: GearSet) => {
    if (region.name === "JMS") {
        switch (statType) {
            case "MainStat": 
                if(mainStat === "STR" || mainStat === "DEX" || mainStat === "INT" || mainStat === "LUK") return `${mainStat}: +${amount}`
                if(mainStat === "HP") return `STR: +${amount}`
                throw TypeError("メインステの処理がおかしいです　これが出るのはバグです")
            case "SubStat1": 
                if(mainStat === "STR" || mainStat === "DEX" || mainStat === "INT" || mainStat === "LUK") return `${subStat}: +${amount}`
                if(mainStat === "HP") return `` // DAはなんもなし
                throw TypeError("サブステの処理がおかしいです　これが出るのはバグです")
            case "SubStat2": 
                if(subStat2) return `${subStat2}: +${amount}` // サブステ2個ある組だけ
                else return ``
            case "MainStatPerLevel": return `レベル9ごとに${mainStat}: +${amount}`
            case "SubStat1PerLevel": return `レベル9ごとに${subStat}: +${amount}`
            case "SubStat2PerLevel": return `レベル9ごとに${subStat2}: +${amount}`
            case "MainStatNot%": return `${mainStat}: +${amount}(%非適用)`
            case "SubStat1Not%": return `${subStat}: +${amount}(%非適用)`
            case "SubStat2Not%":  
                if(subStat2) return `${subStat2}: +${amount}(%非適用)` // サブステ2個ある組だけ
                else return ``
            case "MainStat%": 
                if(mainStat === "STR" || mainStat === "DEX" || mainStat === "INT" || mainStat === "LUK") return `${mainStat}: +${amount}%`
                if(mainStat === "HP") return `STR: +${amount}%`
                throw TypeError("メインステ%の処理がおかしいです　これが出るのはバグです")
            case "SubStat1%": 
                if(mainStat === "STR" || mainStat === "DEX" || mainStat === "INT" || mainStat === "LUK") return `${subStat}: +${amount}%`
                if(mainStat === "HP") return `` // DAはなんもなし
                throw TypeError("サブステの処理がおかしいです　これが出るのはバグです")
            case "SubStat2%": 
                if(subStat2) return `${subStat2}: +${amount}%` // サブステ2個ある組だけ
                else return ``
            case "AllStat%": return `オールステータス: +${amount}%`
            case "HP": return `HP: +${amount}`
            case "MP": return `MP: +${amount}`
            case "HP%": return `HP: +${amount}%`
            case "MP%": return `MP: +${amount}%`
            case "AMA": 
                if(gearType === "Weapon"){
                    let definedAmount = -1
                    switch (currentGearSet.slots[0]!.gear.name) {
                        case "ファフニール武器": definedAmount = currentGearSet.weaponType.atkFafnir; break;
                        case "アブソレス武器": definedAmount = currentGearSet.weaponType.atkAbsolab; break;
                        case "アーケイン武器": definedAmount = currentGearSet.weaponType.atkArcane; break;
                        case "ジェネシス武器": definedAmount = currentGearSet.weaponType.atkGenesis; break;
                        case "ディスティニー武器": definedAmount = currentGearSet.weaponType.atkDestiny; break;
                        default: throw TypeError("知らない武器の攻撃力を計算しようとしました")
                    }
                    if(mainStat === "STR" || mainStat === "DEX" || mainStat === "LUK" || mainStat === "HP") return `攻撃力: +${definedAmount}`
                    if(mainStat === "INT") return `魔力: +${definedAmount}`
                }
                else{
                    if(mainStat === "STR" || mainStat === "DEX" || mainStat === "LUK" || mainStat === "HP") return `攻撃力: +${amount}`
                    if(mainStat === "INT") return `魔力: +${amount}`
                }
                throw TypeError("AMAの処理がおかしいです　これが出るのはバグです")
            case "AMA%": 
                if(mainStat === "STR" || mainStat === "DEX" || mainStat === "LUK" || mainStat === "HP") return `攻撃力: +${amount}%`
                if(mainStat === "INT") return `魔力: +${amount}%`
                throw TypeError("AMA%の処理がおかしいです　これが出るのはバグです")
            case "Damage": return `ダメージ: +${amount}%`
            case "BossDamage": return `ボスダメージ: +${amount}%`
            case "NormalDamage": return `一般ダメージ: +${amount}%`
            case "CriticalRate": return `クリティカル率: +${amount}%`
            case "CriticalDamage": return `クリティカルダメージ: +${amount}%`
            case "FinalDamage": return `最終ダメージ: +${amount}%`
            case "IgnoreDefence": return `防御率無視: +${amount}%`
            case "CoolTimeReduction": return `クールタイム減少: +${amount}秒`
            case "ArcaneForce": return `アーケインフォース: +${amount}`
            case "AuthenticForce": return `オーセンティックフォース: +${amount}`
            case "MesoAmount": return `メル獲得量: +${amount}%`
            case "DropRate": return `ドロップ率: +${amount}`
            case "None": return ``
        }
    }

    throw TypeError("このリージョンには対応していません")
}