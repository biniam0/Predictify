import { createBrowserRouter } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Researchers from "../pages/Researchers";
import Events from "../pages/Events";
import News from "../pages/News";
import Stories from "../pages/Stories";
import Layout from "../components/Layout";
import ThematicFocus from "../pages/ThematicFocus";

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
      { path: "/focuses", element: <ThematicFocus /> },
    ],
  },
]);

export default router;
