import { createBrowserRouter } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Researchers from "../pages/Researchers";
import Events from "../pages/Events";
import News from "../pages/News";
import Stories from "../pages/Stories";
import Layout from "../components/Layout";
import ThematicFocus from "../pages/ThematicFocus";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AdminLayout from "../components/AdminLayout";
import ResearchersAdmin from "../pages/admin/ResearchersAdmin";
import { ProtectedRoute } from "../components/ProtectedRoute";
import NewsAdmin from "../pages/admin/NewsAdmin";
import StoriesAdmin from "../pages/admin/StoriesAdmin";
import EventsAdmin from "../pages/admin/EventsAdmin";
import FocusesAdmin from "../pages/admin/FocusesAdmin";
import UserProfile from "../pages/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Welcome /> },
      { path: "/researchers", element: <Researchers /> },
      { path: "/events", element: <Events /> },
      { path: "/news", element: <News /> },
      { path: "/stories", element: <Stories /> },
      { path: "/profile", element: <UserProfile /> },
      { path: "/focuses", element: <ThematicFocus /> },
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
      {
        element: <ProtectedRoute allowedRoles={["admin"]} />,
        children: [
          { path: "researchers", element: <ResearchersAdmin /> },
          { path: "events", element: <EventsAdmin /> },
          { path: "focuses", element: <FocusesAdmin /> },
        ],
      },
      {
        element: <ProtectedRoute allowedRoles={["researcher"]} />,
        children: [
          { path: "news", element: <NewsAdmin /> },
          { path: "stories", element: <StoriesAdmin /> },
        ],
      },
    ],
      },
    ],
  },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
]);

export default router;
