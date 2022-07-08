import { Select } from "../../Inputs/Select/Select";
import { Input } from "../../Inputs/Input/Input";

export const TransferInfo = ({
  formData,
  handleFormChange,
  accounts,
  errors,
  route,
}) => {
  const block = "transfer-info";
  const formatedOptions = [];
  accounts.map((account) => {
    formatedOptions.push({ name: account.iban, value: account.iban });
  });

  return (
    <div className={`${block}__root`}>
      <form className={`${block}__form`}>
        {route === "/home/transfer" ? (
          <>
            <Select
              label='Account to be debited'
              handleFormChange={handleFormChange}
              value={formData.origin}
              id='origin'
              error={errors.origin ? errors.origin : ""}
              options={formatedOptions}
            />

            <Input
              type='text'
              label='Account to be credited'
              value={formData.destiny}
              handleFormChange={handleFormChange}
              error={errors.destiny ? errors.destiny : ""}
              placeholder={`${
                formData.origin.includes("US") ? "US" : "CR"
              }1234567891234567892 `}
              id='destiny'
            />
          </>
        ) : (
          <>
            <Input
              type='text'
              label='Account to be debited'
              value={formData.origin}
              handleFormChange={handleFormChange}
              error={errors.origin ? errors.origin : ""}
              placeholder={`${
                formData.origin.includes("US") ? "US" : "CR"
              }1234567891234567892 `}
              id='origin'
            />

            <Select
              label='Account to be credited'
              handleFormChange={handleFormChange}
              value={formData.destiny}
              id='destiny'
              error={errors.destiny ? errors.destiny : ""}
              options={formatedOptions}
            />
          </>
        )}

        <Input
          type='number'
          label={`Amount ${
            formData.origin.includes("US") ? "(USD)" : "(CRC)"
          } `}
          value={formData.amount}
          handleFormChange={handleFormChange}
          error={errors.amount ? errors.amount : ""}
          placeholder='100'
          id='amount'
        />

        <Input
          type='text'
          label='Detail'
          value={formData.detail}
          handleFormChange={handleFormChange}
          error={errors.detail ? errors.detail : ""}
          placeholder='Your detail'
          id='detail'
        />
      </form>
    </div>
  );
};
