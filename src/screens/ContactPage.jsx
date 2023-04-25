import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Contact from "../components/Sections/Contact";
import ContactPageBox from "../components/Sections/ContactPageBox";
import Footer from "../components/Sections/Footer"

export default function ContactPage() {
  return (
    <>
      <TopNavbar />
      <ContactPageBox />
      <Contact />
      <Footer />
    </>
  );
}
