import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "components/auth/AuthProvider";
import App from "./App";
import { GlobalStyle } from "style";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <App />
    </AuthProvider>
  </React.StrictMode>
);
