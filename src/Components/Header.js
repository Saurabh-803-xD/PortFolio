import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import {motion} from "framer-motion"

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`fixed mx-auto left-0 top-0 z-20 w-full ${
        sticky ? "bg-black text-white" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between lg:justify-evenly md:ml-10">
        <div className="mx-4">
       <a href="#home">
       <motion.div
                className="text-gradient font-bold text-3xl md:flex items-center md:space-x-5 md:mr-10 cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                {"<SAURABH/>"}
        </motion.div>
       </a>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-black" : "bg-black"
          } text-white/80 md:block hidden px-7 py-4 font-medium`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 navtext">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
         
        <div>{open? <RxCross1 />:<IoMdMenu />}</div>
          
         

        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 navtext"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header