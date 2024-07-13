import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Navigation } from 'swiper/modules';
import Head from "next/head";
import Link from "next/link";
import React, { useRef, useEffect, useState, use } from "react";
import ReactTyped from "react-typed";

import { ArrowLeftIcon, ArrowRightIcon, ChatBubbleLeftRightIcon, PlusIcon } from '@heroicons/react/16/solid'

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
    role: "Product design lead",
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

  // var coll = document.getElementsByClassName("collapsible");
  // var i;
  
  // for (i = 0; i < coll.length; i++) {
  //   coll[i].addEventListener("click", function() {
  //     this.classList.toggle("active");
  //     var content = this.nextElementSibling;
  //     if (content.style.maxHeight){
  //       content.style.maxHeight = null;
  //     } else {
  //       content.style.maxHeight = content.scrollHeight + "px";
  //     }
  //   });
  // }

  // Step 1: Initialize state object for collapse states
  const [collapsedStates, setCollapsedStates] = useState({});

  // Step 2: Modify the click handler to toggle the specific item's state
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
              <div className="flex flex-col gap-4">
                <p className="text-xl text-gray-500">
                  <span className="text-gray-100">I&apos;m Sam, a <span className="digital-font relative glitch" title="digital">digital</span> product designer based in London.</span> I love designing intuitive and aesthetic interfaces.
                </p>
                <p className="dark:text-gray-500 text-gray-500 text-sm">
                  I&apos;ve over 10 years experience helping companies turn vision to reality, and design to competitive advantage. I&apos;m currently building incident management software at{" "}
                  <Link
                    href="https://incident.io"
                    target="_blank"
                    className="underline hover:text-gray-100"
                  >
                    incident.io
                  </Link>, and on the side I'm building <Link
                    href="https://alba.art"
                    target="_blank"
                    className="underline hover:text-gray-100"
                  >
                    Alba
                  </Link>, an open platform for generative art on ETH.
                </p>
              </div>
            </div>
          </div>

          {/* Selected work */}
          <div className="flex flex-col gap-5">
            <Swiper
              initialSlide={0 }
              // loop
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Navigation]}
              className="mySwiper"
              cardsEffect={{
                perSlideOffset: 16,
                perSlideRotate: 0,
              }}
              navigation={{
                prevEl: '.prev',
                nextEl: '.next',
              }}
            >
              {selectedWork.map((project) => (
                // <AppearIn key={project.title}>
                <SwiperSlide key={project.title} className="rounded-2xl p-px bg-gradient-to-b from-gray-700 to-gray-900">
                  <div className="dark:bg-gray-900 bg-gray-100 rounded-[15px] relative flex flex-col justify-center items-center">
                    <div className="flex flex-1 pt-4 px-4 w-full max-h-full">
                      <div className="relative aspect-square w-full h-full rounded-md overflow-clip">
                        <Image
                          src={project.image}
                          alt={`Picture of ${project.title}`}
                          fill={true}
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row w-full justify-between px-4 py-4">
                      <p className="dark:text-gray-400 text-gray-500 text-sm">
                        {project.title}
                      </p>
                      <Link
                        href={project.link}
                        target="_blank"
                        className="dark:text-gray-200 text-gray-400 flex flex-row items-center gap-1 justify-center text-sm group dark:hover:text-gray-50 hover:text-gray-900"
                      >
                        {project.company}
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                // </AppearIn>
              ))}
            </Swiper>
            <div className="flex flex-row gap-3 justify-center">
              <div className="prev text-gray-300 hover:text-gray-50 flex h-8 w-8 items-center justify-center bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 active:bg-gray-900">
                <ArrowLeftIcon className="h-4 w-4" />
              </div>
              <div className="next text-gray-300 hover:text-gray-50 flex h-8 w-8 items-center justify-center bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 active:bg-gray-900">
                <ArrowRightIcon className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* CV */}

          <div className="">
            <div className="flex flex-col gap-4 mb-12">
              <p className="text-xl text-gray-500">
                <span className="text-gray-100">I'm a bit of a hybrid.</span> I&apos;ve spent most of my career operating as a product designer. But I enjoy exploring new things and have tried my hand at running events, designing logos and even dabbled with the M* word…
              </p>
              <p className="dark:text-gray-500 text-gray-500 text-sm">
                …management! But to be honest, it wasn&apos;t really for me. While I enjoyed certain aspects (helping people grow, setting direction, strategy, etc) but I realised I can do this, and enjoy it more from an IC position.
              </p>
            </div>
            <div className="border-t border-gray-900 flex flex-col">
            
              {cv.map((item) => (
                <div key={item.company} className="py-4 border-b border-gray-900 flex flex-col">
                  <div className="items-center gap-4 flex flex-row justify-between">
                    <div className="flex flex-row gap-4">
                      <div className="text-right text-neutral-500 text-sm font-normal font-['Inter'] leading-tight">{item.date}</div>
                      <div className="text-neutral-50 text-sm font-normal font-['Inter'] leading-tight">{item.company}</div>
                    </div>
                    <div className="flex flex-row justify-end gap-4">
                      <div className="text-right text-neutral-500 text-sm font-normal font-['Inter'] leading-tight">{item.role}</div>
                      <PlusIcon className="h-4 w-4 fill-gray-500 hover:fill-gray-50 cursor-pointer" onClick={() => toggleCollapse(item.company)} />
                    </div>
                  </div>
                  {/* Step 3: Adjust rendering logic to check the collapsed state for each item */}
                  <div className={`test ${collapsedStates[item.company] ? 'hidden' : ''}`}>
                    <p>{item.text}</p>
                  </div>
                </div>


              // <Link
              //   key={item.company}
              //   href={item.link}
              //   target="_blank"
              //   className="flex flex-row gap-4 py-3 items-end"
              // >
              //   <div className="flex flex-row flex-1 gap-4 items-center">
              //     <div className="h-10 w-10 flex justify-center items-center bg-gray-950 rounded-lg dark:group-hover:bg-gray-600 transition-colors">
              //       {item.icon}
              //     </div>
              //     <div className="flex flex-col gap-0">
              //       <p className="text-sm dark:text-gray-100 dark:group-hover:text-gray-50 text-gray-600 group-hover:text-gray-900 transition-colors duration-500">
              //         {item.company}
              //       </p>
              //       <p className="text-sm dark:text-gray-500 dark:group-hover:text-gray-50 text-gray-600 group-hover:text-gray-900 flex-1 hidden sm:flex transition-colors duration-500">
              //         {item.role}
              //       </p>
              //     </div>
              //   </div>

              //   <div className="flex flex-row flex-1 justify-between items-center">
              //     <p className="text-sm dark:text-gray-500 dark:group-hover:text-gray-50 text-gray-600 group-hover:text-gray-900 flex-1 transition-colors duration-500 text-right">
              //       {item.date}
              //     </p>
              //   </div>
              // </Link>
              // </AppearIn>
            ))}
            </div>
          </div>

          <div className="flex flex-col gap-10 mb-20">
            <div className="flex flex-col gap-5">
              <p className="text-xl text-gray-500">
                <span className="text-gray-100">I&apos;m full-time at incident.io right now.</span> I&apos;m not taking on (big) projects at the moment. But if you think I can help with something* then I&apos;d love to hear from you.
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
              <Link
                href="https://dribbble.com/sjwillis"
                target="_blank"
                className="button button-round"
              ><Icon name="dribbble" className="social-icon" size={14} /></Link>
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
