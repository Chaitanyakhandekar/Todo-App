import React, { useContext, useState } from "react";
import TodoContext from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const [isChecked, setIsChecked] = useState(todo.isComplete);
  const [isEditable, setIsEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todoMsg);
  const { updateTodo, deleteTodo } = useContext(TodoContext);

  function handleToggle() {
    updateTodo(todo.id, { ...todo, isComplete: !isChecked });
    setIsChecked(!isChecked);
  }

  function handleClick() {
    if (!isChecked) {
      setIsEditable(!isEditable);
    }
  }

  function editTodo(e) {
    const msg = e.target.value;
    setTodoMsg(msg);
    updateTodo(todo.id, { ...todo, todoMsg: msg });
  }

  return (
    <div className={`bg-[#4A90E2] flex w-full items-center justify-between rounded-xl p-4 shadow-md transition-all ${isChecked ? "bg-gray-700" : ""}`}>
      <div className="flex items-center gap-4 w-full">
        <input
          type="checkbox"
          className="w-5 h-5 accent-blue-500"
          checked={isChecked}
          onChange={handleToggle}
        />
        <input
          type="text"
          value={todoMsg}
          readOnly={!isEditable}
          className={`bg-transparent outline-none w-full text-lg font-semibold text-white placeholder-gray-400 ${isChecked ? "line-through text-gray-400" : ""} ${isEditable ? "border-2 border-black rounded-md p-1" : ""}`}
          onChange={editTodo}
        />
      </div>
      <div className="flex gap-3">
        <button className={`text-2xl p-1 rounded-md transition-all ${isChecked ? "hidden" : "bg-white text-white hover:bg-white-600 px-3 py-1"}`} onClick={handleClick}>
          {isEditable ? "📁" : "✏️"}
        </button>
        <button className="text-2xl bg-white text-white p-1 rounded-md hover:bg-white-600 transition-all px-3 py-1" onClick={() => deleteTodo(todo.id)}>
          ❌
        </button>
      </div>
    </div>
  );
}

export default TodoItem;