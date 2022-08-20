import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Header from "../components/HomePage/Header";
import OurInspoSection from "../components/HomePage/OurInspoSection";
import ServicesSection from "../components/HomePage/ServicesSection";
import LetsGetStartedSection from "../components/HomePage/LetsGetStartedSection";

const Container = styled.div`
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
