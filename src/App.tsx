import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter basename="/MST">
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
