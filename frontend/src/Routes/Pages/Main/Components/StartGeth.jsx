import { TextField } from "@mui/material";
import React from "react";

const StartGeth = () => {
  return (
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
              helperText="Explicitly set network id (default: 1)"
            />
          </div>
        </div>
        <hr />
        <div className="setting-element">
          <h5>HTTP-RPC Server Port</h5>
          <div className="element-feild">
            <TextField
              label="http-port"
              placeholder="default : 8545"
              id="outlined-size-small"
              size="small"
              style={{ width: 400 }}
              helperText="HTTP-RPC server listening port (default: 8545)"
            />
          </div>
        </div>
        <hr />
        <div className="setting-element">
          <h5>WS-RPC Server Port</h5>
          <div className="element-feild">
            <TextField
              label="ws-port"
              placeholder="default : 8546"
              id="outlined-size-small"
              size="small"
              style={{ width: 400 }}
              helperText="WS-RPC server listening port (default: 8546)"
            />
          </div>
        </div>
        <hr />
        <div className="setting-element">
          <h5>Network Port</h5>
          <div className="element-feild">
            <TextField
              label="network-port"
              placeholder="default : 30303"
              id="outlined-size-small"
              size="small"
              style={{ width: 400 }}
              helperText="Network listening port (default: 30303)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartGeth;
