import React from "react";
import "./hero.css";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
  scrollButton: {
    opacity: 0,
    // y: 10,
    transition: { duration: 2, repeat: Infinity },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrapperHero">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            NISARG SHAH
          </motion.h2>
          <motion.h1
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            Full Stack Developer and Web Developer
          </motion.h1>
          <motion.div
            className="buttons"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.button
              variants={textVariants}
              initial="initial"
              animate="animate"
              id="b1"
            >
              <a href="#Portfolio">See the latest works</a>
            </motion.button>
            <motion.button
              variants={textVariants}
              initial="initial"
              animate="animate"
              id="b2"
            >
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.img
          src="./images/scroll.png"
          alt=""
          className="scroll"
          variants={textVariants}
          animate="scrollButton"
        ></motion.img>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Full Stack Developer Web Developer
      </motion.div>
      <div className="imageContainer">
        <img src="./images/hero.png" alt=""></img>
      </div>
    </div>
  );
}
