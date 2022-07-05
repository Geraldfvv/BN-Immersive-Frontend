import { useContext, useState } from "react";
import { UserContext } from "../../utils/context/UserContex";
import { Fetch } from "../../services/useFetch";

import { TransferInfo } from "../../components/Forms/TransferInfo/TransferInfo";
import { Button } from "../../components/Button/Button";

export const TransferMoney = () => {
  const block = "transfer";
  const { user } = useContext(UserContext);
  const initialState = {
    origin: "",
    destiny: "",
    amount: "",
    detail: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  const handleFormChange = (event) => {
    const value = event.target.value;
    setFormData({ ...formData, [event.target.id]: value });
  };

  const handleSubmit = () => {
    Fetch("POST", "transfer", "Realizando transferencia", formData).then(
      (response) => {}
    );
  };

  return (
    <div className={`${block}__root`}>
      <h1 className={`${block}__title`}>Transfer Money</h1>

      <article className={`${block}__section`}>
        <h2 className={`${block}__subtitle`}>Transfers to other banks</h2>
        <p>Be sure to read the following service overview before proceeding:</p>
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
            The maximum daily amount (every 24 hours) is ₵7,500,000.00, which is
            added to the accumulated defined by the client and the bank.
          </li>
          <li>
            You can only make transfers between accounts of the same currency.
            Please verify this information prior to making your transfer.
          </li>
        </ol>
        <p>
          Account to be credited (account where the money will be deposited).
        </p>
      </article>

      <div className={`${block}__section`}>
        <TransferInfo
          formData={formData}
          errors={formErrors}
          handleFormChange={handleFormChange}
          accounts={user.accounts}
        />

        <Button
          theme={"ternary"}
          text={"Process transfer"}
          handleClick={handleSubmit}
        />
      </div>
    </div>
  );
};
