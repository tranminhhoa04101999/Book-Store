/* eslint-disable react-refresh/only-export-components */
import AllBook from "@/views/AllBook/AllBook";
import loadable from "@loadable/component";

const Dashboard = loadable(() => import("@/views/dashboard/Dashboard"), {
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
  ];
};

export default appRoute;
