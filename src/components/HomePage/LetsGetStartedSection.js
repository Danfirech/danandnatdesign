import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
height: 800px;
width: 100%;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
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

const WhiteOutlineBox = Styled.div`
  height: 90%; 
  width: 90%;
  border: solid white 1px;
  display: flex;
`;

const Left = Styled.div`
height: 100%;
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
border-right: solid white .5px;
color: white;
`;

const LeftTop = Styled.div`
height: 50%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Line = Styled.div`
height: 1px;
width: 80%;
background-color: white;
`;

const LeftBottom = Styled.div`
height: 50%;
width: 80%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Circle = Styled.div`
height: 40%;
width: 22%;
border-radius: 100%;
border: solid white 1px;
display: flex;
align-items: center;
justify-content: center;
`;

const InnerCircle = Styled.div`
  height: 90%;
  width: 90%;
  border-radius: 100%;
  background-color: yellow;
`;

const Right = Styled.div`
height: 100%;
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
`;

const RightTop = Styled.div`
height: 50%;
width: 50%;
display: flex;
justify-content: space-between;
color: white;
font-size: 30px;


.padding {
  padding-top: 40px;
}
`;

const RightBottom = Styled.div`
height: 50%;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background-color: blue;

`;

const HalfCircle = Styled.div`
height: 100%;
width: 120%;
background-color: yellow;
clip-path: circle(60% at 50% 96%);
`;

const LetsGetStartedSection = () => {
  return (
    <div>
      <Container>
        <WhiteOutlineBox>
          <Left>
            <LeftTop>
              <div>Lets Get Started!</div>
            </LeftTop>
            <Line></Line>
            <LeftBottom>
              <Circle>
                <InnerCircle></InnerCircle>
              </Circle>
              <Circle>
                <InnerCircle></InnerCircle>
              </Circle>
              <Circle>
                <InnerCircle></InnerCircle>
              </Circle>
            </LeftBottom>
          </Left>
          <Right>
            <RightTop>
              <div className="padding">Test</div>
              <div className="padding">Test</div>
              <div className="padding">Test</div>
            </RightTop>
            <RightBottom>
              <HalfCircle></HalfCircle>
            </RightBottom>
          </Right>
        </WhiteOutlineBox>
      </Container>
    </div>
  );
};

export default LetsGetStartedSection;
