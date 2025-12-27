import React from "react";
import { getImageUrl } from "../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre mi</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("factorio.gif")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("mouse.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desarrollador Frontend</h3>
              <p>
                Desarrollador frontend con experiencia en la creación de
                sitios web responsivos y optimizados.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("servidor.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Desarrollador Backend</h3>
              <p>
                Experiencia en el desarrollo de sistemas back-end rápidos
                y optimizados y APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("diseño.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Ingeniero de Software</h3>
              <p>
                Experiencia en desarrollo web y soluciones tecnológicas.
                Apasionado por la programación, la optimización de sistemas y la
                creación de productos eficientes e innovadores.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
