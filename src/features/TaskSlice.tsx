import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../components/Home";

localStorage.setItem(
  "Tasks",
  JSON.stringify({
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
  })
);
const initialState: { tasks: Task[] } = JSON.parse(
  localStorage.getItem("Tasks") || ""
);
const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      localStorage.setItem("Tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("Tasks", JSON.stringify(state.tasks));
    },
    editTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      state.tasks.push(action.payload);
      state.tasks.sort((a, b) => a.id - b.id);
      localStorage.setItem("Tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, deleteTask, editTask } = TaskSlice.actions;

export default TaskSlice.reducer;
