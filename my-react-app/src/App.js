import { Routes, Route, path } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import CurrencyConverter from "./CurrencyConverter";
import DrawerAppBar from "./DrawerAppBar";
import News from "./News";
import About from "./About";
import Blog from "./Blog";

function App() {
  return (
    <div>
      <DrawerAppBar />
      <Container>
        <Routes>
          <Route path="/" element={<CurrencyConverter />} />
          <Route path="/News" element={<News />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          {/* <CurrencyConverter />
          <News /> */}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
