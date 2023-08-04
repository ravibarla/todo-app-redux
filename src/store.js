import { createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./redux/reducers/todoReducer";

const store = createStore(todoReducer);
// const store = configureStore({ reducer: todoReducer });
export default store;
