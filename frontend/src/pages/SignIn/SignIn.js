import { useState, useEffect, useRef } from "react";
import { useGoToSection } from "../../utils/hooks/useGoToSection";
import { useOnScreen } from "../../utils/hooks/useOnScreen";

//Components
import logo from "../../assets/logo1.png";
import { AnchorImg } from "../../components/AnchorImg/AnchorImg";
import { Button } from "../../components/Button/Button";

//Forms
import { PersonalInfo } from "../../components/Forms/PersonalInfo/PersonalInfo";
import { AccountInfo } from "../../components/Forms/AccountInfo/AccountInfo";

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
  useGoToSection();

  useEffect(() => {
    if (onScreen) {
      setVisible(`${block}--visible`);
    }
  }, [onScreen]);

  const handleFormChange = (event) => {
    const value = event.target.value;
    setFormData({ ...formData, [event.target.id]: value });
  };

  const handleImageChange = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setFormData({ ...formData, idPhoto: "" });
      return;
    }
    setFormData({ ...formData, idPhoto: event.target.files[0] });
  };

  const pageDisplay = () => {
    if (formPage === 0) {
      return (
        <PersonalInfo
          formData={formData}
          errors={formErrors}
          handleFormChange={handleFormChange}
          handleImageChange={handleImageChange}
        />
      );
    } else {
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
    console.log(formData);
    if (formPage !== formTitles.length - 1) {
      setFormPage((formPage) => formPage + 1);
    } else {
      console.log("send");
    }
  };

  return (
    <>
      <div className={`${block}__root ${visible}`} ref={content}>
        <div className={`${block}__section`}>
          <AnchorImg img={logo} alt='company logo' url='/'></AnchorImg>
          <h1 className={`${block}__title`}>Let's get you enrolled</h1>
          <h2 className={`${block}__subtitle ${block}__subtitle--white`}>
            First, we need some information from you.
          </h2>
        </div>

        <div className={`${block}__section`}>
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

              <h2 className={`${block}__subtitle `}>{formTitles[formPage]}</h2>
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
      </div>
    </>
  );
};
