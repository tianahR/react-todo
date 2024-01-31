import * as React from 'react';
import styles from "../TodoListItem.module.css";
import PropTypes from "prop-types";


const InputWithLabel = (props) => {

    const inputRef = React.useRef();

    React.useEffect(() => {
        inputRef.current.focus();
    });
    
    return (
        <>
            <label htmlFor="todoTitle">{props.children} </label>

            <input 
                className={styles.FormInputField}
                id={props.id}
                name={props.name} 
                value={props.todoTitle}
                onChange={props.handleTitleChange}
                ref={inputRef}
            />
    </>
  )};

  InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired,
    todoTitle: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    handleTitleChange: PropTypes.func.isRequired,
    children: PropTypes.string
};

  export default InputWithLabel;