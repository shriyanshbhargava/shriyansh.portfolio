import React from "react";
import { Helmet } from "react-helmet";
import { data } from "./constants";
import { SpeedInsights } from "@vercel/speed-insights/react";
import useScrollAnimation from "./hooks/useScrollAnimation";

import {
  Header,
  Home,
  About,
  Experience,
  Projects,
  Contact,
} from "./components";
import { BrowserRouter } from "react-router-dom";

function App() {
  useScrollAnimation();

  return (
    <BrowserRouter>
      {/* {load ? <Loader load={load} /> : null} */}
      <div
        className={`"no-scroll" : "scroll"
        } App flex flex-col h-full bg-desert-storm-50 gap-5`}
      >
        <Helmet>
          <title>{data.app}</title>
          <meta name="description" content={data.home.intro}></meta>
        </Helmet>
        <Header />
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <SpeedInsights />
      </div>
    </BrowserRouter>
  );
}

export default App;
