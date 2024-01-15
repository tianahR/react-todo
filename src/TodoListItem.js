import React from "react";
import styles from "./TodoListItem.module.css";
import { ReactComponent as Remove } from "./delete.svg";

const TodoListItem = ({ todo, onRemoveTodo }) =>{
  return (
    <li className={styles.ListItem}>
      {todo.title} 
      &nbsp;
      <button onClick={() => onRemoveTodo(todo.id) } className={styles.RemoveButton}><Remove/></button>
    </li>
  );
}

export default TodoListItem ;