import { IoSearchOutline } from "react-icons/io5";
import Tasks from "./Tasks";
import { useAppSelector } from "../hooks";
import { RiAddCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export type Task = {
  id: number;
  status: "In Progress" | "Pending" | "Completed";
  title: string;
  description: string;
  time: string;
};

const Home = () => {
  const { tasks } = useAppSelector((store) => store.tasks);

  const navigate = useNavigate();

  return (
    <div className="app">
      <header>TO-DO APP</header>
      <div className="list">
        <div className="search">
          <IoSearchOutline />
          <input type="text" placeholder="Search To-Do" />
        </div>
        <div className="tasks">
          <div className="in-progress">
            <Tasks
              title={"In Progress"}
              tasks={tasks.filter((item) => item.status === "In Progress")}
            />
          </div>
          <div className="pending">
            <Tasks
              title={"Pending"}
              tasks={tasks.filter((item) => item.status === "Pending")}
            />
          </div>
          <div className="completed">
            <Tasks
              title={"Completed"}
              tasks={tasks.filter((item) => item.status === "Completed")}
            />
          </div>
        </div>
      </div>
      <div className="add">
        <button onClick={() => navigate("/addtask")}>
          <RiAddCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Home;
