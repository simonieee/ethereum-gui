import React from "react";
import MainPresenter from "./MainPresenter";

const MainContainer = () => {
  /* Router */
  /* State */

  /* Functions */
  /**
   * Genesis.json 생성
   * @param {*} genesisInfo
   * @returns
   */
  const writeGenensis = async (genesisInfo) => {
    try {
      const url = "http://localhost:3001/genesis";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ genesis: JSON.parse(genesisInfo) }),
      });
      const data = await response.json();
      console.log(data);
      return true;
    } catch (error) {
      return false;
    }
  };

  const createAccount = async (pwd) => {
    try {
      const url = "http://localhost:3001/geth";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pwd: pwd }),
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return false;
    }
  };
  /* Hooks */
  /* Render */
  return (
    <MainPresenter
      writeGenensis={writeGenensis}
      createAccount={createAccount}
    />
  );
};

export default MainContainer;
