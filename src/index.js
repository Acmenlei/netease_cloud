import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import RouterConfig from "./router/router";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/NeteaseCloud">
      <RouterConfig />
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
