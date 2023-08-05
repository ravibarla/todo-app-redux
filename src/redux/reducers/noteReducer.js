// import { ADD_NOTE, DELETE_NOTE } from "../../redux/actions/noteAction";
const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  notes: [
    {
      text: "Note 1",
      createdOn: new Date(),
    },
  ],
};
const noteSlice = createSlice({
  name: "note",
  initialState: initialState,
  reducer: {
    add: (state, action) => {
      state.notes.push({
        text: action.payload,
        createdOn: new Date(),
      });
    },
    delete: (state, action) => {
      state.notes.splice(action.payload, 1);
    },
  },
});
export const noteReducer = noteSlice.reducer;
// export default function noteReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_NOTE:
//       return {
//         ...state,
//         notes: [...state.notes, { text: action.text, createdOn: new Date() }],
//       };
//     case DELETE_NOTE:
//       state.notes.splice(action.index, 1);
//       return {
//         ...state,
//         notes: [...state.notes],
//       };
//     default:
//       return state;
//   }
// }
