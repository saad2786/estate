
import Link from "next/link";
import AboutUs from "./components/AboutUs";
import Facility from "./components/Facility";

import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import React from "react";
import Footer from "./components/Footer";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About Us", link: "#about" },
  { name: "Facility", link: "#facility" },
  { name: "Offer", link: "#offer" },
  
];


export default function Home() {
  return (
    <div className={`relative  w-full `} >
      <Navbar navItems={navItems} className="px-4  rounded-lg" />
      
      <Main />
      <AboutUs />
      <Facility/>
      <Offer />
      <Footer/>
    </div>
  );
}
