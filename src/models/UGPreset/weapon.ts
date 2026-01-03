import { UGPreset } from "../UGPreset"
import noneimg from "@/assets/images/noneimg.png"
import magical from "@/assets/images/UG/magical.png"
import trace_15 from "@/assets/images/UG/magical.png" // 見た目は似てるけど実は違う ドンピシャな画像が持ってこれなかった
import trace_30 from "@/assets/images/UG/Trace_30.png"

export const UG_None: UGPreset = new UGPreset(
    "None",
    "なし",
    [],
    [noneimg]
)

export const UG_Magical: UGPreset = new UGPreset(
    "Magical",
    "マジカル/ブラック書埋め",
    [],
    [magical]
)

export const UG_15: UGPreset = new UGPreset(
    "Trace15",
    "痕跡15%書埋め",
    [],
    [trace_15]
)

export const UG_30: UGPreset = new UGPreset(
    "Trace15",
    "痕跡30%書埋め",
    [],
    [trace_30]
)