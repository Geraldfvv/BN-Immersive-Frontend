import { useState, useEffect, useRef } from "react";
import { useOnScreen } from "../../hooks/useOnScreen";

import logo from "../../assets/logo.png";
import { AnchorImg } from "../../components/AnchorImg/AnchorImg";
import { AccountInfo } from "../../components/Forms/AccountInfo/AccountInfo";
import { Button } from "../../components/Button/Button";

export const SignIn = () => {
  const block = "sign-in";
  const formTitles = ["Personal Information", "Account Information"];
  const initialState = {
    fullName: "",
    id: "",
    idPhoto: "",
    income: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formPage, setFormPage] = useState(0);
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [visible, setVisible] = useState();

  const content = useRef();
  const onScreen = useOnScreen(content);

  useEffect(() => {
    if (onScreen) {
      setVisible(`${block}--visible`);
    }
  }, [onScreen]);

  const handleFormChange = (event) => {
    const value = event.target.value;
    setFormData({ ...formData, [event.target.id]: value });
  };

  const pageDisplay = () => {
    if (formPage === 0) {
      return (
        <AccountInfo
          formData={formData}
          errors={formErrors}
          handleFormChange={handleFormChange}
        />
      );
    }
  };

  const handlePrevious = () => {
    setFormPage((formPage) => formPage - 1);
  };

  const handleNext = async () => {
    if (formPage !== formTitles.length - 1) {
      setFormPage((formPage) => formPage + 1);
    } else {
      console.log("send");
    }
  };

  return (
    <>
      <div className={`${block}__header`}>
        <AnchorImg img={logo} alt='company logo' url='/'></AnchorImg>
      </div>
      <div className={`${block}__root ${visible}`} ref={content}>
        <h1 className={`${block}__title`}>Let's get you enrolled</h1>
        <h2 className={`${block}__subtitle`}>
          First, we need some information from you.
        </h2>

        <div className={`${block}__form`}>
          <div className={`${block}__header`}>
            <div className={`${block}__stepper`}>
              {formTitles.map((step, i) => {
                return (
                  <span
                    key={i}
                    aria-label={`step ${i + 1}`}
                    className={`${block}__step ${
                      i === formPage ? `${block}__step--active` : ""
                    }`}
                  >
                    {i + 1}
                  </span>
                );
              })}
            </div>

            <h2 className={`${block}__subtitle`}>{formTitles[formPage]}</h2>
          </div>

          <div className={`${block}__body`}>{pageDisplay()}</div>

          <div className={`${block}__footer`}>
            <Button
              theme={"ternary"}
              text={"Previous"}
              disabled={formPage === 0}
              handleClick={handlePrevious}
            ></Button>

            <Button
              theme={"ternary"}
              text={formPage === formTitles.length - 1 ? "Submit" : "Next"}
              handleClick={handleNext}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};
