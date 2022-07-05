export const CardService = (props) => {
  const { icon, name } = props;
  const block = "service";
  return (
    <button className={`${block}__root`}>
      {props.children}
      <p className={`${block}__name`}>{name}</p>
    </button>
  );
};
