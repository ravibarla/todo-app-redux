import { actions } from "./todoReducer";
// import { createSlice } from "@reduxjs/toolkit";
const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {
    reset: (state, action) => {
      // console.log(state)
      state.message = "";
    },
  },
  //   extraReducers: {
  //     "todo/add": (state, action) => {
  //       state.message = "todo is created";
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(actions.add, (state, action) => {
      state.message = "todo is created";
    });
  },
  //   extraReducers: {
  //     //map object ley-value
  //     [actions.add]: (state, action) => {
  //       return state.message = "todo is created";
  //     },
  //   },
});
export const notificationReducer = notificationSlice.reducer;
export const resetNotification = notificationSlice.actions.reset;
export const notificationSelector = (state) =>
  state.notificationReducer.message;
