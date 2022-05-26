import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route
          path="/rooms/:slug"
          element={<SingleRoom />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
