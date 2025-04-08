import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarFooter from "./components/NavbarFooter";
import Home from "./pages/Home";
import Rating from "./pages/Rating";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarFooter />} >
          <Route index element={<Home />} />
          <Route path="rating" element={<Rating/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
