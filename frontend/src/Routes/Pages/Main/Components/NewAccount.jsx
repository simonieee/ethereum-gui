import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const NewAccount = ({ createAccount }) => {
  const [pwd, setPwd] = useState("");
  const [account, setAccount] = useState("");
  const [err, setErr] = useState("");
  /**
   * 계정 생성
   * @param {*} pwd
   */
  const handleCreateAccuont = async (pwd) => {
    console.log(pwd);
    if (pwd === "") {
      setErr("error");
    } else {
      const result = await createAccount(pwd);
      const { data } = result;
      const key = data.match(/0[xX][0-9a-fA-F]+/)[0];
      setAccount(key);
      setPwd("");
      setErr("");
    }
  };
  return (
    <>
      {" "}
      <div className="setting-component">
        <h4>Create New Account</h4>
        <div className="setting-component-container">
          <div className="setting-element">
            <h5>Account Password</h5>
            <div className="element-feild">
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                size="small"
                autoComplete="current-password"
                variant="filled"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                style={{ width: 400 }}
              />
              <Button
                variant="contained"
                style={{ marginLeft: 10 }}
                onClick={() => handleCreateAccuont(pwd)}
              >
                계정 생성
              </Button>
            </div>
          </div>
        </div>
      </div>
      {account.length > 0 ? (
        <div>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Your new key was generated Public address of the key:{" "}
            <strong>{account.match(/0[xX][0-9a-fA-F]+/)[0]}</strong>
          </Alert>
        </div>
      ) : (
        ""
      )}
      {err === "error" ? (
        <Alert severity="error">Please enter your password!</Alert>
      ) : (
        ""
      )}
    </>
  );
};

export default NewAccount;
