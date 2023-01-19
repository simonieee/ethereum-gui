import React from "react";
import MainPresenter from "./MainPresenter";

const MainContainer = () => {
  /* Router */
  /* State */
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
    } catch (error) {
      return false;
    }
  };
  /* Functions */
  /* Hooks */
  /* Render */
  return <MainPresenter writeGenensis={writeGenensis} />;
};

export default MainContainer;
