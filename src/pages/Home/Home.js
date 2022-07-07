import { Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
import { useLocation, Link } from "react-router-dom";
import { ErrorPage } from "../ErrorPage/ErrorPage";

export const Home = () => {
  const block = "home";
  const cookies = new Cookies();
  const user = cookies.get("user");

  if (user) {
    return <Outlet></Outlet>;
  } else {
    return <ErrorPage line1="Unauthorized" line2="please log in to continue"></ErrorPage>;
  }
};
