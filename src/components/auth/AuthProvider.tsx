import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

interface AppProps {
  children: React.ReactNode;
}

const AuthProvider = (props: AppProps) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID as string;
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      useCookiesForTransactions={true}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      >
        {props.children}
      </Auth0Provider>
  )
};

export default AuthProvider;
