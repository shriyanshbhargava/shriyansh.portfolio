import React from "react";
import { data } from "../constants";
import Section from "./Section/Section";
import { Folder, Link } from "../assets/icons";
export default function Projects() {
  const projects = [
    {
      id: 0,
      title: "ToDo With MERN",
      link: "https://github.com/shriyanshbhargava/todo-mern",
      desc: "A concise To-Do app built with MERN stack, featuring CRUD operations for task management.      ",
      tech: ["MongoDB / ExpressJS / React / NodeJS / Tailwind CSS"],
    },
    {
      id: 1,
      title: "Yuvraj Crackers",
      link: "https://yuvraj-repo-2.vercel.app/",
      desc: "A Freelance Ecommerce Project App with Product Listing & Admin Panel to Add/Modify Orders/Customers/Products.      ",
      tech: ["JavaScript / React / React Router / Tailwind CSS"],
    },
    {
      id: 2,
      title: "Notion CLone",
      link: "https://notion-clone-lilac.vercel.app/",
      desc: "I was tasked with creating a website that functions as a clone of Notion.",
      tech: ["React / Tailwind CSS"],
    },
    {
      id: 3,
      title: "Ecommerce-Clone",
      link: "https://github.com/shriyanshbhargava/ecommerce-clone",
      desc: "A Ecommerce React App with Features like Sign In/Register, Cart & Filter",
      tech: ["JavaScript / React / React Router / Tailwind CSS"],
    },
    {
      id: 4,
      title: "The Learnest",
      link: "https://github.com/shriyanshbhargava/TheLearnest",
      desc: "The website served as a promotional platform, redirecting Instagram traffic to the website for further engagement.",
      tech: ["JavaScript / HTML / CSS"],
    },
    {
      id: 5,
      title: "Component Library",
      link: "https://github.com/shriyanshbhargava/component-library",
      desc: "Made A Small Component Library for my personal use.      ",
      tech: ["JavaScript / HTML / CSS"],
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
                <a href={project.link} target="_blank" rel="noreferrer">
                  <Link />
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-xl">{project.title}</h1>
                <span>{project.desc}</span>
                <code className="mt-5 text-sm text-slate-300">
                  {" "}
                  {project.tech}
                </code>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
