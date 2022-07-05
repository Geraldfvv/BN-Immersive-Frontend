import { useContext } from "react";
import { UserContext } from "../../utils/context/UserContex";

import { useLocation } from "react-router-dom";
import { AnchorBtn } from "../../components/AnchorBtn/AnchorBtn";
import { AnchorImg } from "../../components/AnchorImg/AnchorImg";

import logo1 from "../../assets/logo1.png";

export const NavBar = () => {
  const block = "nav-bar";

  const { pathname } = useLocation();
  const { user } = useContext(UserContext);

  return (
    <>
      {pathname !== "/login" && pathname !== "/signup" && (
        <div className={`${block}__root`}>
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

          {pathname !== "/" && <p>{user.name}</p>}
        </div>
      )}
    </>
  );
};
