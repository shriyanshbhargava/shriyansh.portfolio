import React from "react";
import Section from "./Section/Section";
import { data } from "../constants";

export default function Experience() {
  const experiences = [
    {
      id: 0,
      name: "MU-ACM",
      desc: "Implemented designs, gained experience in translating creative concepts, collaborated with clients and team members to deliver satisfactory design solutions.",
      designation: "Executive Member",
      year: "Oct 2021 - Dec 2022",
    },
    {
      id: 1,
      name: "MU Arts Club",
      desc: "Managed and updated website content as a WordPress developer. Proficient in WordPress CMS, ensured optimal user experience. Provided technical support .",
      designation: "WordPress Developer",
      year: "Mar 2021 - Jan 2023",
    },

    {
      id: 2,
      name: "Freelancer",
      designation: "Frontend Developer",
      desc: "Developed proficiency in front-end development for e-commerce websites also crafting tailored solutions for client-specific platforms. Committed to delivering visually appealing websites that enhance user engagement.",
      year: "Dec 2022 - Present",
    },
    {
      id: 3,
      name: "Planet Cellulloid Pvt Ltd",
      designation: "Frontend Developer",
      desc: "Collaborated with product teams to create intuitive and engaging user interfaces & Developed and maintained responsive, high-performance web applications.",
      year: "June 2024 - Present",
    },
  ];

  const reversedArray = experiences.slice().reverse();

  return (
    <Section
      className="text-mine-shaft-950  experience"
      id="experience"
      title={data.experience.experienceTitle}
    >
      {reversedArray.map((experience) => {
        return (
          <div
            className="p-6 bg-[#C5DFDE] shadow-lg rounded-lg"
            key={experience.id}
          >
            <div className="lg:max-w-4xl flex lg:flex-row sm:flex-col lg:items-center lg:justify-between sm:gap-2">
              <h1 className="text-lg leading-6 text-slate-200">
                {experience.name}
                {/* <a
                  href={experience.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-link cursor-pointer text-xl text-slate-100 font-bold"
                >
                 
                </a> */}
              </h1>
              <code className="text-sm text-slate-400 font-bold">
                {experience.year}
              </code>
            </div>
            <div className="mt-1">
              <span className="text-md text-slate-300 font-bold">
                {experience.designation}
              </span>
            </div>
            <div className="mt-4">
              <span className="text-md text-slate-400 font-normal">
                {experience.desc}
              </span>
            </div>
          </div>
        );
      })}
    </Section>
  );
}
