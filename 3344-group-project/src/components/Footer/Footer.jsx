import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1>&copy; Group 4</h1>
      <h1>|</h1>
      <h1><a href="" target="_blank">A link to somewhere</a></h1>
    </footer>
  );
};
export default Footer;