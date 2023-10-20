import * as ReactDOM from "react-dom/client";
import "./main.css";
import { App } from "./App";

const rootElement = document.getElementById("root") as Element;
ReactDOM.createRoot(rootElement).render(<App />);
