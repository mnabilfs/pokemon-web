import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbars from "./components/Navbars";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbars />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
