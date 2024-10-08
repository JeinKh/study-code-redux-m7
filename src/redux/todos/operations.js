import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66cc7349a4dd3c8a71b7a9d5.mockapi.io/";
axios.get("todos");

export const fetchTodosThunk = createAsyncThunk(
  "fetchTodos",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("todos");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchTodosThunk = () => async (dispatch) => {
//   try {
//     dispatch(setLoadingStatus(true));
//     const response = await axios.get("todos");
//     console.log(response.data);
//     dispatch(fetchData(response.data));
//   } catch (error) {
//     console.log(error);

//     dispatch(setErrorStatus(true));
//   } finally {
//     dispatch(setLoadingStatus(false));
//   }
// };

export const deleteTodoThunk = createAsyncThunk(
  "deleteTodo",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`todos/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const deleteTodoThunk = (id) => async (dispatch) => {
//   try {
//     dispatch(setLoadingStatus(true));
//     await axios.delete(`todos/${id}`);
//     dispatch(deleteTodo(id));
//   } catch (error) {
//     console.log(error);

//     dispatch(setErrorStatus(true));
//   } finally {
//     dispatch(setLoadingStatus(false));
//   }
// };

export const addTodoThunk = createAsyncThunk(
  "addTodo",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post("todos", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleTodoThunk = createAsyncThunk(
  "toggleTodo",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.put(`todos/${body.id}`, {
        ...body,
        completed: !body.completed,
      });
      console.log(data);
      return body.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
