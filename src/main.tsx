import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { loadWebComponents } from "./lib/load-web-components";

// Load Stencil web components
loadWebComponents();

createRoot(document.getElementById("root")!).render(<App />);
