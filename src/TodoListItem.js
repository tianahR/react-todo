import React from 'react';

function TodoListItem({todo})
{
    return (
        <div>
            {/* <li key={item.id}>{item.title}</li> */}
            {/* <li>{props.item.title}</li> */}
            {/* update props to use destructuring */}
            {/* <li>{todo.title}</li> */}
            <li>{todo}</li>


        </div>

    )


}

export default TodoListItem ;