import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";
import styles from "../styles/TodoListItem.module.css";

const TodoList = ({ todoList, onRemoveTodo })=> {
  return (
    <div className={styles.List}>
      <ul>
        {todoList.map(function (item) {
          return (
            <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo} />
          );
        })}
      </ul>
    </div>


    
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  removeTodo: PropTypes.func,
};


export default TodoList ;