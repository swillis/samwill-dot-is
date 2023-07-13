import * as React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
// import Lightbox from "yet-another-react-lightbox";
// import Inline from "yet-another-react-lightbox/plugins/inline";
// import slides from "@/Components/slides";
// import Counter from "yet-another-react-lightbox/plugins/counter";
// import Captions from "yet-another-react-lightbox/plugins/captions";
// import "yet-another-react-lightbox/styles.css";
// import "yet-another-react-lightbox/plugins/counter.css";
// import "yet-another-react-lightbox/plugins/captions.css";

import { Swiper, SwiperSlide, Navigation } from "swiper/react";
import "swiper/css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const toggleOpen = (state: boolean) => () => setOpen(state);

  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);

  return (
    <main className="bg-gray-900">
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
            <p className="text-sm text-gray-50">Sam Willis</p>
            <p className="text-sm text-gray-400">Product designer</p>
          </div>
        </div>
        <div className="flex flex-col px-3">
          <p className="text-gray-50 text-lg mb-2">
            Hey, I&apos;m Sam—a product designer based in London, UK.
          </p>
          <p className="text-gray-400 text-lg mb-8">
            I&apos;ve spent the past 10 years helping startups translate vision
            to reality, and design into a competitive advantage.
          </p>
          <div className="flex items-center gap-2">
            <Link
              href="mailto:hey@samwill.is"
              target="_blank"
              className="px-6 font-medium py-3 bg-gray-200 text-gray-900 rounded-md text-sm shadow-test hover:shadow-test-hover transition-all ease-in-out duration-300"
            >
              Request portfolio
            </Link>
            <Link
              href="https://linkedin.com/in/samjwillis"
              target="_blank"
              className="p-3 rounded-md hover:shadow-test-hover transition-all ease-in-out duration-300 ml-2"
            >
              <Image src="/logos/linkedin.svg" alt="" width={20} height={20} />
            </Link>
            <Link
              href="https://twitter.com/thesamwillis"
              target="_blank"
              className="p-3 rounded-md hover:shadow-test-hover transition-all ease-in-out duration-300"
            >
              <Image src="/logos/twitter.svg" alt="" width={20} height={20} />
            </Link>
            <Link
              href="https://dribbble.com/sjwillis"
              target="_blank"
              className="p-3 rounded-md hover:shadow-test-hover transition-all ease-in-out duration-300"
            >
              <Image src="/logos/dribbble.svg" alt="" width={20} height={20} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-gray-50 text-lg px-3">Selected work</p>
          <div className="px-3">
            {/* <Lightbox
              index={index}
              slides={[
                {
                  ...slides[0],
                  description: "Veliki zali, Dubravica, Croatia",
                },
                {
                  ...slides[1],
                  description: "Pedro Lastra ey West, Florida, United States",
                },
                {
                  ...slides[2],
                  description:
                    "Sean Oulashin North Shore, Waialua, Hawaii, United States",
                },
                {
                  ...slides[3],
                  description:
                    "Sean Oulashin North Shore, Waialua, Hawaii, United States",
                },
                {
                  ...slides[4],
                  description:
                    "Sean Oulashin North Shore, Waialua, Hawaii, United States",
                },
              ]}
              plugins={[Inline, Counter, Captions]}
              counter={{
                container: {
                  style: {
                    top: "unset",
                    bottom: "0",
                    right: "0",
                    left: "unset",
                    margin: "0",
                    padding: "0",
                  },
                },
              }}
              on={{
                view: updateIndex,
                click: toggleOpen(true),
              }}
              carousel={{
                padding: 0,
                spacing: 0,
                imageFit: "contain",
              }}
              inline={{
                style: {
                  width: "100%",
                  maxWidth: "900px",
                  aspectRatio: "3 / 2",
                  padding: "2rem",
                },
              }}
              render={
                {
                  // iconPrev: () => <AccessAlarm />,
                  // iconNext: () => <MyNextIcon />,
                  // iconClose: () => <MyCloseIcon />,
                }
              }
            />

            <Lightbox
              open={open}
              close={toggleOpen(false)}
              index={index}
              slides={slides}
              on={{ view: updateIndex }}
              animation={{ fade: 0 }}
              controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
            /> */}

            <Swiper
              loop={true}
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="swiper-slide">
                <div className="h-96 flex p-12">
                  <div className="flex flex-1 relative">
                    <Image
                      src="/selected-work/duffel-search.png"
                      alt=""
                      fill={true}
                      className="object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="h-96 flex p-12">
                  <div className="flex flex-1 relative">
                    <Image
                      src="/selected-work/duffel-guides.png"
                      alt=""
                      fill={true}
                      className="object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="h-96 flex p-12">
                  <div className="flex flex-1 relative">
                    <a href="#img1">
                      <Image
                        src="/selected-work/alba-mint-page.png"
                        alt=""
                        fill={true}
                        className="object-contain"
                      />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="h-96 flex p-12">
                  <div className="flex flex-1 relative">
                    <Image
                      src="/selected-work/duffel-links.png"
                      alt=""
                      fill={true}
                      className="object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="h-96 flex p-12">
                  <div className="flex flex-1 relative">
                    <Image
                      src="/selected-work/incident-logo.png"
                      alt=""
                      fill={true}
                      className="object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <div className="flex flex-row items-center justify-end gap-2 mt-4">
                <div className="swiper-button-prev">&larr;</div>
                {/* <div className="swiper-pagination"></div> */}
                <div className="swiper-button-next">&rarr;</div>
              </div>
            </Swiper>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-gray-50 text-lg px-3">Projects</p>
          <Link
            href="https://alba.art"
            target="_blank"
            className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-900 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
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
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                Designer/founder
              </p>
            </div>
            <div className="border-b border-solid border-gray-700 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
            <div className="flex items-end">
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                2023-present
              </p>
            </div>
          </Link>

          <Link
            href="https://gmstudio.art"
            target="_blank"
            className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-900 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
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
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                Product design
              </p>
            </div>
            <div className="border-b border-solid border-gray-700 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
            <div className="flex items-end">
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                2023
              </p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-gray-50 text-lg px-3">Full-time roles</p>
          <Link
            href="https://duffel.com"
            target="_blank"
            className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-900 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
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
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                Product design lead
              </p>
            </div>
            <div className="border-b border-solid border-gray-700 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
            <div className="flex items-end">
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                2020-present
              </p>
            </div>
          </Link>

          <Link
            href="https://memrise.com"
            target="_blank"
            className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-900 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
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
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                Design manager
              </p>
            </div>
            <div className="border-b border-solid border-gray-700 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
            <div className="flex items-end">
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                2019-2020
              </p>
            </div>
          </Link>

          <Link
            href="https://fatllama.com"
            target="_blank"
            className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-900 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
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
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                Product design lead
              </p>
            </div>
            <div className="border-b border-solid border-gray-700 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
            <div className="flex items-end">
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                2018-2019
              </p>
            </div>
          </Link>

          <Link
            href="https://gocardless.com"
            target="_blank"
            className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-900 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
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
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                Senior product designer
              </p>
            </div>
            <div className="border-b border-solid border-gray-700 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
            <div className="flex items-end">
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                2015-2018
              </p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-gray-50 text-lg px-3">Branding</p>
          <Link
            href="https://incident.io"
            target="_blank"
            className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-900 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
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
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                Logo design
              </p>
            </div>
            <div className="border-b border-solid border-gray-700 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
            <div className="flex items-end">
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                2021
              </p>
            </div>
          </Link>

          <Link
            href="https://dependabot.com"
            target="_blank"
            className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-900 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
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
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                Logo, brand & web design
              </p>
            </div>
            <div className="border-b border-solid border-gray-700 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
            <div className="flex items-end">
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                2018
              </p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-gray-50 text-lg mb-2">Events</p>
          <Link
            href="https://designclub.io"
            target="_blank"
            className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-900 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
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
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                Co-organiser
              </p>
            </div>
            <div className="border-b border-solid border-gray-700 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
            <div className="flex items-end">
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                2016-present
              </p>
            </div>
          </Link>

          <Link
            href="https://twitter.com/designandbanter"
            target="_blank"
            className="flex flex-row gap-4 rounded-lg grow align-baseline group bg-gray-900 p-3 hover:shadow-test z-10 hover:-z-0 transition-all ease-in-out duration-300"
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
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                Co-organiser
              </p>
            </div>
            <div className="border-b border-solid border-gray-700 flex grow mb-1 group-hover:border-gray-300 transition-all ease-in-out duration-300"></div>
            <div className="flex items-end">
              <p className="text-sm text-gray-400 group-hover:text-gray-50 transition-all ease-in-out duration-300">
                2013-2015
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
