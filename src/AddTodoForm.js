import React from "react" ;

function AddTodoForm() {

    const handleAddTodo = (event)=>{
        event.preventDefault();
        const todoTitle = event.target.value;
        console.log(todoTitle );
    };
    
    return (
        <form>
            <label htmlFor="todoTitle">Title </label>
            <input id="todoTitle" type="text" name="title" onChange={handleAddTodo}/>
            <button>Add </button>
        </form>
    );
}

export default AddTodoForm ;