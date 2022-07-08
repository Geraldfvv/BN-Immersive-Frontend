import { Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
import { ErrorPage } from "../ErrorPage/ErrorPage";

export const Home = () => {
  const cookies = new Cookies();
  const userCookies = cookies.get("user");

  if (userCookies ) {
    return <Outlet></Outlet>;
  } else {
    return (
      <ErrorPage
        line1='Unauthorized'
        line2='please log in to continue'
      ></ErrorPage>
    );
  }
};
