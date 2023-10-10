import React from "react" ;
import TodoListItem from "./TodoListItem";


//array of objects to do 
const todoList = [
    {
      id: 1,
      title: 'Read lessons',
    },
    {
      id: 2,
      title: 'Do exercises',
    },
    {
      id: 3,
      title: 'Complete assignments',
    }
  
    ];


const  TodoList = () =>
    (
        <>
            <ul>
                {todoList.map(function (item) {
                    return <TodoListItem key={item.id} item={item}/>;

            })}
         
            </ul>
        </>

    );


export default TodoList ;