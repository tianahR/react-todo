import React from "react";
import styles from "../styles/TodoListItem.module.css";
import { ReactComponent as Remove } from "../delete.svg";
import PropTypes from "prop-types";

// const change = () => {console.log("change")};

const TodoListItem = ({ todo, onRemoveTodo }) =>{
  return (
    <li className={styles.ListItem}>
           <span className={styles.Text}>{todo.title} </span>
           {/* <input type="text" id={todo.id} name={todo.id} value={todo.title} onChange={change} defaultValue={todo.title}/> */}
           <button onClick={() => onRemoveTodo(todo.id) } ><Remove/></button>
    </li>

    
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.object,
  removeTodo: PropTypes.func,
};

export default TodoListItem ;