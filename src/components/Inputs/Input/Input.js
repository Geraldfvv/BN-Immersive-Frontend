export const Input = (props) => {
  const {
    type,
    label,
    value,
    handleFormChange,
    id,
    error,
    accept,
    placeholder = "",
    size,
  } = props;
  const block = "input";
  return (
    <div
      className={`${block}__input-label ${size ? `${block}__input-label--${size}` : ""}`}
    >
      <label
        htmlFor={id}
        className={`${block}__label ${error ? `${block}__label--error` : ""}`}
      >
        {label} <span className={`${block}__error`}>{error}</span>
      </label>
      
      <input
        id={id}
        className={`${block}__input ${error ? `${block}__input--error` : ""}`}
        type={type}
        placeholder={placeholder}
        value={value}
        accept={accept ? accept : ""}
        onChange={(e) => {
          handleFormChange(e);
        }}
      />
    </div>
  );
};
