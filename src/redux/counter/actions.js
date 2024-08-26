import { createAction } from "@reduxjs/toolkit";
// import {
//   change_step,
//   decrement,
//   increment,
//   reset,
// } from "../../redux/counter/constants";
// export const increment = () => {
//   return { type: increment };
// };

// export const decrement = () => {
//   return { type: decrement };
// };

// export const reset = () => {
//   return { type: reset };
// };
// export const changeStep = (step) => {
//   return { type: change_step, payload: step };
// };

export const increment = createAction("increment");
export const decrement = createAction("decrement");
export const reset = createAction("reset");
export const change_step = createAction("changeStep");
