import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.scss"
import Mock from "./components/Mock/Mock";

const Layout = () => {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/Mock",
        element:<Mock/>,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
