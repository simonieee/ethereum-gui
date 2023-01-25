import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { Alert, AlertTitle, Button } from "@mui/material";

const Genesis = ({ writeGenensis }) => {
  const defaultGenesis = `
  {
    "config": {
      "chainId": 1234,
      "homesteadBlock": 0,
      "eip150Block": 0,
      "eip155Block": 0,
      "eip158Block": 0
    },
    "difficulty": "0x20000",
    "gasLimit": "0x2fefd8",
    "alloc": {},
    "coinbase": "0x0000000000000000000000000000000000000000",
    "extraData": "",
    "nonce": "0x0000000000000000",
    "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "timestamp": "0x00"
  }
  `;
  const [genesisJson, setGenesisJson] = useState(defaultGenesis);
  const [genesisErr, setGenesisErr] = useState("");
  const handleCreateGenesis = async (genesisJson) => {
    const result = await writeGenensis(genesisJson);
    const { sussess } = result;
    if (sussess) {
      setGenesisErr(false);
    } else {
      setGenesisErr(true);
    }
  };
  return (
    <>
      <h3>Genesis Setting</h3>
      <div data-color-mode="light">
        <CodeEditor
          value={genesisJson}
          language="json"
          placeholder="Please enter genesis.Json"
          onChange={(e) => setGenesisJson(e.target.value)}
          padding={15}
          style={{
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            fontSize: 14,
          }}
        />
      </div>
      <div className="btn-container">
        <Button
          variant="contained"
          onClick={() => handleCreateGenesis(genesisJson)}
        >
          Genesis.json 생성
        </Button>
      </div>
      <div>
        {genesisErr === "" ? (
          ""
        ) : genesisErr ? (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Genesis file creation complete
          </Alert>
        ) : (
          <Alert severity="error">Error!!</Alert>
        )}
      </div>
    </>
  );
};

export default Genesis;
