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
    <main className="container mx-auto w-[70%] mt-10 pt-10 pb-20 h-full">
    <section data-aos="fade-left" data-aos-duration="700" data-aos-easing="linear">
      <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
        Tech <span className="text-gradient">Stack /</span>
      </h1>
      <p className="text-content py-2 lg:max-w-3xl">
        Technologies I've been working with recently
      </p>
    </section>


    <div className="icon-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-2">
  <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg"
   data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear">
    <img src={html} title="html" alt="HTML" className="icon w-full h-full object-contain" />
  </div>
  <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg"
   data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear">
    <img src={css} title="CSS" alt="CSS" className="icon w-full h-full object-contain" />
  </div>
  <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg"
   data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear">
    <img src={js} title="JavaScript" alt="JavaScript" className="icon w-full h-full object-contain" />
  </div>
  <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg"
   data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear">
    <img src={react} title="React" alt="React" className="icon w-full h-full object-contain" />
  </div>
  <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg"
   data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear">
    <img src={redux} title="Redux" alt="Redux" className="icon w-full h-full object-contain" />
  </div>
  <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg"
   data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear">
    <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" className="icon w-full h-full object-contain" />
  </div>
  <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg"
   data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear">
    <img src={java} title="Java" alt="Java" className="icon w-full h-full object-contain" />
  </div>
  <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg"
   data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear">
    <img src={c} title="C" alt="C" className="icon w-full h-full object-contain" />
  </div>
  <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg"
   data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear">
    <img src={mongodb} title="MongoDB" alt="MongoDB" className="icon w-full h-full object-contain" />
  </div>
  <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg"
   data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear">
    <img src={nextjs} title="Next.js" alt="Next.js" className="icon w-full h-full object-contain" />
  </div>
  <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg"
   data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear">
    <img src={express} title="Express" alt="Express" className="icon w-full h-full object-contain" />
  </div>
  <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg"
   data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear">
    <img src={vercel} title="Vercel" alt="Vercel" className="icon w-full h-full object-contain" />
  </div>
</div>

    {/* <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6"
    data-aos="fade-left" data-aos-duration="600" data-aos-easing="linear">
      <div className="flex items-center justify-center bg-white bg-opacity-20 py-2 rounded-lg">
    <img src={html} title="html" alt="HTML" className="icon w-full h-full object-contain" />
      </div>
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
    </section> */}
    <section data-aos="fade-left" data-aos-duration="700" data-aos-easing="linear">
      <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
              Tools <span className="text-gradient"> /</span>
      </h1>
    </section>

    <div className="icon-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-2">
  <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg"
   data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear">
    <img src={github} title="Github" alt="Github" className="icon w-full h-full object-contain" />
  </div>
  <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg"
   data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear">
    <img src={git} title="Git" alt="Git"  className="icon w-full h-full object-contain" />
  </div>
  <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg"
   data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear">
    <img src={npm} title="NPM" alt="NPM" className="icon w-full h-full object-contain" />
  </div>
  <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg"
   data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear">
    <img src={postman} title="Postman" alt="Postman" className="icon w-full h-full object-contain" />
  </div>
  <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg"
   data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear">
    <img src={vscode} title="Visual Studio Code" alt=""  className="icon w-full h-full object-contain" />
  </div>
</div>
    {/* <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6"
    data-aos="fade-left" data-aos-duration="600" data-aos-easing="linear">
      <img src={vscode} title="Visual Studio Code" alt="" className="icon"/>
      <img src={git} title="Git" alt="Git" className="icon"/>
      <img src={github} title="Github" alt="Github" className="icon"/>
      <img src={npm} title="NPM" alt="NPM" className="icon"/>
      <img src={postman} title="Postman" alt="Postman" className="icon"/>
    </section> */}
  </main>
  );
}
export default Technologies;