import { Input } from "../../Input/Input";

export const AccountInfo = ({ formData, handleFormChange, errors }) => {
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
          id='fullName'
        />

        <Input
          type='number'
          label='ID Number'
          value={formData.id}
          handleFormChange={handleFormChange}
          error={errors.id ? errors.id : ""}
          id='id'
        />

        <Input
          type='file'
          label='ID Photo'
          value={formData.idPhoto}
          handleFormChange={handleFormChange}
          error={errors.idPhoto ? errors.idPhoto : ""}
          accept='image/*'
          id='idPhoto'
        />
      </form>
    </div>
  );
};
