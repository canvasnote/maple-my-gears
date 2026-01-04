import type { IStat } from "@/gears/stat"

export class PotentialPreset{
    internalName: string
    JMSName: string
    stat: IStat
    images: Array<string>

    constructor(internalName: string, JMSName: string, stat: IStat, images: Array<string>){
        this.internalName = internalName
        this.JMSName = JMSName
        this.stat = stat
        this.images = images
    }
}