import { Link } from "react-router-dom";

export const AnchorBtn = (props) => {
  const { theme, text, url } = props;
  const block = "button";
  return (
    <>
      <Link className={`${block}__root ${block}--${theme}`} to={url}>{text}</Link>
    </>
  );
};
