import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Navigation } from 'swiper/modules';
import Head from "next/head";
import Link from "next/link";
import React, { useRef, useEffect, useState, use } from "react";
import ReactTyped from "react-typed";

import { ArrowRightIcon, ChatBubbleLeftRightIcon, PlusIcon } from '@heroicons/react/16/solid'

import { useInView } from "framer-motion";

import { Icon } from "../components/Icon";

const selectedWork = [
  {
    title: "Insights dashboard",
    company: "Duffel",
    link: "https://duffel.com",
    image: "/selected-work/merchant-insights.jpg",
  },
  {
    title: "Home page",
    company: "gm.studio",
    link: "https://gmstudio.art",
    image: "/selected-work/gmstudio.jpg",
  },
  {
    title: "Alba home page",
    company: "Alba",
    link: "https://alba.art",
    image: "/selected-work/alba-homepage.jpg",
  },
  {
    title: "Stays search with map",
    company: "Duffel",
    link: "https://duffel.com/stays",
    image: "/selected-work/stays-search.jpg",
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
];

const cv = [
  {
    company: "Incident.io",
    role: "Product designer",
    date: "2023",
    link: "https://incident.io",
    icon: <Icon name="incident" className="cv-item_icon" size={20} />,
    text: "I joined incident in 2023 and worked almost exclusively on their new on-call offering—the software that woke engineers up when there was an outage. It was a real adventure, building this feature out from scratch. And often felt a bit like a startup within a startup. At the time of writing, the on-call product had generated over $1m in revenue since it launched back in March.",
  },
  {
    company: "Alba",
    role: "Designer/founder",
    date: "2022",
    link: "https://alba.art",
    icon: <Icon name="alba" className="cv-item_icon" size={20} />,
    text: "I started Alba in 2022, a platform for generative art on Ethereum. I worked on this project in my spare time, and it was a real learning experience. I was able to experiment with new visual styles and learn about the world of crypto. I also had the opportunity to work with some amazing artists and build a community around the project.",
  },
  {
    company: "Duffel",
    role: "Head of product design",
    date: "2021",
    link: "https://duffel.com",
    icon: <Icon name="duffel" className="cv-item_icon" size={20} />,
    text: "I joined Duffel in 2021 as a solo product designer, working closely with design-founder, Tom Bates. A year or so into my tenure, Tom moved on and I took over as head of product design. I grew the team to 4 designers and worked on a range of projects, from the merchant dashboard to the stays search to the API documentation. I also worked on the brand and the design system.",
  },
  {
    company: "Design Club",
    role: "Organiser",
    date: "2015",
    link: "https://designclub.io",
    icon: <Icon name="design_club" className="cv-item_icon" size={20} />,
    text: "I started Design Club in 2015, a community for designers in London. I ran the group for over 6 years, and it grew to over 3,000 members. We ran regular events with talks and socializing. I got to meet and learn from some incredible people along the way. I also had the opportunity to work with some amazing sponsors and build a community around the group.",
  },
  {
    company: "Memrise",
    role: "Design manager",
    date: "2019",
    link: "https://memrise.com",
    icon: <Icon name="memrise" className="cv-item_icon" size={20} />,
    text: "I joined Memrise in 2019 as a design manager. It was a hybrid role where I split my time 50:50 between management and IC work. It was a great opportunity to learn how to manage a team and work on a range of projects, as well as experiment with new visual styles and delve into the fascinating psychology of learning languages.",
  },
  {
    company: "Fat Llama",
    role: "Product design lead",
    date: "2018",
    link: "https://fatllama.com",
    icon: <Icon name="fat_llama" className="cv-item_icon" size={20} />,
    text: "I joined fat llama as the first product designer in 2018. It was super interesting learning how create a two-sided marketplace, and I enjoyed working with both Lenders and Borrowers to create an ecosystem that worked well for both. At it's peak the team grew to 3 designers and I was promoted to design lead. I worked on a range of projects across web and mobile, from KYC flows, product filtering and search, and checkout.",
  },
  {
    company: "GoCardless",
    role: "Senior product designer",
    date: "2015",
    link: "https://gocardless.com",
    icon: <Icon name="gocardless" className="cv-item_icon" size={20} />,
    text: "I joined GoCardless in 2015 as a fairly juior product designer. Working with suc an incredibly talented team, it was a transformative experience for me. In my time there I worked on sophisticated admin panels built to detect things like fraud and money laundering. I worked on onboarding flows that could verify organisations of all shapes and sizes.",
  },
  {
    company: "Design+Banter",
    role: "Organiser",
    date: "2013",
    link: "https://twitter.com/designandbanter",
    icon: <Icon name="design_and_banter" className="cv-item_icon" size={20} />,
    text: "I started Design+Banter in 2013 with my good friend Gearoid. It started out as a small, 50 person meetup in the basement of a bowling alley, but later grew to a 300 person event hosted at the swankiest offices and spaces in East London. I'm incredibly grateful for the friends and network I made D+B, and the opportunities it opened up for me.",
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

  type CollapsedStates = {
    [key: string]: boolean;
  };

  const [collapsedStates, setCollapsedStates] = useState<CollapsedStates>({});

  const [buttonText, setButtonText] = useState('Get in touch');

  const toggleCollapse = (company: string) => {
    setCollapsedStates(prevStates => ({
      ...prevStates,
      [company]: !prevStates[company]
    }));
  };

  const [controlledSwiper, setControlledSwiper] = useState(null);

  const copyToClipboard = () => {
    const email = 'hey@samwill.is';
    navigator.clipboard.writeText(email).then(() => {
      setButtonText('Copied!');
      setTimeout(() => {
        setButtonText('Get in touch');
      }, 1000); // Change text back after 2 seconds
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

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

      <div className="transition-colors">
        <div className="flex flex-col pt-6 pb-4 px-8 gap-40 max-w-xl mx-auto">
          {/* Header */}
          <div className="animate-first flex flex-row justify-between items-center">


            <ReactTyped
              strings={["samwill.is"]}
              typeSpeed={60}
              showCursor={false}
              className="text-base dark:text-gray-50 text-gray-900 digital-font"
            />

            <button
              id="theme-toggle"
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 h-9 w-9 rounded-full border border-gray-200 dark:border-gray-800 flex justify-center items-center"
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
                className={`w-4 h-4 ${theme === "dark" ? null : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg
                id="theme-toggle-light-icon"
                className={`w-4 h-4 ${theme === "light" ? null : "hidden"}`}
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
          <div className="mx-auto w-fulltext-left animate-second">
            <div className="flex flex-col gap-6 items-start sm:items-center">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <p className="text-xl text-gray-500">
                    <span className="dark:text-gray-100 text-gray-900">I&apos;m Sam, a <span className="digital-font relative glitch" title="digital">digital</span> product designer based in London.</span> I love crafting intuitive interfaces that make people go “mmm, that&apos;s nice.”
                  </p>
                  <p className="dark:text-gray-500 text-gray-500 text-sm">
                    I&apos;ve spent over 10 years helping companies turn vision to reality, and design to competitive advantage. Check out some selected work below, or get in touch if you&apos;d like to read case studies.
                  </p>
                </div>
                <div>
                  <div className="p-px bg-gradient-to-r dark:from-[#412525] dark:via-gray-800 dark:to-gray-800 from-red-200 via-gray-200 to-gray-200 rounded-full inline-flex">
                    <div className="h-9 px-4 rounded-full dark:bg-gray-900 bg-gray-50 justify-start items-center gap-3 inline-flex">
                      <div className="w-2 h-2 dark:bg-red-700 bg-red-500 rounded-full availability-orb" />
                      <div className="dark:text-gray-500 text-gray-500 text-sm font-medium">Limited space for new projects</div>
                      <div className="availability-divider"></div>
                      <a
                        href="#"
                        onClick={copyToClipboard}
                        className="dark:text-gray-300 text-gray-900 text-sm font-medium dark:hover:text-gray-50 hover:text-gray-500 transition-colors"
                      >
                        {buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Selected work */}
          <div className="flex flex-col gap-5 animate-third">
            <Swiper
              initialSlide={0}
              effect={'cards'}
              modules={[EffectCards, Navigation]}
              className="mySwiper"
              cardsEffect={{
                slideShadows: false,
                perSlideOffset: 8,
                perSlideRotate: 4,
              }}
              navigation={{
                prevEl: '.prev',
                nextEl: '.next',
              }}
            >
              {selectedWork.map((project) => (
                <AppearIn key={project.title}>
                  <SwiperSlide>
                    <div className="relative flex flex-col justify-center items-center">
                      <div className="relative aspect-square w-full h-full rounded-2xl overflow-clip shadow-lg">
                        <Image
                          src={project.image}
                          alt={`Picture of ${project.title}`}
                          fill={true}
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="prev absolute top-0 bottom-0 left-0 right-1/2 cursor-w-resize"></div>
                        <div className="next absolute top-0 bottom-0 left-1/2 right-0 cursor-e-resize"></div>
                      </div>
                      <div className="hide-details w-full flex flex-row justify-between pt-5 px-1">
                        <p className="dark:text-gray-500 text-gray-500 text-sm">
                          {project.title}
                        </p>
                        <Link
                          href={project.link}
                          target="_blank"
                          className="dark:text-gray-300 text-gray-400 flex flex-row items-center gap-1 justify-center text-sm group dark:hover:text-gray-50 hover:text-gray-900"
                        >
                          {project.company}
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </AppearIn>
              ))}
            </Swiper>
          </div>

          {/* CV */}

          <div className="flex flex-col gap-20">

            <AppearIn>
              <div className="flex flex-col gap-4">
                <p className="text-xl text-gray-500">
                  <span className="dark:text-gray-100 text-gray-900">I get around.</span> As well as helping startups with their products, I&apos;ve also organised design events, built a crypto startup, and designed some cool logos.
                </p>
                <p className="dark:text-gray-500 text-gray-500 text-sm">
                  I love saying yes to things. Especially if it means I get to try out a new visual style or work with new technology. Below are some (most) of the things I&apos;ve worked on over the past decade.
                </p>
              </div>
            </AppearIn>

            <div className="border-t dark:border-gray-900 border-gray-200 flex flex-col">

              {cv.map((item) => (
                <AppearIn key={item.company}>
                  <div className="border-b dark:border-gray-900 border-gray-200 flex flex-col cursor-pointer group" onClick={() => toggleCollapse(item.company)}>
                    <div className="items-center gap-4 flex flex-row justify-between py-4">
                      <div className="flex flex-row gap-4">
                        <div className="text-right text-neutral-500 text-sm font-normal font-['Inter'] leading-tight">{item.date}</div>
                        <div className="dark:text-neutral-50 text-gray-900 text-sm font-normal font-['Inter'] leading-tight">{item.company}</div>
                      </div>
                      <div className="flex flex-row justify-end gap-4">
                        <div className="text-right text-neutral-500 text-sm font-normal font-['Inter'] leading-tight">{item.role}</div>
                        <PlusIcon className={`
                        h-4 w-4 fill-gray-500 dark:group-hover:fill-gray-50 group-hover:fill-gray-900 transition-all 
                        ${!collapsedStates[item.company] ? 'rotate-0' : 'rotate-45'}
                        `} />
                      </div>
                    </div>
                    <div className={`overflow-hidden transition-all ${!collapsedStates[item.company] ? 'max-h-0' : 'max-h-48'}`}>
                      <p className="text-gray-500 pb-4">{item.text}</p>
                    </div>
                  </div>
                </AppearIn>
              ))}
            </div>

          </div>

          <AppearIn>
            <div className="flex flex-col gap-10 mb-20">
              <div className="flex flex-col gap-5">
                <p className="text-xl text-gray-500">
                  <span className="dark:text-gray-100 text-gray-900">I&apos;m heads-down on incident.io right now.</span> I&apos;m not taking on new projects atm, but if you have something<span className="text-gray-100">*</span> you think I can help with, then I&apos;m always open to chat.
                </p>
                <p className="dark:text-gray-500 text-gray-500 text-sm">
                  *I find it very hard to turn down logo/brand design projects
                </p>
              </div>
              <div className="flex flex-row gap-3">
                <button
                  onClick={copyToClipboard}
                  className="button w-[145px] !justify-start"
                >
                  <ChatBubbleLeftRightIcon className="h-4 w-4 mr-2" />
                  {buttonText}
                </button>
                <Link
                  href="https://twitter.com/samwill_is"
                  target="_blank"
                  className="button button-round"
                ><Icon name="twitter" className="social-icon" size={14} /></Link>
                <Link
                  href="https://linkedin.com/in/samjwillis"
                  target="_blank"
                  className="button button-round"
                ><Icon name="linkedin" className="social-icon" size={14} /></Link>
              </div>
            </div>
          </AppearIn>
          <div className="flex flex-row justify-between gap-10 mb-2">
            <span className="text-sm dark:text-gray-700 text-gray-400">© 2024</span>
            <span className="text-sm dark:text-gray-700 text-gray-400">Muddled together by me, <a href="http://github.com/swillis" target="_blank" className="dark:text-gray-500 text-gray-500">Swillis</a></span>
          </div>
        </div>
        <div className="special">
          <div className="flex flex-col py-6 px-8 gap-32 max-w-xl mx-auto border-x border-dashed dark:border-gray-800 border-gray-300 h-full"></div>
        </div>
      </div >
    </main>
  );
}
