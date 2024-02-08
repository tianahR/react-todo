import React from 'react';
// import TodoList from "./components/TodoList";
// import AddTodoForm from "./components/AddTodoForm";
//  Import BrowserRouter, Routes, and Route from react-router-dom
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import styles from "./TodoListItem.module.css";
// import background from "./img/todolist.png";
import TodoContainer from "./components/TodoContainer";
import LandingPage from "./components/LandingPage";





const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/todolist" element={<TodoContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;