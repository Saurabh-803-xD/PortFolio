import React from "react";
import { techStackDetails } from "../Details";
import AOS from "aos";
import { useEffect } from "react";
import "./stars.scss";

function Technologies() {
  const {
    html,
    css,
    js,
    rn,
    react,
    redux,
    tailwind,
    vscode,
    git,
    github,
    npm,
    postman,
    express,
    mongodb,
    nextjs,
    cgpt,
    kafka,
    redis,
    postgre
  } = techStackDetails;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="container mx-auto w-[80%] mt-10 pt-10 pb-20 h-full z-90">
      <section
        data-aos="fade-down"
        data-aos-duration="700"
        data-aos-easing="linear"
      >
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech <span className="text-gradient">Stack /</span>
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>

      <div className="icon-container grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-2">
        <div
          className="flex items-center justify-center bg-white bg-opacity-10 p-4 rounded-lg"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img
            src={html}
            title="html"
            alt="HTML"
            className="icon w-14 h-14 object-contain"
          />
        </div>
        <div
          className="flex items-center justify-center bg-black bg-opacity-10 p-4 rounded-lg shadow-lg shadow-slate-300 dark:shadow-slate-900"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img
            src={css}
            title="CSS"
            alt="CSS"
            className="icon w-14 h-14 object-contain"
          />
        </div>
        <div
          className="flex items-center justify-center bg-white bg-opacity-10 p-4 rounded-lg"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img
            src={js}
            title="JavaScript"
            alt="JavaScript"
            className="icon w-12 h-12 object-contain"
          />
        </div>
        <div
          className="flex items-center justify-center bg-opacity-10 p-4 rounded-lg shadow-lg shadow-slate-300 dark:shadow-slate-900 bg-black"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img
            src={react}
            title="React"
            alt="React"
            className="icon w-full h-full object-contain"
          />
        </div>
        <div
          className="flex items-center justify-center bg-white bg-opacity-10 p-4 rounded-lg"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img
            src={redux}
            title="Redux"
            alt="Redux"
            className="icon w-12 h-12 object-contain"
          />
        </div>
        <div
          className="flex items-center justify-center bg-black bg-opacity-10 p-4 rounded-lg shadow-lg shadow-slate-300 dark:shadow-slate-900"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img
            src={tailwind}
            title="Tailwind CSS"
            alt="Tailwind CSS"
            className="icon w-full h-full object-contain"
          />
        </div>
        <div
          className="flex items-center justify-center bg-white bg-opacity-10 p-4 rounded-lg"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img
            src={mongodb}
            title="MongoDB"
            alt="MongoDB"
            className="icon w-full h-full object-contain"
          />
        </div>
        <div
          className="flex items-center justify-center shadow-lg shadow-slate-300 dark:shadow-slate-900 bg-black bg-opacity-10 p-4 rounded-lg"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img
            src={nextjs}
            title="Next.js"
            alt="Next.js"
            className="icon w-full h-full object-contain"
          />
        </div>
        <div
          className="flex items-center justify-center bg-white bg-opacity-10 p-4 rounded-lg"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img
            src={express}
            title="Express"
            alt="Express"
            className="icon w-full h-full object-contain"
          />
        </div>
        <div
          className="flex items-center justify-center shadow-lg shadow-slate-300 dark:shadow-slate-900 bg-black bg-opacity-10 p-4 rounded-lg"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img
            src={rn}
            title="react Native"
            alt="react Native"
            className="icon w-full h-full object-contain "
          />
        </div>
        <div
          className="flex items-center justify-center shadow-lg shadow-slate-300 dark:shadow-slate-900 bg-black bg-opacity-10 p-4 rounded-lg"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img
            src={kafka}
            title="kafka"
            alt="kafka"
            className="icon w-full h-full object-contain "
          />
        </div>
        <div
          className="flex items-center justify-center shadow-lg shadow-slate-300 dark:shadow-slate-900 bg-black bg-opacity-10 p-4 rounded-lg"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img
            src={redis}
            title="redis"
            alt="redis"
            className="icon w-full h-full object-contain "
          />
        </div>
        <div
          className="flex items-center justify-center shadow-lg shadow-slate-300 dark:shadow-slate-900 bg-black bg-opacity-10 p-4 rounded-lg"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img
            src={postgre}
            title="postgre"
            alt="postgre"
            className="icon w-full h-full object-contain "
          />
        </div>
      </div>

      <section
        data-aos="fade-down"
        data-aos-duration="700"
        data-aos-easing="linear"
      >
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools <span className="text-gradient"> /</span>
        </h1>
      </section>

      <div className="icon-container grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-2">
        <div
          className="flex items-center justify-center bg-white bg-opacity-10 p-4 rounded-lg"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img
            src={github}
            title="Github"
            alt="Github"
            className="icon w-full h-full object-contain"
          />
        </div>
        <div
          className="flex items-center justify-center shadow-lg shadow-slate-300 dark:shadow-slate-900 bg-black bg-opacity-10 p-4 rounded-lg"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img
            src={git}
            title="Git"
            alt="Git"
            className="icon w-full h-full object-contain"
          />
        </div>
        <div
          className="flex items-center justify-center bg-white bg-opacity-10 p-4 rounded-lg"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img
            src={npm}
            title="NPM"
            alt="NPM"
            className="icon w-full h-full object-contain"
          />
        </div>
        <div
          className="flex items-center justify-center shadow-lg shadow-slate-300 dark:shadow-slate-900 bg-black bg-opacity-10 p-4 rounded-lg"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img
            src={postman}
            title="Postman"
            alt="Postman"
            className="icon w-full h-full object-contain"
          />
        </div>
        <div
          className="flex items-center justify-center bg-white bg-opacity-10 p-4 rounded-lg"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img
            src={vscode}
            title="Visual Studio Code"
            alt=""
            className="icon w-12 h-12 object-contain"
          />
        </div>
        <div
          className="flex items-center justify-center shadow-lg shadow-slate-300 dark:shadow-slate-900 bg-black bg-opacity-10 p-4 rounded-lg"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img
            src={cgpt}
            title="Chat gpt"
            alt=""
            className="icon w-16 h-16 object-contain"
          />
        </div>
      </div>
    </main>
  );
}
export default Technologies;
