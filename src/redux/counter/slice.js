import { createSlice } from "@reduxjs/toolkit";
// import { change_step, decrement } from "./actions";
// import { increment } from "./actions";

const initialState = {
  counter: 0,
  step: 1,
};

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter += state.step;
    },
    decrement: (state, action) => {
      state.counter -= state.step;
    },
    reset: (state, action) => {
      return initialState;
    },
    change_step: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const counterReducer = slice.reducer;
export const { increment, decrement, reset, change_step } = slice.actions;
