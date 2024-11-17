import React from 'react';
import { motion } from 'framer-motion';
import developerImg from '../Assets/programmer2.svg'
import Skill from './Skills';
import Projects from './Projects';

function Home() {
  return (
    <>
    <div className="home bg-black/90 w-screen h-screen overflow-hidden flex justify-between">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.2 }}
        className="w-[70%] h-full flex-col justify-start p-12 text-white mt-[215px] ml-[230px] pr-45"
      >
        <h1 className="text-gray-300 font-semibold text-5xl font-Ubuntu ">
          <span className="text-[#5FF4D1]" >Hi</span>,👋🏻 I'm Himanshu
        </h1>
        <h1 className="text-gray-300 text-3xl font-Ubuntu mt-10">A fullstack web developer</h1>
        <div className="mt-5 font-Poppins text-md">
          <p>
            I'm a passionate full stack web developer with a love for building interactive and user-friendly <br/>
            web applications. My journey in web development started with a curiosity about how websites<br/>
            work, and I quickly fell in love with the art of crafting digital experiences.
          </p>
          <br/>
          <p>
            With a solid foundation in both front-end and back-end technologies, I enjoy bringing ideas to<br/> life by combining
            creative designs with robust functionality. From responsive designs to dynamic <br/> database interactions,
            I thrive on solving complex challenges and delivering seamless solutions.
          </p>
          <br/>
          <p>
            Whether it's creating intuitive user interfaces or optimizing server performance,
            I'm dedicated to <br/> delivering high-quality code that exceeds expectations. I'm excited
            about continuous learning <br/> and staying up-to-date with the latest trends in web development to deliver modern and innovative solutions.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
        className="w-[40%] flex items-center relative h-full p-10 mt-10 pr-45"
      >
        <motion.img
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', damping: 10, stiffness: 100 }}
          src={developerImg}
          alt="Developer"
          className="w-full h-auto m-[-200px] bg-none border-none"
        />
      </motion.div>
    </div>
    </>
  );
}

export default Home;
