import { useLocation, Link } from "react-router-dom";

export const AnchorNav = (props) => {
  const block = "anchor-nav";
  const { text, route, location } = props;

  return (
    <Link
      to={route}
      className={`${block}__route ${
        route === location ? `${block}__route--active` : ""
      }`}
    >
      {props.children}
      <p className={`${block}__text`}>{text}</p>
    </Link>
  );
};
