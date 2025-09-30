import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const navigate = useNavigate();
  return (
    <div className="addtask">
      <header>Add Task</header>
      <form className="form">
        <input
          required
          type="text"
          placeholder="Enter the title"
          className="title-input"
        />
        <input
          type="text"
          placeholder="Enter the description"
          className="description-input"
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
