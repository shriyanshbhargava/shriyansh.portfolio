import React from "react";
import Section from "./Section/Section";
import { data } from "../constants";

export default function Experience() {
  const experiences = [
    {
      id: 0,
      logo: "https://media.licdn.com/dms/image/v2/D560BAQErSyAqiAkZIw/company-logo_200_200/company-logo_200_200/0/1732787318508/guestara_logo?e=2147483647&v=beta&t=eBZu6z8n6jHqfj_zJtZ0ps8-GG4qrLyU8J4uJeE_g9I",
      name: "Planet Cellulloid Pvt Ltd",
      designation: "Frontend Developer",
      desc: "Collaborated with product teams to create intuitive and engaging user interfaces & Developed and maintained responsive, high-performance web applications.",
      year: "May 2024 - October 2024",
    },
    {
      id: 1,
      name: "RenderDash Studio LLP",
      designation: "Frontend Developer",
      desc: "Led the design and development of a high-performance website using React.js, Next.js, and Tailwind CSS. Implemented global reusable components, optimized for SEO, and ensured seamless user experiences.",
      year: "November 2024 - January 2025",
    },
    {
      id: 2,
      name: "Guestara",
      designation: "Frontend Developer",
      desc: "Optimized GuestApp by strategically converting server-side components to client-side for improved performance, while integrating Zustand for efficient state management.",
      year: "February 2025 - Present",
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
              <h1 className="text-lg font-bold leading-6 text-slate-200">
                {experience.name}
                {/* <a
                  href={experience.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-link cursor-pointer text-xl text-slate-100 font-bold"
                >
                 
                </a> */}
              </h1>
              <span className="text-sm text-slate-400 font-bold">
                {experience.year}
              </span>
            </div>
            <div className="mt-1">
              <span className="text-md text-slate-300 font-semibold">
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
