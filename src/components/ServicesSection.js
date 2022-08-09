import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
height: 800px;
width: 100%;
background-color: blue;
display: flex;
justify-content: center;
align-items: center;
`;

const ServicesBox = Styled.div`
height: 90%;
width: 90%;
background-color: white;
display: flex;
`;

const Left = Styled.div`
height: 100%;
width: 33.33%;
background-color: black;
`;

const Middle = Styled.div`
height: 100%;
width: 33.33%;
`;

const Right = Styled.div`
height: 100%;
width: 33.33%;
background-color: black;
`;

const ServicesSection = () => {
  return (
    <div>
      <Container>
        <ServicesBox>
          <Left></Left>
          <Middle></Middle>
          <Right></Right>
        </ServicesBox>
      </Container>
    </div>
  );
};

export default ServicesSection;
