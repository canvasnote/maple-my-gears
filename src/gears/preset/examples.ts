import { presetAbsorab18 } from "./absolab_abyss";
import { presetKinoko } from "./kinoko";
import { Preset } from "./preset";

export const presets = new Map<string, Preset>();// { [presetName: string]: Preset} = {}
presets.set("default", new Preset("default", "----プリセットを選択----", []))
presets.set("presetAbsorab18", presetAbsorab18)
presets.set("presetKinoko", presetKinoko)
