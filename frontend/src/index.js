import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/styles.scss";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landig/Landing";
import { App } from "./App";

import { SignIn } from "./pages/SignIn/SignIn";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Landing />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
