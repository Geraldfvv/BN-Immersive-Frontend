export const ErrorPage = (props) => {
  const { line1, line2 } = props;
  const block = "error-page";
  return (
    <div className={`${block}__root`}>
      <div className={`${block}__content`}>
        <h1 className={`${block}__line ${block}__line--1`}>
          {line1}
        </h1>
        <h1 className={`${block}__line ${block}__line--2`}>
          {line2}
        </h1>
      </div>
    </div>
  );
};
