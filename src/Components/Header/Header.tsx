import React from "react";
import styles from "./Header.module.css";
import type { HeaderProps } from "./types";

export const Header: React.FC<HeaderProps> = ({
  name,
  role,
  location,
  social,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.role}>{role}</p>
        <p className={styles.location}>{location}</p>
      </div>

      {social && (
        <div className={styles.socialLinks}>
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          )}
          {social.portfolio && (
            <a
              href={social.portfolio}
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          )}
        </div>
      )}
    </header>
  );
};
