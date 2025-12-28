import { immerable } from "immer"
import type { IntRange } from "type-fest";

import type { Potential } from "../potential";
import type { BonusPotential } from "../bonuspotential";
import type { IStat } from "../stat";

import { type GearType, Gear } from "../gear"
import type { Region } from "../../i18n.ts"
import { baseItems, type IBaseItem } from "../BaseItem/baseitem.ts";
import type { IWeaponType } from "../weapontype/weaponType.ts";
import type { Updater } from "use-immer";

export class GearSets {
  currentSet: GearSet = new GearSet()
  SaveSlots: Array<GearSet> = [];
}

export class GearSet {
  [immerable] = true
  weaponType: IWeaponType = {
        internalName: "NotSelected",
        JMSName: "選択してください",
        mainStat: "STR",
        subStat: "DEX",
        disabled: false,
        atkFafnir: 0,
        atkAbsolab: 0,
        atkArcane: 0,
        atkGenesis: 0,
        atkDestiny: 0
    }
  slots: Array<GearSlot> = [];

  getSlotIndexBySlotType = (slotType: SlotType): number => {
    // 装備スロット名から該当するスロット番号を返す
    let matchedSlotIndex = -1
    this.slots.map((slot, index) => {
      if (slot.type === slotType){
        matchedSlotIndex = index
      }
    });

    if (matchedSlotIndex === -1) { 
        // スロットが見つからなかったらエラー
        throw TypeError("getSlotIndex: 装備スロットが見つかりません(" + slotType + ")") 
    }
    else return matchedSlotIndex
  }

  

  setSlotWithBaseItem = (slotType: SlotType, equipName: string, region: Region): GearSet => {
    throw Error("これを呼ぶと描画がついてこない")
    /// 装備スロットと装備名とリージョンから該当するベース装備を探してきて装備名と基礎能力とレベルをセットし、更新済みのギアセットを返す
    let matchedSlotIndex = -1
    let matchedBaseItem: IBaseItem | null = null
    let matchedStat: Array<IStat> | null = null
    let matchedLevel: IntRange<0, 251> = 0

    if (region.name === "JMS"){

      // 指定されたスロットがどこにあるのか探す
      this.slots.map((slot, index) => {
        if (slot.type === slotType){
          matchedSlotIndex = index
        }
      });
      
      if (matchedSlotIndex === 1) { 
        // スロットが見つからなかったらエラー
        throw TypeError("setSlotBaseItem: 装備スロットが見つかりません(" + {slotType: slotType, equipName: equipName, region: region} + ")") 
      }
      else{
        // スロットが見つかったらベース装備を探してきて装備名と基礎能力とレベルをセット
        baseItems.map((item, index) => {
          if(item.JMSName === equipName && item.type === slotTypeToGearType(slotType)){
            matchedBaseItem = item
            matchedStat = item.baseStat
            matchedLevel = item.level
          }
        });


        // スロットにその装備の名前と基礎能力とレベルをセット
        if (matchedBaseItem === null || matchedStat === null){
          // ベース装備が見つからなかったらエラー
          throw TypeError("setSlotBaseItem: ベース装備が見つかりません(" + slotType + ", " + equipName + ", " + region.name + ")")
        }
        else{
          // ベース装備が見つかったらスロットにその装備の名前と基礎能力とレベルをセット
          this.slots[matchedSlotIndex]!.gear.name = matchedBaseItem.JMSName;
          this.slots[matchedSlotIndex]!.gear.baseStat = matchedStat;
          this.slots[matchedSlotIndex]!.gear.level = matchedLevel;
        }
        // updateCurrentGearSet((draft) => {
        //   if (matchedBaseItem === null || matchedStat === null){
        //     // ベース装備が見つからなかったらエラー
        //     throw TypeError("setSlotBaseItem: ベース装備が見つかりません(" + slotType + ", " + equipName + ", " + region.name + ")")
        //   }
        //   draft.slots[matchedSlotIndex]!.gear.name = matchedBaseItem.JMSName;
        //   draft.slots[matchedSlotIndex]!.gear.baseStat = matchedStat;
        //   draft.slots[matchedSlotIndex]!.gear.level = matchedLevel;
        // })

        // UI上の装備の選択状態を上書き
        // TODO
        
      }
    }
    else{ throw TypeError("未実装のリージョンです: " + region.name)}
    console.log(JSON.stringify(this.slots[matchedSlotIndex]))
    return this
  };
}

export class GearSlot {
  type: SlotType
  acceptType: GearType // | Array<GearType> // 全身鎧なんて誰も使ってないやろ
  JMSName: string
  gear: Gear;

  constructor(type: SlotType, acceptType: GearType, JMSName: string, gear: Gear){
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

export const strToGearType = (str: string): GearType => {
    // stringからGearTypeに変換するためだけにある関数　泥臭い
    switch(str){
        case "Weapon": return "Weapon"
        case "SubWeapon": return "SubWeapon"
        case "Embrem": return "Embrem"
        case "Head": return "Head"
        case "FullCloth": return "FullCloth"
        case "Armour": return "Armour"
        case "Pants": return "Pants"
        case "Shoulder": return "Shoulder"
        case "Mantle": return "Mantle"
        case "Gloves": return "Gloves"
        case "Boots": return "Boots"
        case "Pendant": return "Pendant"
        case "Ring": return "Ring"
        case "Belt": return "Belt"
        case "EarRing": return "EarRing"
        case "Face": return "Face"
        case "Eyes": return "Eyes"
        case "Pocket": return "Pocket"
        case "Badge": return "Badge"
        case "Heart": return "Heart"
        case "Title": return "Title"
        case "Medal": return "Medal"
        case "Totem": return "Totem"
        case "Jewel": return "Jewel"
        case "PetEquip": return "PetEquip"
        case "ArcaneSymbol": return "ArcaneSymbol"
        case "AuthenticSymbol": return "AuthenticSymbol"
        case "GrandAuthenticSymbol": return "GrandAuthenticSymbol"

        default: throw Error("strToGearType: 渡された文字列が装備タイプと一致しません: " + str)
    }
}

export const strToSlotType = (str: string): SlotType => {
    // stringからSlotTypeに変換するためだけにある関数　泥臭い
    switch(str){
        case "Weapon": return str
        case "SubWeapon": return str
        case "Embrem": return str
        case "Head": return str
        case "Armour | FullCloth": return str
        case "Armour": return str
        case "Pants": return str
        case "Shoulder": return str
        case "Mantle": return str
        case "Gloves": return str
        case "Boots": return str
        case "Pendant": return str
        case "PendantSlot": return str
        case "Ring1": return str
        case "Ring2": return str
        case "Ring3": return str
        case "Ring4": return str
        case "Belt": return str
        case "EarRing": return str
        case "Face": return str
        case "Eyes": return str
        case "Pocket": return str
        case "Badge": return str
        case "Heart": return str
        case "Title": return str
        case "Medal": return str
        case "Totem1": return str
        case "Totem2": return str
        case "Totem3": return str
        case "Jewel": return str
        case "PetEquip1": return str
        case "PetEquip2": return str
        case "PetEquip3": return str
        case "ArcaneSymbol1": return str
        case "ArcaneSymbol2": return str
        case "ArcaneSymbol3": return str
        case "ArcaneSymbol4": return str
        case "ArcaneSymbol5": return str
        case "ArcaneSymbol6": return str
        case "AuthenticSymbol1": return str
        case "AuthenticSymbol2": return str
        case "AuthenticSymbol3": return str
        case "AuthenticSymbol4": return str
        case "AuthenticSymbol5": return str
        case "AuthenticSymbol6": return str
        case "GrandAuthenticSymbol1": return str

        default: throw Error("strToGearType: 渡された文字列が装備スロットタイプと一致しません: " + str)
    }
}

export const slotTypeToGearType = (str: string): GearType => {
    // stringからSlotTypeに変換するためだけにある関数　泥臭い
    switch(str){
        case "Weapon": return str
        case "SubWeapon": return str
        case "Embrem": return str
        case "Head": return str
        case "Armour | FullCloth": throw(Error("Armour | FullCloth => GearTypeへの変換が呼ばれました"))
        case "Armour": return str
        case "Pants": return str
        case "Shoulder": return str
        case "Mantle": return str
        case "Gloves": return str
        case "Boots": return str
        case "Pendant": return str
        case "PendantSlot": return "Pendant"
        case "Ring1": return "Ring"
        case "Ring2": return "Ring"
        case "Ring3": return "Ring"
        case "Ring4": return "Ring"
        case "Belt": return str
        case "EarRing": return str
        case "Face": return str
        case "Eyes": return str
        case "Pocket": return str
        case "Badge": return str
        case "Heart": return str
        case "Title": return str
        case "Medal": return str
        case "Totem1": return "Totem"
        case "Totem2": return "Totem"
        case "Totem3": return "Totem"
        case "Jewel": return str
        case "PetEquip1": return "PetEquip"
        case "PetEquip2": return "PetEquip"
        case "PetEquip3": return "PetEquip"
        case "ArcaneSymbol1": return "ArcaneSymbol"
        case "ArcaneSymbol2": return "ArcaneSymbol"
        case "ArcaneSymbol3": return "ArcaneSymbol"
        case "ArcaneSymbol4": return "ArcaneSymbol"
        case "ArcaneSymbol5": return "ArcaneSymbol"
        case "ArcaneSymbol6": return "ArcaneSymbol"
        case "AuthenticSymbol1": return "AuthenticSymbol"
        case "AuthenticSymbol2": return "AuthenticSymbol"
        case "AuthenticSymbol3": return "AuthenticSymbol"
        case "AuthenticSymbol4": return "AuthenticSymbol"
        case "AuthenticSymbol5": return "AuthenticSymbol"
        case "AuthenticSymbol6": return "AuthenticSymbol"
        case "GrandAuthenticSymbol1": return "GrandAuthenticSymbol"

        default: throw Error("strToGearType: 渡された文字列が装備スロットタイプと一致しません: " + str)
    }
}

export const initGearSet = () => {
  let result = new GearSet();
  result.slots.push(new GearSlot("Weapon", "Weapon", "武器", new Gear("Weapon", "なし")));
  result.slots.push(new GearSlot("SubWeapon", "SubWeapon", "補助武器", new Gear("SubWeapon", "なし")));
  result.slots.push(new GearSlot("Embrem", "Embrem", "エンブレム", new Gear("Embrem", "なし")));
  result.slots.push(new GearSlot("Head", "Head", "頭", new Gear("Head", "なし")));
  result.slots.push(new GearSlot("Armour", "Armour", "鎧上", new Gear("Armour", "なし")));
  result.slots.push(new GearSlot("Pants", "Pants", "鎧下", new Gear("Pants", "なし")));
  result.slots.push(new GearSlot("Shoulder", "Shoulder", "肩", new Gear("Shoulder", "なし")));
  result.slots.push(new GearSlot("Mantle", "Mantle", "マント", new Gear("Mantle", "なし")));
  result.slots.push(new GearSlot("Gloves", "Gloves", "手袋", new Gear("Gloves", "なし")));
  result.slots.push(new GearSlot("Boots", "Boots", "靴", new Gear("Boots", "なし")));
  result.slots.push(new GearSlot("Pendant", "Pendant", "ペンダント", new Gear("Pendant", "なし")));
  result.slots.push(new GearSlot("PendantSlot", "Pendant", "ペンダントスロット", new Gear("Pendant", "なし")));
  result.slots.push(new GearSlot("Ring1", "Ring", "指輪1", new Gear("Ring", "なし")));
  result.slots.push(new GearSlot("Ring2", "Ring", "指輪2", new Gear("Ring", "なし")));
  result.slots.push(new GearSlot("Ring3", "Ring", "指輪3", new Gear("Ring", "なし")));
  result.slots.push(new GearSlot("Ring4", "Ring", "指輪4", new Gear("Ring", "なし")));
  result.slots.push(new GearSlot("Belt", "Belt", "ベルト", new Gear("Belt", "なし")));
  result.slots.push(new GearSlot("EarRing", "EarRing", "イヤリング", new Gear("EarRing", "なし")));
  result.slots.push(new GearSlot("Face", "Face", "顔飾り", new Gear("Face", "なし")));
  result.slots.push(new GearSlot("Eyes", "Eyes", "目飾り", new Gear("Eyes", "なし")));
  result.slots.push(new GearSlot("Pocket", "Pocket", "ポケット装備", new Gear("Pocket", "なし")));
  result.slots.push(new GearSlot("Badge", "Badge", "バッジ", new Gear("Badge", "なし")));
  result.slots.push(new GearSlot("Totem1", "Totem", "トーテム1", new Gear("Totem", "なし")));
  result.slots.push(new GearSlot("Totem2", "Totem", "トーテム2", new Gear("Totem", "なし")));
  result.slots.push(new GearSlot("Totem3", "Totem", "トーテム3", new Gear("Totem", "なし")));
  result.slots.push(new GearSlot("Jewel", "Jewel", "宝玉", new Gear("Jewel", "なし")));
  result.slots.push(new GearSlot("ArcaneSymbol1", "ArcaneSymbol", "アーケインシンボル1", new Gear("ArcaneSymbol", "なし")));
  result.slots.push(new GearSlot("ArcaneSymbol2", "ArcaneSymbol", "アーケインシンボル2", new Gear("ArcaneSymbol", "なし")));
  result.slots.push(new GearSlot("ArcaneSymbol3", "ArcaneSymbol", "アーケインシンボル3", new Gear("ArcaneSymbol", "なし")));
  result.slots.push(new GearSlot("ArcaneSymbol4", "ArcaneSymbol", "アーケインシンボル4", new Gear("ArcaneSymbol", "なし")));
  result.slots.push(new GearSlot("ArcaneSymbol5", "ArcaneSymbol", "アーケインシンボル5", new Gear("ArcaneSymbol", "なし")));
  result.slots.push(new GearSlot("ArcaneSymbol6", "ArcaneSymbol", "アーケインシンボル6", new Gear("ArcaneSymbol", "なし")));
  result.slots.push(new GearSlot("AuthenticSymbol1", "AuthenticSymbol", "オーセンティックシンボル1", new Gear("AuthenticSymbol", "なし")));
  result.slots.push(new GearSlot("AuthenticSymbol2", "AuthenticSymbol", "オーセンティックシンボル2", new Gear("AuthenticSymbol", "なし")));
  result.slots.push(new GearSlot("AuthenticSymbol3", "AuthenticSymbol", "オーセンティックシンボル3", new Gear("AuthenticSymbol", "なし")));
  result.slots.push(new GearSlot("AuthenticSymbol4", "AuthenticSymbol", "オーセンティックシンボル4", new Gear("AuthenticSymbol", "なし")));
  result.slots.push(new GearSlot("AuthenticSymbol5", "AuthenticSymbol", "オーセンティックシンボル5", new Gear("AuthenticSymbol", "なし")));
  result.slots.push(new GearSlot("AuthenticSymbol6", "AuthenticSymbol", "オーセンティックシンボル6", new Gear("AuthenticSymbol", "なし")));
  result.slots.push(new GearSlot("GrandAuthenticSymbol1", "GrandAuthenticSymbol", "グランドオーセンティックシンボル1", new Gear("GrandAuthenticSymbol", "なし")));
  result.slots.push(new GearSlot("PetEquip1", "PetEquip", "ペット装備1", new Gear("PetEquip", "なし")));
  result.slots.push(new GearSlot("PetEquip2", "PetEquip", "ペット装備2", new Gear("PetEquip", "なし")));
  result.slots.push(new GearSlot("PetEquip3", "PetEquip", "ペット装備3", new Gear("PetEquip", "なし")));
  result.slots.push(new GearSlot("Heart", "Heart", "機械心臓部", new Gear("Heart", "なし")));
  result.slots.push(new GearSlot("Medal", "Medal", "勲章", new Gear("Medal", "なし")));
  result.slots.push(new GearSlot("Title", "Title", "称号", new Gear("Title", "なし")));
  return result
}
