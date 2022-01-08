import React from "react";
import Cafe from "../assets/Img1.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Cafe})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        <b>Welcome to our Aai Cafe Resto</b>Exceptional starts by sourcing the best coffee, bringing out its potential in the roast and extracting 
        all that goodness into the cup – but it doesn’t end there. For us, exceptional is found in partnering 
        with our customers, because we genuinely care about their business and want to see them flourish.
        Based in Manly Vale on Sydney’s Northern Beaches and with micro-roasteries throughout Australia, 
        we’re on a journey to redefine the next chapter in the evolution of coffee – where art meets science
        and exceptional coffee is given its rightful moment to shine.
        </p>
      </div>
    </div>
  );
}

export default About;
