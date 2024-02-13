import React from "react";
import { useState, useEffect, useRef } from "react";
import PropTypes from  "prop-types";
import style from "../styles/Sorting.module.css";

const Sorting = ({ 
    setSortType, 
    ascending, 
    descending, 
    ascendingText, 
    descendingText, 
}) => {
    const [toggle, setToggle] = useState(true);

    const handleToggle= () => {
        setToggle(!toggle);
        toggle ? setSortType(descending) : setSortType(ascending);
    };

    const didMount = useRef(false);
    
    useEffect(()=> {
        didMount.current ? setToggle(toggle) : didMount.current = true;
    }, [toggle]);
    
    return (
        <div className={style.container}>
            <button 
                className={style.button} 
                type="button" 
                onClick={handleToggle}
            > 
                {toggle ? descendingText : ascendingText} 
            </button>  
        </div>
    );   
}


Sorting.propTypes = {
    setSortType: PropTypes.func,
    ascending: PropTypes.string,
    descending: PropTypes.string,
    ascendingText: PropTypes.string,
    descendingText: PropTypes.string,
}

export default Sorting;

