import React from "react";

import "./main.css";
import { TextField } from "@mui/material";
import { Genesis, NewAccount } from "./Components";

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
      <div className="setting-component">
        <h4>Start Geth</h4>
        <div className="setting-component-container">
          <div className="setting-element">
            <h5>Network ID</h5>
            <div className="element-feild">
              <TextField
                label="Network ID"
                id="outlined-size-small"
                size="small"
                style={{ width: 400 }}
              />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default MainPresenter;
