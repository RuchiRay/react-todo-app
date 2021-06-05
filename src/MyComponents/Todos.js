import React from 'react'
import { TodoItem } from "../MyComponents/TodoItem";
export const Todos = (props) => {
    console.log(props.todos);
    return (
        <div className = "container">
            <h3 className="my-3">Todos List</h3>
            {
                props.todos.length===0?<h3>No todos to display</h3>:
                props.todos.map((todo)=>{
                    return (<TodoItem todo = {todo} key = {todo.sno} onDelete = {props.onDelete}/>)
                })
            }  
             
        </div>
    )
}
