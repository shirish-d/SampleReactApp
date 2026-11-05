import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

// Load Marathi font from Google Fonts
const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element. Ensure that index.html contains an element with id='root'.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
