import React, { useState } from "react";
import { useUpdateTodoMutation } from "../features/actions/todosApi";
import { toast } from "react-toastify";

const UpdateTodo = ({ todo }) => {
  const [updateTodo, { isLoading }] = useUpdateTodoMutation();
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);

  const handleEdit = async () => {
    if (editMode) {
      await updateTodo({
        id: todo.id,
        task: editedTask,
      });
      toast.success("Task Updated Successfully");
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  const handleChange = (e) => {
    setEditedTask(e.target.value);
  };

  return (
    <tr>
      <td style={{ padding: "8px" }}>
        {editMode ? (
          <textarea
            value={editedTask}
            onChange={handleChange}
            style={{ width: "100%", minHeight: "100px" }}
          />
        ) : (
          <span>{todo.task}</span>
        )}
      </td>
      <td style={{ padding: "8px" }}>
        <button
          onClick={handleEdit}
          disabled={isLoading}
          style={{
            padding: "8px 16px",
            backgroundColor: "#008CBA",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {editMode ? "Save" : "Edit"}
        </button>
      </td>
    </tr>
  );
};

export default UpdateTodo;
