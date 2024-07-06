import React from "react";
import Maincarosal from "../../components/Homecarosul/Maincarosal.";
import SectionCa from "../../components/homesectioncarooooo/homesectionCrodol";
import { MensKurta } from "../../../Data/Mens/MensKurta";
import Footer from "../../components/Footer/Footer";
const homepage = () => {
  return (
    <div>
      <Maincarosal />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
      <div><SectionCa data={MensKurta} sectionName={"Men's kurta"}/></div>
      <SectionCa data={MensKurta} sectionName={"Men's Shoes"}/>
      <SectionCa data={MensKurta} sectionName={"Men's Shirt"}/>
      <SectionCa data={MensKurta} sectionName={"Women's Saree"}/>
      <SectionCa data={MensKurta} sectionName={"Women Dress"}/>


      </div>
    </div>
  )
}

export default homepage;
