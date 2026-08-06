import React from "react";
import { MainLayout } from "./layouts/MainLayout";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { TechStack } from "./components/TechStack/TechStack";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <MainLayout>
      <Navbar />

      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </MainLayout>
  );
}

export default App;
