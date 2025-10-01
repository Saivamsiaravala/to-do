import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import EditTask from "./pages/EditTask.tsx";
import Home from "./components/Home.tsx";
import AddTask from "./pages/AddTask.tsx";
import { Provider } from "react-redux";
import store from "./store.ts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="edittask/:tempId" element={<EditTask />} />
      <Route path="addtask" element={<AddTask />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
