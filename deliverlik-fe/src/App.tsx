import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Root from "./routes/Root";
import Restaurants from "./routes/Restaurants";
import Home from "./routes/Home";

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "restaurants", element: <Restaurants /> },
    ],
  },
]);

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
