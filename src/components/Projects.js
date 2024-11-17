import React from "react";
import { motion } from "framer-motion";
import foodAddaImg from "../Assets/food-Add.png";
import fashionFactoryImg from "../Assets/fashion-factory.png";

const Projects = () => {
  // fashionFactoryImg from "../Assets/fashion-factory.png";
  const projects = [
      {
        img: fashionFactoryImg,
        name: "Fashion Factory - Clothing Shopping Application",
        description:
          "Fashion Factory is a modern and user-friendly Online Clothing brand Shopping Platform for Men and Women. This frontend project is built using a combination of technologies and libraries including Vite, React, Tailwind CSS, React Router Dom, React Icons, Redux Toolkit, etc.",
        stack: [
          "React + Vite",
          "Tailwind CSS",
          "React Router Dom",
          "React Icons",
          "Redux Toolkit",
          "React-lazy-load",
          "Swiper",
          "Redux Persist",
        ],
        github: "https://github.com/Himanshu0599/E-Commerce-App",
        live: "https://factoryfashionindia.netlify.app/",
      },
      {
        img: foodAddaImg,
        name: "Food-Adda-app",
        description:
          "Food-Adda is a cutting-edge food ordering app using the Swiggy live API for real-time data. Discover the finest nearby restaurants and their mouthwatering dishes with features like search by location, delivery time, cost, and ratings.",
        stack: [
          "React.js",
          "Redux Toolkit",
          "JavaScript",
          "Tailwind CSS",
          "React Router",
          "Parcel",
        ],
        github: "https://github.com/Himanshu0599/FOOD-ADDA-APP",
        live: "https://food-adda-india.netlify.app/",
      },
    ];
  return (
    <div className="project w-screen h-screen overflow-auto bg-black/90">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="px-6 mx-auto space-y-8 max-w-7xl md:px-8 md:space-y-16 pt-6 lg:pt-10 h-screen font-Poppins"
      >
        <div className="mx-8 lg:mx-10">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl font-ubuntu mt-10">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400 font-ubuntu tracking-tighter pb-6 border-b border-white/20">
            Projects that I made during my journey 🎉
          </p>
            {projects.map((project, index) => (
              // <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                  className="card group mb-7 flex flex-col w-full md:w-[80%] mx-auto rounded-lg border border-white/20 bg-[radial-gradient(_rgba(255,255,255,0.2)_1px,transparent_1px_)] bg-[length:1.1rem_1.1rem] bg-[50%_50%]"
                >
                  <img
                    className="img w-full rounded-lg rounded-b-none bg-white"
                    src={project.img}
                    alt={project.name}
                  />
                  <div className="details w-full text-white font-Poppins px-4 py-2 md:px-8 md:py-8 flex flex-col gap-6 relative">
                    <div className="project-name text-yellow-500 text-xl md:text-3xl">
                      {project.name}
                    </div>
                    <div className="project-details text-xs text-zinc-200 md:text-sm md:leading-6 tracking-wide">
                      <p>{project.description}</p>
                    </div>
                    <div className="project-stack text-sm border-b border-white/20 pb-4 text-zinc-400">
                      <ul className="flex flex-wrap justify-center gap-4 pt-4">
                        {project.stack.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="project-links flex justify-end gap-10 items-center mt-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:-translate-y-1 transition-all z-[3]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5FF4D1"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:-translate-y-1 transition-all z-[3]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5FF4D1"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-external-link"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
            ))}
          {/* </Swiper> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;

