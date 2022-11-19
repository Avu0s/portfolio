import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Page from "./components/Page";
import "./styles/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Page />
  </React.StrictMode>
);
