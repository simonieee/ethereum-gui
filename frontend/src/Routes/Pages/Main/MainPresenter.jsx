import React from "react";
import "./main.css";
import { Genesis, NewAccount, StartGeth } from "./Components";

const MainPresenter = ({ writeGenensis, createAccount }) => {
  /* Router */
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <div className="main-content-container">
      <Genesis writeGenensis={writeGenensis} />
      <NewAccount createAccount={createAccount} />
      <StartGeth />
    </div>
  );
};

export default MainPresenter;
