import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store/store.js";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
     
       
          <App />
       
      
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);

