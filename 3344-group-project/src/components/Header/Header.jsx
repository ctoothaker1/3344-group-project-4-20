import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Welcome</h1>
      <nav>
        <ul className={styles.navLinks}>

            {/* <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li> */}

            {/*^^^nav links from my project*/}

        </ul>
      </nav>
    </header>
  );
};
export default Header;