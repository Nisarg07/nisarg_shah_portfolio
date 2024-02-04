import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: { transition: { staggerChildren: 0.15 } },
  close: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const itemVariants = {
  open: { y: 0, opacity: 1 },
  close: { y: 50, opacity: 0 },
};
export default function Links() {
  const items = ["Homepage", "Services", "Portfolio", "Contact"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}