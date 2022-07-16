import React from "react";
import styled, { css } from "styled-components";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Feature from "./Components/Feature";
import Service from "./Components/Service";
import Price from "./Components/Price";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(73% 0, 100% 0, 100% 100%, 46% 100%);
  background-color: crimson;
`;
const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(46% 0, 0 0, 0 100%, 19% 100%);
  background-color: #d4a6d3;
`;
const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(19% 0, 100% 0, 100% 100%, 71% 100%);

  background-color: #5c9bde;
`;
const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(71% 0, 100% 0, 100% 100%, 25% 100%);
  background-color: crimson;
`;

function App() {
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        {!smallScreen && <ServiceShape />}
      </Container>
      <Container>
        <Price />
        {!smallScreen && <PriceShape />}
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
