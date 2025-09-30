import { useState } from "react";
import { type Task } from "./Home";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import TaskComponent from "./TaskComponent";

const Tasks = ({ tasks, title }: { tasks: Task[]; title: string }) => {
  const [showTasks, setShowTasks] = useState(false);

  return (
    <>
      <button className="bar" onClick={() => setShowTasks(!showTasks)}>
        <div className="title">
          {title} (<span>{tasks.length}</span>)
        </div>
        <div className="icon">
          {showTasks ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </button>
      {showTasks && (
        <div className="tasks-tab">
          {tasks.map((item) => {
            return (
              <div className="task" key={item.id}>
                <TaskComponent item={item} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Tasks;
