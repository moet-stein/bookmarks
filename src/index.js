import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("app"));

console.log("NODE_ENV mode:", process.env.NODE_ENV);
if (process.env.NODE_ENV !== "development") console.log = () => {};
