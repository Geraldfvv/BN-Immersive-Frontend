import { Outlet } from "react-router-dom";

export const Home = () => {
  const block = "home";
  return (
    <>
      <Outlet></Outlet>
    </>
  );
};
