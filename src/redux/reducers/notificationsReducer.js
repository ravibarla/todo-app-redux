const { createSlice } = require("@reduxjs/toolkit");
const intitialState = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  intitialState,
  reducers: {
    reset: (state, action) => {
      state.message = "";
    },
  },
  extraReducers: {
    "todo/add": (state, action) => {
      state.message = "todo is created";
    },
  },
});
export const notificationReducer = notificationSlice.reducer;
export const resetNotification = notificationSlice.actions.reset;
export const notificationSelector = (state) =>
  state.notificationReducer.message;
