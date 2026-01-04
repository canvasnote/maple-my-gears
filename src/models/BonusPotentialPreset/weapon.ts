import { BonusPotentialPreset } from "../BonusPotentialPreset"
import noneimg from "@/assets/images/noneimg.png"

export const BonusPotential_None: BonusPotentialPreset = new BonusPotentialPreset(
    "None",
    "なし",
    {type: "None", amount: 0},
    [noneimg]
)

export const BonusPotential_Weapon_AMA13Percent: BonusPotentialPreset = new BonusPotentialPreset(
    "A/MA13%",
    "A/MA13%",
    {type: "AMA%", amount: 13},
    [noneimg]
)

export const BonusPotential_Weapon_AMA12Percent: BonusPotentialPreset = new BonusPotentialPreset(
    "A/MA12%",
    "A/MA12%",
    {type: "AMA%", amount: 12},
    [noneimg]
)

export const BonusPotential_Weapon_AMA10Percent: BonusPotentialPreset = new BonusPotentialPreset(
    "A/MA13%",
    "A/MA10%",
    {type: "AMA%", amount: 10},
    [noneimg]
)

export const BonusPotential_Weapon_AMA9Percent: BonusPotentialPreset = new BonusPotentialPreset(
    "A/MA9",
    "A/MA9%",
    {type: "AMA%", amount: 9},
    [noneimg]
)

export const BonusPotential_Weapon_AMA7Percent: BonusPotentialPreset = new BonusPotentialPreset(
    "A/MA7%",
    "A/MA7%",
    {type: "AMA%", amount: 7},
    [noneimg]
)

export const BonusPotential_Weapon_AMA6Percent: BonusPotentialPreset = new BonusPotentialPreset(
    "A/MA6",
    "A/MA6%",
    {type: "AMA%", amount: 6},
    [noneimg]
)

export const BonusPotential_Weapon_AMA4Percent: BonusPotentialPreset = new BonusPotentialPreset(
    "A/MA4%",
    "A/MA4%",
    {type: "AMA%", amount: 4},
    [noneimg]
)

export const BonusPotential_Weapon_AMA3Percent: BonusPotentialPreset = new BonusPotentialPreset(
    "A/MA3%",
    "A/MA3%",
    {type: "AMA%", amount: 3},
    [noneimg]
)


// export const BonusPotential_Weapon_AMA13: PotentialPreset = new PotentialPreset(
//     "A/MA13%",
//     "A/MA13%",
//     [{type: "AMA%", amount: 13}],
//     [noneimg]
// )


export const BonusPotential_Weapon_150LV = [
    BonusPotential_Weapon_AMA12Percent,
    BonusPotential_Weapon_AMA9Percent,
    BonusPotential_Weapon_AMA6Percent,
    BonusPotential_Weapon_AMA3Percent,
]

export const BonusPotential_Weapon_160LV = [
    BonusPotential_Weapon_AMA12Percent,
    BonusPotential_Weapon_AMA9Percent,
    BonusPotential_Weapon_AMA6Percent,
    BonusPotential_Weapon_AMA3Percent,
]

export const BonusPotential_Weapon_200LV = [
    BonusPotential_Weapon_AMA12Percent,
    BonusPotential_Weapon_AMA9Percent,
    BonusPotential_Weapon_AMA6Percent,
    BonusPotential_Weapon_AMA3Percent,
]

export const BonusPotential_Weapon_Genesis = [
    BonusPotential_Weapon_AMA12Percent,
    BonusPotential_Weapon_AMA9Percent,
    BonusPotential_Weapon_AMA6Percent,
    BonusPotential_Weapon_AMA3Percent,
]

export const BonusPotential_Weapon_Destiny = [
    BonusPotential_Weapon_AMA13Percent,
    BonusPotential_Weapon_AMA10Percent,
    BonusPotential_Weapon_AMA7Percent,
    BonusPotential_Weapon_AMA4Percent,
]
