import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const jwtToken = "12345";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers) => {
      // headers.set("Content-Type", "application/json;charset=UTF-8");
      // headers.set("Authorization", `Bearer ${jwtToken}`);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    // API to fetch All Todos from the JSON SERVER.
    fetchTodos: builder.query({
      query: () => "/todos",
      providesTags: ["Todo"],
    }),

    // API to add a new todo to the JSON Server
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: JSON.stringify(todo),
      }),
      invalidatesTags: ["Todo"],
    }),

    // API to update todo to the JSON Server
    updateTodo: builder.mutation({
      query: ({ id, ...todo }) => ({
        url: `/todos/${id}`,
        method: "PUT",
        body: JSON.stringify(todo),
      }),
      invalidatesTags: ["Todo"],
    }),

    // API to delete todo from the JSON Server
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const {
  useFetchTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useLazyGetAllTodosQuery,
} = todosApi;
