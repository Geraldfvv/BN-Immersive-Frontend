import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnchorBtn } from "../../components/AnchorBtn/AnchorBtn";
import { AnchorImg } from "../../components/AnchorImg/AnchorImg";

import logo1 from "../../assets/logo1.png";

export const NavBar = () => {
  const block = "nav-bar";
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/login" && pathname !== "/signup" && (
        <div className={`${block}__root`}>
          <AnchorImg img={logo1} alt='company logo' url='/'></AnchorImg>

          {pathname === "/" && (
            <div className={`${block}__buttons`}>
              <AnchorBtn theme='primary' text='Sign Up' url='/signup' />
              <AnchorBtn theme='primary' text='Log In' url='/login' />
            </div>
          )}
        </div>
      )}
    </>
  );
};