import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";
import { Icon } from "../components/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper/modules";

import "swiper/css/zoom";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";

import "swiper/css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-950">
      <div className="fixed bg-gray-800/50 bottom-10 left-2/4 flex flex-row gap-1 p-1 rounded-full items-center -translate-x-2/4 z-20 border border-gray-800 backdrop-blur-md">
        <Link
          href="mailto:hey@samwill.is"
          target="_blank"
          className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-800"
        >
          <Icon name="email" className="fill-gray-500" size={16} />
        </Link>
        <Link
          href="https://twitter.com/thesamwillis"
          target="_blank"
          className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-800"
        >
          <Icon name="twitter" className="fill-gray-500" size={16} />
        </Link>
        <Link
          href="https://linkedin.com/in/samjwillis"
          target="_blank"
          className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-800"
        >
          <Icon name="linkedin" className="fill-gray-500" size={16} />
        </Link>
        <Link
          href="https://dribbble.com/sjwillis"
          target="_blank"
          className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-800"
        >
          <Icon name="dribbble" className="fill-gray-500" size={16} />
        </Link>
        <Link
          href="https://threads.net/@samwill.is"
          target="_blank"
          className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-800"
        >
          <Icon name="threads" className="fill-gray-500" size={16} />
        </Link>
      </div>
      <div className="flex flex-col max-w-xl mx-auto py-16 px-4 gap-16">
        <div className="flex flex-row gap-4 px-3">
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
        <div className="flex flex-col px-3 items-start">
          <p className="text-gray-50 text-base mb-2">
            Hey, I&apos;m Sam—a product designer based in London, UK.
          </p>
          <p className="text-gray-500 text-base mb-2">
            I&apos;ve spent the past 10+ years helping companies translate
            vision into reality, and design into competitive advantage.
          </p>
          <p className="text-gray-500 text-base mb-8">
            I&apos;m currently working at{" "}
            <Link
              href="https://duffel.com"
              target="_blank"
              className="hover:text-white underline"
            >
              Duffel
            </Link>
            , where we&apos;re building the future of travel, and on the side
            making{" "}
            <Link
              href="https://alba.art"
              target="_blank"
              className="hover:text-white underline"
            >
              Alba
            </Link>
            , an open platform for launching generative art on Ethereum.
          </p>
          <div className="border rounded-full border-gray-900 px-4 py-2 text-sm text-gray-500 flex flex-row gap-3 items-center">
            <span className="h-2 w-2 bg-red-700 rounded-full"></span>
            <span>Unavailable for new projects</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="title mb-2">Selected work</p>
          <div className="px-3">
            <Swiper
              loop={true}
              modules={[EffectFade, Navigation, Pagination]}
              pagination={{
                el: ".swiper-pagination",
                type: "fraction",
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              slidesPerView={1}
              centeredSlides={true}
              spaceBetween={24}
              effect={"fade"}
              className="mySwiper relative"
            >
              <SwiperSlide>
                <div className="bg-gray-900 rounded-xl mb-4">
                  <Image
                    src="/selected-work/alba-project-page.png"
                    alt=""
                    width={600}
                    height={400}
                  />
                </div>
                <p className="text-sm text-gray-500 bg-gray-950">
                  Alba — project page
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-900 rounded-xl mb-4">
                  <Image
                    src="/selected-work/duffel-stays.png"
                    alt=""
                    width={600}
                    height={400}
                  />
                </div>
                <p className="text-sm text-gray-500 bg-gray-950">
                  Duffel — stays search in dashboard
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-900 rounded-xl mb-4">
                  <Image
                    src="/selected-work/duffel-links-mob.png"
                    alt=""
                    width={600}
                    height={400}
                  />
                </div>
                <p className="text-sm text-gray-500 bg-gray-950">
                  Duffel — white-label booking flow
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-900 rounded-xl mb-4">
                  <Image
                    src="/selected-work/duffel-insights.png"
                    alt=""
                    width={600}
                    height={400}
                  />
                </div>
                <p className="text-sm text-gray-500 bg-gray-950">
                  Duffel — merchant insights
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-900 rounded-xl mb-4">
                  <Image
                    src="/selected-work/incident-logo.png"
                    alt=""
                    width={600}
                    height={400}
                  />
                </div>
                <p className="text-sm text-gray-500 bg-gray-950">
                  Incident — logo design
                </p>
              </SwiperSlide>
              <div className="flex flex-row gap-2 absolute bottom-0 right-0">
                <div className="swiper-button-prev">&larr;</div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next">&rarr;</div>
              </div>
            </Swiper>
          </div>
        </div>
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
    </main>
  );
}
