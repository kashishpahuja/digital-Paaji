import "./globals.css";

import Navbar from "./components/Navbar";
import Services from "./components/Services";
import KhetKiMuli from "./components/KhetKiMuli";
import AddOn from "./components/AddOn";
import Growth from "./components/Growth";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="my-24">
        <Services />
      </div>
      <div className="my-24">
        <KhetKiMuli />
      </div>
      <div className="my-24">
        <AddOn />
      </div>
      <div className="my-24">
        <Growth />
      </div>
    </div>
  );
}
