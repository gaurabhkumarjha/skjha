import React from "react";
import ReactDOM from "react-dom";
import App from './App.jsx';
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(

  <Auth0Provider
    domain="dev-jm1d6q6duamk25tc.us.auth0.com"
    clientId="StSQ011rKwu7OCjFxNQDLJTnStcH3Uvm"
    redirectUri={window.location.origin}
    
  >
    <App />
  </Auth0Provider>, document.getElementById('root')
);
