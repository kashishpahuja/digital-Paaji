import "./globals.css";

import Navbar from "./components/Navbar";
import Services from "./components/Services";
import KhetKiMuli from "./components/KhetKiMuli";
import AddOn from "./components/AddOn";
import Growth from "./components/Growth";
import Offer from "./components/Offer";
import Testimonials from "./components/Testimonials";
import Reviews from "./components/Reviews";
import Vypaar from './components/Vypaar';
import Work from "./components/Work";
import Footer from "./components/Footer";



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
      <div className="my-24">
        <Offer />
      </div>
      <div className="my-24">
        <Testimonials />
      </div>
      <div className="my-24">
        <Reviews />
      </div>
      
      <div className="my-24">
        <Work />
      </div>
      <div className="my-24">
        <Vypaar />
      </div>
      <div className="my-24">
        <Footer />
      </div>
    </div>
  );
}
