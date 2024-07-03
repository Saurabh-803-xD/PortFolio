import React from "react";
import { techStackDetails } from "../Details";
import AOS from 'aos';
import { useEffect } from "react";


function Technologies() {
  const {
    html,
    css,
    js,
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
    java,
    c,
    vercel,
  } = techStackDetails;

    useEffect(() => {
      AOS.init();
    }, []);

  return (
    <main className="container mx-auto w-[70%] mt-10 pt-10 pb-20 h-[38rem]">
    <section data-aos="fade-left" data-aos-duration="700" data-aos-easing="linear">
      <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
        Tech <span className="text-gradient">Stack /</span>
      </h1>
      <p className="text-content py-2 lg:max-w-3xl">
        Technologies I've been working with recently
      </p>
    </section>
    <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6"
    data-aos="fade-left" data-aos-duration="600" data-aos-easing="linear">
      <img src={html} title="html" alt="" className="icon"/>
      <img src={css} title="CSS" alt="" className="icon"/>
      <img src={js} title="JavaScript" alt="" className="icon"/>
      <img src={react} title="React" alt="" className="icon"/>
      <img src={redux} title="Redux" alt="" className="icon"/>
      <img src={tailwind} title="Tailwind CSS" alt="" className="icon"/>
      <img src={java} title="java" alt="" className="icon"/>
      <img src={c} title="c" alt="" className="icon"/>
      <img src={mongodb} title="mongodb" alt="" className="icon"/>
      <img src={nextjs} title="nextjs" alt="" className="icon"/>
      <img src={express} title="express" alt="" className="icon"/>
      <img src={vercel} title="vercel" alt="" className="icon bg-white rounded-full" />
    </section>
    <section data-aos="fade-left" data-aos-duration="700" data-aos-easing="linear">
      <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
              Tools <span className="text-gradient"> /</span>
      </h1>
    </section>
    <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6"
    data-aos="fade-left" data-aos-duration="600" data-aos-easing="linear">
      <img src={vscode} title="Visual Studio Code" alt="" className="icon"/>
      <img src={git} title="Git" alt="Git" className="icon"/>
      <img src={github} title="Github" alt="Github" className="icon"/>
      <img src={npm} title="NPM" alt="NPM" className="icon"/>
      <img src={postman} title="Postman" alt="Postman" className="icon"/>
    </section>
  </main>
  );
}
export default Technologies;