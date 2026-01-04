import type { IBaseItem } from "./baseitem";

import noneimg from "@/assets/images/noneimg.png"
import gold from "@/assets/images/Embrem/gold.png"
import hybrid from "@/assets/images/Embrem/hybrid.png"
import mitra from "@/assets/images/Embrem/mitra.png"

export const embrems: Array<IBaseItem> = [
  {
    type: "Embrem",
    JMSName: "なし",
    images: {
      default: noneimg
    },
    level: 0,
    setEffectName: [],
    baseStat: [
    ],
  }, 

  {
    type: "Embrem",
    JMSName: "ゴールドエンブレム",
    images: {
      default: gold
    },
    level: 100,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 2 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },
    ],
  },{
    type: "Embrem",
    JMSName: "ハイブリッドハート",
    images: {
      default: hybrid
    },
    level: 100,
    setEffectName: [],
    baseStat: [
      { type: "AMA", amount: 2 },
      { type: "HP", amount: 300 },
      { type: "MP", amount: 100 },
    ],
  },
  {
    type: "Embrem",
    JMSName: "ミトラの怒り",
    images: {
      default: mitra
    },
    level: 200,
    setEffectName: ["Pitched"],
    baseStat: [
      { type: "AMA", amount: 2 },
      { type: "MainStat", amount: 10 },
      { type: "SubStat1", amount: 10 },],
  },
];
