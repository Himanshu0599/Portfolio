import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import foodAddaImg from '../Assets/food-Add.png'
const  Projects=()=> {
  return (
    <>
    <div className="project w-screen h-screen overflow-auto bg-black">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // exit={{ x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="px-6 mx-auto space-y-8 max-w-7xl md:px-8 md:space-y-16 pt-6 lg:pt-10 h-screen font-Poppins  "
      >
 
        <div className="mx-8 lg:mx-10 ">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl font-ubuntu mt-10 ">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400 font-ubuntu tracking-tighter pb-6 border-b border-white/20">
            Projects that I made during my journey 🎉
          </p>
          <div className="projects-card-wrapper flex justify-center flex-col gap-8 items-center w-full pt-30">
           <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // exit={{ x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="card group mb-7 flex flex-col w-full md:w-[80%] rounded-lg border border-white/20 bg-[radial-gradient(_rgba(255,255,255,0.2)_1px,transparent_1px_)]  bg-[length:1.1rem_1.1rem] bg-[50%_50%] "
            >
              <img
                className="img w-full rounded-lg rounded-b-none   bg-white"
                src={foodAddaImg}
              ></img>
              <div className="details w-full text-white font-Poppins  px-4 py-2 md:px-8 md:py-8 flex flex-col gap-6 relative">
                <div className="project-name text-yellow-500 text-xl md:text-3xl ">
                  Food-Adda-app
                </div>
                <div className="project-details text-xs   text-zinc-200 md:text-sm md:leading-6 tracking-wide ">
                  <p>
                  Introducing Food-Adda, a cutting-edge food ordering app that harnesses 
                  the power of the Swiggy live API for real-time data. Immerse yourself in 
                  a culinary journey as you discover the finest nearby restaurants and 
                  their mouthwatering dishes. With intuitive features allowing you to refine 
                  your search by location, delivery time, cost, and ratings, Food-Adda guarantees 
                  an intelligent and personalized user experience, ensuring your cravings are satisfied 
                  effortlessly and with absolute delight.
                  </p>
                </div>
                <div className="project-stack text-sm border-b border-white/20 pb-4 text-zinc-400">
                  <ul className="flex justify-around pt-4">
                    <li>React.js</li>
                    <li>Redux toolkit</li>
                    <li>Javascript</li>
                    <li>Tailwind CSS</li>
                    <li>React Router</li>
                    <li>Parcel</li>
                  </ul>
                </div>
                <div className="project-links">
                  <div className="md:mt-6 mb-3 flex justify-end gap-10 items-center">
                    <a
                      href="https://github.com/Himanshu0599/FOOD-ADDA-APP"
                      className="hover:-translate-y-1 transition-all z-[3]"
                      target="_blank"
                      rel="noreferrer"
                      cursor="pointer"
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
                      href="https://food-adda-india.netlify.app/"
                      className="hover:-translate-y-1 transition-all z-[3]"
                      target="_blank"
                      rel="noreferrer"
                      cursor="pointer"
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
                <div className="blob h-full w-full absolute left-0 top-0 z-[2] bg-[radial-gradient(_800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,219,0,0.2),transparent_40%_)] opacity-0 group-hover:opacity-100 duration-500 transition-all"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </>
  )
}

export default Projects