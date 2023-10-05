import React from 'react';


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
    title: 'Complete Assignments',
  }

  ];

function App() {
     return (
      
      <div>
         <h1> Todo List </h1>

      

       <ul>
          {todoList.map(function (item) {
            return <li key={item.id}>{item.title}</li>;
        })}
         
       </ul>
       </div>
       
       
     );
   }



export default App;