import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import React, { useRef, useEffect, useState, use } from "react";
import ReactTyped from "react-typed";
import { useInView } from "framer-motion";

import { Icon } from "../components/Icon";

const selectedWork = [
  {
    title: "Alba home page",
    company: "Alba",
    link: "https://alba.art",
    image: "/selected-work/alba-homepage.jpg",
  },
  {
    title: "Insights dashboard",
    company: "Duffel",
    link: "https://duffel.com",
    image: "/selected-work/merchant-insights.jpg",
  },
  {
    title: "White-label search & book flow",
    company: "Duffel",
    link: "https://duffel.com/links",
    image: "/selected-work/duffel-links.jpg",
  },
  {
    title: "Logo design",
    company: "Incident.io",
    link: "https://incident.io",
    image: "/selected-work/incident.jpg",
  },
  {
    title: "Project page",
    company: "Alba",
    link: "https://alba.art",
    image: "/selected-work/project-page.jpg",
  },
  {
    title: "Home page",
    company: "gm.studio",
    link: "https://gmstudio.art",
    image: "/selected-work/gmstudio.jpg",
  },
  {
    title: "Integration guides + API reference",
    company: "Duffel",
    link: "https://duffel.com/docs",
    image: "/selected-work/api-docs.jpg",
  },
  {
    title: "Logo + brand design",
    company: "Dependabot",
    link: "https://dependabot.com",
    image: "/selected-work/dependabot.jpg",
  },
  {
    title: "Stays search with map",
    company: "Duffel",
    link: "https://duffel.com/stays",
    image: "/selected-work/stays-search.jpg",
  },
  {
    title: "White-label confirmation email",
    company: "Duffel",
    link: "https://duffel.com",
    image: "/selected-work/confirmation-email.jpg",
  },
  {
    title: "Project launch flow",
    company: "Alba",
    link: "https://alba.art",
    image: "/selected-work/project-launch.jpg",
  },
  {
    title: "Coming soon…",
    company: "Mantle",
    link: "https://mantle.xyz",
    image: "/selected-work/staking-ui-preview.jpg",
  },
];

const cv = [
  {
    company: "Incident.io",
    role: "Product designer",
    date: "2023-present",
    link: "https://incident.io",
    icon: <Icon name="incident" className="cv-item_icon" size={20} />,
  },
  {
    company: "Alba",
    role: "Designer/founder",
    date: "2023-present",
    link: "https://alba.art",
    icon: <Icon name="alba" className="cv-item_icon" size={20} />,
  },
  {
    company: "Duffel",
    role: "Product design lead",
    date: "2020-2023",
    link: "https://duffel.com",
    icon: <Icon name="duffel" className="cv-item_icon" size={20} />,
  },
  {
    company: "Design Club",
    role: "Organiser",
    date: "2016-2023",
    link: "https://designclub.io",
    icon: <Icon name="design_club" className="cv-item_icon" size={20} />,
  },
  {
    company: "Memrise",
    role: "Design manager",
    date: "2019-2020",
    link: "https://memrise.com",
    icon: <Icon name="memrise" className="cv-item_icon" size={20} />,
  },
  {
    company: "Fat Llama",
    role: "Product design lead",
    date: "2018-2019",
    link: "https://fatllama.com",
    icon: <Icon name="fat_llama" className="cv-item_icon" size={20} />,
  },
  {
    company: "GoCardless",
    role: "Senior product designer",
    date: "2015-2018",
    link: "https://gocardless.com",
    icon: <Icon name="gocardless" className="cv-item_icon" size={20} />,
  },
  {
    company: "Design+Banter",
    role: "Organiser",
    date: "2013-2015",
    link: "https://twitter.com/designandbanter",
    icon: <Icon name="design_and_banter" className="cv-item_icon" size={20} />,
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
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
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
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Sam Willis is a product designer in London.</title>
        <meta
          name="description"
          content="I've spent the past 10+ years helping companies translate vision into reality, and design into competitive advantage. I'm currently building the future of travel at Duffel, and on the side I'm building Alba — an open platform for generative art on Ethereum."
        />
        <meta property="og:url" content="https://samwill.is" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sam Willis is a product designer in London."
        />
        <meta
          property="og:description"
          content="I've spent the past 10+ years helping companies translate vision into reality, and design into competitive advantage. I'm currently building the future of travel at Duffel, and on the side I'm building Alba — an open platform for generative art on Ethereum."
        />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="samwill.is" />
        <meta property="twitter:url" content="https://samwill.is" />
        <meta
          name="twitter:title"
          content="Sam Willis is a product designer in London."
        />
        <meta
          name="twitter:description"
          content="I've spent the past 10+ years helping companies translate vision into reality, and design into competitive advantage. I'm currently building the future of travel at Duffel, and on the side I'm building Alba — an open platform for generative art on Ethereum."
        />
        <meta name="twitter:image" content="" />
      </Head>

      <div className="dark:bg-gray-950 bg-gray-50 transition-colors">
        <div className="flex flex-col py-6 px-6 gap-32 max-w-[1920px] mx-auto">
          {/* Header */}
          <div className="animate-first flex flex-row justify-between">
            <div className="flex flex-row gap-4">
              <Image
                className="rounded-full dark:border-gray-800 border-gray-200 border p-1"
                src="/me.png"
                alt="Picture of the author"
                width={40}
                height={40}
              />
              <div>
                <p className="text-sm dark:text-gray-50 text-gray-900">
                  Sam Willis
                </p>
                <p className="text-sm dark:text-gray-500 text-gray-500">
                  Product designer
                </p>
              </div>
            </div>

            <button
              id="theme-toggle"
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 h-10 w-10 rounded-full border border-gray-200 dark:border-gray-800 flex justify-center items-center"
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
          <div className="mx-auto max-w-2xl w-full text-left sm:text-center animate-second">
            <div className="flex flex-col gap-6 items-start sm:items-center">
              <div className="flex flex-col gap-4 max-w-2xl">
                <p className="text-xl font-bold overflow-auto bg-gradient-to-r from-gray-950 to-gray-400 dark:from-gray-400 dark:to-gray-50 bg-clip-text text-transparent
                ">
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
                <p className="dark:text-gray-500 text-gray-500 text-xl">
                  I&apos;ve spent the past 10+ years helping companies translate
                  vision into reality, and design into competitive advantage.
                  I&apos;m currently helping{" "}
                  <Link
                    href="https://incident.io"
                    target="_blank"
                    className="dark:text-gray-300 text-gray-800 hover:underline"
                  >
                    incident.io
                  </Link>{" "}
                  bring calm to chaos, and on the side I&apos;m building{" "}
                  <Link
                    href="https://alba.art"
                    target="_blank"
                    className="dark:text-gray-300 text-gray-800 hover:underline"
                  >
                    Alba
                  </Link>{" "}
                  — an open platform for generative art on Ethereum.
                </p>
              </div>
              <div className="flex shrink grow basis-auto">
                <span className="border rounded-full dark:border-gray-900 border-gray-200 px-4 py-2 text-base dark:text-gray-600 text-gray-400 flex flex-row items-center justify-start gap-3">
                  <span className="h-2 w-2 dark:bg-red-700 bg-red-500 rounded-full" />
                  <span>Unavailable for new projects</span>
                </span>
              </div>
            </div>
          </div>

          {/* Selected work */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {selectedWork.map((project) => (
              <AppearIn key={project.title}>
                <div className="aspect-square dark:bg-gray-900 bg-gray-100 dark:hover:bg-gray-800 hover:bg-gray-200 transition-colors duration-500 rounded-xl relative flex flex-col justify-center items-center">
                  <div className="flex flex-1 pt-6 pb-5 px-6 w-full">
                    <div className="relative w-full h-full rounded-md overflow-clip">
                      <Image
                        src={project.image}
                        alt={`Picture of ${project.title}`}
                        fill={true}
                        style={{ objectFit: "cover" }}
                        className="hover:scale-105 transition-all duration-1000"
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
          <div className="pb-[102px]">
            <AppearIn>
              <div className="flex flex-row gap-6 pb-6 border-b dark:border-gray-800 border-gray-200/50">
                <p className="text-sm text-gray-500 flex-1">
                  Company
                </p>
                <p className="text-sm text-gray-500 flex-1 hidden sm:flex">
                  Role
                </p>
                <p className="text-sm text-gray-500 flex-1">
                  Date
                </p>
              </div>
            </AppearIn>
            {cv.map((item) => (
              <AppearIn key={item.company}>
                <Link
                  href={item.link}
                  target="_blank"
                  className="flex flex-row gap-6 align-baseline group transition-all ease-in-out duration-300 py-6 border-b dark:border-gray-800 border-gray-200/50 group items-center"
                >
                  <div className="flex flex-row flex-1 gap-3 items-center">
                    {item.icon}
                    <p className="text-sm dark:text-gray-400 dark:group-hover:text-gray-50 text-gray-600 group-hover:text-gray-900 transition-colors duration-500">
                      {item.company}
                    </p>
                  </div>
                  <p className="text-sm dark:text-gray-400 dark:group-hover:text-gray-50 text-gray-600 group-hover:text-gray-900 flex-1 hidden sm:flex transition-colors duration-500">
                    {item.role}
                  </p>

                  <div className="flex flex-row flex-1 justify-between items-center">
                    <p className="text-sm dark:text-gray-400 dark:group-hover:text-gray-50 text-gray-600 group-hover:text-gray-900 flex-1 transition-colors duration-500">
                      {item.date}
                    </p>
                    <Icon
                      name="arrow_right"
                      className="dark:fill-gray-500 dark:group-hover:fill-gray-50 fill-gray-500 group-hover:fill-gray-900 transition-colors duration-500"
                      size={20}
                    />
                  </div>
                </Link>
              </AppearIn>
            ))}
          </div>

          {/* Social bar */}
          <div className="fixed bottom-6 left-2/4 -translate-x-2/4 z-20">
            <div className="flex flex-row justify-center items-center dark:bg-gray-950/80 bg-white/80 backdrop-blur-md rounded-full p-1 border dark:border-gray-800 border-gray-200/50 animate-third">
              <Link
                href="mailto:hey@samwill.is"
                target="_blank"
                className="h-10 w-10 flex items-center justify-center rounded-full z-10 group hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                <Icon name="email" className="social-icon" size={16} />
              </Link>
              <Link
                href="https://twitter.com/samwill_is"
                target="_blank"
                className="h-10 w-10 flex items-center justify-center rounded-full z-10 group hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                <Icon name="twitter" className="social-icon" size={16} />
              </Link>
              <Link
                href="https://linkedin.com/in/samjwillis"
                target="_blank"
                className="h-10 w-10 flex items-center justify-center rounded-full z-10 group hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                <Icon name="linkedin" className="social-icon" size={16} />
              </Link>
              <Link
                href="https://dribbble.com/sjwillis"
                target="_blank"
                className="h-10 w-10 flex items-center justify-center rounded-full z-10 group hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                <Icon name="dribbble" className="social-icon" size={16} />
              </Link>
              {/* <Link
                href="https://threads.net/@samwill.is"
                target="_blank"
                className="h-10 w-10 flex items-center justify-center rounded-full z-10 group hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                <Icon name="threads" className="social-icon" size={16} />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
