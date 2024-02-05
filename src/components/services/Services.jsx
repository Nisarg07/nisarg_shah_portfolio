import React, { useRef } from "react";
import "./services.css";
import { motion, useInView } from "framer-motion";

const buttonVariant = {
  small: {
    scale: 0.75,
  },
  big: {
    scale: 1,
  },
};

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export default function Services() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div className="services">
      <motion.div
        className="textContainer"
        variants={variants}
        initial="initial"
        animate={isInView ? "animate" : undefined}
        ref={ref}
      >
        <p>
          Agile Full Stack and Web Developer,
          <br /> crafting dynamic digital experiences.
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
        initial="initial"
        animate={isInView ? "animate" : undefined}
        ref={ref}
      >
        <div className="title">
          <img src="/images/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "rgb(255,165,0)" }}>Unique</motion.b>{" "}
            Ideas
          </h1>
        </div>
        <div
          className="title"
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : undefined}
          ref={ref}
        >
          <h1>
            <motion.b whileHover={{ color: "rgb(255,165,0)" }}>
              For Your
            </motion.b>{" "}
            Website.
          </h1>
          <motion.button
            variants={buttonVariant}
            initial="small"
            whileHover="big"
          >
            What We Do?
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
        initial="initial"
        animate={isInView ? "animate" : undefined}
        ref={ref}
      >
        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "rgb(255,255,255,0.4)",
            border: "0.8px solid rgba(128, 128, 128, 1)",
          }}
        >
          <h2>HTML5</h2>
          <img src="/images/html5.png" alt="" />
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "rgb(255,255,255,0.4)",
            border: "0.8px solid rgba(128, 128, 128, 1)",
          }}
        >
          <h2>CSS3</h2>
          <img src="/images/css3.png" alt="" />
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "rgb(255,255,255,0.4)",
            border: "0.8px solid rgba(128, 128, 128, 1)",
          }}
        >
          <h2>ReactJS</h2>
          <img src="/images/react.png" alt="" />
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "rgb(255,255,255,0.4)",
            border: "0.8px solid rgba(128, 128, 128, 1)",
          }}
        >
          <h2>Firebase</h2>
          <img src="/images/firebase.png" alt="" />
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
