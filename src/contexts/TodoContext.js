import React from "react";
import { createContext } from "react";

const TodoContext = createContext({

    todos : [
        {
            id : 1,
            todoMsg : "project",
            isComplete : false
        }
    ],

    addTodo : (todo)=>{},
    updateTodo : (id,todos)=>{},
    deleteTodo : (id)=>{},
    toggleComplete : (id)=>{}
})

export default TodoContext;