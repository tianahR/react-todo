import React from 'react';
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";



function App() {

    
  //a new state variable named newTodo with update function named setNewTodo
  //const [newTodo, setNewTodo] = React.useState("");

  //Create new state variable named todoList with setter setTodoList and default value of an empty Array
  const [todoList, setTodoList] = React.useState([]);

  
  // Declare a new function named addTodo that takes newTodo as a parameter
  //  Call the setTodoList state setter and use the spread operator to pass the existing Objects in the todoList Array along with the newTodo Object
  const addTodo = (newTodo)=> {
    setTodoList([...todoList, newTodo]);
  }


  // callback handler prop named onAddTodo
  //  const onAddTodo = (event) => {
  //    setNewTodo(event.target.title.value);
  //    };
     return (
      
      <div>
            <h1> Todo List </h1>
            <AddTodoForm  onAddTodo={addTodo}/>
            {/* <p> Value of newTodo is <strong>{newTodo}</strong></p> */}
            {/* <TodoList/> */}
            {/* <AddTodoForm onAddTodo={addTodo} /> */}
            <TodoList todoList={todoList} />
         
       </div>
       
       
     );
   }



export default App;