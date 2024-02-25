import React from "react";
import Section from "../section/Section";
import data from "../../Data/Data.json";

export default function Experience() {
  const experiences = [
    {
      id: 0,
      name: "Freelancer",
      href: "https://www.thetfpl.com/",
      designation: "Frontend Developer",
      desc: "Developed proficiency in front-end development for e-commerce websites also crafting tailored solutions for client-specific platforms. Committed to delivering visually appealing websites that enhance user engagement.",
      year: "Dec 2022 — Present",
    },
    {
      id: 1,
      name: "MU Arts Club",
      href: "https://",
      desc: "Managed and updated website content as a WordPress developer. Proficient in WordPress CMS, ensured optimal user experience. Provided technical support .",
      designation: "WordPress Developer",
      year: "Mar 2021 — Jan 2023",
    },
    {
      id: 2,
      name: "MU-ACM",
      href: "https://",
      desc: "Implemented designs, gained experience in translating creative concepts, collaborated with clients and team members to deliver satisfactory design solutions.",
      designation: "Executive Member",
      year: "Oct 2021 — Dec 2022",
    },
  ];
  return (
    <Section
      className="text-mine-shaft-950  experience"
      id="experience"
      title={data.experience.experienceTitle}
    >
      {experiences.map((experience) => {
        return (
          <div
            className="p-6 bg-[#C5DFDE] shadow-lg rounded-lg"
            key={experience.id}
          >
            <div className="lg:max-w-4xl flex lg:flex-row sm:flex-col lg:items-center lg:justify-between sm:gap-2">
              <h1 className="text-lg leading-6 text-slate-200">
                <a
                  href={experience.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-link cursor-pointer text-xl text-slate-100"
                >
                  {experience.name}
                </a>
              </h1>
              <code className="text-sm text-slate-400">{experience.year}</code>
            </div>
            <div className="mt-1">
              <span className="text-md text-slate-300">
                {experience.designation}
              </span>
            </div>
            <div className="mt-4">
              <span className="text-md text-slate-400">{experience.desc}</span>
            </div>
          </div>
        );
      })}
    </Section>
  );
}
