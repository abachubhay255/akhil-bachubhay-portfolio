import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import emailjs from "@emailjs/browser";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

emailjs.init({
  publicKey: "y5A9SuPz-ZColw2Zd",
  limitRate: {
    // Allow 1 request per 10s
    throttle: 10000,
  },
});
