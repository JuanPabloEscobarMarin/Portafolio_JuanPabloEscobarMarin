import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">myemail@email.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("linkedinIcon.png")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
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
