import React from "react" ;


// update props to use destructuring
//const AddTodoForm = (props)=> {
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
        //const todoTitle = event.target.title.value;        
        //console.log(todoTitle );
        //props.onAdd(event);
        
        
        // update props to use destructuring
        //props.onAddTodo({
        onAddTodo({
            title: todoTitle,
            id: Date.now(),
          });

        //   inside handleAddTodo, remove the reset() method and replace it with logic to reset the todoTitle state to an empty String
        //event.target.reset();
        setTodoTitle("");
        
    };
    
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title </label>

            {/* Modify the <input> element to be a controlled input
            Add value prop equal to todoTitle from component props
            Add onChange prop equal to handleTitleChange function reference */}
            <input 
                id="todoTitle" 
                type="text" 
                name="title" 
                value={todoTitle}
                onChange={handleTitleChange}
            />
            <button>Add </button>
        </form>
    );
}

export default AddTodoForm ;