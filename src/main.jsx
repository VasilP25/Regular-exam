import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { UserProvider } from "./context/contexts.jsx";
import { TrainingProvider } from "./context/trainingContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TrainingProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </TrainingProvider>
  </BrowserRouter>
);
