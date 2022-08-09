import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
height: 100px;
width: 100%;
background-color: Black;
display: flex;
background-color: black;
justify-content: space-between;
`;

const Left = Styled.div`
height: 100%;
width: 20%;
display: flex;
color: white;
align-items: center;
padding-left: 100px;
`;

const Right = Styled.div`
height: 100%;
width: 10%;
display: flex;
color: white;
align-items: center;
justify-content: space-between;
padding-right: 100px;
`;

const NavBar = () => {
  return (
    <div>
      <Container>
        <Left>Test</Left>
        <Right>
          <div>Test</div>
          <div>Test</div>
        </Right>
      </Container>
    </div>
  );
};

export default NavBar;
