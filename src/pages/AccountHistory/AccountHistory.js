import { useEffect, useState } from "react";
import { Fetch } from "../../services/useFetch";
import { useParams } from "react-router-dom";
import { MdAccountBalanceWallet } from "react-icons/md";

//Components
import { CardTransaction } from "../../components/Cards/CardTransaction/CardTransaction";
import { Loading } from "../../components/Loading/Loading";
import { Error } from "../../components/Error/Error";
import { Input } from "../../components/Inputs/Input/Input";

export const AccountHistory = () => {
  const block = "history";
  const today = new Date();
  //Gets id from url
  const account = useParams().id;

  //Initial state
  const initialState = {
    account: account,
    startDate: new Date(today.getFullYear(), today.getMonth(), 1)
      .toISOString()
      .split("T")[0],
    endDate: new Date(today.getFullYear(), today.getMonth() + 1, 0)
      .toISOString()
      .split("T")[0],
  };

  const [transfers, setTransfers] = useState("");
  const [acc, setAcc] = useState("");
  const [loadead, setLoaded] = useState(0); // 0 : Not Loaded, 1 : Loadeed , 2 : Error
  const [query, setQuery] = useState(initialState);

  //Makes object to params string
  const params = Object.keys(query)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(query[k]))
    .join("&");

  // Queries account history with filter params
  const promise = Fetch("GET", `transfer/history?${params}`);

  useEffect(() => {
    promise.then((response) => {
      if (response.status === 200) {
        setTransfers(
          response.data.transfers.sort((a, b) => (a.date < b.date ? 1 : -1))
        );
        setAcc(response.data.account);
        setLoaded(1);
      } else {
        setLoaded(2);
      }
    });
  }, [query]);

  //Handle form changes
  const handleFormChange = (event) => {
    const value = event.target.value;
    setQuery({ ...query, [event.target.id]: value });
  };

  return (
    <>
      {loadead === 0 && <Loading></Loading>}
      {loadead === 1 && (
        <div className={`${block}__root`}>
          <div className={`${block}__section ${block}__section--sticky`}>
            <h1 className={`${block}__title`}>Account</h1>
            <div className={`${block}__info`}>
              <div className={`${block}__icon`}>
                <MdAccountBalanceWallet />
              </div>
              <div>
                <p>{acc.iban}</p>
                <p>
                  Balance : {acc.currency} {acc.balance}
                </p>
              </div>
            </div>

            <h1 className={`${block}__title`}>Date Filter</h1>

            <form className={`${block}__form`}>
              <Input
                type='date'
                label='From'
                value={query.startDate}
                handleFormChange={handleFormChange}
                error={""}
                id='startDate'
                size='50'
              />

              <Input
                type='date'
                label='Until'
                value={query.endDate}
                handleFormChange={handleFormChange}
                error={""}
                id='endDate'
                size='50'
              />
            </form>
          </div>

          <div className={`${block}__section ${block}__section--scroll`}>
            <h1 className={`${block}__title`}>History</h1>
            {transfers.map((transaction) => {
              return (
                <CardTransaction
                  date={transaction.date}
                  type={transaction.idOrigin === account ? "-" : "+"}
                  detail={transaction.detail}
                  amount={transaction.amount}
                  currency={transaction.currency}
                />
              );
            })}
          </div>
        </div>
      )}

      {loadead === 2 && (
        <Error msg1='An error has ocurred' msg2='please try again' />
      )}
    </>
  );
};
