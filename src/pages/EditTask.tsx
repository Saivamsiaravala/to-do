import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import React, { useEffect, useState } from "react";
import { editTask } from "../features/TaskSlice";
import type { Task } from "../components/Home";

const EditTask = () => {
  const dispatch = useAppDispatch();
  const { tempId } = useParams();
  const { tasks } = useAppSelector((store) => store.tasks);
  const task = tasks.filter((task) => task.id === Number(tempId));
  const { title, description, status, time } = task[0];

  const [tempTask, setTempTask] = useState<Task>({
    id: Number(tempId),
    title: title,
    description: description,
    status: status,
    time: time,
  });
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editTask(tempTask));
    navigate("/");
    console.log(tempTask);
  };

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTempTask({ ...tempTask, title: e.target.value });
  };

  const descriptionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTempTask({ ...tempTask, description: e.target.value });
  };

  const statusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setTempTask({ ...tempTask, status: e.target.value as Task["status"] });
  };

  return (
    <div className="edit">
      <header>Edit Task </header>
      <form className="form" onSubmit={(e) => formHandler(e)}>
        <input
          type="text"
          value={tempTask.title}
          className="title-input"
          onChange={(e) => titleHandler(e)}
        />
        <input
          type="text"
          value={tempTask.description}
          className="description-input"
          onChange={(e) => descriptionHandler(e)}
        />
        <select
          name="status"
          defaultValue={`${status}`}
          className="select-input"
          onChange={(e) => statusHandler(e)}
        >
          <option value="Pending">
            {/* <GiPlainCircle style={{ color: statusColors[status] }} /> */}
            Pending
          </option>
          <option value="In Progress">
            {/* <GiPlainCircle style={{ color: statusColors[status] }} /> In */}
            In Progress
          </option>
          <option value="Completed">
            {/* <GiPlainCircle style={{ color: statusColors[status] }} /> */}
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
