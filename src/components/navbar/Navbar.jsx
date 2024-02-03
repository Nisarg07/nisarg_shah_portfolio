import Sidebar from "../sidebar/Sidebar";
import "./Navbar.css";
import { motion } from "framer-motion";

const variants = {
  initial: { scale: 1 },
  animate: { scale: 1.5 },
};

function Navbar() {
  return (
    <nav className="navbar">
      <Sidebar className="sidebar" />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Nisarg Shah
        </motion.span>
        <div className="social">
          <a href="/">
            <motion.img
              variants={variants}
              initial="initial"
              whileHover="animate"
              src="/images/facebook.png"
              alt=""
            />
            <motion.img
              variants={variants}
              initial="initial"
              whileHover="animate"
              src="/images/instagram.png"
              alt=""
            />
            <motion.img
              variants={variants}
              initial="initial"
              whileHover="animate"
              src="/images/github.png"
              alt=""
            />
            <motion.img
              variants={variants}
              initial="initial"
              whileHover="animate"
              src="/images/linkdin.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
