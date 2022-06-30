import { AnchorBtn } from "../../components/AnchorBtn/AnchorBtn";
import logo from "../../assets/logo.png";

export const NavBar = () => {
  const block = "nav-bar";
  return (
    <div className={`${block}__root`}>
      <img src={logo} className={`${block}__img`} alt='Banco Nacional Logo' />
      <div className={`${block}__buttons`}>
        <AnchorBtn theme='ternary' text='Sign In' url='#'/>
        <AnchorBtn theme='ternary' text='Log In' url='#'/>
      </div>
    </div>
  );
};
