import React from "react";
//import images
import homeIntro2 from "../img/homeIntro2.jpg";

const BenefitsSection = () => {
  return (
    <div>
      <div className="benefits">
        <div className="description">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <div className="benefit">
            <h3>Online Consulting</h3>
            <h3>High experienced Translator</h3>
            <h3>SMM</h3>
            <h3>Distributor</h3>
          </div>
        </div>
      </div>
      <img src={homeIntro2} alt="a girl in ocean" />
    </div>
  );
};

export default BenefitsSection;
