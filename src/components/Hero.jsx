import React from "react";
import { getImageUrl } from "../utils";
import styles from "./Hero.module.css";
import { Roles } from "./Roles";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hola Soy Pablo,<Roles></Roles>
        </h1>
        <p className={styles.description}>
          1 año de experiencia. Ingeniero de Sistemas y Desarrollador Web.
          Especializado en crear soluciones web robustas.
        </p>
        <div className={styles.btncontainer}>
          <a
            href="https://www.linkedin.com/in/pablo-escobar-mar%C3%ADn-5b2979280/"
            className={styles.btn}
          >
            <img
              src={getImageUrl("linkedinIcon.png")}
              alt="LinkedIn icon"
              className={styles.icon}
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/JuanPabloEscobarMarin"
            className={styles.btn}
          >
            <img
              src={getImageUrl("githubIcon.png")}
              alt="Github icon"
              className={styles.icon}
            />
            GitHub
          </a>
          <a
            href="mailto:juanpabloescobarmarin@gmail.com"
            className={styles.btn}
          >
            <img
              src={getImageUrl("emailIcon.png")}
              alt="Email icon"
              className={styles.icon}
            />
            juanpabloescobarmarin@gmail.com
          </a>
        </div>
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
