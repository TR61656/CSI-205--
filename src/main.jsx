import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// 👇 เพิ่ม import Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 👇 ครอบ App ด้วย Provider เพื่อให้ Redux ใช้งานได้ทั่วแอป */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

