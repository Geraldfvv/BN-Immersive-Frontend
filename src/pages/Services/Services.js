import { useState, useContext } from "react";
import { UserContext } from "../../utils/context/UserContex";
import { Input } from "../../components/Inputs/Input/Input";
import { Select } from "../../components/Inputs/Select/Select";
import { Button } from "../../components/Button/Button";

import { MdOutlineWaterDrop } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import { Fetch } from "../../services/useFetch";
import { showMessage } from "../../utils/alerts/alerts";

export const Services = () => {
  const block = "services";

  const { user } = useContext(UserContext);
  const formatedOptions = [];
  user.accounts.map((account) => {
    return formatedOptions.push({ name: account.iban, value: account.iban });
  });

  const [services, setServices] = useState("");
  const [selected, setSelected] = useState("");
  const [formData, setFormData] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [bill, setBill] = useState("");

  const getServices = (category) => {
    setBill("");
    setSelected("");
    Fetch("GET", `services?category=${category}`).then((response) => {
      if (response.status === 200) {
        setServices(response.data);
      } else {
      }
    });
  };

  const handleSelected = (service) => {
    setSelected(service);
    setBill("");
  };

  const handleCheckBill = () => {
    if (!formData.billNumber) {
      setFormErrors({ billNumber: "Bill number is required" });
    } else {
      setFormErrors({});
      Fetch(
        "GET",
        `services/check?service=${selected.category} ${selected.name}&billNumber=${formData.billNumber}`
      ).then((response) => {
        if (response.status === 200) {
          if (response.data.length === 0) {
            showMessage(
              "There's not pending pay for this bill number",
              "error",
              3000
            );
          } else {
            setBill(response.data);
          }
        }
      });
    }
  };

  const handleFormChange = (event) => {
    const value = event.target.value;
    if (event.target.id === "billNumber") {
      setBill("");
    }
    setFormData({ ...formData, [event.target.id]: value });
  };

  const handlePay = () => {
    if (!formData.account) {
      setFormErrors({ account: "Account is required" });
    } else {
      setFormErrors("");
      Fetch("POST", `services/pay`, "Paying service", {
        iban: formData.account,
        bill: bill.id,
      })
        .then((response) => {
          if (response.status === 200) {
            showMessage("Transaction sucessfully sent", "success", 3000);
            setBill("");
            setSelected("");
            setServices("");
          } else {
            showMessage(JSON.parse(response.errors).amount, "error", 3000);
          }
        })
        .catch((err) => {
          showMessage("An error have ocurred please try again", "error", 3000);
        });
    }
  };

  return (
    <div className={`${block}__root`}>
      <div className={`${block}__select`}>
        <h1 className={`${block}__title`}>Category</h1>
        <div className={`${block}__categories`}>
          <button
            className={`${block}__category`}
            onClick={() => {
              getServices("Public Service");
            }}
          >
            <MdOutlineWaterDrop className={`${block}__icon`} />
            Public Services
          </button>

          <button
            className={`${block}__category`}
            onClick={() => {
              getServices("Telephone Service");
            }}
          >
            <BsTelephone className={`${block}__icon`} />
            Telephone Service
          </button>

          <button
            className={`${block}__category`}
            onClick={() => {
              getServices("College Bills");
            }}
          >
            <IoBookOutline className={`${block}__icon`} />
            College Bills
          </button>
        </div>
      </div>

      <div className={`${block}__select`}>
        <h1 className={`${block}__title`}>Service</h1>
        {services && (
          <div className={`${block}__categories`}>
            {services.map((service) => {
              return (
                <button
                  key={service.name}
                  className={`${block}__category`}
                  onClick={() => {
                    handleSelected(service);
                  }}
                  aria-label={service.name}
                >
                  <img
                    className={`${block}__img`}
                    src={service.photo}
                    alt={service.name}
                  />
                </button>
              );
            })}
          </div>
        )}
        {!services && (
          <p className={`${block}__empty`}>Select a category first</p>
        )}
      </div>

      <div className={`${block}__payment`}>
        <h1 className={`${block}__title`}>Confirm your payment</h1>
        {selected && (
          <div className={`${block}__group`}>
            <form className={`${block}__form`}>
              <Input
                type='text'
                label={`${selected.category} ${selected.name} `}
                value={formData.billNumber}
                handleFormChange={handleFormChange}
                error={formErrors.billNumber ? formErrors.billNumber : ""}
                placeholder='Bill number'
                id='billNumber'
              />
            </form>
            <Button
              theme={"ternary"}
              text={"Check Bill"}
              handleClick={handleCheckBill}
            ></Button>
          </div>
        )}
        {bill && (
          <div className={`${block}__group`}>
            <p
              className={`${block}__bill`}
            >{`${bill.name} :  ₡${bill.amount}`}</p>
            <form className={`${block}__form`}>
              <Select
                label='Account to be debited'
                handleFormChange={handleFormChange}
                value={formData.account}
                id='account'
                error={formErrors.account ? formErrors.account : ""}
                options={formatedOptions}
              />
            </form>
            <Button
              theme={"ternary"}
              text={"Pay"}
              handleClick={handlePay}
            ></Button>
          </div>
        )}
        {!selected && (
          <p className={`${block}__empty`}>Select a service first</p>
        )}
      </div>
    </div>
  );
};
