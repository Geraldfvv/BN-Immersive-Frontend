import { NavBar } from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <nav>
        <NavBar></NavBar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default App;
