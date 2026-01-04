import { immerable } from "immer"

import type { IBaseItem } from "@/gears/BaseItem/baseitem"
import type { SlotType } from "@/gears/Gearset/gearset"
import { UGPreset } from "./UGPreset"
import type { Potential } from "@/gears/potential"
import type { BonusPotential } from "@/gears/bonuspotential"
import type { IStat } from "@/gears/stat"

import noneimg from "@/assets/images/noneimg.png"
import { UG_None } from "./UGPreset/weapon"
import { StarForce_None, type StarForcePreset } from "./starforce"
import { Potential_None, Potential_Weapon_AMA12Percent, Potential_Weapon_AMA6Percent, Potential_Weapon_AMA9Percent } from "./PotentialPreset/weapon"
import type { PotentialPreset } from "./PotentialPreset"
import type { BonusPotentialPreset } from "./BonusPotentialPreset"
import { BonusPotential_None } from "./BonusPotentialPreset/weapon"
import { SymbolLevel_None, type ArcaneSymbolLevelPreset, type SymbolLevelPreset } from "./SymbolsLevel"

export class ChooseMatrix{
    [immerable] = true
    chooses: Array<Choose>

    constructor(choose: Array<Choose>){
        this.chooses = choose
    }
}

export class Choose{
    slot: SlotType
    baseItemName: string
    images: Array<string>
    UG: UGPreset | undefined
    starForce: StarForcePreset | undefined
    potentialPresets: Array<PotentialPreset> | undefined
    bonusPotentialPresets: Array<BonusPotentialPreset> | undefined
    bonusStats: Array<IStat> | undefined
    symbolLevel: SymbolLevelPreset | undefined
    otherStats: Array<IStat> | undefined

    constructor(
        slot: SlotType, 
        baseItemName: string, 
        images: Array<string>,
        UG: UGPreset | undefined, 
        starForce: StarForcePreset | undefined, 
        potentialPresets: Array<PotentialPreset> | undefined, 
        bonusPotentialPresets: Array<BonusPotentialPreset> | undefined, 
        bonusStat: Array<IStat>,
        symbolLevel: SymbolLevelPreset | undefined,
        otherStats: Array<IStat> | undefined){
            this.slot = slot
            this.baseItemName = baseItemName
            this.images = images
            this.UG = UG
            this.starForce = starForce
            this.potentialPresets = potentialPresets
            this.bonusPotentialPresets = bonusPotentialPresets
            this.bonusStats = bonusStat
            this.symbolLevel = symbolLevel
            this.otherStats = otherStats
    }
}

export const initChooseMatrix = () => {
    return new ChooseMatrix(
        [
            {
                slot: "Weapon",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: StarForce_None,
                potentialPresets: [Potential_None, Potential_None, Potential_None],
                bonusPotentialPresets: [BonusPotential_None, BonusPotential_None, BonusPotential_None],
                bonusStats: [
                    {type: "AMA", amount: 0},
                    {type: "BossDamage", amount: 0},
                    {type: "Damage", amount: 0},
                    {type: "AllStat%", amount: 0},
                    {type: "MainStat", amount: 0},
                    {type: "SubStat1", amount: 0},
                    {type: "SubStat2", amount: 0},
                    {type: "HP", amount: 0},
                ],
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "SubWeapon",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: StarForce_None,
                potentialPresets: [Potential_None, Potential_None, Potential_None],
                bonusPotentialPresets: [BonusPotential_None, BonusPotential_None, BonusPotential_None],
                bonusStats: [
                    {type: "AMA", amount: 0},
                    {type: "BossDamage", amount: 0},
                    {type: "Damage", amount: 0},
                    {type: "AllStat%", amount: 0},
                    {type: "MainStat", amount: 0},
                    {type: "SubStat1", amount: 0},
                    {type: "SubStat2", amount: 0},
                    {type: "HP", amount: 0},
                ],
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Embrem",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: [Potential_None, Potential_None, Potential_None],
                bonusPotentialPresets: [BonusPotential_None, BonusPotential_None, BonusPotential_None],
                bonusStats: undefined,
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Head",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: StarForce_None,
                potentialPresets: [Potential_None, Potential_None, Potential_None],
                bonusPotentialPresets: [BonusPotential_None, BonusPotential_None, BonusPotential_None],
                bonusStats: [
                    {type: "AMA", amount: 0},
                    {type: "AllStat%", amount: 0},
                    {type: "MainStat", amount: 0},
                    {type: "SubStat1", amount: 0},
                    {type: "SubStat2", amount: 0},
                    {type: "HP", amount: 0},
                ],
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Armour",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: StarForce_None,
                potentialPresets: [Potential_None, Potential_None, Potential_None],
                bonusPotentialPresets: [BonusPotential_None, BonusPotential_None, BonusPotential_None],
                bonusStats: [
                    {type: "AMA", amount: 0},
                    {type: "AllStat%", amount: 0},
                    {type: "MainStat", amount: 0},
                    {type: "SubStat1", amount: 0},
                    {type: "SubStat2", amount: 0},
                    {type: "HP", amount: 0},
                ],
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Pants",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: StarForce_None,
                potentialPresets: [Potential_None, Potential_None, Potential_None],
                bonusPotentialPresets: [BonusPotential_None, BonusPotential_None, BonusPotential_None],
                bonusStats: [
                    {type: "AMA", amount: 0},
                    {type: "AllStat%", amount: 0},
                    {type: "MainStat", amount: 0},
                    {type: "SubStat1", amount: 0},
                    {type: "SubStat2", amount: 0},
                    {type: "HP", amount: 0},
                ],
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Mantle",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: StarForce_None,
                potentialPresets: [Potential_None, Potential_None, Potential_None],
                bonusPotentialPresets: [BonusPotential_None, BonusPotential_None, BonusPotential_None],
                bonusStats: [
                    {type: "AMA", amount: 0},
                    {type: "AllStat%", amount: 0},
                    {type: "MainStat", amount: 0},
                    {type: "SubStat1", amount: 0},
                    {type: "SubStat2", amount: 0},
                    {type: "HP", amount: 0},
                ],
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Gloves",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: StarForce_None,
                potentialPresets: [Potential_None, Potential_None, Potential_None],
                bonusPotentialPresets: [BonusPotential_None, BonusPotential_None, BonusPotential_None],
                bonusStats: [
                    {type: "AMA", amount: 0},
                    {type: "AllStat%", amount: 0},
                    {type: "MainStat", amount: 0},
                    {type: "SubStat1", amount: 0},
                    {type: "SubStat2", amount: 0},
                    {type: "HP", amount: 0},
                ],
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Shoulder",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: StarForce_None,
                potentialPresets: [Potential_None, Potential_None, Potential_None],
                bonusPotentialPresets: [BonusPotential_None, BonusPotential_None, BonusPotential_None],
                bonusStats: undefined,
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Boots",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: StarForce_None,
                potentialPresets: [Potential_None, Potential_None, Potential_None],
                bonusPotentialPresets: [BonusPotential_None, BonusPotential_None, BonusPotential_None],
                bonusStats: [
                    {type: "AMA", amount: 0},
                    {type: "AllStat%", amount: 0},
                    {type: "MainStat", amount: 0},
                    {type: "SubStat1", amount: 0},
                    {type: "SubStat2", amount: 0},
                    {type: "HP", amount: 0},
                ],
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Pendant",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: StarForce_None,
                potentialPresets: [Potential_None, Potential_None, Potential_None],
                bonusPotentialPresets: [BonusPotential_None, BonusPotential_None, BonusPotential_None],
                bonusStats: [
                    {type: "AMA", amount: 0},
                    {type: "AllStat%", amount: 0},
                    {type: "MainStat", amount: 0},
                    {type: "SubStat1", amount: 0},
                    {type: "SubStat2", amount: 0},
                    {type: "HP", amount: 0},
                ],
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "PendantSlot",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: StarForce_None,
                potentialPresets: [Potential_None, Potential_None, Potential_None],
                bonusPotentialPresets: [BonusPotential_None, BonusPotential_None, BonusPotential_None],
                bonusStats: [
                    {type: "AMA", amount: 0},
                    {type: "AllStat%", amount: 0},
                    {type: "MainStat", amount: 0},
                    {type: "SubStat1", amount: 0},
                    {type: "SubStat2", amount: 0},
                    {type: "HP", amount: 0},
                ],
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Ring1",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: StarForce_None,
                potentialPresets: [Potential_None, Potential_None, Potential_None],
                bonusPotentialPresets: [BonusPotential_None, BonusPotential_None, BonusPotential_None],
                bonusStats: undefined,
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Ring2",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: StarForce_None,
                potentialPresets: [Potential_None, Potential_None, Potential_None],
                bonusPotentialPresets: [BonusPotential_None, BonusPotential_None, BonusPotential_None],
                bonusStats: undefined,
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Ring3",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: StarForce_None,
                potentialPresets: [Potential_None, Potential_None, Potential_None],
                bonusPotentialPresets: [BonusPotential_None, BonusPotential_None, BonusPotential_None],
                bonusStats: undefined,
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Ring4",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: StarForce_None,
                potentialPresets: [Potential_None, Potential_None, Potential_None],
                bonusPotentialPresets: [BonusPotential_None, BonusPotential_None, BonusPotential_None],
                bonusStats: undefined,
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Face",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: StarForce_None,
                potentialPresets: [Potential_None, Potential_None, Potential_None],
                bonusPotentialPresets: [BonusPotential_None, BonusPotential_None, BonusPotential_None],
                bonusStats: [
                    {type: "AMA", amount: 0},
                    {type: "AllStat%", amount: 0},
                    {type: "MainStat", amount: 0},
                    {type: "SubStat1", amount: 0},
                    {type: "SubStat2", amount: 0},
                    {type: "HP", amount: 0},
                ],
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Eyes",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: StarForce_None,
                potentialPresets: [Potential_None, Potential_None, Potential_None],
                bonusPotentialPresets: [BonusPotential_None, BonusPotential_None, BonusPotential_None],
                bonusStats: [
                    {type: "AMA", amount: 0},
                    {type: "AllStat%", amount: 0},
                    {type: "MainStat", amount: 0},
                    {type: "SubStat1", amount: 0},
                    {type: "SubStat2", amount: 0},
                    {type: "HP", amount: 0},
                ],
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Pocket",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: [
                    {type: "AMA", amount: 0},
                    {type: "AllStat%", amount: 0},
                    {type: "MainStat", amount: 0},
                    {type: "SubStat1", amount: 0},
                    {type: "SubStat2", amount: 0},
                    {type: "HP", amount: 0},
                ],
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Badge",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: undefined,
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Heart",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: StarForce_None,
                potentialPresets: [Potential_None, Potential_None, Potential_None],
                bonusPotentialPresets: [BonusPotential_None, BonusPotential_None, BonusPotential_None],
                bonusStats: undefined,
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Title",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: undefined,
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Medal",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: [
                    {type: "AMA", amount: 0},
                    {type: "AllStat%", amount: 0},
                    {type: "MainStat", amount: 0},
                    {type: "SubStat1", amount: 0},
                    {type: "SubStat2", amount: 0},
                    {type: "HP", amount: 0},
                ],
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Totem1",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: [
                    {type: "AMA", amount: 0},
                    {type: "AllStat%", amount: 0},
                    {type: "MainStat", amount: 0},
                    {type: "SubStat1", amount: 0},
                    {type: "SubStat2", amount: 0},
                    {type: "HP", amount: 0},
                ],
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Totem2",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: [
                    {type: "AMA", amount: 0},
                    {type: "AllStat%", amount: 0},
                    {type: "MainStat", amount: 0},
                    {type: "SubStat1", amount: 0},
                    {type: "SubStat2", amount: 0},
                    {type: "HP", amount: 0},
                ],
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Totem3",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: [
                    {type: "AMA", amount: 0},
                    {type: "AllStat%", amount: 0},
                    {type: "MainStat", amount: 0},
                    {type: "SubStat1", amount: 0},
                    {type: "SubStat2", amount: 0},
                    {type: "HP", amount: 0},
                ],
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "Jewel",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: undefined,
                symbolLevel: undefined,
                otherStats: [{type: "MainStatNot%", amount: 0}]
            },
            {
                slot: "PetEquip1",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: undefined,
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "PetEquip2",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: undefined,
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "PetEquip3",
                baseItemName: "なし",
                images: [noneimg],
                UG: UG_None,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: undefined,
                symbolLevel: undefined,
                otherStats: undefined
            },
            {
                slot: "ArcaneSymbol1",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: undefined,
                symbolLevel: SymbolLevel_None,
                otherStats: undefined
            },
            {
                slot: "ArcaneSymbol2",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: undefined,
                symbolLevel: SymbolLevel_None,
                otherStats: undefined
            },
            {
                slot: "ArcaneSymbol3",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: undefined,
                symbolLevel: SymbolLevel_None,
                otherStats: undefined
            },
            {
                slot: "ArcaneSymbol4",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: undefined,
                symbolLevel: SymbolLevel_None,
                otherStats: undefined
            },
            {
                slot: "ArcaneSymbol5",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: undefined,
                symbolLevel: SymbolLevel_None,
                otherStats: undefined
            },
            {
                slot: "ArcaneSymbol6",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: undefined,
                symbolLevel: SymbolLevel_None,
                otherStats: undefined
            },
            {
                slot: "AuthenticSymbol1",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: undefined,
                symbolLevel: SymbolLevel_None,
                otherStats: undefined
            },
            {
                slot: "AuthenticSymbol2",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: undefined,
                symbolLevel: SymbolLevel_None,
                otherStats: undefined
            },
            {
                slot: "AuthenticSymbol3",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: undefined,
                symbolLevel: SymbolLevel_None,
                otherStats: undefined
            },
            {
                slot: "AuthenticSymbol4",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: undefined,
                symbolLevel: SymbolLevel_None,
                otherStats: undefined
            },
            {
                slot: "AuthenticSymbol5",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: undefined,
                symbolLevel: SymbolLevel_None,
                otherStats: undefined
            },
            {
                slot: "AuthenticSymbol6",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: undefined,
                symbolLevel: SymbolLevel_None,
                otherStats: undefined
            },
            {
                slot: "GrandAuthenticSymbol1",
                baseItemName: "なし",
                images: [noneimg],
                UG: undefined,
                starForce: undefined,
                potentialPresets: undefined,
                bonusPotentialPresets: undefined,
                bonusStats: undefined,
                symbolLevel: SymbolLevel_None,
                otherStats: undefined
            },
        ]
    )
}