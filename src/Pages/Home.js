import React, { useEffect } from "react";
import img from "../assets/ui/1.png";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./stars.scss";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <main
      className="h-full mx-auto w-[90%] xl:w-[80%] section flex flex-col md:flex-row justify-evenly items-center my-6 gap-6"
      id="home"
    >
      <div
  className="flex justify-center md:justify-start md:flex-1 relative"
  data-aos="fade-right"
  data-aos-duration="800"
  data-aos-easing="linear"
>
  <div className="relative w-72 h-72 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[26rem] xl:h-[26rem] bg-gradient-to-r from-white via- to-blue-600 rounded-full shadow-lg p-1">
    <img
      className="rounded-full w-full h-full object-cover"
      src={img}
      alt="Saurabh Verma"
    />
  </div>
</div>

      <div
        className="flex flex-col items-center md:items-start md:flex-1"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-easing="linear"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-dark-heading dark:text-light-heading font-semibold text-center md:text-left">
          Hello, I'm<br />
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-600 text-transparent font-bold text-center md:text-left">
          Saurabh Verma
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-dark-heading dark:text-light-heading font-semibold text-center md:text-left">
          Fullstack Developer
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-5">
          <button
            className="bg-black gradient-border hover:bg-gradient-to-r from-sky-500 via-purple-500 to-pink-600 dark:text-light-heading font-bold py-2 px-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:text-black"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-easing="linear"
          >
            My Resume
          </button>
          <div
            className="flex gap-4"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-easing="linear"
          >
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              className="social_icon w-[2.3rem]"
              onClick={() => window.open("https://www.linkedin.com/in/saurabh-verma-069823190/")}
            />
            <img
              src={github}
              alt="My GitHub profile"
              className="social_icon w-[2rem]"
              onClick={() => window.open("https://github.com/Saurabh-803-xD")}
            />
            <img
              src={instagram}
              alt="My Instagram profile"
              className="social_icon w-[1.9rem]"
              onClick={() => window.open("https://www.instagram.com/saurabhv_803/")}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;


// import {React,useEffect} from "react";
// import img from "../assets/ui/1.png";
// import github from "../assets/github.svg";
// import linkedin from "../assets/linkedin.svg";
// import instagram from "../assets/instagram.svg";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import "./stars.scss";


// function Home() {
//   useEffect(() => {
//     AOS.init();
//   }, []);
  
//   return (
//     <main
//       className="h-full mx-auto w-[80%] section md:flex justify-evenly items-center my-3 gap-4"
//       id="home"
//     >

//       <div className="mt-6 md:mt-0 md:items-center md:flex-wrap"
//        data-aos="fade-right" data-aos-duration="800" data-aos-easing="linear">
//         <img
//           className="md:ml-auto rounded-full w-72 h-72 md:w-auto md:h-auto"
//           src={img}
//           alt="saurabh"
//         />
//       </div>
//       <div className="md:items-center"  data-aos="fade-left" data-aos-duration="800" data-aos-easing="linear">
//         <h1
//           className="text-3xl text-dark-heading dark:text-light-heading md:text-xl xl:text-2xl xl:leading-tight font-semibold">
//           Hello, I'm<br></br>
//         </h1>
//         <h1
//           className="text-4xl bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-600 text-transparent md:text-2xl xl:text-5xl xl:leading-tight font-bold">
//           Saurabh Verma
//         </h1>
//         <h2
//           className="text-3xl text-dark-heading dark:text-light-heading md:text-xl xl:text-2xl xl:leading-tight font-semibold">
//           Fullstack Developer
//         </h2>
//         <div
//           className="flex pt-5 justify-items-start gap-6">
//           <button
//             className="bg-black gradient-border hover:bg-gradient-to-r from-sky-500 via-purple-500 to-pink-600 dark:text-light-heading  font-bold py-2 px-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:text-black hover:font-bold"
//             data-aos="fade-left" data-aos-duration="800" data-aos-easing="linear">
//             My Resume
//           </button>
//           <div
//             className="flex gap-2"
//             data-aos="fade-left" data-aos-duration="800" data-aos-easing="linear"
//           >
//             <img
//               src={linkedin}
//               alt="My linkedin profile"
//               className="social_icon w-[2.3rem]"
//               onClick={() => window.open("https://www.linkedin.com/in/saurabh-verma-069823190/")}            />
//             <img
//               src={github}
//               alt="My Github profile"
//               className="social_icon w-[2rem]"
//               onClick={() => window.open("https://github.com/Saurabh-803-xD")}
//             />
//             <img
//               src={instagram}
//               alt="My instagram profile"
//               className="social_icon w-[1.9rem]"
//               onClick={() => window.open("https://www.instagram.com/saurabhv_803/")}
//             />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Home;
