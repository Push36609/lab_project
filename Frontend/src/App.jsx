import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import React from "react";
import Event from "./Component/Event";
import Project from "./Component/Project";
import Research from "./Component/Research";
import Contact from "./Component/Contact";
import Interns from "./Component/Interns";
import CurrentMember from "./Component/CurrentMember";
import Alumni from "./Component/Alumni";
import CurrentmemberSlider from "./Component/CurrentmemberSlider";
import MemberDetail from "./Component/MemberDetail";
import Signup from "./Component/Signup";
import ForgotPass from "./Component/ForgotPass";
import AdminLogin from "./Component/admin/AdminLogin";
import AdminDashboard from "./Component/admin/AdminDashboard";
import ProtectedRoute from "./Component/admin/ProtectedRoute";
import { AdminProvider } from "./Component/context/AdminContext";





// Layout component to wrap around all routes
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
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
      { path: "Home", element: <Home />, },
      { path: "Signup", element: <Signup />, },
      { path: "ForgotPass", element: <ForgotPass />, },
      {
        path: "Member",
        element: <MemberLayout />,
        children: [
          { path: "Current Member", element: <CurrentMember />, },
          { path: "Alumni", element: <Alumni />, },
          { path: "Interns", element: <Interns />, },
        ]
      },


      {
        path: "member/:type/:id", // type = current-members | alumni | interns
        element: <MemberDetail />,
      },

      // { path: "More",element: <CurrentMember /> },
      // { path: "Read More",element: <Alumni /> },
      // { path: "/readMore/:name", element: <ReadMore /> },
      // { path: "/About/:name",  element: <About /> },


      { path: "Contact", element: <Contact />, },
      { path: "Research", element: <Research />, },
      { path: "project", element: < Project />, },
      { path: "Event", element: <Event />, },

      // Admin routes
      { path: "admin-login", element: <AdminLogin /> },
      { path: "admin", element: <ProtectedRoute><AdminDashboard /></ProtectedRoute> },

      { index: true, element: <Home />, },
    ],
  },
]);

function App() {
  return (
    <AdminProvider>
      <RouterProvider router={router} />
    </AdminProvider>
  );
}

export default App;
