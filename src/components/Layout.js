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

  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
