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
      color: #029c54;
      font-weight: bold;
    }
  }
  .two {
    :hover {
      color: #dac6fb;
    }
  }
  .three {
    :hover {
      color: #fcff67;
    }
  }
  .four {
    :hover {
      color: #bee6ee;
    }
  }
  .five {
    font-weight: bold;
    border: 2px groove blue;
    :hover {
      color: #f55a1d;
    }
  }
  .six {
    :hover {
      color: #029c54;
    }
  }
  .seven {
    font-weight: bold;
    border: 2px groove #e3e67d;

    :hover {
      color: #feb2ce;
    }
  }
  .eight {
    font-weight: bold;
    :hover {
      color: #bee6ee;
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
        <Word className="five">Dan</Word>
        <Word className="six">and</Word>
        <Word className="seven">Nat</Word>
        <Word className="eight">Designs</Word>
      </Container>
    </div>
  );
};

export default Header;
