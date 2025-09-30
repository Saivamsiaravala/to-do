import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { useState } from "react";
import { statusColors } from "../components/TaskComponent";
import { GiPlainCircle } from "react-icons/gi";

const EditTask = () => {
  const [tempTitle, setTempTitle] = useState("");
  const [tempDesc, setTempDesc] = useState("");
  console.log(tempDesc, tempTitle);
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks } = useAppSelector((store) => store.tasks);
  const task = tasks.filter((task) => task.id === Number(id));
  const { title, description, status } = task[0];
  console.log(task);
  const formHandler = () => {};
  return (
    <div className="edit">
      <header>Edit Task </header>
      <form className="form" onSubmit={formHandler}>
        <input
          type="text"
          value={title}
          className="title-input"
          onChange={(e) => setTempTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          className="description-input"
          onChange={(e) => setTempDesc(e.target.value)}
        />
        <select
          name="status"
          defaultValue={`${status}`}
          className="select-input"
        >
          <option value="Pending">
            <GiPlainCircle style={{ color: statusColors[status] }} />
            Pending
          </option>
          <option value="In Progress">
            <GiPlainCircle style={{ color: statusColors[status] }} /> In
            Progress
          </option>
          <option value="Completed">
            <GiPlainCircle style={{ color: statusColors[status] }} />
            Completed
          </option>
        </select>

        <div className="buttons">
          <button onClick={() => navigate("/")} className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="update-btn">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
