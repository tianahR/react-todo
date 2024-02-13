import React from "react" ;
import InputWithLabel from "./InputWithLabel";
// import styles from "../styles/TodoListItem.module.css";
import { ReactComponent as Add } from "../add.svg";
import PropTypes from "prop-types"; //Import PropTypes from the "prop-types" package


const AddTodoForm = ({onAddTodo})=> {

    // Create new state variable named todoTitle with setter setTodoTitle
    const [todoTitle, setTodoTitle] = React.useState("");


    // declare a new function named handleTitleChange that takes event as a parameter
    //First, retrieve the input value from the event object and store in variable named newTodoTitle
    //Then, call the state setter setTodoTitle and pass newTodoTitle

    const handleTitleChange = (event) =>{
        const newTodoTitle = event.target.value;
        
        setTodoTitle(newTodoTitle);
      }

    //   ----------

    // In the handleAddTodo function, remove the todoTitle variable and update onAddTodo callback handler to pass our todoTitle state variable instead

    const handleAddTodo = (event)=>{
        event.preventDefault();

        if (!todoTitle) {
            alert("Enter your Todo please");
        } else {
        
        // update props to use destructuring
        //props.onAddTodo({
        // onAddTodo({
        //     title: todoTitle,
        //     id: Date.now(),
        //   });
        onAddTodo(todoTitle);
        // console.log("clik") ;

        //   inside handleAddTodo, remove the reset() method and replace it with logic to reset the todoTitle state to an empty String
        //event.target.reset();
        setTodoTitle("");
        }
        
    };
    
    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                todoTitle={todoTitle}
                handleTitleChange={handleTitleChange}
                
            >
                <strong> Title: </strong>
            </InputWithLabel>
            &nbsp;
            <button >  <Add/> </button>
        </form>
    );
}

// Add AddTodoForm prop types
AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func
}




export default AddTodoForm ;