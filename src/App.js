import React from "react";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
// Screens
import Landing from "./screens/Landing.jsx";
import About from "./screens/About.jsx";
import ContactPage from "./screens/ContactPage.jsx";
import Gallery from "./screens/Gallery.jsx";
import BlogPage from "./screens/Blog.jsx";
import Projects from "./screens/Projects.jsx";
import Donate from "./screens/Donate.jsx";

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </>
  );
}
