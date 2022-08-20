import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 1900px;
  width: 100%;
  background-color: pink;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Header = styled.div`
  height: 100px;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 90px;
  font-size: 100px;
`;

const OurInspoSection = () => {
  return (
    <div>
      <Header>Our Inspo</Header>
      <Container></Container>
    </div>
  );
};

export default OurInspoSection;
