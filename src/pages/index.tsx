import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect, useState, use } from "react";
import ReactTyped from "react-typed";
import { useInView } from "framer-motion";

import { Icon } from "../components/Icon";

const selectedWork = [
  {
    title: "Gen art minting page",
    company: "Alba",
    link: "https://alba.art",
    image: "/selected-work/project-page.jpg",
  },
  {
    title: "White-label booking flow for flights + stays",
    company: "Duffel",
    link: "https://duffel.com/links",
    image: "/selected-work/links.jpg",
  },
  {
    title: "Logo design",
    company: "Incident.io",
    link: "https://incident.io",
    image: "/selected-work/incident.jpg",
  },
  {
    title: "Merchant insights dashboard",
    company: "Duffel",
    link: "https://duffel.com",
    image: "/selected-work/merchant-insights.jpg",
  },
  {
    title: "Homepage for gen art studio",
    company: "gm.studio",
    link: "https://gmstudio.art",
    image: "/selected-work/gmstudio.jpg",
  },
  {
    title: "Stays search results with map",
    company: "June 20",
    link: "https://duffel.com",
    image: "/selected-work/stays-search.jpg",
  },
  {
    title: "Integration guides + API reference",
    company: "Duffel",
    link: "https://duffel.com/docs",
    image: "/selected-work/api-docs.jpg",
  },
  {
    title: "Alba home page",
    company: "Alba",
    link: "https://alba.art",
    image: "/selected-work/alba-homepage.jpg",
  },
  {
    title: "Logo + brand design",
    company: "Dependabot",
    link: "https://dependabot.com",
    image: "/selected-work/dependabot.jpg",
  },
  {
    title: "Staking UI",
    company: "Mantle",
    link: "https://duffel.com/docs",
    image: "/selected-work/staking-ui.jpg",
  },
  {
    title: "Project launch flow",
    company: "Alba",
    link: "https://alba.art",
    image: "/selected-work/project-launch.jpg",
  },
  {
    title: "White-label confirmation email",
    company: "Duffel",
    link: "https://duffel.com/links",
    image: "/selected-work/confirmation-email.jpg",
  },
];

const projects = [
  {
    company: "Alba",
    role: "Designer/founder",
    date: "2023-present",
    link: "https://alba.art",
    icon: "alba",
  },
  {
    company: "gm.studio",
    role: "Product design",
    date: "2023",
    link: "https://gmstudio.art",
    icon: "gm_studio",
  },
  {
    company: "Incident.io",
    role: "Logo design",
    date: "2021",
    link: "https://incident.io",
    icon: "incident",
  },
  {
    company: "Dependabot",
    role: "Logo, brand & web design",
    date: "2017",
    link: "https://dependabot.com",
    icon: "dependabot",
  },
];

const roles = [
  {
    company: "Duffel",
    role: "Product design lead",
    date: "2020-present",
    link: "https://duffel.com",
    icon: "duffel",
  },
  {
    company: "Memrise",
    role: "Design manager",
    date: "2019-2020",
    link: "https://memrise.com",
    icon: "memrise",
  },
  {
    company: "Fat Llama",
    role: "Product design lead",
    date: "2018-2019",
    link: "https://fatllama.com",
    icon: "fat_llama",
  },
  {
    company: "GoCardless",
    role: "Senior product designer",
    date: "2015-2018",
    link: "https://gocardless.com",
    icon: "gocardless",
  },
];

const events = [
  {
    company: "Design Club",
    role: "Organiser",
    date: "2016-present",
    link: "https://designclub.io",
    icon: "design_club",
  },
  {
    company: "Design+Banter",
    role: "Organiser",
    date: "2013-2015",
    link: "https://twitter.com/designandbanter",
    icon: "design_and_banter",
  },
];

function AppearIn({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(16px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Home() {
  let [theme, setTheme] = useState("");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <main className={`${theme}`}>
      <div className="dark:bg-gray-950 bg-gray-50 transition-colors">
        <div className="flex flex-col py-6 px-6 gap-32">
          {/* Header */}
          <div className="animate-first flex flex-row justify-between">
            <div className="flex flex-row gap-4">
              <Image
                className="rounded-full"
                src="/me.png"
                alt="Picture of the author"
                width={40}
                height={40}
              />
              <div>
                <p className="text-sm dark:text-gray-50 text-gray-900 font-medium">
                  Sam Willis
                </p>
                <p className="text-sm dark:text-gray-500 text-gray-600">
                  Product designer
                </p>
              </div>
            </div>

            <button
              id="theme-toggle"
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 h-10 w-10 rounded-full border border-gray-200 dark:border-gray-800 flex justify-center items-center"
              onClick={() => {
                if (theme === "light") {
                  setTheme("dark");
                  localStorage.theme = "dark";
                } else {
                  setTheme("light");
                  localStorage.theme = "light";
                }
              }}
            >
              <svg
                id="theme-toggle-dark-icon"
                className={`w-5 h-5 ${theme === "dark" ? null : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg
                id="theme-toggle-light-icon"
                className={`w-5 h-5 ${theme === "light" ? null : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Hero */}
          <div className="mx-auto max-w-2xl w-full text-center animate-second">
            <div className="flex flex-col gap-6 items-center">
              <div className="flex flex-col gap-3 max-w-2xl">
                <p className="dark:text-gray-50 text-gray-900 text-xl font-medium">
                  I{" "}
                  <ReactTyped
                    strings={[
                      "design digital products.",
                      "build design teams.",
                      "create brand identities.",
                      "craft user experiences.",
                      "increase conversion.",
                      "improve retention.",
                      "design for scale.",
                      "design for accessibility.",
                      "design for inclusion.",
                      "design for impact.",
                      "design for the future.",
                    ]}
                    typeSpeed={30}
                    loop
                    backDelay={2000}
                    backSpeed={10}
                    // cursorChar=">"
                    showCursor={true}
                  />
                </p>
                <p className="dark:text-gray-500 text-gray-600 text-xl">
                  I&apos;ve spent the past 10+ years helping companies translate
                  vision into reality, and design into competitive advantage.
                  I&apos;m currently building the future of travel at{" "}
                  <Link
                    href="https://duffel.com"
                    target="_blank"
                    className="dark:text-gray-400 text-gray-800 hover:underline"
                  >
                    Duffel
                  </Link>
                  , and on the side I&apos;m building{" "}
                  <Link
                    href="https://alba.art"
                    target="_blank"
                    className="dark:text-gray-400 text-gray-800 hover:underline"
                  >
                    Alba
                  </Link>{" "}
                  — an open platform for generative art on Ethereum.
                </p>
              </div>
              <div className="flex shrink grow basis-auto">
                <span className="border rounded-full dark:border-gray-900 border-gray-200 px-4 py-2 text-sm dark:text-gray-500 text-gray-600 flex flex-row items-center justify-start gap-3">
                  <span className="h-2 w-2 dark:bg-red-700 bg-red-500 rounded-full" />
                  <span>Unavailable for new projects</span>
                </span>
              </div>
            </div>
          </div>

          {/* Selected work */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {selectedWork.map((project) => (
              <AppearIn key={project.title} className="test">
                <div className="aspect-square dark:bg-gray-900 bg-gray-100 rounded-xl relative flex flex-col justify-center items-center">
                  <div className="flex flex-1 pt-6 pb-5 px-6 w-full">
                    <div className="relative w-full h-full rounded-md overflow-clip">
                      <Image
                        src={project.image}
                        alt={`Picture of ${project.title}`}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row w-full justify-between px-6 pb-5">
                    <p className="dark:text-gray-400 text-gray-500 text-sm">
                      {project.title}
                    </p>
                    <Link
                      href={project.link}
                      target="_blank"
                      className="dark:text-gray-500 text-gray-400 flex flex-row items-center gap-1 justify-center text-sm group dark:hover:text-gray-50 hover:text-gray-900"
                    >
                      {project.company}
                    </Link>
                  </div>
                </div>
              </AppearIn>
            ))}
          </div>

          {/* CV */}
          <div className="mx-auto max-w-2xl w-full mb-16">
            <div className="flex flex-col gap-12">
              {/* Projects */}
              <AppearIn>
                <div className="flex flex-col gap-4">
                  <p className="title">Projects</p>
                  {projects.map((item) => (
                    <Link
                      href={item.link}
                      target="_blank"
                      className="flex flex-row gap-4 align-baseline group transition-all ease-in-out duration-300"
                      key={item.company}
                    >
                      <div className="p-1">
                        <Icon
                          name={item.icon}
                          className="cv-item_icon"
                          size={32}
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="cv-item_primary">{item.company}</p>
                        <p className="cv-item_secondary">{item.role}</p>
                      </div>
                      <div className="cv-item_border"></div>
                      <div className="flex items-end">
                        <p className="cv-item_secondary block group-hover:hidden transition-all">
                          {item.date}
                        </p>
                        <div className="hidden group-hover:flex flex-row items-center gap-1 transition-all">
                          <p className="cv-item_secondary">Visit</p>
                          <Icon
                            name="arrow_right"
                            className="cv-item_arrow"
                            size={12}
                          />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </AppearIn>

              {/* Full-time roles */}
              <AppearIn>
                <div className="flex flex-col gap-4">
                  <p className="title">Full-time roles</p>
                  {roles.map((item) => (
                    <Link
                      href={item.link}
                      target="_blank"
                      className="flex flex-row gap-4 align-baseline group"
                      key={item.company}
                    >
                      <div className="p-1">
                        <Icon
                          name={item.icon}
                          className="cv-item_icon"
                          size={32}
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="cv-item_primary">{item.company}</p>
                        <p className="cv-item_secondary">{item.role}</p>
                      </div>
                      <div className="cv-item_border"></div>
                      <div className="flex items-end">
                        <p className="cv-item_secondary block group-hover:hidden transition-all">
                          {item.date}
                        </p>
                        <div className="hidden group-hover:flex flex-row items-center gap-1 transition-all">
                          <p className="cv-item_secondary">Visit</p>
                          <Icon
                            name="arrow_right"
                            className="cv-item_arrow"
                            size={12}
                          />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </AppearIn>

              {/* Events */}
              <AppearIn>
                <div className="flex flex-col gap-4 mb-10">
                  <p className="title mb-2">Events</p>
                  {events.map((item) => (
                    <Link
                      href={item.link}
                      target="_blank"
                      className="flex flex-row gap-4 align-baseline group"
                      key={item.company}
                    >
                      <div className="p-1 transition-colors ease-in-out duration-300">
                        <Icon
                          name={item.icon}
                          className="cv-item_icon"
                          size={32}
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="cv-item_primary">{item.company}</p>
                        <p className="cv-item_secondary">{item.role}</p>
                      </div>
                      <div className="cv-item_border"></div>
                      <div className="flex items-end">
                        <p className="cv-item_secondary block group-hover:hidden transition-all">
                          {item.date}
                        </p>
                        <div className="hidden group-hover:flex flex-row items-center gap-1 transition-all">
                          <p className="cv-item_secondary">Visit</p>
                          <Icon
                            name="arrow_right"
                            className="cv-item_arrow"
                            size={12}
                          />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </AppearIn>
            </div>
          </div>

          {/* Social bar */}
          <div className="fixed bottom-10 left-2/4 -translate-x-2/4 z-20">
            <div className="flex flex-row justify-center items-center dark:bg-gray-950/80 bg-white/50 backdrop-blur-md rounded-full p-1 border dark:border-gray-700/40 border-gray-200/50 animate-third">
              <Link
                href="mailto:hey@samwill.is"
                target="_blank"
                className="h-8 w-8 flex items-center justify-center rounded-full z-10 group"
              >
                <Icon name="email" className="social-icon" size={16} />
              </Link>
              <Link
                href="https://twitter.com/samwill_is"
                target="_blank"
                className="h-8 w-8 flex items-center justify-center rounded-full z-10 group"
              >
                <Icon name="twitter" className="social-icon" size={16} />
              </Link>
              <Link
                href="https://linkedin.com/in/samjwillis"
                target="_blank"
                className="h-8 w-8 flex items-center justify-center rounded-full z-10 group"
              >
                <Icon name="linkedin" className="social-icon" size={16} />
              </Link>
              <Link
                href="https://dribbble.com/sjwillis"
                target="_blank"
                className="h-8 w-8 flex items-center justify-center rounded-full z-10 group"
              >
                <Icon name="dribbble" className="social-icon" size={16} />
              </Link>
              <Link
                href="https://threads.net/@samwill.is"
                target="_blank"
                className="h-8 w-8 flex items-center justify-center rounded-full z-10 group"
              >
                <Icon name="threads" className="social-icon" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
