import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
};

export default Root;
