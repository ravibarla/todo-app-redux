const { createSlice } = require("@reduxjs/toolkit");
const intitialState = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  intitialState,
  reducers: {},
  extraReducers: {
    "todo/add": (state, action) => {
      state.message = "todo is created";
    },
  },
});
export const notificationReducer=notificationSlice.reducer
