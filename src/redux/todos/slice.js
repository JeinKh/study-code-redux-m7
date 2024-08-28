import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addTodoThunk,
  deleteTodoThunk,
  fetchTodosThunk,
  toggleTodoThunk,
} from "./operations";
// 1.
const initialState = {
  items: [{ id: 1, todo: "Learn Redux" }],
  isLoading: false,
  isError: false,
  sortType: "all",
};

// 2.
const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    changeSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
  // reducers: {
  //   deleteTodo: (state, action) => {
  //     state.items = state.items.filter((item) => item.id !== action.payload);
  //   },
  //   addTodo: (state, action) => {
  //     state.items.push(action.payload);
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        // state.isLoading = false;
      })
      // .addCase(fetchTodosThunk.pending, (state, action) => {
      //   state.isLoading = true;
      // })
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      // .addCase(deleteTodoThunk.rejected, (state, action) => {
      //   state.isError = true;
      // })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(toggleTodoThunk.fulfilled, (state, action) => {
        state.items = state.items.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        );
      })
      .addMatcher(
        isAnyOf(
          fetchTodosThunk.pending,
          deleteTodoThunk.pending,
          addTodoThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTodosThunk.rejected,
          deleteTodoThunk.rejected,
          addTodoThunk.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTodosThunk.fulfilled,
          deleteTodoThunk.fulfilled,
          addTodoThunk.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});
// 3.
export const todosReducer = slice.reducer;
export const { changeSortType } = slice.actions;
// export const {
//   deleteTodo,
//   addTodo,
//   setErrorStatus,
// setLoadingStatus,
//   fetchData,
// } = slice.actions;
