import type { IStat } from "@/gears/stat"

import star00 from "@/assets/images/starforce/star00.png"
import star01 from "@/assets/images/starforce/star01.png"
import star02 from "@/assets/images/starforce/star02.png"
import star03 from "@/assets/images/starforce/star03.png"
import star04 from "@/assets/images/starforce/star04.png"
import star05 from "@/assets/images/starforce/star05.png"
import star06 from "@/assets/images/starforce/star06.png"
import star07 from "@/assets/images/starforce/star07.png"
import star08 from "@/assets/images/starforce/star08.png"
import star09 from "@/assets/images/starforce/star09.png"
import star10 from "@/assets/images/starforce/star10.png"
import star11 from "@/assets/images/starforce/star11.png"
import star12 from "@/assets/images/starforce/star12.png"
import star13 from "@/assets/images/starforce/star13.png"
import star14 from "@/assets/images/starforce/star14.png"
import star15 from "@/assets/images/starforce/star15.png"
import star16 from "@/assets/images/starforce/star16.png"
import star17 from "@/assets/images/starforce/star17.png"
import star18 from "@/assets/images/starforce/star18.png"
import star19 from "@/assets/images/starforce/star19.png"
import star20 from "@/assets/images/starforce/star20.png"
import star21 from "@/assets/images/starforce/star21.png"
import star22 from "@/assets/images/starforce/star22.png"
import star23 from "@/assets/images/starforce/star23.png"
import star24 from "@/assets/images/starforce/star24.png"
import star25 from "@/assets/images/starforce/star25.png"
import star26 from "@/assets/images/starforce/star26.png"
import star27 from "@/assets/images/starforce/star27.png"
import star28 from "@/assets/images/starforce/star28.png"
import star29 from "@/assets/images/starforce/star29.png"
import star30 from "@/assets/images/starforce/star30.png"

export class StarForcePreset{
    internalName: string
    JMSName: string
    images: Array<string>

    constructor(internalName: string, JMSName: string, stat: Array<IStat>, images: Array<string>){
        this.internalName = internalName
        this.JMSName = JMSName
        this.images = images
    }
}

export const StarForce_None: StarForcePreset = {internalName: "None", JMSName: "なし", images: [star00]}

export const StarForce_00: StarForcePreset = {internalName: "00stars", JMSName: "00☆", images: [star00]}
export const StarForce_01: StarForcePreset = {internalName: "01stars", JMSName: "01☆", images: [star01]}
export const StarForce_02: StarForcePreset = {internalName: "02stars", JMSName: "02☆", images: [star02]}
export const StarForce_03: StarForcePreset = {internalName: "03stars", JMSName: "03☆", images: [star03]}
export const StarForce_04: StarForcePreset = {internalName: "04stars", JMSName: "04☆", images: [star04]}
export const StarForce_05: StarForcePreset = {internalName: "05stars", JMSName: "05☆", images: [star05]}
export const StarForce_06: StarForcePreset = {internalName: "06stars", JMSName: "06☆", images: [star06]}
export const StarForce_07: StarForcePreset = {internalName: "07stars", JMSName: "07☆", images: [star07]}
export const StarForce_08: StarForcePreset = {internalName: "08stars", JMSName: "08☆", images: [star08]}
export const StarForce_09: StarForcePreset = {internalName: "09stars", JMSName: "09☆", images: [star09]}
export const StarForce_10: StarForcePreset = {internalName: "10stars", JMSName: "10☆", images: [star10]}
export const StarForce_11: StarForcePreset = {internalName: "11stars", JMSName: "11☆", images: [star11]}
export const StarForce_12: StarForcePreset = {internalName: "12stars", JMSName: "12☆", images: [star12]}
export const StarForce_13: StarForcePreset = {internalName: "13stars", JMSName: "13☆", images: [star13]}
export const StarForce_14: StarForcePreset = {internalName: "14stars", JMSName: "14☆", images: [star14]}
export const StarForce_15: StarForcePreset = {internalName: "15stars", JMSName: "15☆", images: [star15]}
export const StarForce_16: StarForcePreset = {internalName: "16stars", JMSName: "16☆", images: [star16]}
export const StarForce_17: StarForcePreset = {internalName: "17stars", JMSName: "17☆", images: [star17]}
export const StarForce_18: StarForcePreset = {internalName: "18stars", JMSName: "18☆", images: [star18]}
export const StarForce_19: StarForcePreset = {internalName: "19stars", JMSName: "19☆", images: [star19]}
export const StarForce_20: StarForcePreset = {internalName: "20stars", JMSName: "20☆", images: [star20]}
export const StarForce_21: StarForcePreset = {internalName: "21stars", JMSName: "21☆", images: [star21]}
export const StarForce_22: StarForcePreset = {internalName: "22stars", JMSName: "22☆", images: [star22]}
export const StarForce_23: StarForcePreset = {internalName: "23stars", JMSName: "23☆", images: [star23]}
export const StarForce_24: StarForcePreset = {internalName: "24stars", JMSName: "24☆", images: [star24]}
export const StarForce_25: StarForcePreset = {internalName: "25stars", JMSName: "25☆", images: [star25]}
export const StarForce_26: StarForcePreset = {internalName: "26stars", JMSName: "26☆", images: [star26]}
export const StarForce_27: StarForcePreset = {internalName: "27stars", JMSName: "27☆", images: [star27]}
export const StarForce_28: StarForcePreset = {internalName: "28stars", JMSName: "28☆", images: [star28]}
export const StarForce_29: StarForcePreset = {internalName: "29stars", JMSName: "29☆", images: [star29]}
export const StarForce_30: StarForcePreset = {internalName: "30stars", JMSName: "30☆", images: [star30]}

export const StarForce100LV: Array<StarForcePreset> = [
    StarForce_00,
    // StarForce_01,
    // StarForce_02,
    // StarForce_03,
    // StarForce_04,
    // StarForce_05,
    // StarForce_06,
    // StarForce_07,
    StarForce_08,
]

export const StarForce110LV: Array<StarForcePreset> = [
    ...StarForce100LV,
    // StarForce_09,
    StarForce_10
]

export const StarForce120LV: Array<StarForcePreset> = [
    ...StarForce110LV,
    // StarForce_11,
    // StarForce_12,
    // StarForce_13,
    // StarForce_14,
    StarForce_15,
]

export const StarForce130LV: Array<StarForcePreset> = [
    ...StarForce120LV,
    StarForce_16,
    StarForce_17,
    StarForce_18,
    StarForce_19,
    StarForce_20,
]

export const StarForce135LV: Array<StarForcePreset> = [
    ...StarForce130LV,
]

export const StarForce140LV: Array<StarForcePreset> = [
    ...StarForce135LV,
    StarForce_21,
    StarForce_22,
    StarForce_23,
    StarForce_24,
    StarForce_25,
    StarForce_26,
    StarForce_27,
    StarForce_28,
    StarForce_29,
    StarForce_30,
]

export const StarForce150LV: Array<StarForcePreset> = [
    ...StarForce140LV,
]

export const StarForce155LV: Array<StarForcePreset> = [
    ...StarForce150LV,
]

export const StarForce160LV: Array<StarForcePreset> = [
    ...StarForce155LV,
]

export const StarForce200LV: Array<StarForcePreset> = [
    ...StarForce160LV,
]


export const StarForce250LV: Array<StarForcePreset> = [
    ...StarForce200LV,
]

export const StarForceGenesis: Array<StarForcePreset> = [
    StarForce_22,
]


export const StarForceDisteny: Array<StarForcePreset> = [
    StarForce_22,
]
