import type { IStat } from "@/gears/stat"

export class UGPreset{
    internalName: string
    JMSName: string
    stat: Array<IStat>
    images: Array<string>

    constructor(internalName: string, JMSName: string, stat: Array<IStat>, images: Array<string>){
        this.internalName = internalName
        this.JMSName = JMSName
        this.stat = stat
        this.images = images
    }
}