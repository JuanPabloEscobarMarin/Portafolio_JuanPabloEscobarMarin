import React, { useEffect, useState } from "react";
import styles from "./Roles.module.css";

export const Roles = () => {
  const [text, setText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Ingeniero de Software",
    "Desarrollador Web",
    "Desarrollador Full Stack",
  ];

  const typingSpeed = 100; // Velocidad de escritura (en milisegundos)
  const deletingSpeed = 50; // Velocidad de borrado (en milisegundos)
  const pauseBetweenRoles = 2000; // Pausa entre roles (en milisegundos)

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];

      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
      } else {
        setText(currentRole.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseBetweenRoles);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer); 
  }, [text, isDeleting, currentRoleIndex]);

  return (
    <div className={styles.title}>
      <span>{text}</span>
      <span className={styles.cursor}>|</span> {}
    </div>
  );
};
