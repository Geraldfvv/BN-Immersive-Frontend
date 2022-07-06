import { useEffect, useContext, useState } from "react";
import { Fetch } from "../../services/useFetch";
import { UserContext } from "../../utils/context/UserContex";

// Components
import { CardAccount } from "../../components/Cards/CardAccount/CardAccount";
import { Loading } from "../../components/Loading/Loading";
import { Error } from "../../components/Error/Error";

export const Dashboard = () => {
  const block = "dashboard";
  const { user, setUser } = useContext(UserContext);
  const [loadead, setLoaded] = useState(0); // 0 : Not Loaded, 1 : Loadeed , 2 : Error
  const promise = Fetch("GET", "accounts");

  useEffect(() => {
    promise
      .then((response) => {
        if (response.status === 200) {
          setUser({ ...user, accounts: response.data });
          setLoaded(1);
        } else {
          setLoaded(2);
        }
      })
      .catch(() => {
        setLoaded(2);
      });
  }, []);

  return (
    <>
      {loadead === 0 && <Loading></Loading>}
      {loadead === 1 && (
        <div className={`${block}__root`}>
          <h1 className={`${block}__title`}>My Accounts</h1>
          <div className={`${block}__card-container`}>
            {user.accounts.map((account) => {
              return (
                <div className={`${block}__card`} key={account.iban}>
                  <CardAccount account={account} />
                </div>
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
