import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HashLink as Link } from "react-router-hash-link";
import useScrollListener from "../hooks/useScrollListener";
import { data } from "../constants";
import Logo from "../assets/icons/Logo";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [navClassList, setNavClassList] = React.useState([]);
  const scroll = useScrollListener();
  //resumeLink
  const resumeLink =
    "https://drive.google.com/file/d/1j_JQawrdrg-fs8MhorO0wWDVsG6a3SeZ/view?usp=sharing";

  function openModal() {
    setIsOpen(true);
  }



  const navs = [
    {
      id: 0,
      name: data.about.aboutTitle,
      path: "/#about",
    },
    {
      id: 1,
      name: data.experience.experienceTitle,
      path: "/#experience",
    },
    {
      id: 2,
      name: data.projects.projectsTitle,
      path: "/#projects",
    },
    {
      id: 3,
      name: data.contact.contactTitle,
      path: "/#contact",
    },
  ];

  // update classList of nav on scroll
  React.useEffect(() => {
    const _classList = [];

    if (scroll.y > 100 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div
      className={`${navClassList.join(
        " "
      )} nav sticky sm:fixed top-0 z-40 w-full lg:py-5 lg:px-10 md:p-10 sm:p-7 flex justify-between items-center shadow-lg backdrop-blur flex-none transition-colors duration-500 border-[#C5DFDE]/[0.06] bg-[#C5DFDE]`}
    >
      <div className="md:flex md:w-full sm:flex sm:w-full">
        <div className="cursor-pointer" onClick={refresh}>
          <Logo height="1.5rem" width="1.5rem" />
        </div>
      </div>
      <div className="hidden font-semibold lg:flex md:items-center gap-6 light-grey sm:items-center gap-4 light-grey">
        {navs.map((nav) => {
          return (
            <Link
              key={nav.id}
              smooth
              to={nav.path}
              className="text-lg cursor-pointer text-mine-shaft-950 hover:text-sky-500"
            >
              {nav.name}
            </Link>
          );
        })}
        <button className="font-semibold text-lg bg-slate-900 hover:bg-slate-800 border-2 border-mine-shaft-950 text-mine-shaft-950 rounded-lg">
          <Link to={resumeLink} target="_blank">
            <p>Resume</p>
          </Link>
        </button>
      </div>

      <button
        type="button"
        onClick={openModal}
        className="lg:hidden bg-opacity-20 p-0 text-sm font-medium bg-mine-shaft-950 hover:bg-opacity-30 focus:outline-none"
      >
        <div className="w-6 h-0.5 bg-mine-shaft-950 mb-1.5 rounded-lg"></div>
        <div className="w-6 h-0.5 bg-mine-shaft-950 rounded-lg"></div>
      </button>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          className="fixed top-0 right-0 z-40 max-w-xs rounded-lg shadow-lg p-6 text-xl bg-slate-800 text-mine-shaft-950 highlight-white/5"
          onClose={() => setIsOpen(false)}
        >
          <div
            className="fixed inset-0 backdrop-blur-sm bg-desert-storm-50"
            aria-hidden="true"
          />
          <Transition.Child
            as={Fragment}
            enter="transition duration-200 ease-in-out"
            enterFrom="translate-x-full opacity-100"
            enterTo="transform scale-100 translate-x-0 opacity-100"
            leave="transition duration-200 ease-out"
            leaveFrom="translate-x-full opacity-100"
            leaveTo="transform scale-100 translate-x-full opacity-100"
          >
            <div className="fixed top-0 right-0 w-full max-w-xs shadow-large p-6 bg-[#F8F9F8] text-mine-shaft-950 highlight-mine-shaft-950">
              <Dialog.Panel>
                <div className="flex flex-col w-full h-screen items-center justify-center gap-6">
                  <span
                    className="absolute md:top-11 md:right-9 sm:top-8 sm:right-6 w-8 h-8 flex items-center justify-center cursor-pointer text-mine-shaft-950 hover:text-mine-shaft-950"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      viewBox="0 0 10 10"
                      className="w-4 h-4 overflow-visible"
                      aria-hidden="true"
                      fill="2c2f32"
                    >
                      <path
                        d="M0 0L10 10M10 0L0 10"
                        fill="2c2f32"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex flex-col gap-12">
                    {navs.map((nav) => {
                      return (
                        <Link
                          key={nav.id}
                          smooth
                          to={nav.path}
                          className="text-mine-shaft-950 hover:text-sky-500"
                          onClick={() => setIsOpen(false)}
                        >
                          <h1>{nav.name}</h1>
                        </Link>
                      );
                    })}
                    <button className="font-mono bg-slate-900 hover:bg-slate-800 border-2 border-mine-shaft-950 text-mine-shaft-950 rounded-lg">
                      <Link
                        to={resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resume
                      </Link>
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
