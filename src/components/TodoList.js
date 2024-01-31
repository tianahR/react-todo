import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

const TodoList = ({ todoList, onRemoveTodo })=> {
  return (
    <div>
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
  removeTodo: PropTypes.func.isRequired,
};


export default TodoList ;