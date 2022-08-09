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

const ServicesBox = Styled.div`
height: 90%;
width: 90%;
background-color: purple;
display: flex;
`;

const Left = Styled.div`
height: 100%;
width: 33.33%;
background-color: purple;
`;

const Middle = Styled.div`
height: 100%;
width: 33.33%;
`;

const Right = Styled.div`
height: 100%;
width: 33.33%;
background-color: purple;
`;

const TopRoundedContainer = Styled.div`
height: 100%;
width: 100%;
border-radius: 250px 250px 0 0;
background-color: pink;
display: flex;
flex-direction: column;
`;

const BottomRoundedContainer = Styled.div`
height: 100%;
width: 100%;
border-radius: 0 0 250px 250px;
background-color: pink;
display: flex;
flex-direction: column;
`;

const Top = Styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .padding{
    padding-bottom: 50px;
  }

  .width{
    width: 40%;
  }
`;

const Bottom = Styled.div`
height: 40%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

  .padding{
    padding-bottom: 50px;
  }

  .width{
    width: 40%;
  }
`;

const ServicesSection = () => {
  return (
    <div>
      <Header>
        <div>Services</div>
      </Header>
      <Container>
        <ServicesBox>
          <Left>
            <BottomRoundedContainer>
              <Top>
                <div className="padding">Landing Pages</div>
                <div className="width">
                  Send your potential clients to one location and capture leads
                  with a beutiful landing page
                </div>
              </Top>
              <Bottom>Test</Bottom>
            </BottomRoundedContainer>
          </Left>
          <Middle>
            <TopRoundedContainer>
              <Top>Test</Top>
              <Bottom>
                <div className="padding">Website</div>
                <div className="width">
                  Let us build you a branded website with pages and dynamic
                  fetures that show and share what your business is all about!
                </div>
              </Bottom>
            </TopRoundedContainer>
          </Middle>
          <Right>
            <BottomRoundedContainer>
              <Top>
                <div className="padding">Automation</div>
                <div className="width">
                  Automate your business systems so that your time is not wasted
                  doing mondane tasks.
                </div>
              </Top>
              <Bottom>Test</Bottom>
            </BottomRoundedContainer>
          </Right>
        </ServicesBox>
      </Container>
    </div>
  );
};

export default ServicesSection;
