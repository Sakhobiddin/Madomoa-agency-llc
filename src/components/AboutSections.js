import React from "react";
// import images
import homeIntro from "../img/home_intro.jpg";
// import styled component
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Madomoa</h2>
          </Hide>
          <Hide>
            <h2>
              <span>Agency</span>
            </h2>
          </Hide>
          <Hide>
            <h2>LLC</h2>
          </Hide>
        </div>
        <p>
          Be educated so thad you <span>can change</span> the world
        </p>
        <button>About Us</button>
      </Description>
      <Image>
        <img src={homeIntro} alt="Woman in travel" />
      </Image>
    </About>
  );
};

// styled-components
const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 7rem;
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    padding-top: 6rem;
  }
`;

const Description = styled.div`
  flex: 1;
  padding-top: 5rem;
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
