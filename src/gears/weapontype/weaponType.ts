export interface IWeaponType{
    internalName: string
    JMSName: string
    disabled: boolean
    atkFafnir: number
    atkAbsolab: number
    atkArcane: number
    atkGenesis: number
    atkDestiny: number
}

export const jobs: Array<IWeaponType> = [
    {
        internalName: "NotSelected",
        JMSName: "選択してください",
        disabled: false,
        atkFafnir: 0,
        atkAbsolab: 0,
        atkArcane: 0,
        atkGenesis: 0,
        atkDestiny: 0
    },
    {
        internalName: "Warrior",
        JMSName: "----戦士----",
        disabled: true,
        atkFafnir: 0,
        atkAbsolab: 0,
        atkArcane: 0,
        atkGenesis: 0,
        atkDestiny: 0
    },
    {
        internalName: "OneHandedSword",
        JMSName: "片手剣",
        disabled: false,
        atkFafnir: 164,
        atkAbsolab: 197,
        atkArcane: 283,
        atkGenesis: 326,
        atkDestiny: 0
    },
    {
        internalName: "TwoHandedSword",
        JMSName: "両手剣",
        disabled: false,
        atkFafnir: 171,
        atkAbsolab: 205,
        atkArcane: 295,
        atkGenesis: 340,
        atkDestiny: 0
    },
    {
        internalName: "OneHandedAxe",
        JMSName: "片手斧",
        disabled: false,
        atkFafnir: 164,
        atkAbsolab: 197,
        atkArcane: 283,
        atkGenesis: 326,
        atkDestiny: 0
    },
    {
        internalName: "TwoHandedAxe",
        JMSName: "両手斧",
        disabled: false,
        atkFafnir: 171,
        atkAbsolab: 205,
        atkArcane: 295,
        atkGenesis: 340,
        atkDestiny: 0
    },
    {
        internalName: "OneHandedBlunt",
        JMSName: "片手鈍器",
        disabled: false,
        atkFafnir: 164,
        atkAbsolab: 197,
        atkArcane: 283,
        atkGenesis: 326,
        atkDestiny: 0
    },
    {
        internalName: "TwoHandedBlunt",
        JMSName: "両手鈍器",
        disabled: false,
        atkFafnir: 171,
        atkAbsolab: 205,
        atkArcane: 295,
        atkGenesis: 340,
        atkDestiny: 0
    },
    {
        internalName: "Halberd",
        JMSName: "鉾",
        disabled: false,
        atkFafnir: 171,
        atkAbsolab: 184,
        atkArcane: 264,
        atkGenesis: 304,
        atkDestiny: 0
    },
    {
        internalName: "Spear",
        JMSName: "槍",
        disabled: false,
        atkFafnir: 153,
        atkAbsolab: 205,
        atkArcane: 295,
        atkGenesis: 340,
        atkDestiny: 0
    },
    {
        internalName: "Desperado",
        JMSName: "デスペラード",
        disabled: false,
        atkFafnir: 171,
        atkAbsolab: 205,
        atkArcane: 295,
        atkGenesis: 340,
        atkDestiny: 0
    },
    {
        internalName: "GuantletRevolber",
        JMSName: "ガントレットリボルバー",
        disabled: false,
        atkFafnir: 128,
        atkAbsolab: 154,
        atkArcane: 221,
        atkGenesis: 255,
        atkDestiny: 0
    },
    {
        internalName: "Tuner",
        JMSName: "チューナー",
        disabled: false,
        atkFafnir: 171,
        atkAbsolab: 205,
        atkArcane: 295,
        atkGenesis: 340,
        atkDestiny: 0
    },
    {
        internalName: "Zero",
        JMSName: "太刀(ゼロ)",
        disabled: false,
        atkFafnir: 0,
        atkAbsolab: 0,
        atkArcane: 0,
        atkGenesis: 340,
        atkDestiny: 0
    },
    {
        internalName: "Ren",
        JMSName: "長剣",
        disabled: false,
        atkFafnir: 171,
        atkAbsolab: 205,
        atkArcane: 295,
        atkGenesis: 340,
        atkDestiny: 0
    },
    {
        internalName: "Katana",
        JMSName: "刀",
        disabled: false,
        atkFafnir: 164,
        atkAbsolab: 197,
        atkArcane: 283,
        atkGenesis: 326,
        atkDestiny: 0
    },
    {
        internalName: "Wizard",
        JMSName: "----魔法使い----",
        disabled: true,
        atkFafnir: 0,
        atkAbsolab: 0,
        atkArcane: 0,
        atkGenesis: 0,
        atkDestiny: 0
    },
    {
        internalName: "Wand",
        JMSName: "杖(ワンド)",
        disabled: false,
        atkFafnir: 201,
        atkAbsolab: 241,
        atkArcane: 347,
        atkGenesis: 400,
        atkDestiny: 0
    },
    {
        internalName: "Staff",
        JMSName: "棒(スタッフ)",
        disabled: false,
        atkFafnir: 204,
        atkAbsolab: 245,
        atkArcane: 353,
        atkGenesis: 406,
        atkDestiny: 0
    },
    {
        internalName: "ShiningRod",
        JMSName: "シャイニングロッド",
        disabled: false,
        atkFafnir: 201,
        atkAbsolab: 241,
        atkArcane: 347,
        atkGenesis: 400,
        atkDestiny: 0
    },
    {
        internalName: "ESPLimitter",
        JMSName: "ESPリミッター",
        disabled: false,
        atkFafnir: 201,
        atkAbsolab: 241,
        atkArcane: 347,
        atkGenesis: 400,
        atkDestiny: 0
    },
    {
        internalName: "MagicGuantlet",
        JMSName: "マジックガントレット",
        disabled: false,
        atkFafnir: 201,
        atkAbsolab: 241,
        atkArcane: 347,
        atkGenesis: 400,
        atkDestiny: 0
    },
    {
        internalName: "Fan_Kanna",
        JMSName: "扇",
        disabled: false,
        atkFafnir: 175,
        atkAbsolab: 241,
        atkArcane: 347,
        atkGenesis: 400,
        atkDestiny: 0
    },
    {
        internalName: "MemorialStaff",
        JMSName: "メモリアルスタッフ",
        disabled: false,
        atkFafnir: 175,
        atkAbsolab: 241,
        atkArcane: 347,
        atkGenesis: 400,
        atkDestiny: 0
    },
    {
        internalName: "Archer",
        JMSName: "----弓使い----",
        disabled: true,
        atkFafnir: 0,
        atkAbsolab: 0,
        atkArcane: 0,
        atkGenesis: 0,
        atkDestiny: 0
    },
    {
        internalName: "Bow",
        JMSName: "弓",
        disabled: false,
        atkFafnir: 160,
        atkAbsolab: 192,
        atkArcane: 276,
        atkGenesis: 318,
        atkDestiny: 0
    },
    {
        internalName: "CrossBow",
        JMSName: "弩",
        disabled: false,
        atkFafnir: 164,
        atkAbsolab: 197,
        atkArcane: 283,
        atkGenesis: 326,
        atkDestiny: 0
    },
    {
        internalName: "DualBowgun",
        JMSName: "デュアルボウガン",
        disabled: false,
        atkFafnir: 160,
        atkAbsolab: 192,
        atkArcane: 276,
        atkGenesis: 318,
        atkDestiny: 0
    },
    {
        internalName: "AncientBow",
        JMSName: "エンシェントボウ",
        disabled: false,
        atkFafnir: 160,
        atkAbsolab: 192,
        atkArcane: 276,
        atkGenesis: 318,
        atkDestiny: 0
    },
    {
        internalName: "BlessShooter",
        JMSName: "ブレスシューター",
        disabled: false,
        atkFafnir: 160,
        atkAbsolab: 192,
        atkArcane: 276,
        atkGenesis: 318,
        atkDestiny: 0
    },
    {
        internalName: "Rogue",
        JMSName: "----盗賊----",
        disabled: true,
        atkFafnir: 0,
        atkAbsolab: 0,
        atkArcane: 0,
        atkGenesis: 0,
        atkDestiny: 0
    },
    {
        internalName: "ShortSword",
        JMSName: "短剣",
        disabled: false,
        atkFafnir: 160,
        atkAbsolab: 192,
        atkArcane: 276,
        atkGenesis: 318,
        atkDestiny: 0
    },
    {
        internalName: "Guantlet",
        JMSName: "篭手",
        disabled: false,
        atkFafnir: 86,
        atkAbsolab: 103,
        atkArcane: 149,
        atkGenesis: 172,
        atkDestiny: 0
    },
    {
        internalName: "Cane",
        JMSName: "ケイン",
        disabled: false,
        atkFafnir: 164,
        atkAbsolab: 197,
        atkArcane: 283,
        atkGenesis: 326,
        atkDestiny: 0
    },
    {
        internalName: "Chain",
        JMSName: "チェーン",
        disabled: false,
        atkFafnir: 128,
        atkAbsolab: 192,
        atkArcane: 276,
        atkGenesis: 318,
        atkDestiny: 0
    },
    {
        internalName: "Fan_Hoyong",
        JMSName: "術扇",
        disabled: false,
        atkFafnir: 128,
        atkAbsolab: 192,
        atkArcane: 276,
        atkGenesis: 318,
        atkDestiny: 0
    },
    {
        internalName: "Chakram",
        JMSName: "チャクラム",
        disabled: false,
        atkFafnir: 128,
        atkAbsolab: 192,
        atkArcane: 276,
        atkGenesis: 318,
        atkDestiny: 0
    },
    {
        internalName: "Pirate",
        JMSName: "----海賊----",
        disabled: true,
        atkFafnir: 0,
        atkAbsolab: 0,
        atkArcane: 0,
        atkGenesis: 0,
        atkDestiny: 0
    },
    {
        internalName: "Knuckle",
        JMSName: "ナックル",
        disabled: false,
        atkFafnir: 128,
        atkAbsolab: 154,
        atkArcane: 221,
        atkGenesis: 255,
        atkDestiny: 0
    },
    {
        internalName: "Gun",
        JMSName: "銃",
        disabled: false,
        atkFafnir: 125,
        atkAbsolab: 150,
        atkArcane: 216,
        atkGenesis: 249,
        atkDestiny: 0
    },
    {
        internalName: "HandCannon",
        JMSName: "ハンドキャノン",
        disabled: false,
        atkFafnir: 175,
        atkAbsolab: 210,
        atkArcane: 302,
        atkGenesis: 348,
        atkDestiny: 0
    },
    {
        internalName: "SoulShooter",
        JMSName: "ソウルシューター",
        disabled: false,
        atkFafnir: 128,
        atkAbsolab: 154,
        atkArcane: 221,
        atkGenesis: 255,
        atkDestiny: 0
    },
    {
        internalName: "Xenon",
        JMSName: "----ゼノン----",
        disabled: true,
        atkFafnir: 0,
        atkAbsolab: 0,
        atkArcane: 0,
        atkGenesis: 0,
        atkDestiny: 0
    },
    {
        internalName: "EnergySword",
        JMSName: "エナジーソード",
        disabled: false,
        atkFafnir: 128,
        atkAbsolab: 154,
        atkArcane: 221,
        atkGenesis: 255,
        atkDestiny: 0
    },
]
