import React, { useRef } from "react";
import "./portfolio.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/6214371/pexels-photo-6214371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatum error dolor labore animi fuga amet aperiam. Veritatis doloribus, voluptas doloremque quam tenetur sint non ea sit labore, officiis recusandae.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatum error dolor labore animi fuga amet aperiam. Veritatis doloribus, voluptas doloremque quam tenetur sint non ea sit labore, officiis recusandae.",
  },
  {
    id: 3,
    title: "Vanila JS App",
    img: "https://images.pexels.com/photos/13237906/pexels-photo-13237906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatum error dolor labore animi fuga amet aperiam. Veritatis doloribus, voluptas doloremque quam tenetur sint non ea sit labore, officiis recusandae.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatum error dolor labore animi fuga amet aperiam. Veritatis doloribus, voluptas doloremque quam tenetur sint non ea sit labore, officiis recusandae.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <div className="textWrapper">
            <motion.div className="textContainer" style={{ y }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div className="progressBar" style={{ scaleX }} />
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
}