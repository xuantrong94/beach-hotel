import React from "react";
import ReactDOM from "react-dom/client";

import PageRouter from "./PageRouter";
import { RoomProvider } from "./context";

import "./sass/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <RoomProvider>
      <PageRouter />
    </RoomProvider>
  </React.StrictMode>
);
