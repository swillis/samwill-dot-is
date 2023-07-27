import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";
import ReactTyped from "react-typed";

import { Icon } from "../components/Icon";

const inter = Inter({ subsets: ["latin"] });

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

export default function Home() {
  return (
    <main className="bg-gray-950">
      {/* Social bar */}
      <div className="fixed bottom-5 left-2/4 -translate-x-2/4 z-20">
        <div className="flex flex-row justify-center items-center bg-gray-950/50 backdrop-blur-md rounded-full p-1">
          <Link
            href="mailto:hey@samwill.is"
            target="_blank"
            className="h-8 w-8 flex items-center justify-center rounded-full z-10 group"
          >
            <Icon
              name="email"
              className="fill-gray-500 group-hover:fill-white"
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
              className="fill-gray-500 group-hover:fill-white"
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
              className="fill-gray-500 group-hover:fill-white"
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
              className="fill-gray-500 group-hover:fill-white"
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
              className="fill-gray-500 group-hover:fill-white"
              size={16}
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col py-6 px-6 gap-32">
        {/* Header */}
        <div className="flex flex-row gap-4">
          <Image
            className="rounded-full"
            src="/me.png"
            alt="Picture of the author"
            width={40}
            height={40}
          />
          <div>
            <p className="text-sm text-gray-50 font-medium">Sam Willis</p>
            <p className="text-sm text-gray-500">Product designer</p>
          </div>
        </div>

        {/* Hero */}
        <div className="grid responsive-grid">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 max-w-3xl">
              <p className="text-gray-50 text-xl font-medium">
                I{" "}
                <ReactTyped
                  strings={["design digital products."]}
                  typeSpeed={30}
                  loop
                  backDelay={2000}
                  backSpeed={10}
                  // cursorChar=">"
                  showCursor={true}
                />
              </p>
              <p className="text-gray-500 text-xl">
                Hey, I'm Sam — a london-based product designer who&apos;s spent
                the past 10+ years helping companies translate vision into
                reality, and design into competitive advantage.
              </p>
              <p className="text-gray-500 text-xl">
                I&apos;m currently working at{" "}
                <Link
                  href="https://duffel.com"
                  target="_blank"
                  className="text-gray-400 hover:underline"
                >
                  Duffel
                </Link>
                , where we&apos;re building the future of travel. And on the
                side I'm building{" "}
                <Link
                  href="https://alba.art"
                  target="_blank"
                  className="text-gray-400 hover:underline"
                >
                  Alba
                </Link>
                , an open platform for generative art on Ethereum.
              </p>
            </div>
            <div className="flex shrink grow basis-auto">
              <span className="border rounded-full border-gray-900 px-4 py-2 text-sm text-gray-500 flex flex-row items-center justify-start gap-3">
                <span className="h-2 w-2 bg-red-700 rounded-full" />
                <span>Unavailable for new projects</span>
              </span>
            </div>
          </div>
        </div>

        {/* Selected work */}
        <div className="grid responsive-grid gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="aspect-square bg-gray-900 rounded-lg relative flex justify-center items-center"
            >
              <Image
                src={project.image}
                alt="Picture of the author"
                width={720}
                height={540}
              />
              <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-between p-4">
                <p className="text-gray-400 text-sm">{project.title}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-gray-500 flex flex-row items-center gap-1 justify-center text-sm"
                >
                  {project.company}
                  <Icon
                    name="arrow_right"
                    className="fill-gray-500"
                    size={12}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CV */}
        <div className="flex flex-col w-full max-w-2xl mx-auto">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2">
              <p className="title">Projects</p>
              <Link
                href="https://alba.art"
                target="_blank"
                className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-950 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
              >
                <div className="p-1">
                  <Image
                    src="/logos/alba.svg"
                    alt="Picture of the author"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-50">Alba</p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    Designer/founder
                  </p>
                </div>
                <div className="border-b border-solid border-gray-900 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
                <div className="flex items-end">
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    2023-present
                  </p>
                </div>
              </Link>

              <Link
                href="https://gmstudio.art"
                target="_blank"
                className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-950 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
              >
                <div className="p-1">
                  <Image
                    src="/logos/gmstudio.svg"
                    alt="Picture of the author"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-50">gm.studio</p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    Product design
                  </p>
                </div>
                <div className="border-b border-solid border-gray-900 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
                <div className="flex items-end">
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    2023
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="title">Full-time roles</p>
              <Link
                href="https://duffel.com"
                target="_blank"
                className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-950 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
              >
                <div className="p-1">
                  <Image
                    src="/logos/duffel.svg"
                    alt="Picture of the author"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-50">Duffel</p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    Product design lead
                  </p>
                </div>
                <div className="border-b border-solid border-gray-900 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
                <div className="flex items-end">
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    2020-present
                  </p>
                </div>
              </Link>

              <Link
                href="https://memrise.com"
                target="_blank"
                className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-950 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
              >
                <div className="p-1">
                  <Image
                    src="/logos/memrise.svg"
                    alt="Picture of the author"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-50">Memrise</p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    Design manager
                  </p>
                </div>
                <div className="border-b border-solid border-gray-900 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
                <div className="flex items-end">
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    2019-2020
                  </p>
                </div>
              </Link>

              <Link
                href="https://fatllama.com"
                target="_blank"
                className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-950 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
              >
                <div className="p-1">
                  <Image
                    src="/logos/fat-llama.svg"
                    alt="Picture of the author"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-50">Fat Llama</p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    Product design lead
                  </p>
                </div>
                <div className="border-b border-solid border-gray-900 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
                <div className="flex items-end">
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    2018-2019
                  </p>
                </div>
              </Link>

              <Link
                href="https://gocardless.com"
                target="_blank"
                className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-950 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
              >
                <div className="p-1">
                  <Image
                    src="/logos/gocardless.svg"
                    alt="Picture of the author"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-50">GoCardless</p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    Senior product designer
                  </p>
                </div>
                <div className="border-b border-solid border-gray-900 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
                <div className="flex items-end">
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    2015-2018
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="title">Branding</p>
              <Link
                href="https://incident.io"
                target="_blank"
                className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-950 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
              >
                <div className="p-1">
                  <Image
                    src="/logos/incidentio.svg"
                    alt="Picture of the author"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-50">Incident.io</p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    Logo design
                  </p>
                </div>
                <div className="border-b border-solid border-gray-900 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
                <div className="flex items-end">
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    2021
                  </p>
                </div>
              </Link>

              <Link
                href="https://dependabot.com"
                target="_blank"
                className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-950 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
              >
                <div className="p-1">
                  <Image
                    src="/logos/dependabot.svg"
                    alt="Picture of the author"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-50">Dependabot</p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    Logo, brand & web design
                  </p>
                </div>
                <div className="border-b border-solid border-gray-900 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
                <div className="flex items-end">
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    2018
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-2 mb-10">
              <p className="title mb-2">Events</p>
              <Link
                href="https://designclub.io"
                target="_blank"
                className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-950 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
              >
                <div className="p-1">
                  <Image
                    src="/logos/dc.svg"
                    alt="Picture of the author"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-50">Design Club</p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    Co-organiser
                  </p>
                </div>
                <div className="border-b border-solid border-gray-900 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
                <div className="flex items-end">
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    2016-present
                  </p>
                </div>
              </Link>

              <Link
                href="https://twitter.com/designandbanter"
                target="_blank"
                className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-950 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
              >
                <div className="p-1">
                  <Image
                    src="/logos/designandbanter.svg"
                    alt="Picture of the author"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-50">Design+Banter</p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    Co-organiser
                  </p>
                </div>
                <div className="border-b border-solid border-gray-900 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
                <div className="flex items-end">
                  <p className="text-sm text-gray-500 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                    2013-2015
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col lg:flex-row justify-center items center text-center lg:text-left gap-4 pb-16 lg:pb-2 lg:pt-6 lg:justify-between border-t border-gray-900">
          <p className="text-sm text-gray-400">© 2023, Sam Willis Design.</p>
          <p className="text-sm text-gray-400">
            Built with ❤ (also Tailwind, Vercel & NextJS) by me.
          </p>
        </div>
      </div>
    </main>
  );
}
