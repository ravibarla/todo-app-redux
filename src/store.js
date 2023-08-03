import { createStore } from "redux";
import todoReducer from "./redux/reducers/todoReducer";

const store = createStore(todoReducer);
export default store;
