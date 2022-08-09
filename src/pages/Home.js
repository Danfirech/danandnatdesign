import React from "react";
import Styled from "styled-components";
import NavBar from "../components/NavBar";
import Header from "../components/HeaderSeaction";
import OurInspoSection from "../components/OurInspoSection";
import ServicesSection from "../components/ServicesSection";
import LetsGetStartedSection from "../components/LetsGetStartedSection";

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
        <LetsGetStartedSection></LetsGetStartedSection>
      </Container>
    </div>
  );
};

export default Home;
