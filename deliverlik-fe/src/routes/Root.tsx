import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";

const Root = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

export default Root;
