import { Preset, Procedure } from "./preset";

export const presetAbsorab18: Preset = new Preset (
    "presetAbsorab18",
    "アビスアブソ(30%書埋め/18☆/ユニーク15%/レアAMA10/転生120~140級)",
    [
        new Procedure("Head",   "アビス頭",     [{type: "MainStat", amount:84}, {type: "AMA", amount: 1}], 18, [{}], [{}], [{type: "MainStat", amount: 60}, {type: "AllStat%", amount: 6}]),
        new Procedure("Armour", "アビス鎧上",   [{type: "MainStat", amount:56}, {type: "AMA", amount: 1}], 18, [{}], [{}], [{type: "MainStat", amount: 60}, {type: "AllStat%", amount: 6}]),
        new Procedure("Pants",   "アビス鎧下",   [{type: "MainStat", amount:56}, {type: "AMA", amount: 1}], 18, [{}], [{}], [{type: "MainStat", amount: 60}, {type: "AllStat%", amount: 6}]),
        new Procedure("Shoulder",   "アブソ肩",     [{type: "MainStat", amount:14}, ], 18, [{}], [{}], [{type: "MainStat", amount: 80}, {type: "AllStat%", amount: 6}]),
        new Procedure("Mantle",   "アブソマント", [{type: "MainStat", amount:56}, {type: "AMA", amount: 1}], 18, [{}], [{}], [{type: "MainStat", amount: 80}, {type: "AllStat%", amount: 6}]),
        new Procedure("Gloves",   "アブソ手袋",    [{type: "AMA", amount: 24}], 18, [{}], [{}], [{type: "MainStat", amount: 80}, {type: "AllStat%", amount: 6}]),
        new Procedure("Boots",   "アブソ靴",     [{type: "MainStat", amount:56}, {type: "AMA", amount: 1}], 18, [{}], [{}], [{type: "MainStat", amount: 80}, {type: "AllStat%", amount: 6}]),
    ],
)