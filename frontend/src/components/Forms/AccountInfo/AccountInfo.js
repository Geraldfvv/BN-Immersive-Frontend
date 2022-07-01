import { Input } from "../../Input/Input";

export const AccountInfo = ({ formData, handleFormChange, errors }) => {
  const block = "account-info";
  return (
    <div className={`${block}__root`}>
      <form className={`${block}__form`}>
        <Input
          type='text'
          label='Email'
          value={formData.email}
          handleFormChange={handleFormChange}
          error={errors.email ? errors.email : ""}
          placeholder='example@email.com'
          id='email'
        />

        <Input
          type='password'
          label='Password'
          value={formData.password}
          handleFormChange={handleFormChange}
          error={errors.password ? errors.password : ""}
          id='password'
        />

        <Input
          type='password'
          label='Confirm Password'
          value={formData.confirmPassword}
          handleFormChange={handleFormChange}
          error={errors.confirmPassword ? errors.confirmPassword : ""}
          id='confirmPassword'
        />
      </form>
    </div>
  );
};
