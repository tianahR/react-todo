import React from "react" ;


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
                    return <li key={item.id}>{item.title}</li>;
            })}
         
            </ul>
        </>

    );


export default TodoList ;