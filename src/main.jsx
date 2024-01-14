import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "./index.css";
import IconHeartProvider from "./context/HeartContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <IconHeartProvider>
      <App />
    </IconHeartProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);
