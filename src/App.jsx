import React from "react";
import "./App.css";
import FetchTodos from "./components/FetchTodos";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <div className="main-title">
        CRUD App Example by using React Redux Toolkit Query
      </div>
      <FetchTodos />
      <ToastContainer />
    </>
  );
};

export default App;
