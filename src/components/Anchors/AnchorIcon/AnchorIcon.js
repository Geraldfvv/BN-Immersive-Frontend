import { Link } from "react-router-dom";

export const AnchorIcon = (props) => {
  const {  text, url } = props;
  const block = "anchor-icon";
  return (
    <>
      <Link to={url} className={`${block}__root`}>
        <div className={`${block}__icon `}>
          {props.children}
        </div>
        <p className={`${block}__text`}>{text}</p>
      </Link>
    </>
  );
};
