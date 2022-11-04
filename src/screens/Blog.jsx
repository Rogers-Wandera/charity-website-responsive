import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Blog from "../components/Sections/Blog";
import Footer from "../components/Sections/Footer"

export default function BlogPage() {
  return (
    <>
      <TopNavbar />
      <Header />
      {/* <Services /> */}
      {/* <Projects /> */}
      <Blog />
      {/* <Pricing /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}