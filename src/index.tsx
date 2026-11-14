import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

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

// Register service worker for Progressive Web App capabilities
serviceWorkerRegistration.register();
