import { PotentialPreset } from "../PotentialPreset"
import noneimg from "@/assets/images/noneimg.png"

export const Potential_None: PotentialPreset = new PotentialPreset(
    "None",
    "なし",
    {type: "None", amount: 0},
    [noneimg]
)

export const Potential_Weapon_AMA13Percent: PotentialPreset = new PotentialPreset(
    "A/MA13%",
    "A/MA13%",
    {type: "AMA%", amount: 13},
    [noneimg]
)

export const Potential_Weapon_AMA12Percent: PotentialPreset = new PotentialPreset(
    "A/MA12%",
    "A/MA12%",
    {type: "AMA%", amount: 12},
    [noneimg]
)

export const Potential_Weapon_AMA10Percent: PotentialPreset = new PotentialPreset(
    "A/MA13%",
    "A/MA10%",
    {type: "AMA%", amount: 10},
    [noneimg]
)

export const Potential_Weapon_AMA9Percent: PotentialPreset = new PotentialPreset(
    "A/MA9",
    "A/MA9%",
    {type: "AMA%", amount: 9},
    [noneimg]
)

export const Potential_Weapon_AMA7Percent: PotentialPreset = new PotentialPreset(
    "A/MA7%",
    "A/MA7%",
    {type: "AMA%", amount: 7},
    [noneimg]
)

export const Potential_Weapon_AMA6Percent: PotentialPreset = new PotentialPreset(
    "A/MA6",
    "A/MA6%",
    {type: "AMA%", amount: 6},
    [noneimg]
)

export const Potential_Weapon_AMA4Percent: PotentialPreset = new PotentialPreset(
    "A/MA4%",
    "A/MA4%",
    {type: "AMA%", amount: 4},
    [noneimg]
)

export const Potential_Weapon_AMA3Percent: PotentialPreset = new PotentialPreset(
    "A/MA3%",
    "A/MA3%",
    {type: "AMA%", amount: 3},
    [noneimg]
)


// export const Potential_Weapon_AMA13: PotentialPreset = new PotentialPreset(
//     "A/MA13%",
//     "A/MA13%",
//     [{type: "AMA%", amount: 13}],
//     [noneimg]
// )


export const Potential_Weapon_150LV = [
    Potential_None,
    Potential_Weapon_AMA12Percent,
    Potential_Weapon_AMA9Percent,
    Potential_Weapon_AMA6Percent,
    Potential_Weapon_AMA3Percent,
]

export const Potential_Weapon_160LV = [
    Potential_None,
    Potential_Weapon_AMA12Percent,
    Potential_Weapon_AMA9Percent,
    Potential_Weapon_AMA6Percent,
    Potential_Weapon_AMA3Percent,
]

export const Potential_Weapon_200LV = [
    Potential_None,
    Potential_Weapon_AMA12Percent,
    Potential_Weapon_AMA9Percent,
    Potential_Weapon_AMA6Percent,
    Potential_Weapon_AMA3Percent,
]

export const Potential_Weapon_Genesis = [
    Potential_None,
    Potential_Weapon_AMA12Percent,
    Potential_Weapon_AMA9Percent,
    Potential_Weapon_AMA6Percent,
    Potential_Weapon_AMA3Percent,
]

export const Potential_Weapon_Destiny = [
    Potential_None,
    Potential_Weapon_AMA13Percent,
    Potential_Weapon_AMA10Percent,
    Potential_Weapon_AMA7Percent,
    Potential_Weapon_AMA4Percent,
]
