import React from 'react';
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


const App = () => {

  const [todoList, setTodoList] = React.useState([]);

  // Add Loading state
  const [isLoading, setIsLoading] = React.useState(true); 

  React.useEffect(() => {
    new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: { todoList: JSON.parse(localStorage.getItem("todoList")) ?? [] } });
        }, 2000);
    }).then(result => {
        setTodoList(result.data.todoList);
        setIsLoading(false);
    });
}, []);


    // Inside the second useEffect hook (with todoList dependency), 
    // add an if statement to check that isLoading is false before setting localStorage

    React.useEffect(() => {
      if (!isLoading) {
          localStorage.setItem("todoList", JSON.stringify(todoList));
      }
  }, [isLoading, todoList]);



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

            
            {/* Using a ternary operator inside JSX, 
            if isLoading is true render the loading message, otherwise render the TodoList component */}
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
            )}
         
      </>
  );
}



export default App;