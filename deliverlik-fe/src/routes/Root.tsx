import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();

  return (
    <>
      <nav>Navigation</nav>
      <Outlet />
    </>
  );
};

export default Root;
