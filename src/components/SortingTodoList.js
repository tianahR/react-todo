import React, { useState, useMemo } from "react";
import PropTypes from  "prop-types";
import TodoList from "../components/TodoList"
import Sorting from "./Sorting";
import styles from "../styles/TodoContainer.module.css";

const SortingTodoList = ({ todoList, onRemoveTodo }) => {
    const [sortType, setSortType] = useState("default"); 

    const sortedData = useMemo(() => {
        let sortedList = todoList;

        const ascendingAlphabet = () => {
            sortedList = [...sortedList].sort((a, b) => { 
                let loweredA = a.title.toLowerCase();
                let loweredB = b.title.toLowerCase();
                return (loweredA < loweredB ? -1 : loweredB > loweredA ? 1 : 0); 
            });
        };
    
        const descendingAlphabet = () => {
            sortedList = [...sortedList].sort((a, b) => { 
                let loweredA = a.title.toLowerCase();
                let loweredB = b.title.toLowerCase();
                return (loweredA > loweredB ? -1 : loweredB < loweredA ? 1 : 0); 
            });
        }
        
        const ascendingDate = () => {
            sortedList =  [...sortedList].sort((a, b) => { 
                return (new Date(a.createdAt) < new Date(b.createdAt) ? -1 : new Date(b.createdAt) > new Date(a.createAt) ? 1 : 0); 
            });
        };
    
        const descendingDate = () => {
            sortedList =  [...sortedList].sort((a, b) => { 
                return (new Date(a.createdAt) > new Date(b.createdAt) ? -1 : new Date(b.createdAt) < new Date(a.createdAt)? 1 : 0); 
            });
        }
    
        switch (sortType) {
            case "descendingAlphabet":
                descendingAlphabet()
                break;  
            case "ascendingAlphabet":
                ascendingAlphabet()
                break;
            case "descendingDate":
                descendingDate()
                break;
            case "ascendingDate":
                ascendingDate()
                break;
            default: 
                ascendingDate()
        }   
        return sortedList;
    }, [todoList, sortType]);

    return (
        <div className={styles.todolistWrapper}> 
            <div className={styles.sortingButtons}> 
                <Sorting 
                    setSortType={setSortType} 
                    ascending={"ascendingAlphabet"} 
                    descending={"descendingAlphabet"} 
                    ascendingText={"Ascending"} 
                    descendingText={"Descending"}
                />
                <Sorting 
                    setSortType={setSortType} 
                    ascending={"ascendingDate"} 
                    descending={"descendingDate"} 
                    ascendingText={"Old => New"} 
                    descendingText={"New => Old"}
                />
            </div>
            <TodoList 
                todoList={sortedData} 
                onRemoveTodo={onRemoveTodo}
               
            />
        </div>
    )

    
}
export default SortingTodoList;

SortingTodoList.propTypes = {
    todoList: PropTypes.array, 
    onRemoveItem: PropTypes.func,
    
}

