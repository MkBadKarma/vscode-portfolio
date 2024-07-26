import React from "react";
import styles from "./About.module.css";

const aboutMe = [
  "Welcome to my portfolio!",
  "I'm Mark Alonso Losada, a passionate developer with a love for creating interactive and innovative applications.",
  "With a strong foundation in Java, SQL, Python, and more, I bring ideas to life by crafting clean, efficient code.",
  "Let's connect and build something amazing together!",
];

const About = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.tag}>{"<p>"}</span>
      </p>
      {aboutMe.map((line, index) => (
        <p className={styles.line} key={index}>
          <span className={styles.tag}>{"   <span> "}</span>
          <span>{line}</span>
          <span className={styles.tag}>{" </span>"}</span>
        </p>
      ))}
      <p className={styles.line}>
        <span className={styles.tag}>{"</p>"}</span>
      </p>
    </div>
  );
};

export default About;
