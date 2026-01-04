import type { IBaseItem } from "./baseitem";

import noneimg from "@/assets/images/noneimg.png"
import Aut1 from "@/assets/images/Symbol/Aut1.png"
import Aut2 from "@/assets/images/Symbol/Aut2.png"
import Aut3 from "@/assets/images/Symbol/Aut3.png"
import Aut4 from "@/assets/images/Symbol/Aut4.png"
import Aut5 from "@/assets/images/Symbol/Aut5.png"
import Aut6 from "@/assets/images/Symbol/Aut6.png"
import { AuthenticForce_All, SymbolLevel_None } from "@/models/SymbolsLevel";

export const authenticsymbols: Array<IBaseItem> = [
  {
    type: "AuthenticSymbol",
    JMSName: "なし",
    images: {
      default: noneimg
    },
    level: 0,
    setEffectName: [],
    baseStat: [
    ],
    SymbolLevelPresets: [SymbolLevel_None]
  }, 

  {
    type: "AuthenticSymbol",
    JMSName: "オーセンティックシンボル:セルニウム",
    images: {
      default: Aut1
    },
    level: 200,
    setEffectName: [],
    baseStat: [
    ],
    SymbolLevelPresets: AuthenticForce_All
  },
  {
    type: "AuthenticSymbol",
    JMSName: "オーセンティックシンボル:ホテルアルクス",
    images: {
      default: Aut2
    },
    level: 200,
    setEffectName: [],
    baseStat: [
    ],
    SymbolLevelPresets: AuthenticForce_All
  },
  {
    type: "AuthenticSymbol",
    JMSName: "オーセンティックシンボル:オーディウム",
    images: {
      default: Aut3
    },
    level: 200,
    setEffectName: [],
    baseStat: [
    ],
    SymbolLevelPresets: AuthenticForce_All
  },  
  {
    type: "AuthenticSymbol",
    JMSName: "オーセンティックシンボル:桃源郷",
    images: {
      default: Aut4
    },
    level: 200,
    setEffectName: [],
    baseStat: [
    ],
    SymbolLevelPresets: AuthenticForce_All
  },
  {
    type: "AuthenticSymbol",
    JMSName: "オーセンティックシンボル:アルテリア",
    images: {
      default: Aut5
    },
    level: 200,
    setEffectName: [],
    baseStat: [
    ],
    SymbolLevelPresets: AuthenticForce_All
  },
  {
    type: "AuthenticSymbol",
    JMSName: "オーセンティックシンボル:カルシオン",
    images: {
      default: Aut6
    },
    level: 200,
    setEffectName: [],
    baseStat: [
    ],
    SymbolLevelPresets: AuthenticForce_All
  },  
];
