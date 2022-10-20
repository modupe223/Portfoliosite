import "./AboutContentStyles.css"

import React from "react"
import { Link } from "react-router-dom";
import  images from "../assets/images.jpg" 
import template from "../assets/template.jpg"

const AboutContent = () => {
    return (
        <div className="about">
            <div className="center">
                <h1>Who Am I?</h1>
                <p>I'm a react front-end developer. I create responsive secure websites for my clients.</p>
                <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
            </div>
           
        </div>
    )
}

export default AboutContent