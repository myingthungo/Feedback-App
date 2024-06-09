// Footer.js
import React from 'react';
import styles from "./Footer.module.css";

function Footer (){
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.trademarkEL}>Trademark and Copyright of Orbit Opinions all rights reserved &copy; {new Date().getFullYear()}</p>
     </footer>
  );
}

export default Footer;
