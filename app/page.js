"use client";
import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { PROJECTS, SKILLS } from "./components/constants";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isTablet = typeof window !== "undefined" && window.innerWidth < 1000;
  const isMobile = typeof window !== "undefined" && window.innerWidth < 600;
  const backgroundColor = isMobile
    ? scrollPosition < 1400
      ? "bg-black"
      : scrollPosition > 2450
      ? "bg-black"
      : "bg-white"
    : isTablet
    ? scrollPosition < 2000
      ? "bg-black"
      : scrollPosition > 3000
      ? "bg-black"
      : "bg-white"
    : scrollPosition < 1500
    ? "bg-black"
    : scrollPosition > 2500
    ? "bg-black"
    : "bg-white";

  const [scrollRef1, inView1] = useInView({
    triggerOnce: true,
  });
  const [scrollRef2, inView2] = useInView({
    triggerOnce: true,
  });
  const [scrollRef3, inView3] = useInView({
    triggerOnce: true,
  });
  const [scrollRef4, inView4] = useInView({
    triggerOnce: true,
  });
  const [scrollRef5, inView5] = useInView({
    triggerOnce: true,
  });
  const [scrollRef6, inView6] = useInView({
    triggerOnce: true,
  });
  const [scrollRef7, inView7] = useInView({
    triggerOnce: true,
  });

  return (
    <main
      className={`${backgroundColor} text-white transition-colors duration-1000`}>
      <section
        className="max-2xl px-8 py-14 min-h-screen max-sm:py-5 max-[400px]:px-3"
        ref={scrollRef1}>
        <AnimatedCursor
          className="cursor"
          showSystemCursor={true}
          color="0,0,0,1"
          innerSize={0}
          innerStyle={{ cursor: "pointer" }}
          innerScale={2}
          outerSize={45}
          outerScale={2}
          outerStyle={{ background: "transparent", border: "1px solid white" }}
          outerAlpha={1}
          trailingSpeed={15}
        />
        <h4 className=" text-2xl font-bold font-Montserrat mb-12 inline-block cursor-default">
          ASSEM
        </h4>
        <div className="word-container h-full cursor-default max-lg:hidden flex justify-center items-start flex-col">
          <motion.div
            className=" overflow-hidden h-[240px] max-xl:h-[200px]"
            initial={{ translateY: 200 }}
            animate={inView1 && { translateY: 0 }}
            transition={{ duration: 0.5, delay: 0 }}>
            <h1 className="word font-Betatron text-[300px] max-xl:text-[250px] leading-[0.8] duration-500">
              ASSEM
              <br />
              <span className="text-stroke">WEB</span>
            </h1>
          </motion.div>

          <motion.div
            className=" overflow-hidden h-[210px] max-xl:h-[170px]"
            initial={{ translateY: 200 }}
            animate={inView1 && { translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <h1 className="word font-Betatron text-[250px] max-xl:text-[200px] leading-[0.8] delay-100 duration-500">
              <span className=" text-black text-stroke">NEDJAR</span>
              <br />
              DEVELOPER
            </h1>
          </motion.div>
        </div>

        <div
          className="word-container-x w-full h-full cursor-default lg:hidden flex justify-start items-end flex-col rotate-180 max-sm:h-[80%]"
          style={{ writingMode: "vertical-rl" }}>
          <motion.div
            className=" overflow-hidden w-[140px] max-sm:w-[110px]"
            initial={{ translateY: -200 }}
            animate={inView1 && { translateY: 0 }}
            transition={{ duration: 0.5, delay: 0 }}>
            <h1 className="word font-Betatron text-[170px] max-sm:text-[140px] leading-[0.8] duration-500">
              ASSEM
              <br />
              <span className="text-stroke">WEB</span>
            </h1>
          </motion.div>

          <motion.div
            className=" overflow-hidden w-[110px]  max-sm:w-[90px]"
            initial={{ translateY: -200 }}
            animate={inView1 && { translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <h1 className="word font-Betatron text-[140px] max-sm:text-[110px] leading-[0.8] delay-100 duration-500">
              <span className=" text-black text-stroke">NEDJAR</span>
              <br />
              DEVELOPER
            </h1>
          </motion.div>
        </div>

        <div className=" flex justify-between max-w-7xl lg:pt-32">
          <a className=" cursor-pointer inline-block after:w-full after:h-[1px] after:m-auto after:duration-500 after:delay-300 after:bg-white after:block hover:after:w-0 origin-center max-lg:hidden">
            ASSEMNED1000@GMAIL.COM
          </a>
          <p className=" max-lg:mt-20">
            AN INDEPENDENT CREATIVE DEVELOPER
            <br /> SPECIALIZED IN DIGITAL EXPERIENCES.
          </p>
        </div>

        <motion.div
          className=" cursor-pointer bg-primary hover:bg-white duration-1000 text-black overflow-hidden flex justify-center items-center fixed top-10 right-10 max-lg:absolute max-lg:w-16 max-sm:right-5 w-24 h-[90vh]"
          initial={{ height: 0, originY: 0 }}
          animate={inView1 && { height: "90%" }}
          transition={{ duration: 0.5, delay: 0 }}>
          <Link href="/form" className=" flex justify-center items-center ">
            <h2
              className=" animate-scrolling-text font-Betatron text-5xl font-bold"
              style={{ writingMode: "vertical-lr" }}>
              START A PROJECT : START A PROJECT : START A PROJECT : START A
              PROJECT : START A PROJECT : START A PROJECT : START A PROJECT :
              START A PROJECT : START A PROJECT : START A PROJECT : START A
              PROJECT : START A PROJECT : START A PROJECT : START A PROJECT :
              START A PROJECT : START A PROJECT : START A PROJECT : START A
              PROJECT : START A PROJECT : START A PROJECT : START A PROJECT :
              START A PROJECT : START A PROJECT : START A PROJECT : START A
              PROJECT : START A PROJECT : START A PROJECT : START A PROJECT :
              START A PROJECT : START A PROJECT : START A PROJECT : START A
              PROJECT : START A PROJECT : START A PROJECT : START A PROJECT :
              START A PROJECT : START A PROJECT : START A PROJECT : START A
              PROJECT : START A PROJECT : START A PROJECT : START A PROJECT :
              START A PROJECT : START A PROJECT : START A PROJECT : START A
              PROJECT : START A PROJECT : START A PROJECT : START A PROJECT :
              START A PROJECT : START A PROJECT : START A PROJECT : START A
              PROJECT : START A PROJECT : START A PROJECT : START A PROJECT :
              START A PROJECT : START A PROJECT : START A PROJECT : START A
              PROJECT : START A PROJECT : START A PROJECT : START A PROJECT :
              START A PROJECT : START A PROJECT : START A PROJECT :
            </h2>
          </Link>
        </motion.div>
      </section>

      <section className="max-2xl px-8 my-28 flex justify-center items-center flex-col gap-10 pb-60 max-sm:px-3">
        <motion.img
          src="/pic.png"
          className=" w-96 rounded-full max-sm:w-auto"
          ref={scrollRef2}
          initial={{ translateY: 300, opacity: 0 }}
          animate={inView2 && { translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
        />
        <motion.h1
          className="font-Betatron text-8xl max-md:text-7xl max-sm:text-5xl max-[400px]:text-4xl text-center"
          ref={scrollRef3}
          initial={{ translateY: 300, opacity: 0 }}
          animate={inView3 && { translateY: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0, staggerChildren: 0.1 }}>
          TURNING <span className="text-stroke">VISIONS</span>
          <br />
          <span className="text-stroke"> INTO</span> REALITY
        </motion.h1>
        <motion.p
          className=" uppercase text-center"
          initial={{ translateY: 300, opacity: 0 }}
          animate={inView3 && { translateY: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, staggerChildren: 0.1 }}>
          I am ASSEM. A Web Designer & Developer.
          <br /> I help Businesses to go online with a Simple and Professional
          Website
        </motion.p>
      </section>

      <section className=" my-60 text-black">
        <div className=" flex w-full flex-col" ref={scrollRef7}>
          {PROJECTS.map((project, index) => (
            <div key={index}>
              <Link
                href={`/work/${project.url}`}
                className={`project${index} uppercase w-full px-8 py-4 flex justify-start items-center gap-5 cursor-pointer hover:bg-black hover:text-white duration-500 border-[1px] border-black`}>
                <motion.h4
                  className=" font-Betatron text-8xl  max-md:text-7xl max-sm:text-6xl max-[450px]:text-5xl"
                  initial={{ translateY: 300, opacity: 0 }}
                  animate={inView7 && { translateY: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.2 * index,
                  }}>
                  {project.name}
                </motion.h4>
                <p className=" font-Montserrat">{`[0${index + 1}]`}</p>
              </Link>
              <div className={` project-bg${index} fixed max-w-2xl right-10`}>
                <img src={project.bg} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-2xl px-8 my-28 font-Montserrat pt-40 pb-10">
        <div className=" flex justify-start gap-20 max-md:flex-col max-md:items-center max-sm:gap-8">
          <h6 ref={scrollRef4}>Services</h6>
          <ul className=" text-2xl flex justify-between max-md:mr-0 w-full mr-32 text-center max-sm:flex-col">
            <motion.li
              initial={{ translateY: 300, opacity: 0 }}
              animate={inView4 && { translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}>
              UI/UX Design
            </motion.li>
            <motion.li
              initial={{ translateY: 300, opacity: 0 }}
              animate={inView4 && { translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              Website Development
            </motion.li>
            <motion.li
              initial={{ translateY: 300, opacity: 0 }}
              animate={inView4 && { translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}>
              Landing Page
            </motion.li>
            <motion.li
              initial={{ translateY: 300, opacity: 0 }}
              animate={inView4 && { translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}>
              E-Commerce Website
            </motion.li>
          </ul>
        </div>
      </section>

      <section className="max-2xl px-8 mt-28 mb-60 gap-20 flex justify-stretch w-full font-Montserrat max-md:flex-col max-md:items-center  max-sm:gap-10">
        <h6 ref={scrollRef5}>Skills</h6>
        <div className=" max-w-2xl grid grid-cols-4 gap-28 m-auto max-md:gap-16 max-sm:gap-10 max-[450px]:grid-cols-3">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ translateY: 200, opacity: 0 }}
              animate={inView5 && { translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className=" flex justify-between items-center flex-col">
              <img className=" h-14 max-sm:h-12" src={skill.picture} />
              <p className=" uppercase">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-2xl px-8 mt-28">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView6 && { scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className=" before:block before:h-[1px] before:w-full before:bg-white"></motion.div>
        <p
          className=" w-full pt-32 text-center font-Montserrat text-2xl font-medium"
          ref={scrollRef6}>
          We would love to hear about your next idea!
        </p>

        <motion.div
          className="  flex justify-center items-center flex-col"
          initial={{ opacity: 0 }}
          animate={inView6 && { opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <Link
            href="/form"
            className=" font-Betatron text-9xl max-lg:text-8xl max-sm:text-6xl text-center py-20 cursor-pointer">
            <span className="text-stroke">START </span>A <br />
            <span className="text-stroke"> PROJECT</span>
          </Link>
        </motion.div>
        <div className=" flex justify-between items-center w-full max-[450px]:text-center">
          <a className=" cursor-pointer inline-block after:w-full after:h-[1px] after:m-auto after:duration-500 after:delay-300 after:bg-white after:block hover:after:w-0 origin-center max-[450px]:text-center max-[450px]:m-auto ">
            ASSEMNED1000@GMAIL.COM
          </a>
          <p className=" w-60 max-lg:w-auto max-[450px]:hidden">ASSEM NEDJAR</p>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView6 && { scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className=" before:block before:h-[1px] before:w-full before:bg-white mt-20"></motion.div>
        <div className="flex justify-between max-[500px]:flex-col max-[500px]:text-center">
          <p className=" py-8 text-sm">
            © ASSEM NEDJAR. ALL RIGHTS RESERVED 2023.
          </p>

          <ul className=" flex justify-center items-center gap-5 text-xs mr-32 max-lg:mr-0 max-[500px]:mb-5">
            <a
              href="https://www.instagram.com/web_developer_100/"
              target="_blank"
              className=" cursor-pointer inline-block after:w-full after:h-[1px] after:m-auto after:duration-500 after:bg-white after:block hover:after:w-0 origin-center">
              INSTAGRAM
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100082322907007"
              target="_blank"
              className=" cursor-pointer inline-block after:w-full after:h-[1px] after:m-auto after:duration-500 after:bg-white after:block hover:after:w-0 origin-center">
              FACEBOOK
            </a>
            <a
              href="https://www.linkedin.com/in/assem-ned-b77494297/"
              target="_blank"
              className=" cursor-pointer inline-block after:w-full after:h-[1px] after:m-auto after:duration-500 after:bg-white after:block hover:after:w-0 origin-center">
              LINKEDIN
            </a>
          </ul>
        </div>
      </section>
    </main>
  );
}
