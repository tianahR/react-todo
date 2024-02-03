import React from "react";
import styles from "../TodoListItem.module.css";
import { ReactComponent as Remove } from "../delete.svg";
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo }) =>{
  return (
    <li className={styles.ListItem}>
      {todo.title} 
      &nbsp;
      <button onClick={() => onRemoveTodo(todo.id) } className={styles.RemoveButton}><Remove/></button>
    </li>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.object,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoListItem ;