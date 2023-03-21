import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <nav>Navigation</nav>
      <Outlet />
    </>
  );
};

export default Root;
