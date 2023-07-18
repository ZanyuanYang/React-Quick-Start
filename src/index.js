import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ExampleProvider } from "./context/context";

ReactDOM.render(
  <BrowserRouter>
    <ExampleProvider>
      <App />
    </ExampleProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
