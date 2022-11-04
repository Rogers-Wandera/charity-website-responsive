import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import styled from "styled-components";
// import Projects from "../components/Sections/Projects";
// import Blog from "../components/Sections/Blog";
// import Pricing from "../components/Sections/Pricing";
// import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import TestimonialSlider from "../components/Elements/TestimonialSlider";


export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <TestimonialSliderHome />
      {/* <Projects /> */}
      {/* <Blog /> */}
      {/* <Pricing /> */}
      {/* <Contact /> */}
      
      <Footer />
    </>
  );
}

const TestimonialSliderHome = () => {
  return (
    <Wrapper>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What People Say?</h1>
            <p className="font13">
              What people say about Love Happiness Foundation Uganda
              <br />
              These are people reviews that they give to our Foundation
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

