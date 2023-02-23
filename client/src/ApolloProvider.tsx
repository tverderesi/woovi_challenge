/** @format */

import App from './App';
import { InMemoryCache, createHttpLink, ApolloProvider, ApolloClient } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import DotenvWebpackPlugin from 'dotenv-webpack';


// const httpLink = createHttpLink({ uri: 'https://florestarefa-server.onrender.com/graphql' });

const httpLink = createHttpLink({ uri: 'https://localhost:400-' });

const authLink = setContext(() => {
  const token = localStorage.getItem('jwtToken');
  return {
    headers: { Authorization: token ? `Bearer ${token}` : '' },
  };
});

const client = new ApolloClient({
  //@ts-ignore
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
