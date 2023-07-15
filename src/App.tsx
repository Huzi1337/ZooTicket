import Navbar from "./components/Navbar";
import "./App.scss";
import VisitUs from "./components/VisitUs";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: (
          <>
            <Navbar></Navbar>
            <VisitUs></VisitUs>
          </>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
