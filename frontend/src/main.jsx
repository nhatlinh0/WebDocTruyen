import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ComicContextProvider from "./Context/ComicContext.jsx";
import UserContextProvider from "./Context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <ComicContextProvider>
        <App />
      </ComicContextProvider>
    </UserContextProvider>
  </StrictMode>
);
