import { useState, useContext } from "react";
import { UserContext } from "../../utils/context/UserContex";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

//Components
import logo from "../../assets/logo1.png";
import { Input } from "../../components/Inputs/Input/Input";
import { AnchorImg } from "../../components/AnchorImg/AnchorImg";
import { Button } from "../../components/Button/Button";

//Service
import { logIn } from "../../services/logInService";
import { showMessage } from "../../utils/alerts/alerts";
import { formValidator } from "../../utils/validation/logInValidation";

export const LogIn = () => {
  const block = "login";
  const initialState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const { user, setUser } = useContext(UserContext);

  const cookies = new Cookies();
  const navigate = useNavigate();

  const handleFormChange = (event) => {
    const value = event.target.value;
    setFormData({ ...formData, [event.target.id]: value });
  };

  const handleSubmit = () => {
    const errors = formValidator(formData);
    if (Object.keys(errors).length === 0) {
      setFormErrors(errors);
      handleLogIn();
    } else {
      setFormErrors(errors);
    }
  };

  const handleLogIn = () => {
    logIn(formData).then((response) => {
      if (response.status === 200) {
        showMessage(response.message, "success");
        setFormData(initialState);
        cookies.set("user", response.data.token, {
          maxAge: 3600,
        });
        console.log(cookies.get("user"))
        sessionStorage.setItem("user", JSON.stringify(response.data.name));
        setUser({ ...user, "name": response.data.name });
        navigate("/home");
      } else {
        showMessage(response.errors, "error");
      }
    });
  };

  return (
    <main className={`${block}__root`}>
      <section className={`${block}__section`}>
        <AnchorImg img={logo} alt='company logo' url='/'></AnchorImg>
        <span className={`${block}__title`}>Welcome back</span>
        <span className={`${block}__subtitle ${block}__subtitle--white`}>
          Nice to see you again
        </span>

        <Link to='/signup' className={`${block}__link`}>
          Not on Internet Banking? Sign up
        </Link>
      </section>

      <section className={`${block}__section`}>
        <div className={`${block}__form`}>
          <h2 className={`${block}__subtitle ${block}__subtitle--form`}>
            Log in to continue
          </h2>

          <div className={`${block}__body`}>
            <form>
              <Input
                type='text'
                label='Email'
                value={formData.email}
                handleFormChange={handleFormChange}
                error={formErrors.email ? formErrors.email : ""}
                placeholder='example@email.com'
                id='email'
              />

              <Input
                type='password'
                label='Password'
                value={formData.password}
                handleFormChange={handleFormChange}
                error={formErrors.password ? formErrors.password : ""}
                id='password'
              />
            </form>
          </div>

          <div className={`${block}__footer`}>
            <Button
              theme={"ternary"}
              text={"Log In"}
              handleClick={handleSubmit}
            ></Button>
          </div>
        </div>
      </section>
    </main>
  );
};
