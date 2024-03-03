"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-indigo-400 to-fuchsia-200",
    title: "BedBath&Beyond",
    desc: "Bed Bath & Beyond Inc. operates a nationwide chain of retail stores. The Company, through its retail stores, sells a wide assortment of merchandise principally including domestic merchandise and home furnishings, as well as food, giftware, health and beauty care items, and infant and toddler merchandise.",
    img: "https://mayureshdh.github.io/images/Screenshot%202024-03-03%20173122.png",
    link: "https://www.bedbathandbeyond.com/",
  },
  {
    id: 2,
    color: "from-fuchsia-200 to-purple-400",
    title: "Broadleaf Commerce",
    desc: "The tech stack consists of a full suite of eCommerce capabilities including browse and search, cart, checkout, catalog management.",
    img: "https://mayureshdh.github.io/images/Screenshot%202024-03-03%20174722.png",
    link: "https://www.broadleafcommerce.com/",
  },
  {
    id: 3,
    color: "from-purple-400 to-fuchsia-200",
    title: "BFF Backend For FrontEnd",
    desc: "Designed and implemented a Next.js application serving as the frontend layer, decoupled from backend systems. Integrated with multiple backend services to fetch data and handle business logic efficiently.",
    img: "https://mayureshdh.github.io/images/Screenshot%202024-03-03%20175833.png",
    link: "https://headless.logixal.com/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-fuchsia-200 to-indigo-400" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-black">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Software Engineer & Front-end Developer
              </textPath>
            </text>
          </motion.svg>
          <a
            href="https://mayureshdh.github.io/images/cv.pdf"
            download="cv"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Download CV
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;