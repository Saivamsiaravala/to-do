import { GiPlainCircle } from "react-icons/gi";
import type { Task } from "./Home";
import { TbPencil } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { deleteTask } from "../features/TaskSlice";
import { useAppDispatch } from "../hooks";

export const statusColors: {
  Pending: string;
  Completed: string;
  "In Progress": string;
} = {
  Pending: "rgba(208, 208, 208, 1)",
  Completed: "rgba(54, 138, 4, 1)",
  "In Progress": "rgba(255, 176, 60, 1)",
};

const TaskComponent = ({ item }: { item: Task }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { description, title, status, time, id } = item;
  const handleEditButton = (urlId: number) => {
    navigate(`edittask/${urlId}`);
  };

  const deleteHandler = (id: number) => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <div className="icon">{title.slice(0, 1).toUpperCase()}</div>
      <div className="info">
        <div className="heading">
          <div className="title">{title}</div>
          <div className="status">
            <GiPlainCircle
              className="color"
              style={{ color: statusColors[status] }}
            />
            {status}
          </div>
        </div>
        <div className="description">{description}</div>
        <div className="bottom">
          <div className="time">{time}</div>
          <div className="change">
            <button onClick={() => handleEditButton(id)}>
              <TbPencil className="edit" />
            </button>
            <button onClick={() => deleteHandler(id)}>
              <RiDeleteBinLine className="delete" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskComponent;
