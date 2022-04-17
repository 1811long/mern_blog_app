import Navbar from "./components/app_bar/NavBar";
import { Container } from "@mui/material";
import Article from "./components/articles/Article";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  );
}



export default App;
