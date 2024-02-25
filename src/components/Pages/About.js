import React from "react";
import Section from "../section/Section";

import data from "../../Data/Data.json";

export default function About() {
  const skills = [
    "JavaScript (ES6+)",
    "React",
    "NextJS",
    "Bootstrap",
    "Tailwind CSS",
    "Firebase",
    "HTML",
    "CSS/Sass",
    "Git",
    "Github",
    "Postman",
    "Figma",
    // "MongoDB (Beginner)",
    // "NodeJS (Beginner)",
  ];

  return (
    <Section
      id="about"
      className="text-mine-shaft-950 background"
      title={data.about.background}
    >
      <div className="flex flex-col gap-5 text-md leading-6 text-mine-shaft-950">
        <p>
          Hey! 👋 I'm a freelancer passionate about crafting seamless digital
          experiences. Currently, I'm pursuing my MCA at SGSITS Indore,
          combining academic insights with hands-on expertise. My focus is on
          building scalable applications with engaging user interfaces. Let's
          connect and explore the exciting intersection of technology and
          creativity! 🌐💻
        </p>
        <p>{data.about.skills}</p>

        <ul className="skills-list grid grid-rows-5 grid-flow-col">
          {skills.map((skill, id) => {
            return (
              <li
                key={id}
                className="font-mono before:content-['▹'] relative before:mr-2 text-sm text-mine-shaft-950 leading-loose"
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
