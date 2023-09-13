import { useState } from "react";
import styles from "./Navbar.module.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";

export default function Navbar() {
  const [hover, setHover] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <>
      <Cursor isGelly={true} />
      <motion.div
        className={styles.outer}
        initial={{ x: "100vh" }}
        animate={hover ? { width: 500, x: -100 } : { width: "10vw", x: 0 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        transition={{ duration: 0.5, type: "tween", ease: "backOut" }}
      >
        <div className={styles.wrapper}>
          <nav>
            <h4 data-cursor-exclusion style={{ backgroundColor: "#fff" }}>
              Home
            </h4>
            <h4 data-cursor-exclusion style={{ backgroundColor: "#fff" }}>
              Projects
            </h4>
            <h4 data-cursor-exclusion style={{ backgroundColor: "#fff" }}>
              About
            </h4>
          </nav>
        </div>
        <motion.div className={styles.bar} style={{ scaleX }}></motion.div>
      </motion.div>
    </>
  );
}
