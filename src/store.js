import { createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./redux/reducers/todoReducer";
import { combineReducers } from "redux";
import noteReducer from "./redux/reducers/noteReducer";
const result=combineReducers({
    notes:noteReducer
    todos:todoReducer
})
// const store = createStore(todoReducer);
// const store = configureStore({ reducer: todoReducer });
const store = createStore(result);
export default store;
