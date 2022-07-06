import { useState, useMemo } from "react";

import { NavBar } from "./components/NavBar/NavBar";

import { Outlet } from "react-router-dom";
import { UserContext } from "./utils/context/UserContex";

export const App = () => {
  const [user, setUser] = useState({ name: "", accounts: [] });
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

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
