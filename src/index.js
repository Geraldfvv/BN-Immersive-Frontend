import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/styles.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { App } from "./App";
import { Landing } from "./pages/Landing/Landing";
import { SignUp } from "./pages/SignUp/SignUp";
import { LogIn } from "./pages/LogIn/LogIn";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Home } from "./pages/Home/Home";
import { TransferMoney } from "./pages/TransferMoney/TransferMoney";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Landing />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/home' element={<Home />}>
            <Route path='/home' element={<Dashboard />} />
            <Route path='/home/transfer' element={<TransferMoney />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
