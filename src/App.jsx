import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarFooter from "./components/NavbarFooter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarFooter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
