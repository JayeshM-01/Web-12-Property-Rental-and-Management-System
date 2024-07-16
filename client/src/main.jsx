import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-r0wx3cby80nx82rv.us.auth0.com"
     clientId="3y9mQYIzZoLW3Rv6hJiuqXV1QaC0d64r"
     authorizationParams={{
      redirect_uri: "http://localhost:5173"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <MantineProvider>
        <App />
      </MantineProvider>
       
    </Auth0Provider>
  </React.StrictMode>
);
