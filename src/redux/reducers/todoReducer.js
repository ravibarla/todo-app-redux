import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";
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
export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          
          if (i === action.index) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}
