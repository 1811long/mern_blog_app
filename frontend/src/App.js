import Navbar from "./components/app_bar/NavBar";
import { Container } from "@mui/material";
import Article from "./components/articles/Article";

function App() {
  return (
    <>
      <Navbar/>
      <Container>
        <Article />
     

      </Container>
    </>
  );
}



export default App;
