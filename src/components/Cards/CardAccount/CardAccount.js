import logoBN from "../../../assets/logoBN.png";

export const CardAccount = (props) => {
  const { account } = props;
  const { currency, balance, iban } = account;
  const block = "account";
  return (
    <button className={`${block}__root`}>
      
      <div className={`${block}__header`}>
        <img
          className={`${block}__logo`}
          src={logoBN}
          role='presentation'
          alt=''
        />
      </div>

      <p className={`${block}__text`}>
        BALANCE {currency} {balance}
      </p>
      <p className={`${block}__text`}>IBAN {iban}</p>
    </button>

    
  );
};
