import { useState } from "react";

import logo from "../../assets/logo.png";
import { AnchorImg } from "../../components/AnchorImg/AnchorImg";
import { Input } from "../../components/Input/Input";

export const SignIn = () => {
  const block = "sign-in";
  const initialState = {
    fullName: "",
    id: "",
    idPhoto: "",
    income: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  const handleFormChange = (event) => {
    const value = event.target.value;
    setFormData({ ...formData, [event.target.id]: value });
  };

  return (
    <>
      <div className={`${block}__header`}>
        <AnchorImg img={logo} alt='company logo' url='/'></AnchorImg>
      </div>
      <div className={`${block}__root`}>
        <h1 className={`${block}__title`}>Let's get you enrolled</h1>
        <h2 className={`${block}__subtitle`}>
          First, we need some information from you.
        </h2>
        <form className={`${block}__form`}>
          {/* Full Name */}
          <Input
            type='text'
            label='Full name'
            value={formData.fullName}
            handleFormChange={handleFormChange}
            error={formErrors.fullName ? formErrors.fullName : ""}
            size={25}
            id='fullname'
          ></Input>

          {/* Id Number */}
          <Input
            type='text'
            label='ID Number'
            value={formData.fullName}
            handleFormChange={handleFormChange}
            error={formErrors.fullName ? formErrors.fullName : ""}
            size={25}
            id='fullname'
          ></Input>

          {/* ID Photo */}
          <Input
            type='text'
            label='ID Front Face'
            value={formData.fullName}
            handleFormChange={handleFormChange}
            error={formErrors.fullName ? formErrors.fullName : ""}
            size={25}
            id='fullname'
          ></Input>

          {/* Source of income */}
          <Input
            type='text'
            label='Source of income'
            value={formData.fullName}
            handleFormChange={handleFormChange}
            error={formErrors.fullName ? formErrors.fullName : ""}
            size={25}
            id='fullname'
          ></Input>

          {/* Email */}
          <Input
            type='text'
            label='Email'
            value={formData.fullName}
            handleFormChange={handleFormChange}
            error={formErrors.fullName ? formErrors.fullName : ""}
            size={33}
            id='fullname'
          ></Input>

          {/* Password */}
          <Input
            type='text'
            label='Password'
            value={formData.fullName}
            handleFormChange={handleFormChange}
            error={formErrors.fullName ? formErrors.fullName : ""}
            size={33}
            id='fullname'
          ></Input>

          {/* Confirm Password */}
          <Input
            type='text'
            label='Confirm Password'
            value={formData.fullName}
            handleFormChange={handleFormChange}
            error={formErrors.fullName ? formErrors.fullName : ""}
            size={33}
            id='fullname'
          ></Input>

        </form>
      </div>
    </>
  );
};
