import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../Layout";
import { Main, Setting } from "./Pages";

const index = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/setting" element={<Setting />} />
      </Route>
    </Routes>
  );
};

export default index;
