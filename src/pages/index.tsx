import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect, useState, use } from "react";
import ReactTyped from "react-typed";
import { useInView } from "framer-motion";

import { Icon } from "../components/Icon";

// // Whenever the user explicitly chooses light mode
// localStorage.theme = "light";

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = "dark";

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem("theme");

const projects = [
  {
    title: "Gen art minting page",
    company: "Alba",
    link: "https://alba.art",
    image: "/selected-work/project-page.png",
  },
  {
    title: "White-label booking flow for flights + stays",
    company: "Duffel",
    link: "https://duffel.com/links",
    image: "/selected-work/links.png",
  },
  {
    title: "Logo design",
    company: "Incident.io",
    link: "https://incident.io",
    image: "/selected-work/incident-dark-mode.png",
  },
  {
    title: "Merchant insights dashboard",
    company: "Duffel",
    link: "https://duffel.com",
    image: "/selected-work/merchant-insights.png",
  },
  {
    title: "Homepage for gen art studio",
    company: "gm.studio",
    link: "https://gmstudio.art",
    image: "/selected-work/gm-studio.png",
  },
  {
    title: "Stays search results with map",
    company: "June 20",
    link: "https://duffel.com",
    image: "/selected-work/stays-search.png",
  },
  {
    title: "Integration guides + API reference",
    company: "Duffel",
    link: "https://duffel.com/docs",
    image: "/selected-work/docs.png",
  },
  {
    title: "Logo + brand design",
    company: "Dependabot",
    link: "https://dependabot.com",
    image: "/selected-work/dependabot-dark-mode.png",
  },
];

function SectionOne({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(16px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
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
        {/* Social bar */}
        <div className="fixed bottom-5 left-2/4 -translate-x-2/4 z-20">
          <SectionOne>
            <div className="flex flex-row justify-center items-center dark:bg-gray-800/50 bg-gray-200/50 backdrop-blur-md rounded-full p-1 border border-gray-800">
              <Link
                href="mailto:hey@samwill.is"
                target="_blank"
                className="h-8 w-8 flex items-center justify-center rounded-full z-10 group"
              >
                <Icon
                  name="email"
                  className="dark:fill-gray-500 fill-gray-600 dark:group-hover:fill-white group-hover:fill-gray-900"
                  size={16}
                />
              </Link>
              <Link
                href="https://twitter.com/samwill_is"
                target="_blank"
                className="h-8 w-8 flex items-center justify-center rounded-full z-10 group"
              >
                <Icon
                  name="twitter"
                  className="dark:fill-gray-500 fill-gray-600 dark:group-hover:fill-white group-hover:fill-gray-900"
                  size={16}
                />
              </Link>
              <Link
                href="https://linkedin.com/in/samjwillis"
                target="_blank"
                className="h-8 w-8 flex items-center justify-center rounded-full z-10 group"
              >
                <Icon
                  name="linkedin"
                  className="dark:fill-gray-500 fill-gray-600 dark:group-hover:fill-white group-hover:fill-gray-900"
                  size={16}
                />
              </Link>
              <Link
                href="https://dribbble.com/sjwillis"
                target="_blank"
                className="h-8 w-8 flex items-center justify-center rounded-full z-10 group"
              >
                <Icon
                  name="dribbble"
                  className="dark:fill-gray-500 fill-gray-600 dark:group-hover:fill-white group-hover:fill-gray-900"
                  size={16}
                />
              </Link>
              <Link
                href="https://threads.net/@samwill.is"
                target="_blank"
                className="h-8 w-8 flex items-center justify-center rounded-full z-10 group"
              >
                <Icon
                  name="threads"
                  className="dark:fill-gray-500 fill-gray-600 dark:group-hover:fill-white group-hover:fill-gray-900"
                  size={16}
                />
              </Link>
            </div>
          </SectionOne>
        </div>

        <div className="flex flex-col py-6 px-6 gap-32">
          {/* Header */}
          <div className="flex flex-row justify-between">
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
          <div className="mx-auto max-w-2xl w-full text-center">
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
                  I&apos;m currently working at{" "}
                  <Link
                    href="https://duffel.com"
                    target="_blank"
                    className="dark:text-gray-400 text-gray-800 hover:underline"
                  >
                    Duffel
                  </Link>
                  &nbsp;— where we&apos;re building the future of travel — and
                  on the side I'm building{" "}
                  <Link
                    href="https://alba.art"
                    target="_blank"
                    className="dark:text-gray-400 text-gray-800 hover:underline"
                  >
                    Alba
                  </Link>
                  — an open platform for gen art on Ethereum.
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

          <div className="grid responsive-grid gap-6">
            {projects.map((project) => (
              <SectionOne key={project.title}>
                <div className="aspect-square dark:bg-gray-900 bg-gray-100 rounded-lg relative flex justify-center items-center">
                  <Image
                    src={project.image}
                    alt="Picture of the author"
                    width={720}
                    height={540}
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-between px-6 pb-5">
                    <p className="dark:text-gray-400 text-gray-500 text-sm">
                      {project.title}
                    </p>
                    <Link
                      href={project.link}
                      target="_blank"
                      className="dark:text-gray-500 text-gray-400 flex flex-row items-center gap-1 justify-center text-sm group dark:hover:text-gray-50 hover:text-gray-900"
                    >
                      {project.company}
                      <Icon
                        name="arrow_right"
                        className="dark:fill-gray-500 fill-gray-400 dark:group-hover:fill-gray-50 group-hover:fill-gray-900"
                        size={12}
                      />
                    </Link>
                  </div>
                </div>
              </SectionOne>
            ))}
          </div>

          {/* CV */}
          <div className="mx-auto max-w-2xl w-full">
            <div className="flex flex-col gap-12">
              {/* Projects */}
              <SectionOne>
                <div className="flex flex-col gap-4">
                  <p className="title">Projects</p>
                  <Link
                    href="https://alba.art"
                    target="_blank"
                    className="flex flex-row gap-4 align-baseline group transition-all ease-in-out duration-300"
                  >
                    <div className="p-1">
                      <Icon
                        name="alba"
                        className="dark:fill-gray-50 fill-gray-900 dark:group-hover:fill-white group-hover:fill-gray-900"
                        size={32}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm dark:text-gray-50">Alba</p>
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        Designer/founder
                      </p>
                    </div>
                    <div className="border-b border-solid dark:border-gray-900 border-gray-200 flex grow mb-1 dark:group-hover:border-gray-300 group-hover:border-gray-500 transition-all ease-in-out duration-300"></div>
                    <div className="flex items-end">
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        2023-present
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="https://gmstudio.art"
                    target="_blank"
                    className="flex flex-row gap-4 align-baseline group transition-all ease-in-out duration-300"
                  >
                    <div className="p-1">
                      <Icon
                        name="gm_studio"
                        className="dark:fill-gray-50 fill-gray-900 dark:group-hover:fill-white group-hover:fill-gray-900"
                        size={32}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm dark:text-gray-50">gm.studio</p>
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        Product design
                      </p>
                    </div>
                    <div className="border-b border-solid dark:border-gray-900 border-gray-200 flex grow mb-1 dark:group-hover:border-gray-300 group-hover:border-gray-500 transition-all ease-in-out duration-300"></div>
                    <div className="flex items-end">
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        2023
                      </p>
                    </div>
                  </Link>
                </div>
              </SectionOne>

              {/* Full-time roles */}
              <SectionOne>
                <div className="flex flex-col gap-4">
                  <p className="title">Full-time roles</p>
                  <Link
                    href="https://duffel.com"
                    target="_blank"
                    className="flex flex-row gap-4 align-baseline group transition-all ease-in-out duration-300"
                  >
                    <div className="p-1">
                      <Icon
                        name="duffel"
                        className="dark:fill-gray-50 fill-gray-900 dark:group-hover:fill-white group-hover:fill-gray-900"
                        size={32}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm dark:text-gray-50">Duffel</p>
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        Product design lead
                      </p>
                    </div>
                    <div className="border-b border-solid dark:border-gray-900 border-gray-200 flex grow mb-1 dark:group-hover:border-gray-300 group-hover:border-gray-500 transition-all ease-in-out duration-300"></div>
                    <div className="flex items-end">
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        2020-present
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="https://memrise.com"
                    target="_blank"
                    className="flex flex-row gap-4 align-baseline group transition-all ease-in-out duration-300"
                  >
                    <div className="p-1">
                      <Icon
                        name="memrise"
                        className="dark:fill-gray-50 fill-gray-900 dark:group-hover:fill-white group-hover:fill-gray-900"
                        size={32}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm dark:text-gray-50">Memrise</p>
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        Design manager
                      </p>
                    </div>
                    <div className="border-b border-solid dark:border-gray-900 border-gray-200 flex grow mb-1 dark:group-hover:border-gray-300 group-hover:border-gray-500 transition-all ease-in-out duration-300"></div>
                    <div className="flex items-end">
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        2019-2020
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="https://fatllama.com"
                    target="_blank"
                    className="flex flex-row gap-4 align-baseline group transition-all ease-in-out duration-300"
                  >
                    <div className="p-1">
                      <Icon
                        name="fat_llama"
                        className="dark:fill-gray-50 fill-gray-900 dark:group-hover:fill-white group-hover:fill-gray-900"
                        size={32}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm dark:text-gray-50">Fat Llama</p>
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        Product design lead
                      </p>
                    </div>
                    <div className="border-b border-solid dark:border-gray-900 border-gray-200 flex grow mb-1 dark:group-hover:border-gray-300 group-hover:border-gray-500 transition-all ease-in-out duration-300"></div>
                    <div className="flex items-end">
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        2018-2019
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="https://gocardless.com"
                    target="_blank"
                    className="flex flex-row gap-4 align-baseline group transition-all ease-in-out duration-300"
                  >
                    <div className="p-1">
                      <Icon
                        name="gocardless"
                        className="dark:fill-gray-50 fill-gray-900 dark:group-hover:fill-white group-hover:fill-gray-900"
                        size={32}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm dark:text-gray-50">GoCardless</p>
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        Senior product designer
                      </p>
                    </div>
                    <div className="border-b border-solid dark:border-gray-900 border-gray-200 flex grow mb-1 dark:group-hover:border-gray-300 group-hover:border-gray-500 transition-all ease-in-out duration-300"></div>
                    <div className="flex items-end">
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        2015-2018
                      </p>
                    </div>
                  </Link>
                </div>
              </SectionOne>

              {/* Branding */}
              <SectionOne>
                <div className="flex flex-col gap-4">
                  <p className="title">Branding</p>
                  <Link
                    href="https://incident.io"
                    target="_blank"
                    className="flex flex-row gap-4 align-baseline group transition-all ease-in-out duration-300"
                  >
                    <div className="p-1">
                      <Icon
                        name="incident"
                        className="dark:fill-gray-50 fill-gray-900 dark:group-hover:fill-white group-hover:fill-gray-900"
                        size={32}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm dark:text-gray-50">Incident.io</p>
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        Logo design
                      </p>
                    </div>
                    <div className="border-b border-solid dark:border-gray-900 border-gray-200 flex grow mb-1 dark:group-hover:border-gray-300 group-hover:border-gray-500 transition-all ease-in-out duration-300"></div>
                    <div className="flex items-end">
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        2021
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="https://dependabot.com"
                    target="_blank"
                    className="flex flex-row gap-4 align-baseline group transition-all ease-in-out duration-300"
                  >
                    <div className="p-1">
                      <Icon
                        name="dependabot"
                        className="dark:fill-gray-50 fill-gray-900 dark:group-hover:fill-white group-hover:fill-gray-900"
                        size={32}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm dark:text-gray-50">Dependabot</p>
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        Logo, brand & web design
                      </p>
                    </div>
                    <div className="border-b border-solid dark:border-gray-900 border-gray-200 flex grow mb-1 dark:group-hover:border-gray-300 group-hover:border-gray-500 transition-all ease-in-out duration-300"></div>
                    <div className="flex items-end">
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        2018
                      </p>
                    </div>
                  </Link>
                </div>
              </SectionOne>

              {/* Events */}
              <SectionOne>
                <div className="flex flex-col gap-4 mb-10">
                  <p className="title mb-2">Events</p>
                  <Link
                    href="https://designclub.io"
                    target="_blank"
                    className="flex flex-row gap-4 align-baseline group transition-all ease-in-out duration-300"
                  >
                    <div className="p-1">
                      <Icon
                        name="design_club"
                        className="dark:fill-gray-50 fill-gray-900 dark:group-hover:fill-white group-hover:fill-gray-900"
                        size={32}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm dark:text-gray-50">Design Club</p>
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        Co-organiser
                      </p>
                    </div>
                    <div className="border-b border-solid dark:border-gray-900 border-gray-200 flex grow mb-1 dark:group-hover:border-gray-300 group-hover:border-gray-500 transition-all ease-in-out duration-300"></div>
                    <div className="flex items-end">
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        2016-present
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="https://twitter.com/designandbanter"
                    target="_blank"
                    className="flex flex-row gap-4 align-baseline group transition-all ease-in-out duration-300"
                  >
                    <div className="p-1">
                      <Icon
                        name="design_and_banter"
                        className="dark:fill-gray-50 fill-gray-900 dark:group-hover:fill-white group-hover:fill-gray-900"
                        size={32}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm dark:text-gray-50">Design+Banter</p>
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        Co-organiser
                      </p>
                    </div>
                    <div className="border-b border-solid dark:border-gray-900 border-gray-200 flex grow mb-1 dark:group-hover:border-gray-300 group-hover:border-gray-500 transition-all ease-in-out duration-300"></div>
                    <div className="flex items-end">
                      <p className="text-sm dark:text-gray-500 text-gray-600 dark:group-hover:text-gray-50 transition-all ease-in-out duration-300">
                        2013-2015
                      </p>
                    </div>
                  </Link>
                </div>
              </SectionOne>
            </div>
          </div>

          {/* Footer */}
          <SectionOne>
            <div className="flex flex-col lg:flex-row justify-center items center text-center lg:text-left gap-4 pb-16 lg:pb-2 lg:pt-6 lg:justify-between">
              <p className="text-sm dark:text-gray-400 text-gray-500">
                © 2023, Sam Willis Design.
              </p>
              <p className="text-sm dark:text-gray-400 text-gray-500">
                Built with ❤ (also Tailwind, Vercel & NextJS) by me.
              </p>
            </div>
          </SectionOne>
        </div>
      </div>
    </main>
  );
}
