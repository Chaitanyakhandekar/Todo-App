import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoContextProvider from "./contexts/TodoContextProvider";
import React, { useContext } from "react";
import TodoContext from "./contexts/TodoContext";
import "./App.css";

function App() {
  return (
    <TodoContextProvider>
      <div className="w-full min-h-screen bg-[#121212] flex flex-col items-center p-5 sm:p-10">
        <h1 className="text-white font-bold text-4xl text-center py-6 tracking-wide">
          Manage Your Todos
        </h1>
        <TodoForm />
        <div className="w-full max-w-4xl flex flex-col items-center overflow-auto py-5 bg-gray-800 shadow-lg rounded-xl p-4 mt-5">
          <TodoList />
        </div>
      </div>
    </TodoContextProvider>
  );
}

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="w-full m-3 flex items-center justify-center">
          <TodoItem todo={todo} />
        </div>
      ))}
    </>
  );
}

export default App;