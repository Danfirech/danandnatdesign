import React from "react";
import Styled from "styled-components";
import NavBar from "../components/NavBar";
import Header from "../components/HeaderSeaction";
import OurInspoSection from "../components/OurInspoSection";
import ServicesSection from "../components/ServicesSection";

const Container = Styled.div`
height: 100%;
width: 100%;
`;

const Home = () => {
  return (
    <div>
      <Container>
        <NavBar />
        <Header />
        <OurInspoSection />
        <ServicesSection></ServicesSection>
      </Container>
    </div>
  );
};

export default Home;
