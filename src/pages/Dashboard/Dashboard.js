import { useEffect, useState } from "react";
import { useFetch } from "../../services/useFetch";

// Components
import { CardAccount } from "../../components/Cards/CardAccount/CardAccount";
import { CardService } from "../../components/Cards/CardService/CardService";

export const Dashboard = () => {
  const block = "dashboard";
  const [accounts, setAccounts] = useState(null);
  const promise = useFetch("GET", "accounts");

  useEffect(() => {
    promise.then((response) => {
      if (response.status === 200) {
        setAccounts(response.data);
      }
    });
  }, []);

  return (
    <div className={`${block}__root`}>
      <div className={`${block}__section`}>
        <h1 className={`${block}__title`}>My Accounts</h1>
        <div className={`${block}__card-container`}>
          {accounts &&
            accounts.map((account) => {
              return <CardAccount account={account} key={account.iban} />;
            })}
        </div>
      </div>

      <div className={`${block}__section`}>
        <div>
          <h1 className={`${block}__title`}>Transactions</h1>
          <div className={`${block}__service-container`}>
            <CardService icon="fa fa-arrow-left" name="Receive" ></CardService>
            <CardService icon="fa fa-arrow-right" name="Send" ></CardService>
          </div>
        </div>
        <div>
          <h1 className={`${block}__title`}>Services</h1>
        </div>
      </div>
    </div>
  );
};
