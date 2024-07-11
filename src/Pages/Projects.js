import React, { useEffect } from 'react';
import Project from "../Components/Project";
import { projectDetails } from "../Details";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="container mx-auto w-[80%] mt-20 mb-20">
      <section>
        <h1 className="text-2xl text-center text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        data-aos="fade-down" data-aos-duration="400" data-aos-easing="linear">
          <span className="text-gradient">My </span>Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            projectDetails.map(
              ({ title, image, description, techstack, previewLink, githubLink }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
