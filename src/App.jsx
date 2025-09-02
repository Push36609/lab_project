import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from './Component/Header';
import Home from "./Component/Home";
import React from 'react';
import Event from "./Component/Event";
import Project from "./Component/Project";
import Research from "./Component/Research";
import Contact from "./Component/Contact";
import ReadMore from "./Component/ReadMore";
import Interns from "./Component/Interns";
import CurrentMember from "./Component/CurrentMember";
import Alumni from "./Component/Alumni";
import Login from "./Component/Login";
import About from "./Component/About";
import CurrentmemberSlider from "./Component/CurrentmemberSlider";





// Layout component to wrap around all routes
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* This renders the nested route components */}
    </>
  );
};

const MemberLayout = () => {
  return (
    <div>

      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // Layout wraps all nested routes
    children: [
      {
        path: "Home",
        element: <Home />,
      },

      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Member",
        element: <MemberLayout />,
        children: [

          {
            path: "Interns",
            element: <Interns />,
          },
          {
            path: "Current Member",
            element: <CurrentMember />,
          },
          {
            path: "Alumni",
            element: <Alumni />,
          },
        ]
      },
      {
        path: "More",
        element: <CurrentMember />
      },
      {
        path: "Read More",
        element: <Alumni />
      },
      {
        path: "/readMore/:name",
        element: <ReadMore />

      },
      {
        path: "/About/:name",
        element: <About />
      },


      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Research",
        element: <Research />,
      },
      {
        path: "project",
        element: < Project />,
      },
      {
        path: "Event",
        element: <Event />,
      },
      {
        index: true, // Default route for "/"
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
