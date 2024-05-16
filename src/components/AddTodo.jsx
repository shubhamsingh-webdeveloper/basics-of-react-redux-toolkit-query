import React, { useState } from "react";
import { useAddTodoMutation } from "../features/actions/todosApi";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const [addTodo, { isLoading }] = useAddTodoMutation();

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      const newTodo = {
        id: uuidv4(), // Generate a new unique id using uuid
        task: task.trim(),
      };
      addTodo(newTodo);
      setTask(""); // Clear input field after adding todo
    }
  };

  return (
    <div
      style={{
        marginBottom: "20px",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <textarea
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter new todo..."
        style={{ width: "40%", minHeight: "50px", padding: "6px" }}
      />
      <button
        onClick={handleAddTodo}
        disabled={isLoading}
        style={{
          padding: "8px 16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginLeft: "10px",
          height: "min-content", // Adjust height to fit content
        }}
      >
        {isLoading ? "Adding..." : "Add Todo"}
      </button>
    </div>
  );
};

export default AddTodo;
