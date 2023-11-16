import React from 'react';
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


//new function named useSemiPersistentState which will be a custom hook
 const useSemiPersistentState = () => {
    
    const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem("savedTodoList"))||[]);
    
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

  const removeTodo = (id) => {
    const removeItem = todoList.filter((todo) => todo.id !== id);
    setTodoList(removeItem);
  };

  return (
      
      // React Fragment
      <>
            <h1> Todo List </h1>
            <AddTodoForm  onAddTodo={addTodo}/>
            <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
         
      </>
  );
}



export default App;