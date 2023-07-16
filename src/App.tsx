import Navbar from "./components/Navbar";
import "./App.scss";
import VisitUs from "./components/pages/VisitUs";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import PurchaseForm from "./components/pages/PurchaseForm";

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
            <Footer></Footer>
          </>
        ),
      },
      {
        path: "/ticket",
        element: (
          <>
            <Navbar></Navbar>
            <PurchaseForm></PurchaseForm>
            <Footer></Footer>
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
