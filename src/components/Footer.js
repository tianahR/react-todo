import React from "react";
import styles from "../styles/Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={styles.Footer}>
       
        
        <ul className={styles.icons}>
        <li>
          <p className={styles.copyright}>© 2024 Your Todo App. All rights reserved.</p>
        </li>
          <li>
            <a
              href="https://github.com/tianahR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          
          <li>
            <a
              href="https://linkedin.com/in/faratiana-rabenjamina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;