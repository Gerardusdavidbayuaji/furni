import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./routes";
import { ThemeProvider } from "./utils/contexts/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Provider } from "react-redux";
import store from "./utils/store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
        <Toaster />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
