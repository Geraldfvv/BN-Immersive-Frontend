import { Outlet } from "react-router-dom";

export const Home = () => {
  const block = "home";
  return (
    <div className={`${block}__root`}>
      <Outlet></Outlet>
    </div>
  );
};
