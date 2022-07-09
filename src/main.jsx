import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import App from "./App";
import "./index.scss";
import { Provider } from "react-redux";
import Store from "./store/store";
import { apolloClient } from "./graphql";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Provider store={Store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
