import React from "react";
import styles from "../styles/LandingPage.module.css";

// const App = () => {
const LandingPage = () =>{
  return (
    <>
      <div className={styles.LandingPage}>
        <h1 className={styles.Landingh1}>Hello!</h1>
        <h2 className={styles.Landingh2}>welcome to Todo List App</h2>

        <a href="/todolist" className={styles.LandingLink}>
          Let's do this.
        </a>
      </div>
    </>
  );
}

export default LandingPage ;