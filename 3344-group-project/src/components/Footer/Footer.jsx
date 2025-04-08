import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>&copy; Group 4</span>
        <span className={styles.seperator}>|</span>
        <a
          href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
        >
          A link to somewhere
          </a>
      </div>
    </footer>
  );
};
export default Footer;