import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Taskpage from "./component/main/Taskpage.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Taskpage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
<RouterProvider router={route} />);
