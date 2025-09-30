import { createSlice } from "@reduxjs/toolkit";
import type { Task } from "../components/Home";

const initialState: { tasks: Task[] } = {
  tasks: [
    {
      id: 1,
      status: "In Progress",
      title: "Lorem Ipsum 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "Sep 29th 2025",
    },
    {
      id: 2,
      status: "In Progress",
      title: "Lorem Ipsum 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "Sep 29th 2025",
    },
    {
      id: 3,
      status: "Pending",
      title: "Lorem Ipsum 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "Sep 29th 2025",
    },
    {
      id: 4,
      status: "Completed",
      title: "Lorem Ipsum 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "Sep 29th 2025",
    },
  ],
};

const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: () => {},
    deleteTask: () => {},
    editTask: () => {},
  },
});

export const { addTask, deleteTask, editTask } = TaskSlice.actions;

export default TaskSlice.reducer;
