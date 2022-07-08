import logo1 from "../../assets/logoBN2.png"

export const Restrictions = () => {
  const block = "transfer";
  return (
    <article className={`${block}__section`}>
      <div className={`${block}__container`}>
        <h1 className={`${block}__title`}>Transfers restrictions</h1>

        <p className={`${block}__instruction`}>
          Be sure to read the following service overview before proceeding:
        </p>
        <ol className={`${block}__instruction`}>
          <li>
            The maximum commission for transfer services (local or regional) is
            ¢1,200.00 for each transfer.
          </li>
          <li>
            You can make this type of transfer at any time of the day, 7 days a
            week (24/7).
          </li>
          <li>
            You can only make transfers between accounts of the same currency.
            Please verify this information prior to making your transfer.
          </li>
        </ol>
        <p className={`${block}__instruction`}>
          Account to be credited (account where the money will be deposited).
        </p>
        <img src={logo1} className={`${block}__img`} alt="BN Logo"></img>
      </div>
    </article>
  );
};
