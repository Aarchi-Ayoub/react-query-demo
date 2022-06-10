import React from "react";
// Query
import { QueryClientProvider, QueryClient } from "react-query";
// Router
import Routes from "./routes";

function App() {
  const clientQuery = new QueryClient();
  return (
    <QueryClientProvider client={clientQuery}>\
      <Routes />
    </QueryClientProvider>
  );
}

export default App;
