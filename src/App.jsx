import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarFooter from "./components/NavbarFooter";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarFooter />} >
          <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
