import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main.jsx";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import SingUp from "./Components/SingUp.jsx";
import SingIn from "./Components/SingIn.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import User from "./Components/user.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () =>
          fetch(
            "https://coffee-store-server-37qhzgnfg-jafars-projects.vercel.app/coffee"
          ),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-37qhzgnfg-jafars-projects.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/singUp",
        element: <SingUp></SingUp>,
      },
      {
        path: "/singIn",
        element: <SingIn></SingIn>,
      },
      {
        path: "/user",
        element: <User></User>,
        loader: () =>
          fetch(
            "https://coffee-store-server-37qhzgnfg-jafars-projects.vercel.app/user"
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
