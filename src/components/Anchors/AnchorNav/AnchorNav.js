import { Link } from "react-router-dom";

export const AnchorNav = (props) => {
  const { text, route } = props;
  const block = "anchor-nav";
  return (
    <Link to={route} className={`${block}__route`}>
      {props.children}
      <p className={`${block}__text`}>{text}</p>
    </Link>
  );
};
