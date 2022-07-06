import error from "../../assets/error.svg";

export const Error = (props) => {
  const { msg1, msg2 } = props;
  const block = "error";
  return (
    <div className={`${block}__root`}>
      <img className={`${block}__icon`} src={error} alt='Error'></img>
      <h1 className={`${block}__text`}>
        {msg1}
        <br />
        {msg2}
      </h1>
    </div>
  );
};
