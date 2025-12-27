import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contacto</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("emailIcon.png")} alt="Email icon" />
          <a href="mailto:juanpabloescobarmarin@gmail.com">
            juanpabloescobarmarin@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("linkedinIcon.png")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/pablo-escobar-mar%C3%ADn-5b2979280/">
            linkedin.com/JuanPabloEscobarMarin
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/JuanPabloEscobarMarin">
            github.com/JuanPabloEscobarMarin
          </a>
        </li>
      </ul>
    </footer>
  );
};
