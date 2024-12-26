'use client';

import Header from "../components/Header";
import Form from '../components/contact/Form';
import Info from '../components/contact/Info';




export default function About() {
  return (
    <main >
      <Header title="Contact Us" content="2 Gallan Kariye Vypaar Dia – Let’s Talk Business" />

      <div className="my-24  ">
      <Form/>

      </div>
      <div className="my-24  ">
      <Info/>

      </div>
     
    </main>
  );
}
