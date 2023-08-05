const { createSlice } = require("@reduxjs/toolkit");
const intitialState = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: {
    "todo/add": (state, action) => {
      state.message = "todo is created";
    },
  },
});
export const notificationReducer=notificationSlice.reducer
