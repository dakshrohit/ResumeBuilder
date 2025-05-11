import React from 'react';
import Aurora from "./Aurora.jsx";
import BlurText from "./BlurText.jsx";
import ScrollVelocity from "./ScrollVelocity.jsx";



import ShinyTextbtn from "./ShinyTextbtn.jsx";


import './Homepage.css';
const Homepage = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div className="page">
      <Aurora
        colorStops={["#001a80", "#cc0044", "#cc9900"]}
        blend={0.6}
        amplitude={1.2}
        speed={0.8}
        className="Aurora"
      />
      <div className="content">
        <BlurText
          text="CREATE YOUR RESUME ONLINE.."
          delay={410}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text mb-8"
        />

        <button className="shiny-button">
          <ShinyTextbtn
            text="LET'S START"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </button>
      </div>
      <div className='vel'>
        <ScrollVelocity
          texts={[
            "Build Your Resume..Create Stunning CVs..",
            "Live Preview..     Professional Templates     Export as PDF..    No Backend Needed",
          ]}
          velocity={60}
          className="custom-scroll-text"
            parallaxStyle={{ width: "100rem", height: "auto" }}
          scrollerStyle={{ width: "100rem", height: "auto" }}
        />
      </div>

      
    </div>
  );
}

export default Homepage;
