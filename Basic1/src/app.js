import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ErrorPage from "./components/ErrorPage";
import ContactUs from "./components/ContactUs";
import Restaurent from "./components/Restaurent";
import UserContext from "./utils/userContext";

const Groceries = lazy(() => import("./components/Groceries")); //spliting bundle

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Rinta Nithin",
    };
    setUserName(data.name);
  }, []);
  return (
    <>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />

        <Outlet />
      </UserContext.Provider>
    </>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/restaurants/:resId", element: <Restaurent /> },
      {
        path: "/groceries",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            {" "}
            <Groceries />{" "}
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
