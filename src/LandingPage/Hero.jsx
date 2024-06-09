import React from "react";
import styles from "./Hero.module.css";

export default function Hero({ onSignInClick, onSignUpClick, onBackToHome }) {
  return (
    <div className={styles.mainEL}>
      <div className={styles.HeroEL}>
        <h1 className={styles.headerEl}>
          Find The Right Answer To Take Timely Actions
        </h1>
        <p className={styles.paragraph}>
          "Want to elevate your business to new heights? Take advantage of our
          cutting-edge survey and customer review platform! Gather valuable
          insights, enhance customer satisfaction, and propel your brand forward
          with data-driven decisions"
        </p>
        <button onClick={onSignUpClick} className={styles.buttonEl}>
          Start your free trail
        </button>
      </div>
      <div>
        <img className={styles.vectorImg} src={"./src/images/feedback.png"} />
      </div>
    </div>
  );
}
