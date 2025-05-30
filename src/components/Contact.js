import React from "react";
import Section from "./Section/Section";
import { data } from "../constants";
import { Calendar, Github, Linkedin, Mail, Twitter } from "../Assets/icons/index";

export default function Contact() {
  const links = [
    {
      id: 0,
      icon: <Github />,
      href: "https://github.com/shriyanshbhargava",
    },
    {
      id: 1,
      icon: <Linkedin />,
      href: "https://www.linkedin.com/in/shriyansh-bhargava-7483b7179/",
    },
    {
      id: 2,
      icon: <Twitter />,
      href: "https://twitter.com/Shriyanshhh_",
    },
    {
      id: 3,
      icon: <Mail />,
      href: "mailto:shriyansh.feb@gmail.com",
    },
    {
      id: 4,
      label: "calendar",
      href: "https://calendly.com/shriyanshbhargava/1-1-meeting",
      icon: <Calendar />,
    },
  ];
  return (
    <Section
      className="text-mine-shaft-950 contact"
      id="contact"
      contactSection
      title={data.contact.contactTitle}
    >
      <div className="flex lg:flex-row md:flex-col sm:flex-col lg:justify-between lg:items-center gap-5 text-md leading-6 text-mine-shaft-950">
        <div>
          <h1 className="text-xl leading-6 text-mine-shaft-950">
            {data.contact.content}
          </h1>
          <p className="mt-2 text-mine-shaft-950">{data.app}</p>
        </div>

        <div className="flex sm:pt-7 md:pt-1 lg:gap-5 md:gap-5 justify-between items-center">
          {links.map((link) => {
            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="icon-hover"
              >
                {link.icon}
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
