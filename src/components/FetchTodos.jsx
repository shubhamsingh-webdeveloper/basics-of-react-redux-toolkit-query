import React, { useEffect } from "react";
import IndividualTodo from "./IndividualTodo";
import AddTodo from "./AddTodo";
import { useFetchTodosQuery } from "../features/actions/todosApi";
import { useDispatch } from "react-redux";
import { saveTodosList } from "../features/slices/todosSlice";
import Loader from "./utils/Loader";

const FetchTodos = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useFetchTodosQuery();

  useEffect(() => {
    if (data) dispatch(saveTodosList(data));
  }, [data, dispatch]);

  // if (isLoading) return <div>Loading...</div>;
  // if (isLoading)
  //   return (
  //     <div>
  //       <Loader />
  //     </div>
  //   );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <AddTodo />

      {isLoading ? (
        <>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              margin: "0 auto",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                    border: "1px solid #ddd",
                  }}
                >
                  S.No.
                </th>
                <th
                  style={{
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                    border: "1px solid #ddd",
                  }}
                >
                  Task Id
                </th>
                <th
                  style={{
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                    border: "1px solid #ddd",
                  }}
                >
                  Task
                </th>
                <th
                  style={{
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                    border: "1px solid #ddd",
                  }}
                >
                  Actions
                </th>
              </tr>
            </thead>
          </table>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader />
          </div>
          <p style={{ textAlign: "center" }}>Loading... Please wait</p>
        </>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "0 auto",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "8px",
                  backgroundColor: "#f2f2f2",
                  border: "1px solid #ddd",
                }}
              >
                S.No.
              </th>
              <th
                style={{
                  padding: "8px",
                  backgroundColor: "#f2f2f2",
                  border: "1px solid #ddd",
                }}
              >
                Task Id
              </th>
              <th
                style={{
                  padding: "8px",
                  backgroundColor: "#f2f2f2",
                  border: "1px solid #ddd",
                }}
              >
                Task
              </th>
              <th
                style={{
                  padding: "8px",
                  backgroundColor: "#f2f2f2",
                  border: "1px solid #ddd",
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((todo, i) => (
              <IndividualTodo key={todo.id} todo={todo} index={i} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FetchTodos;
