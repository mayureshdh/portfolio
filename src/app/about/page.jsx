"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            {/* <Image
              src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            /> */}
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Accomplished software engineer with a distinguished track record
              in developing scalable frontends using cutting-edge technologies
              such as NextJS, ReactJS, and NodeJS. Known for seamlessly
              integrating backend systems, optimizing performance, and enhancing
              SEO strategies. A natural leader, I have mentored junior
              developers, cultivating their skills and instilling best practices
              to elevate team performance. Beyond technical expertise, I have
              played a pivotal role in recruitment efforts, contributing to the
              formation of a dynamic and skilled development team. My commitment
              to innovation and collaborative leadership has consistently driven
              success in the ever-evolving landscape of software development.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              "Innovative software engineer specializing in scalable frontend
              development, backend integration, and mentorship, with a proven
              impact on team growth and project optimization".
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="388"
                height="186"
                viewBox="0 0 388 186"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 89C2.34335 85.2232 5.16256 81.3382 6.55556 77.8889C9.62919 70.278 12.828 63.3151 14 55.1111C15.4606 44.8867 15 34.5229 15 24.2222C15 19.6102 17.7709 16.3534 18 12C18.183 8.5234 18 14.5415 18 15.2778C18 20.5547 17.1299 26.2598 19.5556 31.1111C22.5534 37.1068 23.9827 44.048 28 49.5C33.8309 57.4133 39.4807 60 49.7778 60C70.2185 60 70.446 30.7158 70 16.4444C69.9386 14.4805 65.9929 26.0376 65.5556 27.5556C63.6787 34.0693 64 40.5233 64 47.2222C64 55.4747 62.904 64.0186 65.7778 71.7778C66.831 74.6216 68.4086 77.8005 72 78C75.3489 78.186 79.685 80.3458 82.9444 78.4444C91.9486 73.192 96 60.7118 96 51C96 45.8306 92.7414 42.4213 88.4444 48.2222C83.8559 54.4168 83 61.3934 83 68.9444C83 75.2312 86.4876 75.7258 92.5556 74.8889C100.804 73.7511 105 66.3828 105 58.5C105 55.4734 106.907 58.7814 108.056 53.6111C108.126 53.2929 113.019 62.9847 115.222 63.7778C121.594 66.0715 128.728 63.2188 131 57C132.205 53.7017 134 51.0752 134 47.5C134 44.8247 134 49.4141 134 50C134 75.2648 136.131 101.461 133.944 126.611C133.662 129.865 130.059 143.141 126 133.5C123.652 127.923 119.587 123.55 118.222 117.222C117.263 112.775 118 107.528 118 103C118 94.9325 117.883 89.1228 121.444 82C122.779 79.3314 125.338 72.6462 129 72C130.353 71.7611 130.271 69.5118 131.5 68.5556C132.707 67.6169 134.402 66.9354 135.778 66C136.913 65.228 138.425 64.5271 139.611 64C142.326 62.7932 142.75 59.5674 144.944 57.5556C147.257 55.4361 148.501 50.4919 149.056 47.4444C150.814 37.7748 150 53.2395 150 56.2222C150 60.2307 151.118 65.2379 154.222 67.7778C158.57 71.3354 167.246 68.7707 170 64.7778C173.397 59.8525 174 54.7563 174 49C174 45.4079 174 55.8422 174 57.5C174 64.7327 179.527 66 185.5 66C189.581 66 190.032 62.1426 191.5 59.5C192.571 57.5729 192.037 51.2892 193.222 50.2222C200.373 43.7861 204.209 69.4467 204 73C203.675 78.5189 199.32 68.8754 199.222 68.7778C196.97 66.5259 198 61.4751 198 58.5C198 55.5118 203.861 54.2361 205.944 52.5C209.399 49.621 212.054 46.2923 215 43C216.357 41.4832 220.6 30.5379 215.778 32.4444C210.814 34.4069 203 43.5755 203 49.5C203 53.2727 218.91 55.7968 222 57C229.583 59.9523 238.344 62.8179 246.389 64.0556C248.971 64.4528 248.058 69.9361 247.778 71.5556C246.693 77.8259 241.555 82.364 236.778 86.0556C231.442 90.1786 225.015 93.1796 218.444 94.7778C213.103 96.077 214 92.2137 214 87.8333C214 79.7391 212.887 70.6241 215.222 62.7778C218.528 51.6694 225.788 42.4779 231.222 32.3333C234.523 26.1728 237.572 20.2428 240.056 13.7222C240.75 11.8983 244.966 -0.0595578 245 1.66667C245.274 15.6433 244.773 29.6333 245.056 43.6111C245.346 57.9831 247.73 72.256 248 86.5556C248.007 86.9478 249.374 96.9576 249.944 94.3889C251.1 89.1899 252.66 83.9443 253.556 78.6667C254.884 70.8357 257.234 63.2427 259.056 55.5C259.185 54.9507 263.761 39.9424 264.389 40.4444C265.647 41.4512 262.627 49.001 262.389 49.7778C259.713 58.5034 256.625 66.9392 252.778 75.2222C241.644 99.1945 230.454 121.881 215.111 143.556C214.616 144.255 203.169 159.07 202.222 158.333C201.466 157.745 202.202 153.352 202.222 153.111C202.947 144.411 204.31 135.698 207.889 127.667C215.348 110.928 226.376 100.228 243.556 94.5556C250.007 92.4253 256.524 90.1315 263.111 88.4444C263.516 88.3408 267.4 88.0142 267.222 88.1667C257.09 96.8515 243.695 102.471 231.778 108C213.411 116.521 194.736 124.025 175.889 131.389C165.834 135.318 155.763 139.819 145.222 142.333C141.956 143.112 141.624 141.923 143.111 139.111C147.352 131.091 155.16 125.201 163.167 121.389C186.25 110.397 211.726 103.402 236.444 97.2222C255.343 92.4975 274.789 88.423 294.333 88C295.846 87.9672 312.983 86.366 310.944 89.6667C296.507 113.041 265.42 127.085 241.444 137.556C212.662 150.125 182.584 159.502 152.778 169.278C138.259 174.04 123.425 180.539 108.444 183.778C105.527 184.409 106.384 182.453 107.333 180.333C112.679 168.402 120.998 157.937 130.222 148.778C178.088 101.251 247.546 78.2061 309.556 56.6667C331.899 48.9054 354.493 41.917 377.056 34.8333C380.068 33.8876 382.85 33 386 33"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JAVA
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebGL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Software Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Built scalable frontend decoupled from backend systems
                    (NextJS, ReactJS, NodeJS).optimizing performance & SEO.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-blue-900 text-sm font-semibold">
                    2022 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Logixal Solution
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div
                      className="absolute w-5 h-5 rounded-full ring-4
                     ring-blue-900 bg-white -left-2"
                    ></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-900 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Associate Software Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Migrated monolith to scalable polylithic architecture
                    (NextJS, Micro-FE.) Smoother transition from Babel to SWC
                    compiler, optimized performance.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-blue-800 text-sm font-semibold">
                    2020 - 2022{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Logixal Solution
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Trainee Engineer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Spearheaded web performance optimization, NodeJS & Webpack
                    upgrades. Upgraded React,service workers, Redux..{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-blue-900 text-sm font-semibold">
                    2018 - 2020{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div
                      className="absolute w-5 h-5 rounded-full ring-4
                     ring-blue-900 bg-white -left-2"
                    ></div>
                  </div>
                  <a
                    href="https://mayureshdh.github.io/images/cv.pdf"
                    download="cv"
                    className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
                  >
                    Download CV
                  </a>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
