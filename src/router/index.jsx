import {
  createBrowserRouter
} from "react-router-dom";
import App from "../App";
import About from "../components/About";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
  },
], { basename: "/" });

export default router;
