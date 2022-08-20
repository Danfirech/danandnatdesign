import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ContactMain from "../components/ContactPage/ContactMain";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Contact = () => {
  return (
    <>
      <NavBar />
      <ContactMain />
      <Footer />
    </>
  );
};

export default Contact;
