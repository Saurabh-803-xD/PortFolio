import React from "react";
import Work from "../Components/Work";
import {eduDetails } from "../Details";

function About() {
  return (
    <main className="mx-auto w-[80%] pt-20 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        data-aos="fade-left" data-aos-duration="400" data-aos-easing="linear">
          About <span className="text-gradient">Me /</span>
        </h1>
        <p className="text-content py-8 lg:max-w-3xl"
        data-aos="fade-left" data-aos-duration="600" data-aos-easing="linear">I am <span className=" font-bold">Saurabh Verma</span>, a dynamic individual from Kanpur, Uttar Pradesh, currently pursuing my Masters at NIT Jamshedpur. <br/>
      </p>
      <p className="text-content py-8 lg:max-w-3xl"
      data-aos="fade-left" data-aos-duration="600" data-aos-easing="linear">
      
      Aspiring Software Developer with expertise in front-end technologies like HTML, CSS, and JavaScript (React.js, Next.js) and back-end frameworks including Node.js, Express, MongoDB, PostgreSQL, Kafka, and Redis.<br/><br/>
      Proven ability to build scalable, innovative web applications that drive transformation. Committed to leveraging technology for impactful solutions and advancing a fulfilling career in software development</p>
      </section>
      <section>
        <h1 className="text-2xl mt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        data-aos="fade-down" data-aos-duration="400" data-aos-easing="linear">
          Education
        </h1>
        <div>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
        </div>
      </section>
    </main>
  );
}

export default About;
