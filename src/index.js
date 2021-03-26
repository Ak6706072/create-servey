import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "@main/index.js";
ReactDOM.render(
  <Provider value={{ listOfQuestions: ["hello"], question: {} }}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default Consumer;
