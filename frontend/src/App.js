import { NavBar } from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
};

export default App;
