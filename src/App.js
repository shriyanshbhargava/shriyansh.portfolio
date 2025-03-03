import React from "react";
import { Helmet } from "react-helmet";
import { data } from "./constants";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
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
        } App flex flex-col h-full bg-desert-storm-50 `}
      >
        <Helmet>
          <title>{data.app}</title>
          <meta name="description" content={data.home.intro}></meta>
        </Helmet>
        <Header />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <SpeedInsights />
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
