import { BrowserRouter } from "react-router-dom";
import { newsObj, dancersData } from "./data";
import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import "./index.css";

export const Context = createContext(null);

const dancers = JSON.parse(dancersData);
const news = JSON.parse(newsObj);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Context.Provider value={{ news, dancers }}>
      <Provider store={store}>
        <App />
      </Provider>
    </Context.Provider>
  </BrowserRouter>
);
