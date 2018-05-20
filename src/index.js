import React from "react";
import { render } from "react-dom";
import "./index.css";
import Layout from "./components/Layout";
// import store from "./containers/store";
import registerServiceWorker from "./registerServiceWorker";

render(<Layout />, document.getElementById("root"));
registerServiceWorker();
