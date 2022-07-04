export const CardService = ({icon , name}) => {
  const block = "service";
  return (
    <button className={`${block}__root`}>
      <span className={`${icon} ${block}__icon`}></span>
      <p className={`${block}__name`}>{name}</p>
    </button>
  );
};
