import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyle";
import codingSvg from "../../assets/coding.png";

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} alt="coding" />
      <HeaderContainer>
        <h1>
          Jr Frontend Developer <span>Muhammed Eroğlu</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>I’m improving myself about frontend web development</h2>
        <h2>
          I've learned Html, Css, JS, ReactJS and everyday trying to get better.
          
        </h2>
        <h2>
          <a href="mailto:m.eroglu.dev@gmail.com">Send email</a> :
          m.eroglu.dev@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
