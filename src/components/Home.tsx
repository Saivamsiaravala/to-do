import { IoSearchOutline } from "react-icons/io5";
import Tasks from "./Tasks";
import { useAppSelector } from "../hooks";
import { RiAddCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export type Task = {
  id: number;
  status: "In Progress" | "Pending" | "Completed";
  title: string;
  description: string;
  time: string;
};

const Home = () => {
  const { tasks } = useAppSelector((store) => store.tasks);
  useEffect(() => {
    localStorage.setItem(
      "Tasks",
      JSON.stringify({
        tasks: [
          {
            id: 1,
            status: "In Progress",
            title: "Lorem Ipsum 1",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            time: "Sep 29 2025",
          },
          {
            id: 2,
            status: "In Progress",
            title: "Lorem Ipsum 2",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            time: "Sep 29 2025",
          },
          {
            id: 3,
            status: "Pending",
            title: "Lorem Ipsum 3",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            time: "Sep 29 2025",
          },
          {
            id: 4,
            status: "Completed",
            title: "Lorem Ipsum 4",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            time: "Sep 29 2025",
          },
        ],
      })
    );
    return () => {
      localStorage.clear();
    };
  }, []);
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
