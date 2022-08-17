import React from "react";
// import images
import homeIntro from "../img/home_intro.jpg";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Madomoa</h2>
            <h2>Agency</h2>
            <h2>LLC</h2>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ad a
          expedita ipsa maiores praesentium dignissimos sed assumenda voluptas
          necessitatibus ab sit fuga, dolore sunt.
        </p>
        <button>About Us</button>
      </div>
      <div className="image">
        <img src={homeIntro} alt="Woman in travel" />
      </div>
    </div>
  );
};

export default AboutSection;
