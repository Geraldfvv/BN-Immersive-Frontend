import { Link } from "react-router-dom";

export const AnchorImg = (props) => {
  const { img, url, alt } = props;
  const block = "anchor-img";
  return (
    <>
      <Link to={url}>
        <img src={img} className={`${block}__img`} alt={alt} />
      </Link>
    </>
  );
};
