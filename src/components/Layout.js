import React from "react";
import {
  Header,
  Home,
  About,
  Experience,
  Projects,
  Contact,
} from "../components";

// import Participation from "./Pages/Participation";

export default function Layout() {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <Header />
      <Home />
      <About />
      {/* <Participation /> */}
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
