import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "./utils/contexts/theme-provider";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { StrictMode } from "react";

import { Toaster } from "@/components/ui/toaster";
import store from "./utils/store/store";
import "./styles/index.css";
import App from "./routes";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <App />
          <Toaster />
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
