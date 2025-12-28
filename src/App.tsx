import { useState } from "react";
import { useImmer } from "use-immer";

import "./index.css";

import logo from "./assets/images/genesis_staff.png"
import { GearSets, initGearSet } from "./gears/Gearset/gearset";
import { GearsTable } from "./UI/Gearlist";
import { WeaponType } from "./UI/WeaPonType";
import { Region } from "./i18n";

export function App() {
  const [currentGearSet, updateCurrentGearSet] = useImmer(initGearSet())
  const [region, setRegion] = useImmer(new Region("JMS"))

  return (
    <div className="max-w-7xl mx-auto p-8 text-center relative z-10">
      <div className="flex justify-center items-center gap-8 mb-8">
        <img
          src={logo}
          alt="メイプルマイギア アーケインシェード扇のロゴ"
          className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] scale-120"
        />
      </div>

      <h1 className="text-5xl font-bold my-4 leading-tight">メイプルマイギア</h1>

      {WeaponType(currentGearSet, updateCurrentGearSet, region)}
      {GearsTable(currentGearSet, updateCurrentGearSet, region)}
    </div>
  );
}

export default App;
