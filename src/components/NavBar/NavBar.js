import Cookies from "universal-cookie";

import { useLocation, Link } from "react-router-dom";
import { AnchorNav } from "../Anchors/AnchorNav/AnchorNav";
import { AnchorImg } from "../Anchors/AnchorImg/AnchorImg";

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
  const cookies = new Cookies();
  const user = cookies.get("user");

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
            url={pathname.includes("home") && user ? "/home" : "/"}
          ></AnchorImg>

          {(pathname === "/" || !user) && (
            <div className={`${block}__buttons`}>
              <AnchorNav route='/signup' text='Sign Up' location={pathname}>
                <BiUserPlus className='anchor-nav__icon' />
              </AnchorNav>
              <AnchorNav route='/login' text='Log In' location={pathname}>
                <RiLoginCircleLine className='anchor-nav__icon' />
              </AnchorNav>
            </div>
          )}

          {pathname.includes("home") && user && (
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

              <AnchorNav
                route='/home/profile'
                text='Profile'
                location={pathname}
              >
                <BiUser className='anchor-nav__icon' />
              </AnchorNav>

              <button className='anchor-nav__route log-out'>
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
