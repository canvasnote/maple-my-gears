import { UGPreset } from "../UGPreset"
import noneimg from "@/assets/images/noneimg.png"
import magical from "@/assets/images/UG/magical.png"
import trace_15 from "@/assets/images/UG/magical.png" // 見た目は似てるけど実は違う ドンピシャな画像が持ってこれなかった
import trace_30 from "@/assets/images/UG/Trace_30.png"

export const UG_None_SubWeapon: UGPreset = new UGPreset(
    "None",
    "なし",
    [],
    [noneimg]
)

export const UG_Magical_Blade_Zero: UGPreset = new UGPreset(
    "Magical",
    "マジカル/ブラック書埋め(ブレイド/ゼロ)",
    [],
    [magical]
)

export const UG_15_SubWeapon: UGPreset = new UGPreset(
    "Trace15",
    "痕跡15%書埋め(盾/ブレイド/ゼロ)",
    [],
    [trace_15]
)

export const UG_30_SubWeapon: UGPreset = new UGPreset(
    "Trace15",
    "痕跡30%書埋め(盾/ブレイド/ゼロ)",
    [],
    [trace_30]
)

export const UG_Magical_Kanna: UGPreset = new UGPreset(
    "Magical",
    "マジカル/ブラック書埋め(扇)",
    [],
    [magical]
)

export const UG_15_Kanna: UGPreset = new UGPreset(
    "Trace15",
    "痕跡15%書埋め(扇)",
    [],
    [trace_15]
)

export const UG_30_Kanna: UGPreset = new UGPreset(
    "Trace15",
    "痕跡30%書埋め(扇)",
    [],
    [trace_30]
)