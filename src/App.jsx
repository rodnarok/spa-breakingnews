import { Outlet } from "react-router-dom";
import "./App.css";
import { GlobalStyled } from "./GlobalStyled";
import Home from "./pages/Home/Home";

function App() {
  return <Outlet />;
}
export default App;
