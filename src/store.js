// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./redux/reducers/todoReducer";
// import { combineReducers } from "redux";
import { noteReducer } from "./redux/reducers/noteReducer";
import { notificationReducer } from "./redux/reducers/notificationsReducer";
// const result = combineReducers({
//   noteReducer,
//   todoReducer,
// });
// const store = createStore(todoReducer);
const store = configureStore({
  reducer: { todoReducer, noteReducer, notificationReducer },
});

// const store = createStore(result);

export default store;
