import React from "react";
import { getImageUrl } from "../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola Soy Pablo</h1>
        <p className={styles.description}>
          Este es mi portafolio y este es un texto de prueba igual nadie lo va a
          ver porfavor no me maten, Este es mi portafolio y este es un texto de
          prueba igual nadie lo va a ver porfavor no me maten
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
