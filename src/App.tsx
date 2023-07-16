import Navbar from "./components/Navbar";
import "./App.scss";
import VisitUs from "./components/pages/VisitUs";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import PurchaseForm from "./components/pages/PurchaseForm";
import useFetch from "./hooks/fetch";
import { API_URL } from "./assets/data";
import { IVisitUsData } from "./assets/types";

function App() {
  const { isLoading, error, data } = useFetch(API_URL);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>An error has occured. {error}</h1>;

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: (
            <>
              <Navbar></Navbar>
              <VisitUs data={data}></VisitUs>
              <Footer></Footer>
            </>
          ),
        },
        {
          path: "/ticket",
          element: (
            <>
              <Navbar></Navbar>
              <PurchaseForm
                data={(data as IVisitUsData).tickets}
              ></PurchaseForm>
              <Footer></Footer>
            </>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
