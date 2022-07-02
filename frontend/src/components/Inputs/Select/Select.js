export const Select = (props) => {
  const block = "select";
  const { label, value, handleFormChange, id, error, size, options } = props;

  return (
    <div className={`${block}__input-label ${block}__input-label--${size}`}>
      <label htmlFor={id} className={`${block}__label ${error ? `${block}__label--error` : "" }`}>
        {label} <span className={`${block}__error`}>{error}</span>
      </label>

      <select
        id={id}
        name={id}
        value={value}
        onChange={handleFormChange}
        className={`${block}__input ${error ? `${block}__input--error` : "" }`}
      >
        <option value=''> -- Select -- </option>
        {options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
