import React from "react";
import { Route, Routes } from "react-router-dom";
import Test from "../pages/Test";

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Test />} />
      </Routes>
    </div>
  );
};

export default Root;
