import { useState, useMemo, useEffect } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { UserContext } from "./utils/context/UserContex";

export const App = () => {
  const [user, setUser] = useState({ name: "", accounts: [] });
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    if (
      sessionStorage.getItem("accounts") !== undefined &&
      sessionStorage.getItem("userName") !== undefined
    ) {
      const accounts = JSON.parse(sessionStorage.getItem("accounts"));
      const userName = JSON.parse(
        sessionStorage.getItem("userName")
      ).name.split(" ")[0];
      setUser({ name: userName, accounts: accounts });
    }
  }, [setUser]);

  return (
    <>
      <UserContext.Provider value={value}>
        <nav>
          <NavBar></NavBar>
        </nav>
        <main>
          <Outlet></Outlet>
        </main>
      </UserContext.Provider>
    </>
  );
};

export default App;
