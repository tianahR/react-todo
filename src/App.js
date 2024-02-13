import React from 'react';
// import TodoList from "./components/TodoList";
// import AddTodoForm from "./components/AddTodoForm";
//  Import BrowserRouter, Routes, and Route from react-router-dom
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import styles from "./TodoListItem.module.css";
// import background from "./img/todolist.png";
import TodoContainer from "./components/TodoContainer";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"





const App = () => {

  const tableName = process.env.REACT_APP_TABLE_NAME;
  const studiesTableName = process.env.REACT_APP_TABLE_NAME_STUDIES;
  

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/todolist" element={<TodoContainer tableName={tableName} titlePage="Daily Tasks"/>}></Route>
        <Route path="/studylist" element={<TodoContainer tableName={studiesTableName} titlePage="Study Lists"/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}



export default App;