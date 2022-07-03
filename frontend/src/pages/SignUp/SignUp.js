// Functions
import { useState, useEffect, useRef } from "react";
import { Link , useNavigate } from "react-router-dom";
import { formValidator } from "../../utils/validation/signInValidation";
// Hooks
import { useGoToSection } from "../../utils/hooks/useGoToSection";
import { useOnScreen } from "../../utils/hooks/useOnScreen";
// Components
import logo from "../../assets/logo1.png";
import { AnchorImg } from "../../components/AnchorImg/AnchorImg";
import { Button } from "../../components/Button/Button";
// Forms
import { PersonalInfo } from "../../components/Forms/PersonalInfo/PersonalInfo";
import { AccountInfo } from "../../components/Forms/AccountInfo/AccountInfo";
//Service
import { signIn } from "../../services/signInService";

export const SignUp = () => {
  const block = "sign-up";
  const formTitles = ["Personal Information", "Account Information"];
  const initialState = {
    fullName: "",
    id: "",
    idPhoto: "",
    incomeSource: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const content = useRef();
  const navigate = useNavigate();
  const onScreen = useOnScreen(content);
  useGoToSection();

  const [formPage, setFormPage] = useState(0);
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [visible, setVisible] = useState();



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
    const errors = formValidator(formData, formPage);
    if (Object.keys(errors).length === 0) {
      setFormErrors(errors);
      if (formPage !== formTitles.length - 1) {
        setFormPage((formPage) => formPage + 1);
      } else {
        handleSubmit();
      }
    } else {
      setFormErrors(errors);
    }
  };

  const handleSubmit = () => {
    signIn(formData).then((response) => {
      if (response.status === 200) {
        setFormData(initialState);
        setFormPage(0);
        navigate("/login");
      } else {
        setFormErrors(response.errors);
        if (response.errors.id !== undefined) {
          setFormPage(0);
        }
      }
    });
  };

  return (
    <>
      <main className={`${block}__root ${visible}`} ref={content}>
        <section className={`${block}__section`}>
          <AnchorImg img={logo} alt='company logo' url='/'></AnchorImg>
          <span className={`${block}__title`}>Let's get you enrolled</span>
          <span className={`${block}__subtitle ${block}__subtitle--white`}>
            First, we need some information from you.
          </span>

          <Link to='/login' className={`${block}__link`}>
            Already have an account?
          </Link>
        </section>

        <section className={`${block}__section`}>
          <div className={`${block}__form`}>
            <div className={`${block}__header`}>
              <div className={`${block}__stepper`}>
                {formTitles.map((step, i) => {
                  return (
                    <span
                      key={i}
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
        </section>
      </main>
    </>
  );
};
