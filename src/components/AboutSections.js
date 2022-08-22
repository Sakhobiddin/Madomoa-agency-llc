import React from "react";
// import images
import homeIntro from "../img/home_intro.jpg";
// import styled component
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Madomoa</h2>
            <h2>Agency</h2>
            <h2>LLC</h2>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <button>About Us</button>
      </div>
      <div className="image">
        <img src={homeIntro} alt="Woman in travel" />
      </div>
    </About>
  );
};

// styled-components
const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 50px;
`;

/* const Image = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
`; */

export default AboutSection;
