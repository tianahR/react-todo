import React from 'react';

function TodoListItem(props)
{
    return (
        <div>
            {/* <li key={item.id}>{item.title}</li> */}
            <li>{props.item.title}</li>

        </div>

    )


}

export default TodoListItem ;