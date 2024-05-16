import React, { useState } from "react";
import { useDeleteTodoMutation } from "../features/actions/todosApi";
import UpdateTodo from "./UpdateTodo";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";

const IndividualTodo = ({ todo, index }) => {
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();
  const [editMode, setEditMode] = useState(false);

  const handleDelete = () => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure you want to delete this task?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            await deleteTodo(todo.id);
            toast.success("Task Deleted Successfully");
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <tr>
      <td
        style={{
          padding: "8px",
          border: "1px solid #ddd",
          textAlign: "center",
        }}
      >
        <span>{index + 1}</span>
      </td>
      <td
        style={{
          padding: "8px",
          border: "1px solid #ddd",
          textAlign: "center",
        }}
      >
        <span>{todo.id}</span>
      </td>
      <td
        style={{
          padding: "8px",
          border: "1px solid #ddd",
          textAlign: "center",
        }}
      >
        {editMode ? (
          <UpdateTodo todo={todo} setEditMode={setEditMode} />
        ) : (
          <span>{todo.task}</span>
        )}
      </td>
      <td
        style={{
          padding: "8px",
          border: "1px solid #ddd",
          textAlign: "center",
        }}
      >
        <button
          onClick={() => setEditMode(!editMode)}
          disabled={isDeleting}
          style={{
            padding: "8px 16px",
            backgroundColor: editMode ? "#FFA500" : "#008CBA",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginRight: "8px",
            marginBottom: "8px",
            width: "70px", // Adjusted width for better mobile view
          }}
        >
          {editMode ? "Cancel" : "Edit"}
        </button>
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          style={{
            padding: "8px 16px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginBottom: "8px",
            width: "70px", // Adjusted width for better mobile view
          }}
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </td>
    </tr>
  );
};

export default IndividualTodo;
