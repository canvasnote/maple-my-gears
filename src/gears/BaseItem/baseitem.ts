import type { IntRange } from "type-fest"
import type { BonusPotential } from "../bonuspotential"
import type { GearType } from "../gear"
import type { Potential } from "../potential"
import type { IStat } from "../stat"
import type { ISetEffect, SetEffectName } from "../seteffect"
import { weapons } from "./weapons"
import { heads } from "./heads"
import { armours } from "./armours"
import { pants } from "./pants"
import { shoulders } from "./shoulders"
import { mantles } from "./mantles"
import { gloves } from "./gloves"
import { boots } from "./boots"
import { subweapons } from "./subweapon"
import { embrems } from "./emblems"
import { rings } from "./rings"
import { hearts } from "./hearts"
import { pendants } from "./pendants"
import { belts } from "./belts"
import { earrings } from "./earrings"
import { faces } from "./faces"
import { eyes } from "./eyes"
import { pockets } from "./pockets"
import { badges } from "./badges"
import { medals } from "./medals"
import { titles } from "./titles"
import { totems } from "./totems"
import { jewels } from "./jewels"
import { arcanesymbols } from "./arcanesymbols"
import { authenticsymbols } from "./authenticsymbols"
import { grandauthenticsymbols } from "./grandauthenticsymbols"
import { petequips } from "./petequips"
import type { UGPreset } from "@/models/UGPreset"
import type { StarForcePreset } from "@/models/starforce"
import type { PotentialPreset } from "@/models/PotentialPreset"
import type { SymbolLevelPreset } from "@/models/SymbolsLevel"

export interface IBaseItem{
    type: GearType
    JMSName: string
    level: IntRange<0, 251>
    baseStat: Array<IStat>,
    setEffectName: Array<SetEffectName>,
    images?: {default: string, warrior?: string, archaer?: string, wizard?: string, thief?: string},
    UGPreset?: Array<UGPreset>,
    StarForcePresets?: Array<StarForcePreset>,
    PotentialPresets?: Array<PotentialPreset>,
    SymbolLevelPresets?: Array<SymbolLevelPreset>
    // symbolLevel?: IntRange<1, 12>
    // UG: undefined
    // potential: undefined
    // bonusPotential: undefined
    // bonusStat: undefined
    // starForce: undefined
}

export const baseItems: Array<IBaseItem> = [
    ...weapons, 
    ...subweapons,
    ...embrems,
    ...heads, 
    ...armours,
    ...pants,
    ...shoulders,
    ...mantles,
    ...gloves,
    ...boots,
    ...pendants,
    ...belts,
    ...earrings,
    ...rings,
    ...faces,
    ...eyes,
    ...pockets,
    ...badges,
    ...medals,
    ...titles,
    ...hearts,
    ...petequips,
    ...totems,
    ...jewels,
    ...arcanesymbols,
    ...authenticsymbols,
    ...grandauthenticsymbols
]

export const getBaseItemByName = (baseItems: Array<IBaseItem>,type: GearType, name: string): IBaseItem => {
    // 装備のタイプと名前からベース装備を返す
    // 該当するベース装備を取得
    const matchedBaseItem = baseItems.filter((item, index) => {
        if (item.type === type && item.JMSName === name){ return true }
    })
    if (matchedBaseItem.length !== 1){ throw TypeError("指定された装備がないか、複数あります: " + type + ", " + name)}
    else return matchedBaseItem[0]!
}