import { Link } from "react-router-dom";

export const AnchorIcon = (props) => {
  const {  text, url } = props;
  const block = "anchor-icon";
  return (
    <>
      <div className={`${block}__root`}>
        <Link to={url} className={`${block}__icon `}>
          {props.children}
        </Link>
        <p className={`${block}__text`}>{text}</p>
      </div>
    </>
  );
};
