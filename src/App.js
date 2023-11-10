import React from 'react';
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


//new function named useSemiPersistentState which will be a custom hook
 const useSemiPersistentState = () => {

  /**
   * Update the default state for todoList to read your "savedTodoList" item from localStorage
      Hint: localStorage.getItem method
      ---------------
      Update your default state to parse the value of the "savedTodoList" item
      Hint: JSON.parse method
   */
      const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem("savedTodoList"))||[]);

      /*
    Define a useEffect React hook with todoList as a dependency
    Inside the side-effect handler function, save the todoList inside localStorage with the key "savedTodoList"
    Hint: localStorage.setItem method
    --------------
    Update your side-effect function to convert todoList to a string before saving in localStorage
    Hint: JSON.stringify method
    */
  React.useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
  

};



function App() {

  const [todoList, setTodoList] = useSemiPersistentState("savedTodoList");

  // Declare a new function named addTodo that takes newTodo as a parameter
  //  Call the setTodoList state setter and use the spread operator to pass the existing Objects in the todoList Array along with the newTodo Object
  const addTodo = (newTodo)=> {
    setTodoList([...todoList, newTodo]);
  }

  return (
      
      // React Fragment
      <>
            <h1> Todo List </h1>
            <AddTodoForm  onAddTodo={addTodo}/>
            <TodoList todoList={todoList} />
         
      </>
  );
}



export default App;