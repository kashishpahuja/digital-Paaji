"use client";

import Header from "../components/Header";
import Work from "../components/Work";
import Cards from "../components/work/cards";
import Zigzag from "../components/Zigzag";

export default function About() {
  return (
    <main>
      <Header
        title="Our WORK"
        content="2 Gallan Kariye Vypaar Dia – Let’s Talk Business"
      />
 <div className="my-24">
        <Zigzag />
      </div>
      <div className="my-24">
        <Work />
      </div>
      <div className="my-24">
        <Cards />
      </div>
    </main>
  );
}
