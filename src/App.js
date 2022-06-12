import React from "react";
// Query
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// Router
import Routes from "./routes";

function App() {
  const clientQuery = new QueryClient();
  return (
    <QueryClientProvider client={clientQuery}>
      <Routes />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
