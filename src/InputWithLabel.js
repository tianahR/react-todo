import * as React from 'react';

const InputWithLabel = (props) => {

    const inputRef = React.useRef();

    React.useEffect(() => {
        inputRef.current.focus();
    });
    
    return (
        <>
            <label htmlFor="todoTitle">{props.children} </label>

            <input 
                id={props.id}
                name={props.name} 
                value={props.todoTitle}
                onChange={props.handleTitleChange}
                ref={inputRef}
            />
    </>
  )};

  export default InputWithLabel;