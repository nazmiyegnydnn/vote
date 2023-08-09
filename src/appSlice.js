import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    submitTodoHandler: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    incrementPoints: (state, action) => {
      const { todoId } = action.payload;
      const updatedTodos = state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, points: todo.points + 1 } : todo
      );
      state.todos = updatedTodos;
    },
    decreasePoints: (state, action) => {
      const { todoId } = action.payload;
      const updatedTodos = state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, points: todo.points - 1 } : todo
      );
      state.todos = updatedTodos;
    },
  },
});

export const { submitTodoHandler, incrementPoints, decreasePoints } =
  appSlice.actions;

export default appSlice.reducer;
