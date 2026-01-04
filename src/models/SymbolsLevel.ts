import type { IStat } from "@/gears/stat"

import level00 from "@/assets/images/starforce/star00.png"
import level01 from "@/assets/images/starforce/star01.png"
import level02 from "@/assets/images/starforce/star02.png"
import level03 from "@/assets/images/starforce/star03.png"
import level04 from "@/assets/images/starforce/star04.png"
import level05 from "@/assets/images/starforce/star05.png"
import level06 from "@/assets/images/starforce/star06.png"
import level07 from "@/assets/images/starforce/star07.png"
import level08 from "@/assets/images/starforce/star08.png"
import level09 from "@/assets/images/starforce/star09.png"
import level10 from "@/assets/images/starforce/star10.png"
import level11 from "@/assets/images/starforce/star11.png"
import level12 from "@/assets/images/starforce/star12.png"
import level13 from "@/assets/images/starforce/star13.png"
import level14 from "@/assets/images/starforce/star14.png"
import level15 from "@/assets/images/starforce/star15.png"
import level16 from "@/assets/images/starforce/star16.png"
import level17 from "@/assets/images/starforce/star17.png"
import level18 from "@/assets/images/starforce/star18.png"
import level19 from "@/assets/images/starforce/star19.png"
import level20 from "@/assets/images/starforce/star20.png"

export class SymbolLevelPreset{
    internalName: string
    JMSName: string
    images: Array<string>

    constructor(internalName: string, JMSName: string, stat: Array<IStat>, images: Array<string>){
        this.internalName = internalName
        this.JMSName = JMSName
        this.images = images
    }
}

export class ArcaneSymbolLevelPreset extends SymbolLevelPreset{
}

export const SymbolLevel_None: ArcaneSymbolLevelPreset = {internalName: "None", JMSName: "なし", images: [level00]}

export const ArcaneForce_01: ArcaneSymbolLevelPreset = {internalName: "Arc01level", JMSName: "01LV", images: [level01]}
export const ArcaneForce_02: ArcaneSymbolLevelPreset = {internalName: "Arc02level", JMSName: "02LV", images: [level02]}
export const ArcaneForce_03: ArcaneSymbolLevelPreset = {internalName: "Arc03level", JMSName: "03LV", images: [level03]}
export const ArcaneForce_04: ArcaneSymbolLevelPreset = {internalName: "Arc04level", JMSName: "04LV", images: [level04]}
export const ArcaneForce_05: ArcaneSymbolLevelPreset = {internalName: "Arc05level", JMSName: "05LV", images: [level05]}
export const ArcaneForce_06: ArcaneSymbolLevelPreset = {internalName: "Arc06level", JMSName: "06LV", images: [level06]}
export const ArcaneForce_07: ArcaneSymbolLevelPreset = {internalName: "Arc07level", JMSName: "07LV", images: [level07]}
export const ArcaneForce_08: ArcaneSymbolLevelPreset = {internalName: "Arc08level", JMSName: "08LV", images: [level08]}
export const ArcaneForce_09: ArcaneSymbolLevelPreset = {internalName: "Arc09level", JMSName: "09LV", images: [level09]}
export const ArcaneForce_10: ArcaneSymbolLevelPreset = {internalName: "Arc10level", JMSName: "10LV", images: [level10]}
export const ArcaneForce_11: ArcaneSymbolLevelPreset = {internalName: "Arc11level", JMSName: "11LV", images: [level11]}
export const ArcaneForce_12: ArcaneSymbolLevelPreset = {internalName: "Arc12level", JMSName: "12LV", images: [level12]}
export const ArcaneForce_13: ArcaneSymbolLevelPreset = {internalName: "Arc13level", JMSName: "13LV", images: [level13]}
export const ArcaneForce_14: ArcaneSymbolLevelPreset = {internalName: "Arc14level", JMSName: "14LV", images: [level14]}
export const ArcaneForce_15: ArcaneSymbolLevelPreset = {internalName: "Arc15level", JMSName: "15LV", images: [level15]}
export const ArcaneForce_16: ArcaneSymbolLevelPreset = {internalName: "Arc16level", JMSName: "16LV", images: [level16]}
export const ArcaneForce_17: ArcaneSymbolLevelPreset = {internalName: "Arc17level", JMSName: "17LV", images: [level17]}
export const ArcaneForce_18: ArcaneSymbolLevelPreset = {internalName: "Arc18level", JMSName: "18LV", images: [level18]}
export const ArcaneForce_19: ArcaneSymbolLevelPreset = {internalName: "Arc19level", JMSName: "19LV", images: [level19]}
export const ArcaneForce_20: ArcaneSymbolLevelPreset = {internalName: "Arc20level", JMSName: "20LV", images: [level20]}

export const ArcaneForce_All: Array<ArcaneSymbolLevelPreset> = [
    SymbolLevel_None,
    ArcaneForce_20,
    ArcaneForce_19,
    ArcaneForce_18,
    ArcaneForce_17,
    ArcaneForce_16,
    ArcaneForce_15,
    ArcaneForce_14,
    ArcaneForce_13,
    ArcaneForce_12,
    ArcaneForce_11,
    ArcaneForce_10,
    ArcaneForce_09,
    ArcaneForce_08,
    ArcaneForce_07,
    ArcaneForce_06,
    ArcaneForce_05,
    ArcaneForce_04,
    ArcaneForce_03,
    ArcaneForce_02,
    ArcaneForce_01,
]


export class AuthenticSymbolLevelPreset extends SymbolLevelPreset{
}

export const AuthenticForce_01: ArcaneSymbolLevelPreset = {internalName: "Aut01level", JMSName: "01LV", images: [level01]}
export const AuthenticForce_02: ArcaneSymbolLevelPreset = {internalName: "Aut02level", JMSName: "02LV", images: [level02]}
export const AuthenticForce_03: ArcaneSymbolLevelPreset = {internalName: "Aut03level", JMSName: "03LV", images: [level03]}
export const AuthenticForce_04: ArcaneSymbolLevelPreset = {internalName: "Aut04level", JMSName: "04LV", images: [level04]}
export const AuthenticForce_05: ArcaneSymbolLevelPreset = {internalName: "Aut05level", JMSName: "05LV", images: [level05]}
export const AuthenticForce_06: ArcaneSymbolLevelPreset = {internalName: "Aut06level", JMSName: "06LV", images: [level06]}
export const AuthenticForce_07: ArcaneSymbolLevelPreset = {internalName: "Aut07level", JMSName: "07LV", images: [level07]}
export const AuthenticForce_08: ArcaneSymbolLevelPreset = {internalName: "Aut08level", JMSName: "08LV", images: [level08]}
export const AuthenticForce_09: ArcaneSymbolLevelPreset = {internalName: "Aut09level", JMSName: "09LV", images: [level09]}
export const AuthenticForce_10: ArcaneSymbolLevelPreset = {internalName: "Aut10level", JMSName: "10LV", images: [level10]}
export const AuthenticForce_11: ArcaneSymbolLevelPreset = {internalName: "Aut11level", JMSName: "11LV", images: [level11]}
export const AuthenticForce_12: ArcaneSymbolLevelPreset = {internalName: "Aut12level", JMSName: "12LV", images: [level12]}
export const AuthenticForce_13: ArcaneSymbolLevelPreset = {internalName: "Aut13level", JMSName: "13LV", images: [level13]}
export const AuthenticForce_14: ArcaneSymbolLevelPreset = {internalName: "Aut14level", JMSName: "14LV", images: [level14]}
export const AuthenticForce_15: ArcaneSymbolLevelPreset = {internalName: "Aut15level", JMSName: "15LV", images: [level15]}
export const AuthenticForce_16: ArcaneSymbolLevelPreset = {internalName: "Aut16level", JMSName: "16LV", images: [level16]}
export const AuthenticForce_17: ArcaneSymbolLevelPreset = {internalName: "Aut17level", JMSName: "17LV", images: [level17]}
export const AuthenticForce_18: ArcaneSymbolLevelPreset = {internalName: "Aut18level", JMSName: "18LV", images: [level18]}
export const AuthenticForce_19: ArcaneSymbolLevelPreset = {internalName: "Aut19level", JMSName: "19LV", images: [level19]}
export const AuthenticForce_20: ArcaneSymbolLevelPreset = {internalName: "Aut20level", JMSName: "20LV", images: [level20]}

export const AuthenticForce_All: Array<ArcaneSymbolLevelPreset> = [
    SymbolLevel_None,
    AuthenticForce_11,
    AuthenticForce_10,
    AuthenticForce_09,
    AuthenticForce_08,
    AuthenticForce_07,
    AuthenticForce_06,
    AuthenticForce_05,
    AuthenticForce_04,
    AuthenticForce_03,
    AuthenticForce_02,
    AuthenticForce_01,
]



export class GrandAuthenticSymbolLevelPreset extends SymbolLevelPreset{
}

export const GrandAuthenticForce_01: ArcaneSymbolLevelPreset = {internalName: "GAut01level", JMSName: "01LV", images: [level01]}
export const GrandAuthenticForce_02: ArcaneSymbolLevelPreset = {internalName: "GAut02level", JMSName: "02LV", images: [level02]}
export const GrandAuthenticForce_03: ArcaneSymbolLevelPreset = {internalName: "GAut03level", JMSName: "03LV", images: [level03]}
export const GrandAuthenticForce_04: ArcaneSymbolLevelPreset = {internalName: "GAut04level", JMSName: "04LV", images: [level04]}
export const GrandAuthenticForce_05: ArcaneSymbolLevelPreset = {internalName: "GAut05level", JMSName: "05LV", images: [level05]}
export const GrandAuthenticForce_06: ArcaneSymbolLevelPreset = {internalName: "GAut06level", JMSName: "06LV", images: [level06]}
export const GrandAuthenticForce_07: ArcaneSymbolLevelPreset = {internalName: "GAut07level", JMSName: "07LV", images: [level07]}
export const GrandAuthenticForce_08: ArcaneSymbolLevelPreset = {internalName: "GAut08level", JMSName: "08LV", images: [level08]}
export const GrandAuthenticForce_09: ArcaneSymbolLevelPreset = {internalName: "GAut09level", JMSName: "09LV", images: [level09]}
export const GrandAuthenticForce_10: ArcaneSymbolLevelPreset = {internalName: "GAut10level", JMSName: "10LV", images: [level10]}
export const GrandAuthenticForce_11: ArcaneSymbolLevelPreset = {internalName: "GAut11level", JMSName: "11LV", images: [level11]}
export const GrandAuthenticForce_12: ArcaneSymbolLevelPreset = {internalName: "GAut12level", JMSName: "12LV", images: [level12]}
export const GrandAuthenticForce_13: ArcaneSymbolLevelPreset = {internalName: "GAut13level", JMSName: "13LV", images: [level13]}
export const GrandAuthenticForce_14: ArcaneSymbolLevelPreset = {internalName: "GAut14level", JMSName: "14LV", images: [level14]}
export const GrandAuthenticForce_15: ArcaneSymbolLevelPreset = {internalName: "GAut15level", JMSName: "15LV", images: [level15]}
export const GrandAuthenticForce_16: ArcaneSymbolLevelPreset = {internalName: "GAut16level", JMSName: "16LV", images: [level16]}
export const GrandAuthenticForce_17: ArcaneSymbolLevelPreset = {internalName: "GAut17level", JMSName: "17LV", images: [level17]}
export const GrandAuthenticForce_18: ArcaneSymbolLevelPreset = {internalName: "GAut18level", JMSName: "18LV", images: [level18]}
export const GrandAuthenticForce_19: ArcaneSymbolLevelPreset = {internalName: "GAut19level", JMSName: "19LV", images: [level19]}
export const GrandAuthenticForce_20: ArcaneSymbolLevelPreset = {internalName: "GAut20level", JMSName: "20LV", images: [level20]}

export const GrandAuthenticForce_All: Array<ArcaneSymbolLevelPreset> = [
    SymbolLevel_None,
    GrandAuthenticForce_11,
    GrandAuthenticForce_10,
    GrandAuthenticForce_09,
    GrandAuthenticForce_08,
    GrandAuthenticForce_07,
    GrandAuthenticForce_06,
    GrandAuthenticForce_05,
    GrandAuthenticForce_04,
    GrandAuthenticForce_03,
    GrandAuthenticForce_02,
    GrandAuthenticForce_01,
]