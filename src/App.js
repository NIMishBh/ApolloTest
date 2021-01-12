import {ApolloClient, ApolloProvider, gql, InMemoryCache} from "@apollo/client";
import GetUsers from "./components/GetUsers";
import AddUsers from "./components/AddUsers";
import { HASURA_GRAPHQL_URL, HASURA_ADMIN_SECRET } from './env.json';

const apolloClient = new ApolloClient({
  uri: HASURA_GRAPHQL_URL,
  cache: new InMemoryCache(),
  headers:{
      'x-hasura-admin-secret': HASURA_ADMIN_SECRET
  }
});


function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <h1>Hello!</h1>
      </div>
      <GetUsers />
      <AddUsers />
    </ApolloProvider>
  );
}

export default App;
