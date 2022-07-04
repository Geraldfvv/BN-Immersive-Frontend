import { useEffect, useContext } from "react";
import { getAccounts } from "../../services/accountService";
import { UserContext } from "../../utils/context/UserContex";

export const Dashboard = () => {
  const block = "dashboard";
  const {user} = useContext(UserContext);

  useEffect(() => {
    console.log(getAccounts());
  }, []);

  return <div className={`${block}__root`}>{user}</div>;
};
