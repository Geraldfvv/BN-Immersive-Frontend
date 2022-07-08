import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { AnchorNav } from "../Anchors/AnchorNav/AnchorNav";
import { AnchorImg } from "../Anchors/AnchorImg/AnchorImg";
import { confirmation } from "../../utils/alerts/alerts";

import {
  BiTransfer,
  BiDownload,
  BiUser,
  BiUserPlus,
  BiHomeAlt,
  BiBulb,
} from "react-icons/bi";
import { RiLogoutCircleRLine, RiLoginCircleLine } from "react-icons/ri";

import logo1 from "../../assets/logo1.png";

export const NavBar = () => {
  const block = "nav-bar";
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const userCookie = cookies.get("user");
  const [user, setUser] = useState();

  useEffect(() => {
    if (sessionStorage.getItem("userName") !== null) {
      const userName = JSON.parse(
        sessionStorage.getItem("userName")
      ).name.split(" ")[0];
      setUser(userName);
    }
  }, []);

  const handleLogOut = () => {
    confirmation("Are you sure you want to log out?").then((result) => {
      if (result.isConfirmed) {
        cookies.remove("user");
        sessionStorage.clear();
        navigate("/");
      }
    });
  };

  return (
    <>
      {pathname !== "/login" && pathname !== "/signup" && (
        <div
          className={`${block}__root ${
            pathname.includes("home") ? `${block}__root--shadow` : ""
          }`}
        >
          <AnchorImg
            img={logo1}
            alt='company logo'
            url={pathname.includes("home") && userCookie ? "/home" : "/"}
          ></AnchorImg>

          {(pathname === "/" || !userCookie) && (
            <div className={`${block}__buttons`}>
              <AnchorNav route='/signup' text='Sign Up' location={pathname}>
                <BiUserPlus className='anchor-nav__icon' />
              </AnchorNav>
              <AnchorNav route='/login' text='Log In' location={pathname}>
                <RiLoginCircleLine className='anchor-nav__icon' />
              </AnchorNav>
            </div>
          )}

          {pathname.includes("home") && userCookie && (
            <div className={`${block}__routes`}>
              <AnchorNav route='/home' text='Home' location={pathname}>
                <BiHomeAlt className='anchor-nav__icon' />
              </AnchorNav>

              <AnchorNav
                route='/home/services'
                text='Services'
                location={pathname}
              >
                <BiBulb className='anchor-nav__icon' />
              </AnchorNav>

              <AnchorNav
                route='/home/transfer'
                text='Transfer'
                location={pathname}
              >
                <BiTransfer className='anchor-nav__icon' />
              </AnchorNav>

              <AnchorNav
                route='/home/fund'
                text='Add Money'
                location={pathname}
              >
                <BiDownload className='anchor-nav__icon' />
              </AnchorNav>

              <AnchorNav route='/home/profile' text={user} location={pathname}>
                <BiUser className='anchor-nav__icon' />
              </AnchorNav>

              <button
                className='anchor-nav__route log-out'
                onClick={() => handleLogOut()}
              >
                <RiLogoutCircleRLine className='anchor-nav__icon' />
                <p className='anchor-nav__text'>Log Out</p>
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};
