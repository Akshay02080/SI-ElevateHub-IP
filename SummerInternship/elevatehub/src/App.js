import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./authentication/Login";
import SIgnup from "./authentication/SIgnup";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Compete from "./components/Compete";
import Mentorship from "./components/Mentorship";
import Community from "./components/Community";
import SideBar from "./components/SideBar";
import PostMentors from "./mentors/PostMentors";
import CreateCompete from "./admin/CreateCompete";
import CreateCourses from './admin/CreateCourses'
import MentorsTable from "./admin/MentorsTable";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/SIgnup",
      element: <SIgnup/>,
    },
    {
      path: "/:",
      element: <RootLayout/>,
      children: [
        {
          path: "/:",
          element: <Home/>,
        },
        {
          path: "/:/Courses",
          element: <Courses/>,
          children:[{
            path:"SideBar",
            element:<SideBar/>
          }]
        },
        {
          path: "/:/Compete",
          element: <Compete/>,
        },
        {
          path: "/:/Mentorship",
          element: <Mentorship/>,
        },
        {
          path: "/:/Community",
          element: <Community/>,
        },
        {
          path: "/:/PostMentors",
          element: <PostMentors/>,
        },
        {
          path: "/:/CreateCompete",
          element: <CreateCompete/>,
        },
        {
          path: "/:/CreateCourses",
          element: <CreateCourses/>,
        },
        {
          path: "/:/MentorsTable",
          element: <MentorsTable/>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
