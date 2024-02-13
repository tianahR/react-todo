import React from "react";
import styles from "../styles/LandingPage.module.css";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

// const App = () => {
const LandingPage = () =>{
  return (
    <>
      <div className={styles.LandingPage}>

        <h2 className={styles.Header}> Welcome to my <br />
          <FaReact /> React.js <br />
          Final project
        </h2>

        <p className={styles.p}>
          Through Code the Dream School's React Class, I learned how
          to build a Todo app using React. As a learning material, we use Road to React by
          Robin Wieruch . The code related to my Todo App 
          is  in my GitHub repository{" "}
          <a
            href="https://github.com/tianahR/react-todo"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
          <br />
          <br />
          To see my Todo app, click <Link to="/todolist">here</Link>.
        </p>
        

       </div>
    </>
  );
}

export default LandingPage ;