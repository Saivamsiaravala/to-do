import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../components/Home";

const initialState: { tasks: Task[] } = {
  tasks: [
    {
      id: 1,
      status: "In Progress",
      title: "Lorem Ipsum 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "Sep 29 2025",
    },
    {
      id: 2,
      status: "In Progress",
      title: "Lorem Ipsum 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "Sep 29 2025",
    },
    {
      id: 3,
      status: "Pending",
      title: "Lorem Ipsum 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "Sep 29 2025",
    },
    {
      id: 4,
      status: "Completed",
      title: "Lorem Ipsum 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "Sep 29 2025",
    },
  ],
};

const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: () => {},
    editTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      state.tasks.push(action.payload);
      state.tasks.sort((a, b) => a.id - b.id);
    },
  },
});

export const { addTask, deleteTask, editTask } = TaskSlice.actions;

export default TaskSlice.reducer;
