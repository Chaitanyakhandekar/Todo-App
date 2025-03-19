import React, { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

function TodoContextProvider({children}){

    const [todos,setTodos] = useState([])
    

    const addTodo=(todo)=>{
        setTodos((prevTodo)=>[...prevTodo , {...todo}])
    }

    useEffect(()=>{
        const todos = JSON.parse(localStorage.getItem("todos"))

        if(todos && todos.length>0){
            setTodos(todos)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos))
    },[todos])

    const updateTodo = (id,todo)=>{
        setTodos((prevTodos)=>prevTodos.map((prevTodo)=>{

            if(prevTodo.id === id){
                return todo
            }
            else{
                return prevTodo
            }
        }))
        
    }
    const deleteTodo = (id)=>{
        setTodos((prevTodos)=>prevTodos.filter((todo)=> todo.id!== id))
    }


    const toggleComplete = (id)=>{
        setTodos((prevTodos)=>prevTodos.map((todo)=>{
            
            if(todo.id === id){
                return {...todo , isComplete : !todo.isComplete}
            }
            else{
                return todo
            }
        }))
    }

    return (
        <TodoContext.Provider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;