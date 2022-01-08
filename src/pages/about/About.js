import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyle";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span>Sefik Kesim</span>{" "}
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Sefik</h2>
        <h3>I’m currently learning Frontend Development Languages.</h3>
        <h4>
          {" "}
          I've already known HTML , CSS ,JavaScript and ReactJS,
        </h4>
        <h2>
          <a href="mailto:sefikkesim@gmail.com">Send email</a> :
          sefikkesim@gmail.com.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
