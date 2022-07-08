import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading/Loading";
import { Fetch } from "../../services/useFetch";

export const Profile = () => {
  const block = "profile";
  const [loadead, setLoaded] = useState(0); // 0 : Not Loaded, 1 : Loadeed , 2 : Error
  const [user, setUser] = useState("");
  const promise = Fetch("GET", "user");

  useEffect(() => {
    promise
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data);
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
    <div className={`${block}__root`}>
      {loadead === 0 && <Loading></Loading>}
      {loadead === 1 && user && (
        <>
          <h1 className={`${block}__title`}>BN Profile</h1>

          <div className={`${block}__card`}>
            <img src={user.idPhoto} className={`${block}__img`} alt="Profile" />
            <p className={`${block}__name`}>{user.fullName}</p>
            <p className={`${block}__info`}>{user.email}</p>
            <p className={`${block}__info`}>{user.id}</p>
            <p className={`${block}__info`}>
              {user.incomeSource.charAt(0).toUpperCase() +
                user.incomeSource.slice(1)}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
