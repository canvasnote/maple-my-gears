import type { IntRange } from "type-fest";

import type { Potential } from "../potential";
import type { BonusPotential } from "../bonuspotential";
import type { IStat } from "../stat";

import type { GearType, IGear } from "../gear"

export class GearSets {
  currentSet: GearSet = new GearSet()
  SaveSlots: Array<GearSet> = [];
}

export class GearSet {
  slots: Array<GearSlot> = [];
}

export class GearSlot {
  type: SlotType
  acceptType: GearType // | Array<GearType> // 全身鎧なんて誰も使ってないやろ
  JMSName: string
  gear: IGear | undefined;

  constructor(type: SlotType, acceptType: GearType, JMSName: string, gear: IGear | undefined){
    this.type = type;
    this.acceptType = acceptType;
    this.JMSName = JMSName
    this.gear = gear
  }
}

export type SlotType =
  // 3種の神器
  | "Weapon"
  | "SubWeapon"
  | "Embrem"
  // 防具1
  | "Head"
  | "Armour"
  | "Armour | FullCloth"
  | "Pants"
  // 防具2
  | "Shoulder"
  | "Mantle"
  | "Gloves"
  | "Boots"
  // アクセサリ
  | "Pendant"
  | "PendantSlot"
  | "Ring1"
  | "Ring2"
  | "Ring3"
  | "Ring4"
  | "Belt"
  | "EarRing"
  | "Face"
  | "Eyes"
  | "Pocket"
  | "Badge"
  // "Valuables"にあるやつ
  | "Totem1"
  | "Totem2"
  | "Totem3"
  | "Jewel"
  // シンボル
  | "ArcaneSymbol1"
  | "ArcaneSymbol2"
  | "ArcaneSymbol3"
  | "ArcaneSymbol4"
  | "ArcaneSymbol5"
  | "ArcaneSymbol6"
  | "AuthenticSymbol1"
  | "AuthenticSymbol2"
  | "AuthenticSymbol3"
  | "AuthenticSymbol4"
  | "AuthenticSymbol5"
  | "AuthenticSymbol6"
  | "GrandAuthenticSymbol1"
  // ペット装備
  | "PetEquip1"
  | "PetEquip2"
  | "PetEquip3"
  // その他
  | "Heart"
  | "Medal"
  | "Title";

export const initGearSet = () => {
  let result = new GearSet();
  result.slots.push(new GearSlot("Weapon", "Weapon", "武器", undefined));
  result.slots.push(new GearSlot("SubWeapon", "SubWeapon", "補助武器", undefined));
  result.slots.push(new GearSlot("Embrem", "Embrem", "エンブレム", undefined));
  result.slots.push(new GearSlot("Head", "Head", "頭", undefined));
  result.slots.push(new GearSlot("Armour", "Armour", "鎧上", undefined));
  result.slots.push(new GearSlot("Pants", "Pants", "鎧下", undefined));
  result.slots.push(new GearSlot("Shoulder", "Shoulder", "肩", undefined));
  result.slots.push(new GearSlot("Mantle", "Mantle", "マント", undefined));
  result.slots.push(new GearSlot("Gloves", "Gloves", "手袋", undefined));
  result.slots.push(new GearSlot("Boots", "Boots", "靴", undefined));
  result.slots.push(new GearSlot("Pendant", "Pendant", "ペンダント", undefined));
  result.slots.push(new GearSlot("PendantSlot", "Pendant", "ペンダントスロット", undefined));
  result.slots.push(new GearSlot("Ring1", "Ring", "指輪1", undefined));
  result.slots.push(new GearSlot("Ring2", "Ring", "指輪2", undefined));
  result.slots.push(new GearSlot("Ring3", "Ring", "指輪3", undefined));
  result.slots.push(new GearSlot("Ring4", "Ring", "指輪4", undefined));
  result.slots.push(new GearSlot("Belt", "Belt", "ベルト", undefined));
  result.slots.push(new GearSlot("EarRing", "EarRing", "イヤリング", undefined));
  result.slots.push(new GearSlot("Face", "Face", "顔飾り", undefined));
  result.slots.push(new GearSlot("Eyes", "Eyes", "目飾り", undefined));
  result.slots.push(new GearSlot("Pocket", "Pocket", "ポケット装備", undefined));
  result.slots.push(new GearSlot("Badge", "Badge", "バッジ", undefined));
  result.slots.push(new GearSlot("Totem1", "Totem", "トーテム1", undefined));
  result.slots.push(new GearSlot("Totem2", "Totem", "トーテム2", undefined));
  result.slots.push(new GearSlot("Totem3", "Totem", "トーテム3", undefined));
  result.slots.push(new GearSlot("Jewel", "Jewel", "宝玉", undefined));
  result.slots.push(new GearSlot("ArcaneSymbol1", "ArcaneSymbol", "アーケインシンボル1", undefined));
  result.slots.push(new GearSlot("ArcaneSymbol2", "ArcaneSymbol", "アーケインシンボル2", undefined));
  result.slots.push(new GearSlot("ArcaneSymbol3", "ArcaneSymbol", "アーケインシンボル3", undefined));
  result.slots.push(new GearSlot("ArcaneSymbol4", "ArcaneSymbol", "アーケインシンボル4", undefined));
  result.slots.push(new GearSlot("ArcaneSymbol5", "ArcaneSymbol", "アーケインシンボル5", undefined));
  result.slots.push(new GearSlot("ArcaneSymbol6", "ArcaneSymbol", "アーケインシンボル6", undefined));
  result.slots.push(new GearSlot("AuthenticSymbol1", "AuthenticSymbol", "オーセンティックシンボル1", undefined));
  result.slots.push(new GearSlot("AuthenticSymbol2", "AuthenticSymbol", "オーセンティックシンボル2", undefined));
  result.slots.push(new GearSlot("AuthenticSymbol3", "AuthenticSymbol", "オーセンティックシンボル3", undefined));
  result.slots.push(new GearSlot("AuthenticSymbol4", "AuthenticSymbol", "オーセンティックシンボル4", undefined));
  result.slots.push(new GearSlot("AuthenticSymbol5", "AuthenticSymbol", "オーセンティックシンボル5", undefined));
  result.slots.push(new GearSlot("AuthenticSymbol6", "AuthenticSymbol", "オーセンティックシンボル6", undefined));
  result.slots.push(new GearSlot("GrandAuthenticSymbol1", "GrandAuthenticSymbol", "グランドオーセンティックシンボル1", undefined));
  result.slots.push(new GearSlot("PetEquip1", "PetEquip", "ペット装備1", undefined));
  result.slots.push(new GearSlot("PetEquip2", "PetEquip", "ペット装備2", undefined));
  result.slots.push(new GearSlot("PetEquip3", "PetEquip", "ペット装備3", undefined));
  result.slots.push(new GearSlot("Heart", "Heart", "機械心臓部", undefined));
  result.slots.push(new GearSlot("Medal", "Medal", "勲章", undefined));
  result.slots.push(new GearSlot("Title", "Title", "称号", undefined));
  return result
}
