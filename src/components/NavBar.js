import React from 'react';
import styled from 'styled-components';
import Logo from '../media/logo.png';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: Black;
  display: flex;
  background-color: black;
  justify-content: space-between;
`;

const Left = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  color: white;
  align-items: center;
  padding-left: 100px;
  .logo-img {
    padding-top: 40px;
    padding-left: 20px;
    height: 120px;
    width: 120px;
    cursor: pointer;
  }
`;

const Right = styled.div`
  height: 100%;
  width: 10%;
  font-size: 20px;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
  padding-right: 100px;
  cursor: pointer;

  .about {
    :hover {
      color: #e3e67d;
    }
  }

  .contact {
    :hover {
      color: #e3e67d;
    }
  }
`;

const NavBar = () => {
  return (
    <div>
      <Container>
        <Left>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src={Logo} alt="logo" className="logo-img" />
          </Link>
        </Left>
        <Right>
          <div className="about">About</div>
          <div className="contact">Contact</div>
        </Right>
      </Container>
    </div>
  );
};

export default NavBar;
