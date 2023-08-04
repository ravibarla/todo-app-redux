import { ADD_NOTE, DELETE_NOTE } from "../../redux/actions/noteAction";

const initialState = {
  notes: [
    {
      text: "Note 1",
      createdOn: new Date(),
    },
  ],
};
export default function noteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, { text: action.text, createdOn: new Date() }],
      };
    case DELETE_NOTE:
      state.notes.splice(action.index, 1);
      return {
        ...state,
        notes: [...state.notes],
      };
    default:
      return state;
  }
}
