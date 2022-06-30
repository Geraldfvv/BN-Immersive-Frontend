export const Button = (props) => {
    const { theme, text, handleClick, disabled = false } = props;
    const block = "button";
    return (
        <>
            <button
                disabled={disabled}
                className={`${block}__root ${block}--${theme} ${disabled ? "disabled" : ""}`}
                onClick={(event) => {
                    event.preventDefault();
                    handleClick();
                }}
            >
                {text}
            </button>
        </>
    );
};
