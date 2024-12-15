import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthProvider from "../contexts/AuthProvider";
import JobDetails from "../pages/JobDetails";
import axios from "axios";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <MainLayout></MainLayout>
      </AuthProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/job/details/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_JOB_API}/jobs/${params.id}`),
      },
    ],
  },
]);
