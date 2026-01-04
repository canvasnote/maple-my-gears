import type { IBaseItem } from "./baseitem";

import noneimg from "@/assets/images/noneimg.png"
import GAut1 from "@/assets/images/Symbol/GAut1.png"
import { AuthenticForce_All, GrandAuthenticForce_All, SymbolLevel_None } from "@/models/SymbolsLevel";

export const grandauthenticsymbols: Array<IBaseItem> = [
  {
    type: "GrandAuthenticSymbol",
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
    type: "GrandAuthenticSymbol",
    JMSName: "グランドオーセンティックシンボルシンボル:タラハート",
    images: {
      default: GAut1
    },
    level: 200,
    setEffectName: [],
    baseStat: [
    ],
    SymbolLevelPresets: GrandAuthenticForce_All
  },
];
