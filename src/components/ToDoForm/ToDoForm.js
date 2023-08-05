import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notificationSelector } from "../../redux/reducers/notificationsReducer";
import { resetNotification } from "../../redux/reducers/notificationsReducer";
// import {addTodo} from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/todoReducer";
import "./ToDoForm.css";
import { Alert } from "reactstrap";
function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);
  if (message) {
    setTimeout(() => {
      dispatch(resetNotification());
    }, 3000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    // disptach(addTodo(todoText));
    // console.log("actions : ", actions);
    dispatch(actions.add(todoText));
  };

  return (
    <div className="container">
      {message && <><Alert color="primary">{message}</Alert></>}

      {/* <div className="alert alert-info" role="alert">
        {message}
      </div> */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
