import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Arpan</h1>
        <p className={styles.description}>
        An aspiring full-stack developer with a strong foundation in web development technologies, eager to apply my skills and learn alongside your team to create impactful solutions.
        </p>
        <a href="mailto:arpanbajpai2003@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <br />
      </div>
      
      <img
        src={getImageUrl("hero/hero.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
     
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
