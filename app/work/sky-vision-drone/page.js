import React from "react";
import { PROJECTS } from "@/app/components/constants";
import AnimatedCursor from "react-animated-cursor";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const page = () => {
  return (
    <section className=" bg-black text-white p-3">
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
      {PROJECTS.map((project, index) =>
        project.url === "sky-vision-drone" ? (
          <div
            key={index}
            className=" flex justify-center items-center flex-col">
            <img
              src={project.bg}
              className=" max-w-4xl max-h-[80vh] cursor-pointer relative pt-28 opacity-95"
            />

            <div className="overflow-hidden flex justify-center items-center absolute top-[15%] max-lg:top-[13%] max-sm:top-[12%] max-[450px]:top-[11%] pointer-events-none w-full">
              <h2 className=" animate-scrolling-text-horizontal font-Betatron text-[300px] max-lg:text-[200px] max-md:text-[150px] max-[450px]:text-[120px] font-bold text-stroke-trans">
                {project.name} {project.name} {project.name} {project.name}{" "}
                {project.name} {project.name} {project.name} {project.name}{" "}
                {project.name} {project.name} {project.name} {project.name}{" "}
                {project.name} {project.name} {project.name} {project.name}{" "}
              </h2>
            </div>
            <div className=" text-white flex justify-center items-center w-full  max-w-4xl py-16 border-b-2 border-white uppercase">
              <Link
                className=" flex justify-center items-center text-xl gap-1"
                href={project.link}
                target="_blank">
                <FiArrowUpRight className=" size-8" />
                <span className=" underline">{project.name}</span>
              </Link>
            </div>
            <div className=" text-white flex justify-between items-start w-full  max-w-4xl py-16 max-md:flex-col max-md:gap-5 max-md:text-center">
              <ul className=" max-md:w-full">
                {project.skills.map((skill, index) => (
                  <li key={index} className=" max-md:w-full max-md:text-xl">
                    {skill}
                  </li>
                ))}
              </ul>
              <p className=" text-lg max-w-md text-justify max-md:m-auto max-md:text-center">
                {project.description}
              </p>
            </div>

            <Link
              href="/"
              className=" fixed top-0 right-0 p-5 hover:rotate-180 duration-500">
              <IoMdClose className=" size-10" />
            </Link>
          </div>
        ) : null
      )}
    </section>
  );
};

export default page;
