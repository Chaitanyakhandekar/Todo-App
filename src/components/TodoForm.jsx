import React, { useContext, useState } from "react";
import TodoContext from "../contexts/TodoContext";

function TodoForm() {
  const { addTodo } = useContext(TodoContext);
  const [todoMsg, setTodoMsg] = useState("");

  function handleClick(e) {
    e.preventDefault();
    if (todoMsg) {
      addTodo({ id: Date.now(), todoMsg });
      setTodoMsg("");
    }
  }

  return (
    <div className="w-full h-[10vh] max-w-2xl flex items-center  rounded-xl shadow-lg p-2">
      <input
        type="text"
        placeholder="What Todo..."
        className="h-full flex-1 px-4 bg-gray-900 text-white font-semibold rounded-l-xl outline-none text-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500  bg-[#1E1E1E]"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button
        className="text-white h-full bg-[#00C853] hover:bg-blue-600 transition-all px-6 py-3 rounded-r-xl font-bold"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
}

export default TodoForm;