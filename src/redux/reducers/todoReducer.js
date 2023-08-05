// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";
const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  todos: [
    {
      text: "wake up at 8",
      completed: true,
    },
    {
      text: "go to office at 10",
      completed: false,
    },
  ],
};
//create reducer using redux/toolkit
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducer: {
    //this is add action
    add: (state, action) => {
      state.todos.push({
        text: action.payload,
        completed: false,
      });
    },
    toggle: (state, action) => {
      state.todos.map((todo, i) => {
        if (i === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
});
export const todoReducer = todoSlice.reducer;
export const actions=todoSlice.actions

//create selector

export const todoSelector=(state) => state.todoReducer.todos
//reducer using redux

// export default function todoReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [...state.todos, { text: action.text, completed: false }],
//       };
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo, i) => {
//           if (i === action.index) {
//             todo.completed = !todo.completed;
//           }
//           return todo;
//         }),
//       };
//     default:
//       return state;
//   }
// }
