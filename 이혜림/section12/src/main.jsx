import { StrictMode } from "react";
import { ReactDOM } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter> //브라우저의 현재 주소를 저장하고 감지하는 역할
);
