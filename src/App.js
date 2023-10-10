import React from 'react';
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";



function App() {

    
  //a new state variable named newTodo with update function named setNewTodo
  const [newTodo, setNewTodo] = React.useState("");


  // callback handler prop named onAddTodo
    const onAddTodo = (event) => {
      setNewTodo(event.target.title.value);
      };
     return (
      
      <div>
            <h1> Todo List </h1>
            <AddTodoForm  onAdd={onAddTodo}/>
            <p> Value of newTodo is <strong>{newTodo}</strong></p>
            <TodoList/>
         
       </div>
       
       
     );
   }



export default App;