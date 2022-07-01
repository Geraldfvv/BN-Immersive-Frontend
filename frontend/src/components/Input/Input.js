export const Input = (props) => {
  const {
    type,
    label,
    value,
    handleFormChange,
    id,
    error,
    size,
    accept,
    placeholder = "",
  } = props;
  const block = "input";
  return (
    <div className={`${block}__input-label ${block}__input-label--${size}`}>
      <label htmlFor={id} className={`${block}__label`}>
        {label}
      </label>
      <input
        id={id}
        className={`${block}__input`}
        type={type}
        placeholder={placeholder}
        value={value}
        accept={accept ? accept : ""}
        onChange={(e) => {
          handleFormChange(e);
        }}
      />
      <span className={`${block}__error`}>{error}</span>
    </div>
  );
};
