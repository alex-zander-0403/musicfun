import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootEl = createRoot(document.getElementById("root")!);

rootEl.render(<App />);
