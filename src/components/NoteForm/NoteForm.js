import { useState } from "react";
import "./NoteForm.css";
// import { addNote } from "../../redux/actions/noteAction";
import { actions } from "../../redux/reducers/noteReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  notificationSelector,
  resetNotification,
} from "../../redux/reducers/notificationsReducer";
import { Alert } from "reactstrap";
function NoteForm({ onCreateNote }) {
  const [NoteText, setNoteText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);
  if (message) {
    setTimeout(() => dispatch(resetNotification()), 3000);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.add(NoteText));
    setNoteText("");
  };

  return (
    <div className="container">
      {message && (
        <>
          <Alert color="primary">{message}</Alert>
        </>
      )}
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          className="form-control mb-3"
          value={NoteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
