import type { IBaseItem } from "./baseitem";

import noneimg from "@/assets/images/noneimg.png"
import Arc1 from "@/assets/images/Symbol/Arc1.png"
import Arc2 from "@/assets/images/Symbol/Arc2.png"
import Arc3 from "@/assets/images/Symbol/Arc3.png"
import Arc4 from "@/assets/images/Symbol/Arc4.png"
import Arc5 from "@/assets/images/Symbol/Arc5.png"
import Arc6 from "@/assets/images/Symbol/Arc6.png"
import { ArcaneForce_All, SymbolLevel_None } from "@/models/SymbolsLevel";

export const arcanesymbols: Array<IBaseItem> = [
  {
    type: "ArcaneSymbol",
    JMSName: "なし",
    images: {
      default: noneimg
    },
    level: 200,
    setEffectName: [],
    baseStat: [
    ],
    SymbolLevelPresets: [SymbolLevel_None]
  },
  {
    type: "ArcaneSymbol",
    JMSName: "アーケインシンボル:消滅の旅路",
    images: {
      default: Arc1
    },
    level: 200,
    setEffectName: [],
    baseStat: [
    ],
    SymbolLevelPresets: ArcaneForce_All
  },
  {
    type: "ArcaneSymbol",
    JMSName: "アーケインシンボル:チューチューアイランド",
    images: {
      default: Arc2
    },
    level: 200,
    setEffectName: [],
    baseStat: [
    ],
    SymbolLevelPresets: ArcaneForce_All
  },
  {
    type: "ArcaneSymbol",
    JMSName: "アーケインシンボル:レヘルン",
    images: {
      default: Arc3
    },
    level: 200,
    setEffectName: [],
    baseStat: [
    ],
    SymbolLevelPresets: ArcaneForce_All
  },  
  {
    type: "ArcaneSymbol",
    JMSName: "アーケインシンボル:アルカナ",
    images: {
      default: Arc4
    },
    level: 200,
    setEffectName: [],
    baseStat: [
    ],
    SymbolLevelPresets: ArcaneForce_All
  },
  {
    type: "ArcaneSymbol",
    JMSName: "アーケインシンボル:モラス",
    images: {
      default: Arc5
    },
    level: 200,
    setEffectName: [],
    baseStat: [
    ],
    SymbolLevelPresets: ArcaneForce_All
  },
  {
    type: "ArcaneSymbol",
    JMSName: "アーケインシンボル:エスフェラ",
    images: {
      default: Arc6
    },
    level: 200,
    setEffectName: [],
    baseStat: [
    ],
    SymbolLevelPresets: ArcaneForce_All
  },  
];
