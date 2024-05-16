import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosList: [],
};
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodosList: (state, action) => {
      console.log("action", action);
      state.todosList = action.payload;
    },
  },
  // extraReducers: {},
});

export const { saveTodosList } = todosSlice.actions;
export default todosSlice.reducer;
