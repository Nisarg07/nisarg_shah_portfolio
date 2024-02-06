import React, { useRef } from "react";
import "./parallax.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax(props) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          props.type === "services"
            ? "linear-gradient(180deg,#111132,#0c0c1d)"
            : "linear-gradient(180deg, #111132,#505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {props.type === "services" ? "What I do?" : "What I did?"}
      </motion.h1>
      <motion.div
        className="mountains"
        style={{ backgroundImage: "url('images/mountains.png')" }}
      ></motion.div>
      <motion.div
        className="planets"
        style={{
          backgroundImage: "url('images/planets.png')",
          y: yBg,
        }}
      ></motion.div>
      <motion.div
        className="stars"
        style={{ x: yBg, backgroundImage: "url('images/stars.png')" }}
      ></motion.div>
    </div>
  );
}
