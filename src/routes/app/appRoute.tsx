/* eslint-disable react-refresh/only-export-components */
import AllBook from "@/views/AllBook/AllBook";
import BookDetail from "@/views/BookDetail/BookDetail";
import loadable from "@loadable/component";

const Dashboard = loadable(() => import("@/views/Dashboard/Dashboard"), {
  fallback: <h1>Loading</h1>,
});

const appRoute = () => {
  return [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/all",
      element: <AllBook />,
    },
    {
      path: "/book",
      element: <BookDetail />,
    },
  ];
};

export default appRoute;
