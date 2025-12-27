// import { APITester } from "./APITester";
import "./index.css";

//import logo from "./logo.svg";
//import logo from "./assets/images/logo.svg"
// import reactLogo from "./react.svg";
import logo from "./assets/images/genesis_staff.png"
import { GearsTable } from "./UI/Gearlist";

export function App() {
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
      {GearsTable()}
    </div>
  );
}

export default App;
