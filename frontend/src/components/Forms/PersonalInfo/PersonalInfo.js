import { Input } from "../../Input/Input";
import { Select } from "../../Select/Select";
import { incomeOptions } from "../../../utils/constants";

export const PersonalInfo = ({
  formData,
  handleFormChange,
  handleImageChange,
  errors,
}) => {
  const block = "personal-info";
  return (
    <div className={`${block}__root`}>
      <form className={`${block}__form`}>
        <Input
          type='text'
          label='Full Name'
          value={formData.fullName}
          handleFormChange={handleFormChange}
          error={errors.fullName ? errors.fullName : ""}
          placeholder='John Doe'
          id='fullName'
        />

        <Input
          type='number'
          label='ID Number'
          value={formData.id}
          handleFormChange={handleFormChange}
          error={errors.id ? errors.id : ""}
          placeholder='112347890'
          id='id'
        />

        <Input
          type='file'
          label='ID Photo'
          handleFormChange={handleImageChange}
          error={errors.idPhoto ? errors.idPhoto : ""}
          accept='image/*'
          id='idPhoto'
        />

        <Select
          label='Income Source'
          handleFormChange={handleFormChange}
          value={formData.income}
          id='income'
          error={errors.income ? errors.income : ""}
          options ={incomeOptions}
        />
      </form>
    </div>
  );
};
