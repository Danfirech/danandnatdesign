import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 700px;
  width: 100%;
  /* background-color: #313130; */
  background-color: black;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .one {
    :hover {
      color: #bfddea;
    }
  }
  .two {
    :hover {
      color: #e3e67d;
    }
  }
  .three {
    :hover {
      color: #e5ccd1;
    }
  }
  .four {
    :hover {
      color: #f17957;
    }
  }
`;

const Word = styled.div`
  height: 200px;
  width: 520px;
  color: white;
  margin-right: 30px;
  font-size: 180px;
  display: flex;
  :hover {
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🔥</text></svg>")
        16 0,
      auto; /*!emojicursor.app*/
  }
`;

const Header = () => {
  return (
    <div>
      <Container>
        <Word className="one">Create</Word>
        <Word className="two">Your</Word>
        <Word className="three">Website</Word>
        <Word className="four">With</Word>
        <Word className="two">Dan</Word>
        <Word className="one">and</Word>
        <Word className="four">Nat</Word>
        <Word className="three">Designs</Word>
      </Container>
    </div>
  );
};

export default Header;
