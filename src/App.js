import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./Routes/Routes";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
