import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Navigation } from 'swiper/modules';
import Head from "next/head";
import Link from "next/link";
import React, { useRef, useEffect, useState, use } from "react";
import ReactTyped from "react-typed";

import { ArrowLeftIcon, ArrowRightIcon, ChatBubbleLeftRightIcon, PlusIcon, MinusIcon } from '@heroicons/react/16/solid'

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
  // {
  //   title: "White-label search & book flow",
  //   company: "Duffel",
  //   link: "https://duffel.com/links",
  //   image: "/selected-work/duffel-links.jpg",
  // },
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
    text: "I joined incident in 2023 and have been working almost exclusively on their new on-call offering—the software that wakes engineers up when there is an outage. It has been a real adventure, building this feature out from scratch. And has often felt a bit like a startup within a startup. At time of writing, the on-call product has generated over $1m in revenue since it launched back in March.",
  },
  {
    company: "Alba",
    role: "Designer/founder",
    date: "2022",
    link: "https://alba.art",
    icon: <Icon name="alba" className="cv-item_icon" size={20} />,
    text: "I joined incident in 2023 and have been working almost exclusively on their new on-call offering—the software that wakes engineers up when there is an outage. It has been a real adventure, building this feature out from scratch. And has often felt a bit like a startup within a startup. At time of writing, the on-call product has generated over $1m in revenue since it launched back in March.",
  },
  {
    company: "Duffel",
    role: "Head of product design",
    date: "2021",
    link: "https://duffel.com",
    icon: <Icon name="duffel" className="cv-item_icon" size={20} />,
    text: "I joined incident in 2023 and have been working almost exclusively on their new on-call offering—the software that wakes engineers up when there is an outage. It has been a real adventure, building this feature out from scratch. And has often felt a bit like a startup within a startup. At time of writing, the on-call product has generated over $1m in revenue since it launched back in March.",
  },
  {
    company: "Design Club",
    role: "Organiser",
    date: "2015",
    link: "https://designclub.io",
    icon: <Icon name="design_club" className="cv-item_icon" size={20} />,
    text: "I joined incident in 2023 and have been working almost exclusively on their new on-call offering—the software that wakes engineers up when there is an outage. It has been a real adventure, building this feature out from scratch. And has often felt a bit like a startup within a startup. At time of writing, the on-call product has generated over $1m in revenue since it launched back in March.",
  },
  {
    company: "Memrise",
    role: "Design manager",
    date: "2019",
    link: "https://memrise.com",
    icon: <Icon name="memrise" className="cv-item_icon" size={20} />,
    text: "I joined incident in 2023 and have been working almost exclusively on their new on-call offering—the software that wakes engineers up when there is an outage. It has been a real adventure, building this feature out from scratch. And has often felt a bit like a startup within a startup. At time of writing, the on-call product has generated over $1m in revenue since it launched back in March.",
  },
  {
    company: "Fat Llama",
    role: "Product design lead",
    date: "2018",
    link: "https://fatllama.com",
    icon: <Icon name="fat_llama" className="cv-item_icon" size={20} />,
    text: "I joined incident in 2023 and have been working almost exclusively on their new on-call offering—the software that wakes engineers up when there is an outage. It has been a real adventure, building this feature out from scratch. And has often felt a bit like a startup within a startup. At time of writing, the on-call product has generated over $1m in revenue since it launched back in March.",
  },
  {
    company: "GoCardless",
    role: "Senior product designer",
    date: "2015",
    link: "https://gocardless.com",
    icon: <Icon name="gocardless" className="cv-item_icon" size={20} />,
    text: "I joined incident in 2023 and have been working almost exclusively on their new on-call offering—the software that wakes engineers up when there is an outage. It has been a real adventure, building this feature out from scratch. And has often felt a bit like a startup within a startup. At time of writing, the on-call product has generated over $1m in revenue since it launched back in March.",
  },
  {
    company: "Design+Banter",
    role: "Organiser",
    date: "2013",
    link: "https://twitter.com/designandbanter",
    icon: <Icon name="design_and_banter" className="cv-item_icon" size={20} />,
    text: "I joined incident in 2023 and have been working almost exclusively on their new on-call offering—the software that wakes engineers up when there is an outage. It has been a real adventure, building this feature out from scratch. And has often felt a bit like a startup within a startup. At time of writing, the on-call product has generated over $1m in revenue since it launched back in March.",
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

  const [collapsedStates, setCollapsedStates] = useState({});

  const toggleCollapse = (company) => {
    setCollapsedStates(prevStates => ({
      ...prevStates,
      [company]: !prevStates[company]
    }));
  };

  const [controlledSwiper, setControlledSwiper] = useState(null);

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
        <div className="flex flex-col py-6 px-8 gap-40 max-w-xl mx-auto">
          {/* Header */}
          <div className="animate-first flex flex-row justify-between items-center">
            <p className="text-base dark:text-gray-50 text-gray-900 digital-font">
              samwill.is
            </p>

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
                    <span className="text-gray-100">I&apos;m Sam, a <span className="digital-font relative glitch" title="digital">digital</span> product designer based in London.</span> I love crafting intuitive interfaces that make people go “mmm, that&apos;s nice.”
                  </p>
                  <p className="dark:text-gray-500 text-gray-500 text-sm">
                    I&apos;ve spent over 10 years helping companies turn vision to reality, and design to competitive advantage. Check out some selected work below, or get in touch if you&apos;d like to read case studies.
                  </p>
                </div>
                <Link
                  href="mailto:hey@samwill.is"
                  target="_blank"
                  className="button flex flex-row items-center gap-2 grow-0 self-start"
                >
                  <ChatBubbleLeftRightIcon className="h-4 w-4" />{" "}
                  Get in touch</Link>
              </div>
            </div>
          </div>

          {/* Selected work */}
          <div className="flex flex-col gap-5">
            <Swiper
              initialSlide={0}
              // loop
              effect={'cards'}
              // grabCursor={true}
              modules={[EffectCards, Navigation]}
              className="mySwiper"
              cardsEffect={{
                perSlideOffset: 8,
              }}
              navigation={{
                prevEl: '.prev',
                nextEl: '.next',
              }}
            >
              {selectedWork.map((project) => (
                // <AppearIn key={project.title}>
                <SwiperSlide key={project.title}>
                  <div className="relative flex flex-col justify-center items-center">
                    <div className="relative aspect-square w-full h-full rounded-2xl overflow-clip">
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
                    {/* <div className="px-5 py-4 absolute bottom-0 left-0 right-0 backdrop-blur-sm"> */}
                    <div className="teststuff w-full flex flex-row justify-between pt-5">
                      <p className="dark:text-gray-100 text-gray-500 text-sm">
                        {project.title}
                      </p>
                      <Link
                        href={project.link}
                        target="_blank"
                        className="dark:text-gray-100 text-gray-400 flex flex-row items-center gap-1 justify-center text-sm group dark:hover:text-gray-50 hover:text-gray-900"
                      >
                        {project.company}
                      </Link>
                    </div>
                    {/* <div className="gradient-blur z-0">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div> */}
                    {/* </div> */}
                  </div>
                </SwiperSlide>
                // </AppearIn>
              ))}
            </Swiper>
          </div>

          {/* CV */}

          <div className="">
            <div className="flex flex-col gap-4 mb-12">
              <p className="text-xl text-gray-500">
                <span className="text-gray-100">I get around.</span> As well as helping startups with their products, I&apos;ve also organised design events, built a crypto startup, and designed some cool logos.
              </p>
              <p className="dark:text-gray-500 text-gray-500 text-sm">
                I&apos;m a bit of a “yes man” and love trying new things. Especially if I get to try out a new visual style or work with a new technology. Below are some (most) of the things I&apos;ve worked on over the past decade.
              </p>
            </div>
            <div className="border-t border-gray-900 flex flex-col">

              {cv.map((item) => (
                <div key={item.company} className="border-b border-gray-900 flex flex-col cursor-pointer group" onClick={() => toggleCollapse(item.company)}>
                  <div className="items-center gap-4 flex flex-row justify-between py-4">
                    <div className="flex flex-row gap-4">
                      <div className="text-right text-neutral-500 text-sm font-normal font-['Inter'] leading-tight">{item.date}</div>
                      <div className="text-neutral-50 text-sm font-normal font-['Inter'] leading-tight">{item.company}</div>
                    </div>
                    <div className="flex flex-row justify-end gap-4">
                      <div className="text-right text-neutral-500 text-sm font-normal font-['Inter'] leading-tight">{item.role}</div>
                      <PlusIcon className={`
                        h-4 w-4 fill-gray-500 group-hover:fill-gray-50 transition-all 
                        ${!collapsedStates[item.company] ? 'rotate-0' : 'rotate-45'}
                        `} />
                    </div>
                  </div>
                  <div className={`overflow-hidden transition-all ${!collapsedStates[item.company] ? 'max-h-0' : 'max-h-48'}`}>
                    <p className="text-gray-500 pb-4">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10 mb-20">
            <div className="flex flex-col gap-5">
              <p className="text-xl text-gray-500">
                <span className="text-gray-100">I&apos;m heads-down on incident.io right now.</span> I&apos;m not taking on new projects atm, but if you have something<span className="text-gray-100">*</span> you think I can help with, then I&apos;m always open to chat.
              </p>
              <p className="dark:text-gray-500 text-gray-500 text-sm">
                *I find it very hard to turn down logo/brand design projects
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <Link
                href="mailto:hey@samwill.is"
                target="_blank"
                className="button"
              >
                <ChatBubbleLeftRightIcon className="h-4 w-4 mr-2" />{" "}
                Get in touch</Link>
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
              {/* <Link
                href="https://dribbble.com/sjwillis"
                target="_blank"
                className="button button-round"
              ><Icon name="dribbble" className="social-icon" size={14} /></Link> */}
            </div>
          </div>
          <div className="flex flex-col gap-10 mb-2">

          </div>
        </div>
      </div>
      <div className="special">
        <div className="flex flex-col py-6 px-8 gap-32 max-w-xl mx-auto border-x border-dashed border-gray-800 h-full"></div>
      </div>
    </main>
  );
}
