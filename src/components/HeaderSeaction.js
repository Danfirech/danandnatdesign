import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
  height: 700px;
  width: 100%;
  background-color: pink;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Word = Styled.div`
  height: 200px;
  width: 520px;
  /* border: black solid 1px; */
  color: yellow;
  margin-right: 30px;
  font-size: 180px;
  display: flex;

`;

const Header = () => {
  return (
    <div>
      <Container>
        <Word>Let's</Word>
        <Word>Create</Word>
        <Word>A</Word>
        <Word>Look</Word>
        <Word>And</Word>
        <Word>Feel</Word>
        <Word>You</Word>
        <Word>Love</Word>
      </Container>
    </div>
  );
};

export default Header;
