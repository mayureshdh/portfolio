"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className=" h-full flex lg:flex-row flex-col px-4 sm:px-8 md:px-12
    lg:px-20 xl:px-48"
      >
        {/* {imageContainer} */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="./hero1.png" alt="" fill className="object-contain" />
        </div>
        {/* {textContainer} */}
        <div
          className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 
        items-center justify-center"
        >
          {/* title */}
          <h1 className="text-4xl md:text-5.5xl font-bold">
            Front-End Developer,Software Engineer
          </h1>
          {/* Description */}
          <p className="md:text-xl">
            5+ years crafting responsive web apps with React, NextJS, NodeJS &
            Javascript. Expert in state management (Redux) & build tools
            (Webpack). Proficient in HTML5, Bootstrap & Java. Senior Engineer
            and mentor contributing to team growth and efficient software
            design, passionate about learning & delivering exceptional user
            experiences.{""}
          </p>
          <div className=" w-full flex gap-4">
            {/* Buttons */}
            <Link href="/portfolio" className="flex justify-end">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                My Work
              </button>
            </Link>
            <Link href="/about" className="flex justify-end">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
