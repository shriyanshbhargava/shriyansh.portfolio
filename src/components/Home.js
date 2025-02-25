import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

import {
  BOOTSTRAP,
  Github,
  HTML,
  JS,
  NextJS,
  ReactIcon,
  SASS,
  TAILWIND,
  Twitter,
  Linkedin,
  CSS,
  Mail,
  Calendar,
} from "../Assets/icons";

export default function Home() {
  const skillsLogo = [
    { id: 0, icon: <HTML /> },
    { id: 1, icon: <CSS /> },
    { id: 2, icon: <BOOTSTRAP /> },
    { id: 3, icon: <JS /> },
    { id: 4, icon: <ReactIcon /> },
    { id: 5, icon: <NextJS /> },
    { id: 6, icon: <TAILWIND /> },
    { id: 7, icon: <SASS /> },
  ];

  const links = [
    {
      id: 0,
      label: "linkedin",
      target: "_blank",
      rel: "noreferrer",
      href: "https://www.linkedin.com/in/shriyansh-bhargava-7483b7179/",
      icon: <Linkedin />,
    },
    {
      id: 1,
      label: "github",
      target: "_blank",
      rel: "noreferrer",
      href: "https://github.com/shriyanshbhargava",
      icon: <Github />,
    },
    {
      id: 2,
      label: "twitter",
      target: "_blank",
      rel: "noreferrer",
      href: "https://twitter.com/Shriyanshhh_",
      icon: <Twitter />,
    },
    {
      id: 2,
      label: "mail",
      target: "_blank",
      rel: "noreferrer",
      href: "mailto:shriyansh.feb@gmail.com",
      icon: <Mail />,
    },
    {
      id: 2,
      label: "calendar",
      target: "_blank",
      rel: "noreferrer",
      href: "https://calendly.com/shriyanshbhargava/1-1-meeting",
      icon: <Calendar />,
    },
  ];

  return (
    <div
      className="flex flex-col justify-center py-10  sm:pt-32 sm:pl-2 md:flex md:items-center p-8"
      id="#"
    >
      <div
        className="flex justify-center py-2 gap-16  sm:pt-8 sm:flex-col-reverse md-flex md:flex-row"
        id="#"
      >
        <div className="flex flex-col justify-center  py-10 gap-6  sm:pt-8 p-8">
          <h6 className="md:max-w-lg sm:w-full font-bold text-mine-shaft-950 lg:text-3xl md:text-3xl sm:text-2xl ">
            I'm
          </h6>
          <h1 className="md:max-w-lg sm:w-full font-bold text-mine-shaft-950 lg:text-6xl md:text-6xl sm:text-4xl ">
            Shriyansh Bhargava.
          </h1>

          <p className="text-lg md:max-w-lg sm:w-full mx-auto text-mine-shaft-950 sm:text-base">
            A Frontend Developer based in Indore, India.{" "}
            <FontAwesomeIcon icon={faLocationDot} />
          </p>
          <span className="flex gap-3">
            {links.map((link) => (
              <a
                key={link.id}
                aria-label={link.label}
                rel={link.rel}
                target={link.target}
                href={link.href}
                className="icon-hover"
              >
                {link.icon}
              </a>
            ))}
          </span>
        </div>
        <div className="flex justify-center pt-24  py-10 gap-6 flex-col sm:pt-0 p-8">
          <div className="hero-img"></div>
        </div>
      </div>
      <div className="flex justify-left items-center gap-4 text-mine-shaft-950 text-xl pt-16 sm:flex-col md:flex md:flex-row">
        <h1 className="font-bold">Tech Stack : </h1>{" "}
        <div className="logos flex md:flex md:flex-row sm:flex-col gap-4">
          <div className="md:flex sm:flex">
            {skillsLogo.slice(0, 4).map((skill) => (
              <ul className="flex" key={skill.id}>
                <li className="p-1 icon-hover">{skill.icon}</li>
              </ul>
            ))}
          </div>
          <div className="md:flex sm:flex">
            {skillsLogo.slice(4).map((skill) => (
              <ul className="flex" key={skill.id}>
                <li className="p-1 icon-hover">{skill.icon}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
