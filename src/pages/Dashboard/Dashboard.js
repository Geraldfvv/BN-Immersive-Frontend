import { useEffect, useState, useContext } from "react";
import { Fetch } from "../../services/useFetch";
import { UserContext } from "../../utils/context/UserContex";

// Components
import { CardAccount } from "../../components/Cards/CardAccount/CardAccount";

export const Dashboard = () => {
  const block = "dashboard";
  const { user, setUser } = useContext(UserContext);
  const promise = Fetch("GET", "accounts");

  useEffect(() => {
    promise.then((response) => {
      if (response.status === 200) {
        setUser({ ...user, accounts: response.data });
      }
    });
  }, []);

  return (
    <div className={`${block}__root`}>
      <h1 className={`${block}__title`}>My Accounts</h1>
      <div className={`${block}__card-container`}>
        {user.accounts &&
          user.accounts.map((account) => {
            return (
              <div className={`${block}__card`}>
                <CardAccount account={account} key={account.iban} />
              </div>
            );
          })}
      </div>

      <div className={`${block}__section`}>
        {/* <div>
          <h1 className={`${block}__title`}>Transactions</h1>
          <div className={`${block}__service-container`}></div>
        </div>
        <div>
          <h1 className={`${block}__title`}>Services</h1>
        </div> */}
      </div>
    </div>
  );
};
