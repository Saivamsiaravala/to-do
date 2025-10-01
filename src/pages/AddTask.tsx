import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addTask } from "../features/TaskSlice";
import { useState } from "react";
import type { Task } from "../components/Home";

const AddTask = () => {
  const { tasks } = useAppSelector((store) => store.tasks);
  const [newTask, setNewTask] = useState<Task>({
    id: tasks.length,
    time: "",
    status: "Pending",
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = new Date();
    dispatch(addTask({ ...newTask, time: date.toString().slice(4, 15) }));
    setNewTask({
      id: tasks.length,
      time: "",
      status: "Pending",
      title: "",
      description: "",
    });
    navigate("/");
  };
  return (
    <div className="addtask">
      <header>Add Task</header>
      <form className="form" onSubmit={formHandler}>
        <input
          required
          type="text"
          placeholder="Enter the title"
          className="title-input"
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter the description"
          className="description-input"
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        <div className="buttons">
          <button className="cancel-btn" onClick={() => navigate("/")}>
            Cancel
          </button>
          <button className="submit-btn" type="submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
