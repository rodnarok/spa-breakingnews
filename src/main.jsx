import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import { Search } from "./pages/Search/Search.jsx";
import { Authentication } from "./pages/Authentication/Authentication.jsx";
import { GlobalStyled } from "./GlobalStyled.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import { Profile } from "./pages/Profile/Profile.jsx";
import UserProvider from "./Context/UserContext.jsx";
import { ManageNews } from "./pages/ManageNews/ManageNews.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:title",
        element: <Search />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/manage-news/:action/:id",
        element: <ManageNews />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Authentication />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyled />
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
