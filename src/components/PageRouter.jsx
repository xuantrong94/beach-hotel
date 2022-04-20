import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Rooms from "./Rooms";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="">
        <Route path="" element={<Home />} />
        <Route path="rooms" element={<Rooms />} />
      </Route>
    </Routes>
  );
};

export default PageRouter;
