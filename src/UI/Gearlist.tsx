import type { ReactElement, ReactNode } from "react"
import type { GearType } from "@/gears/gear"
import { baseItems, type IBaseItem } from "@/gears/BaseItem/baseitem"

const GearTypeNameList = {
    // 3種の神器
    "Weapon": 1, "SubWeapon":2,  "Embrem":3,
    // 防具1
    "Head":4,  "FullCloth":5,  "Armour":6,  "Pants":7,
    // 防具2
    "Shoulder":8,  "Mantle":9,  "Gloves":10,  "Boots":11,
    // アクセサリ
    "Pendant":12,  "Ring":13,  "Belt":14,  "EarRing":15,  "Face":16,  "Eyes":17,  "Pocket":18,  "Badge":19,
    // 勲章＆称号
    "Title": 20, "Medal": 21,
    // "Valuables"にあるやつ
    "Totem":22,  "Jewel":23,
    // シンボル
    "ArcaneSymbol":24,  "AuthenticSymbol":25,  "GrandAuthenticSymbol":26,
    // 機械心臓部
    "Heart": 27
} as const

const strToGearType = (str: string): GearType => {
    // stringからGearTypeに変換するためだけにある関数　泥臭い
    switch(str){
        case "Weapon": return "Weapon"
        case "SubWeapon": return "SubWeapon"
        case "Embrem": return "Embrem"
        case "Head": return "Head"
        case "FullCloth": return "FullCloth"
        case "Armour": return "Armour"
        case "Pants": return "Pants"
        case "Shoulder": return "Shoulder"
        case "Mantle": return "Mantle"
        case "Gloves": return "Gloves"
        case "Boots": return "Boots"
        case "Pendant": return "Pendant"
        case "Ring": return "Ring"
        case "Belt": return "Belt"
        case "EarRing": return "EarRing"
        case "Face": return "Face"
        case "Eyes": return "Eyes"
        case "Pocket": return "Pocket"
        case "Badge": return "Badge"
        case "Heart": return "Heart"
        case "Title": return "Title"
        case "Medal": return "Medal"
        case "Totem": return "Totem"
        case "Jewel": return "Jewel"
        case "ArcaneSymbol": return "ArcaneSymbol"
        case "AuthenticSymbol": return "AuthenticSymbol"
        case "GrandAuthenticSymbol": return "GrandAuthenticSymbol"

        default: throw Error("strToGearType: 渡された文字列が装備タイプと一致しません")
    }
}

export const GearsTable = () => {
    let result: ReactNode = <></>
    
    const typeMatchedGears = (gear: GearType) => {
        return baseItems.filter((item) => {
            if (item.type === gear) { return true }
        })
    }
    
    const Options = (list: Array<IBaseItem>) => {
        const result = list.map(
            element => 
            <option key={element.JMSName} value={element.type} className="bg-gray-600 justify-start">
                {element.JMSName}
                </option>
                )
        return <>{result}</>
    }

    const matchedGearList = (type: GearType) =>
        <select name={type.toString()}>
            { Options(typeMatchedGears(type)) }
        </select>

    const rows = Object.keys(GearTypeNameList).map((type, index) => 
        <tr key={type}>
            <td>
                {index + 1}
            </td>
            <td>
                {type}
            </td>
            <td>
                {matchedGearList(strToGearType(type))}
            </td>
        </tr>
    )

    return (
      <table border={1} cellSpacing={0} className="justify-start">
         <thead>
            <tr>
               <th>No.</th>
               <th>種別</th>
               <th>名前</th>
            </tr>
         </thead>
         <tbody>
           {rows}
         </tbody> 
      </table>
    )
}