import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Context from "./Context";

import { App } from "./App";

const client = new ApolloClient({
  uri: "https://petgram-nestor-api.vercel.app/graphql",
  request: (operation) => {
    const token = window.sessionStorage.getItem("token");
    const authorization = token ? `Bearer ${token}` : "";
    operation.setContext({
      headers: {
        authorization,
      },
    });
  },
  onError: (error) => {
    console.log("Handle error index");
    console.log(error);
    console.log(error.response.errors[0].message);

    const { networkError, graphQLErrors } = error;

    if (
      (networkError && networkError.result.code === "invalid_token") ||
      (graphQLErrors && graphQLErrors[0].message === "user does not exist")
    ) {
      window.sessionStorage.removeItem("token");
      window.location.href = "/";
    }
  },
});

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
);
