import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./actions/todosApi";
import todosReducer from "../features/slices/todosSlice";

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
