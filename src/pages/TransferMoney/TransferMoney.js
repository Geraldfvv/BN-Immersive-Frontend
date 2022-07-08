import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../utils/context/UserContex";
import { useGoToSection } from "../../utils/hooks/useGoToSection";
import { Fetch } from "../../services/useFetch";
import { formValidator } from "../../utils/validation/transferValidation";

//Components
import { TransferInfo } from "../../components/Forms/TransferInfo/TransferInfo";
import { Button } from "../../components/Button/Button";
import { showMessage } from "../../utils/alerts/alerts";
import { Restrictions } from "../../components/Restrictions/Restrictions";

export const TransferMoney = () => {
  const block = "transfer";
  const { user } = useContext(UserContext);
  const { pathname } = useLocation();
  useGoToSection();
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
    const errors = formValidator(formData);
    if (Object.keys(errors).length === 0) {
      setFormErrors(errors);
      Fetch("POST", "transfer", "Processing transaction", formData).then(
        (response) => {
          if (response.status === 200) {
            showMessage("Your transaction was processed!", "success", 3000);
            setFormData(initialState);
          } else {
            setFormErrors(JSON.parse(response.errors));
          }
        }
      );
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className={`${block}__root`}>
      <Restrictions />

      <div className={`${block}__section`}>
        <div className={`${block}__container ${block}__container--center`}>
          <h1 className={`${block}__title`}>Transfer information</h1>
          <TransferInfo
            formData={formData}
            errors={formErrors}
            handleFormChange={handleFormChange}
            accounts={user.accounts}
            route={pathname}
          />

          <Button
            theme={"ternary"}
            text={"Process"}
            handleClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};
