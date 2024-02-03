import React, { useState } from "react";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import "./sidebar.css";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  close: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 50,
    },
  },
};

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="sidebar"
      initial="close"
      animate={open ? "open" : "close"}
    >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}
