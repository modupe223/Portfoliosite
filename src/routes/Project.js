import React from 'react';


import HeroImg2 from '../components/HeroImg2';
import PricingCards from '../components/PricingCards';
import WorkCard from '../components/WorkCard';
import Navbar from "../components/Navbar";

const Project = () => {
  return  (
    <div>
        <Navbar />
        <HeroImg2 heading="PROJECTS." text="Some of my most recent works." />
        <PricingCards />
        <WorkCard />
    </div>
  );
 
};

export default Project