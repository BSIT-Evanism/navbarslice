import React from "react";
import styles from "./Title.module.scss";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useAnimate } from "framer-motion";

export default function Title({ view }) {
  const [scope, animate] = useAnimate();
  const [scop, anim] = useAnimate();
  // scroll(animate("ref", { scaleX: [-400, 400] }));

  useEffect(() => {
    anim(
      "p",
      { x: [0, 40] },
      {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }
    );
  }, []);

  useEffect(() => {
    if (!view) {
      animate(scope.current, { x: 400 });
    } else {
      animate(scope.current, { x: 0 });
    }
  }, [view]);

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Sleek Navbar
          <br />
          <span>with Framer Motion</span>
        </h1>
        <p className={styles.float}>made with ❤️ by evan</p>

        <div className={styles.socials}>
          <a
            data-cursor-color="#102c57"
            data-cursor-size="200px"
            data-cursor-text="evansolanoy.vercel.app"
            className={styles.link}
            href="https://evansolanoy.vercel.app"
            target="_blank"
          >
            <div>Visit my portfolio</div>
          </a>
          <a
            className={styles.bento}
            data-cursor-color="#102c57"
            data-cursor-size="200px"
            data-cursor-text="bento.me/evansolanoy"
            href="https://bento.me/evansolanoy"
            target="_blank"
          >
            <div>Or my bento</div>
          </a>
        </div>
      </div>
      <section className={styles.scroll} id="scroll" ref={scope}>
        scroll down
      </section>
      <div className={styles.notice} ref={scop}>
        <p>🡠 check this out</p>
      </div>
    </>
  );
}
