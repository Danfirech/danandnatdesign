import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
  height: 1900px;
  width: 100%;
  background-color: pink;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

`;

const Header = Styled.div`
height: 100px;
width: 100%;
background-color: black;
color: white;
display: flex;
align-items: center;
padding-left: 90px;
font-size: 100px;
`;

const InspoPic = Styled.div`
width: 436px;
height: 490px;
background: black;
display: block;
clip-path: ellipse(23% 49% at 48% 51%);
`;

const InspoPicTwo = Styled.div`
width: 336px;
height: 390px;
background: black;
display: block;
clip-path: ellipse(23% 49% at 48% 51%);
`;

const OurInspoSection = () => {
  return (
    <div>
      <Header>Our Inspo</Header>
      <Container>
        <InspoPic>Test</InspoPic>
        <InspoPicTwo></InspoPicTwo>
        <InspoPic>Test</InspoPic>
        <InspoPic>Test</InspoPic>
        <InspoPicTwo></InspoPicTwo>
        <InspoPic>Test</InspoPic>
        <InspoPicTwo></InspoPicTwo>
        <InspoPic>Test</InspoPic>
        <InspoPic>Test</InspoPic>
        <InspoPicTwo></InspoPicTwo>
        <InspoPic>Test</InspoPic>
        <InspoPicTwo></InspoPicTwo>
      </Container>
    </div>
  );
};

export default OurInspoSection;
