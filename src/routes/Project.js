import React from 'react';


import HeroImg2 from '../components/HeroImg2';
import PricingCards from '../components/PricingCards';
import Navbar from "../components/Navbar";

const Project = () => {
  return  (
    <div>
        <Navbar />
        <HeroImg2 heading="PROJECTS." text="Some of my most recent works." />
        <PricingCards />
    </div>
  );
 
};

export default Project