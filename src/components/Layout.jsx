import React from "react";
import { BrowserRouter } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import PageRouter from "./PageRouter";

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      
      <div className="container">
        <div className="main">
          <PageRouter />
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
