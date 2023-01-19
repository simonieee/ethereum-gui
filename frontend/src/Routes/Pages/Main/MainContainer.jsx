import React from "react";
import MainPresenter from "./MainPresenter";

const MainContainer = () => {
  /* Router */
  /* State */
  const writeGenensis = async (genesisInfo) => {
    try {
      const url = "http://localhost:3001/genesis";
      fetch(url, {
        method: "post",
        body: JSON.stringify({
          genesis: genesisInfo,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            console.log("파일 생성완료");
          }
        });
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  /* Functions */
  /* Hooks */
  /* Render */
  return <MainPresenter writeGenensis={writeGenensis} />;
};

export default MainContainer;
