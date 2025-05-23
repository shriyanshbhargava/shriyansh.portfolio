import React from "react";
import { data } from "../constants";
import Section from "./Section/Section";
import { Folder, GithubSmall, Link } from "../Assets/icons";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "RateItUp",
      link: "https://github.com/shriyanshbhargava/RateItUp",
      liveDemo: "https://rate-it-up.vercel.app/",
      desc: "Built a movie review app with React and TypeScript supporting full CRUD for movies and reviews. Used Prisma with SQL to manage relational data and auto-calculate average movie ratings. Designed a responsive UI with Tailwind CSS, including search, detail views, and real-time updates.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "tRPC",
        "Zod",
        "Prisma",
        "PostgreSQL",
      ],
    },
    {
      id: 2,
      title: "Osmo Supply Clone & LiveKit Integration",
      link: "https://github.com/shriyanshbhargava/phonio-assignment",
      liveDemo: "https://phonio-assignment-rosy.vercel.app/",
      desc: "Cloned the Hero and Testimonials sections of Osmo Supply with pixel-perfect UI and responsive design. Integrated LiveKit Video Calling with pop-up, PiP mode, and dedicated Sales Agent dashboard. Built Incremental Static Regeneration (ISR) with 5-hour rebuild cycles and manual revalidation API. Deployed on Vercel with real-time console logs for server build times.",
      tech: ["Next.js", "React", "LiveKit", "JavaScript"],
    },
    {
      id: 3,
      title: "Timeline Calendar",
      link: "https://github.com/shriyanshbhargava/guestara-assignment",
      liveDemo: "https://guestara-assignment-green.vercel.app",
      desc: "Engineered a Mobiscroll-inspired calendar with drag-and-drop event management and persistent state storage. Implemented complex UI features including timeline selection, event creation, and cross-date event dragging. Built a responsive layout with dynamic resource allocation and intuitive navigation between months.",
      tech: ["React", "Vite", "CSS", "Local Storage"],
    },
    {
      id: 4,
      title: "Intract Clone",
      link: "https://github.com/shriyanshbhargava/intract-clone",
      liveDemo: "https://intract-clone-gamma.vercel.app/",
      desc: "Developed the frontend of a Web3 website clone. Implemented interactive quest cards with progress tracking and reward systems to enhance user engagement. Built responsive navigation components and modular UI elements for seamless cross-device compatibility.",
      tech: ["React", "Tailwind CSS"],
    },
  ];

  return (
    <Section
      className="text-mine-shaft-950 projects"
      id="projects"
      title={data.projects.projectsTitle}
    >
      <div className="grid lg:grid-cols-1 md:grid-cols-2 gap-10 text-md leading-6 text-slate-400">
        {projects.map((project) => {
          return (
            <div
              className="grid gap-7 p-6 bg-[#C5DFDE] shadow-lg rounded-lg"
              key={project.id}
            >
              <div className="flex items-center justify-between">
                <Folder />
                <div className="flex gap-3">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <GithubSmall />
                  </a>
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noreferrer">
                      <span className="text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors">
                        <Link />
                      </span>
                    </a>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-xl font-extrabold">
                  {project.title}
                </h1>
                <span className="font-normal">{project.desc}</span>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs text-slate-300 font-bold bg-slate-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
