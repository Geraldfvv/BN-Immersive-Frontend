import { useContext } from "react";
import { UserContext } from "../../utils/context/UserContex";

import { useLocation, Link } from "react-router-dom";
import { AnchorBtn } from "../../components/AnchorBtn/AnchorBtn";
import { AnchorImg } from "../../components/AnchorImg/AnchorImg";
import {
  BiTransfer,
  BiDownload,
  BiUser,
  BiHomeAlt,
  BiBulb,
} from "react-icons/bi";
import { RiLogoutCircleRLine } from "react-icons/ri";

import logo1 from "../../assets/logo1.png";

export const NavBar = () => {
  const block = "nav-bar";

  const { pathname } = useLocation();
  const { user } = useContext(UserContext);

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
            url={pathname.includes("home") ? "/home" : "/"}
          ></AnchorImg>

          {pathname === "/" && (
            <div className={`${block}__buttons`}>
              <AnchorBtn theme='primary' text='Sign Up' url='/signup' />
              <AnchorBtn theme='primary' text='Log In' url='/login' />
            </div>
          )}

          {pathname.includes("home") && (
            <div className={`${block}__routes`}>
              <Link to={"/home"} className={`${block}__route`}>
                <BiHomeAlt className={`${block}__icon`} />
                <p className={`${block}__text`}>Home</p>
              </Link>

              <Link to={"/home/services"} className={`${block}__route`}>
                <BiBulb className={`${block}__icon`} />
                <p className={`${block}__text`}>Services</p>
              </Link>

              <Link to={"/home/transfer"} className={`${block}__route`}>
                <BiTransfer className={`${block}__icon`} />
                <p className={`${block}__text`}>Transfer</p>
              </Link>

              <Link to={"/home/transfer"} className={`${block}__route`}>
                <BiDownload className={`${block}__icon`} />
                <p className={`${block}__text`}>Add Money</p>
              </Link>

              <Link to={"/home/profile"} className={`${block}__route`}>
                <BiUser className={`${block}__icon`} />
                <p className={`${block}__text`}>Profile</p>
              </Link>

              <button className={`${block}__route`}>
                <RiLogoutCircleRLine className={`${block}__icon`} />
                <p className={`${block}__text`}>Log Out</p>
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};
