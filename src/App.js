import React from 'react';
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
//  Import BrowserRouter, Routes, and Route from react-router-dom
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styles from "./TodoListItem.module.css";
// import background from "./img/todolist.png";





const App = () => {

        const [todoList, setTodoList] = React.useState([]);

        // Add Loading state
        const [isLoading, setIsLoading] = React.useState(true); 


        // inside the fetchData function, declare an empty object variable named options
      //  add a method key with the value 'GET'
      //  add a headers key with an object {Authorization:Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}}`


        const fetchData = async () => {

          const options = {
            method: "GET",
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
            },
          };


          const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME} `;
          

          try {

                  const response = await fetch(url, options);

                  if (!response.ok) {
                    const message = `Error: ${response.status}`;
                    throw new Error(message);
                  }

                  const data = await response.json();
                  // console.log(data);
                  const todos = data.records.map((data) => {
                    const newTodo = {
                      title: data.fields.title,
                      id: data.id,
                    };
                    // console.log(todos);
                    return newTodo;
                  });

                  // console.log(todos);

                  setTodoList(todos);
                  setIsLoading(false);

          } 
          
          catch (error) {
                console.log(error.message);
          }
        };

        React.useEffect(() => {
          fetchData();
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
        //  const addTodo = (newTodo)=> {
          //  setTodoList([...todoList, newTodo]);
        //  }

        // -----------------------------
        // POST 

        const addTodo = async (todo) => {

            const airtableData = {
              fields: {
                title: todo,
              },
            };

            const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;

            const options = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
                },
                body: JSON.stringify(airtableData),
            }

            try {
                          
                  const response = await fetch(url,options);
                  

                  if (!response.ok) {
                    const message = `Error has ocurred:${response.status}`;
                    throw new Error(message);
                  }
                  
                  fetchData(); //load after add Todo
                  

                  

                  const dataResponse = await response.json();
                  // console.log("return "+JSON.stringify(dataResponse));
                  return dataResponse;
                  
                } 

            catch (error) 
                {
                    console.log(error.message);
                    return null;
                }
        };

         // .................................

        //  DELETE
        

        // const removeTodo = (id) => {
        //   const removeItem = todoList.filter((todo) => todo.id !== id);
        //   setTodoList(removeItem);
        // };


        // ----------------

        const removeTodo = async (id) => {

          const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`;
          console.log(url);

          const options = 
          {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
                "Content-Type": "application/json"
            }
          }
      
          try {
              const response = await fetch(url, options);
      
              if (!response.ok) {
                  throw new Error(`Error has occurred: ${response.status}`);
              }
              
              
              fetchData(); //load after remove

              

              
      
              return await response.json();
          } 
          catch (error) {
              console.log(error.message);
              return null;
          }
      };
        // ----------------

        return (

          // Wrap existing JSX within new BrowserRouter component
            <BrowserRouter>
                
                {/* Inside BrowserRouter, wrap existing JSX within new Routes component */}
                <Routes>
                        {/* Inside Routes, wrap existing JSX within new Route component with prop path equal to the root path ("/") */}

                        {/* <Route path='/' element={<Home /> }/> */}
    
                        <Route 
                            path ="/"
                            element = { 
                                // <div className={styles.Container} style={{ backgroundImage: `url(${background})` }}>
                                <div className={styles.Container} >
                                      <h1 className={styles.MainHeader}> Todo List </h1>
                                      <AddTodoForm  onAddTodo={addTodo}/>
                                      

                                      
                                      {/* Using a ternary operator inside JSX, 
                                      if isLoading is true render the loading message, otherwise render the TodoList component */}
                                      {isLoading ? (
                                          <p>Loading...</p>
                                      ) : (
                                          <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
                                      )}
                                  
                                </div>
                            }
                        />

                        {/* Add New Route */}
                        {/*  Below the Route component, create a new Route with path "/new" */}
                        {/* Inside the Route component, create a level-one heading with text "New Todo List" */}
                        <Route 
                          path ="/new"
                          element = {
                            <h1> New Todo List </h1>
                          }/>


                    
                      

                  
                    

                </Routes>
                
            </BrowserRouter>
            
            
        );
}



export default App;