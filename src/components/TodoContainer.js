import React from 'react';
import AddTodoForm from "../components/AddTodoForm";
import styles from "../styles/TodoContainer.module.css";
import SortingTodoList from "./SortingTodoList";
import PropTypes from "prop-types";


const TodoContainer = ({tableName,titlePage}) => {

   const [todoList, setTodoList] = React.useState([]);

    

    // Add Loading state
    const [isLoading, setIsLoading] = React.useState(true); 

   


    // inside the fetchData function, declare an empty object variable named options
  //  add a method key with the value 'GET'
  //  add a headers key with an object {Authorization:Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}}`


    const fetchData = async (tableNameParam) => {

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
        },
      };

      // Sort by Airtable view order
      //  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}
      //  ?view=Grid%20view `;

      const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableNameParam}
        ?view=Grid%20view `;
        

      // Sort by Airtable field
      //  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}
      //  ?sort[0][field]=title&sort[0][direction]=asc `;

      // const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
      

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
                  createdAt:data.createdTime
                };
                //  console.log(todos);
                return newTodo;
              });

              //  console.log(todos);

              setTodoList(todos);
              setIsLoading(false);

      } 
      
      catch (error) {
            console.log(error.message);
      }
    };

    React.useEffect(() => {
      fetchData(tableName);
    }, [tableName]);

  

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

        // const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;
        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}`;
        

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
              
              fetchData(tableName); //load after add Todo
            

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
    

      const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/${id}`;
      //console.log(url);

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
          
          fetchData(tableName); //load after remove

          return await response.json();
      } 
      catch (error) {
          console.log(error.message);
          return null;
      }
  };


  ///// UPDATE TODO
//   const updateTodo = async (id, todo) => {

//     const airtableData = {
//       fields: {
//         title: todo, 
//       },
//     };

//     const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/${id}`;
//     //console.log(url);

//     const options = 
//     {
//       method: "PATCH",
//       headers: {
//           "Authorization": `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify(airtableData),
//     }

//     try {
//         const response = await fetch(url, options);

//         if (!response.ok) {
//             throw new Error(`Error has occurred: ${response.status}`);
//         }
        
//         fetchData(tableName); //load after remove

//         return await response.json();
//     } 
//     catch (error) {
//         console.log(error.message);
//         return null;
//     }
// };


// -------------------------------
  
    //console.log(tableName);

    return (
      <div className={styles.Container}>

          <h1 className={styles.MainHeader}>{titlePage} </h1>

          <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? (
                   <p className={styles.Loading}>Loading...</p>
              ):(
                  <SortingTodoList 
                      todoList={todoList} 
                      onRemoveTodo={removeTodo} 
                      //onRemoveTodo={updateTodo} 
                  />
              )
          }
      </div>
  );

   
    
}



export default TodoContainer;

TodoContainer.propTypes = {
  tablename: PropTypes.string ,
  titlePage: PropTypes.string
  
}