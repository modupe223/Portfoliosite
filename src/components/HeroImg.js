import "./HeroImgStyles.css"; 

import React from 'react';

import IntroImg from "../assets/coding.jpg";

import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
          <img className="into-img" src={IntroImg} alt="Intro-Img"/>
      </div>
      <div className="content">
        <p> HI, I'M A FREELANCER.</p>
        <h1>Frontend Developer.</h1> 
        <div className="mine">
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>

  )
  
}

export default HeroImg