export const Loading = () => {
  const block = "loading";
  return (
    <>
      <div className={`${block}__root`}>
        <div className={`${block}__spinner`}></div>
        <span className={`${block}__text`}>Loading</span>
      </div>
    </>
  );
};
