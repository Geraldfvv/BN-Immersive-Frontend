export const Select = (props) => {
  const block = "select";
  const {
    label,
    value,
    handleFormChange,
    id,
    error,
    size,
    options,
  } = props;

  return (
    <div className={`${block}__input-label ${block}__input-label--${size}`}>
      <label htmlFor={id} className={`${block}__label`}>
        {label}
      </label>

      <select
        id={id}
        name={id}
        value={value}
        onChange={handleFormChange}
        className={`${block}__input`}
      >
        <option value=""> -- Select -- </option>
        {options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>

      <span className={`${block}__error`}>{error}</span>
    </div>
  );
};
