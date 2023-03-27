import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

const root = document.querySelector("#root");
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<App></App>);
// reactRoot.render(<TicTacToe></TicTacToe>);
