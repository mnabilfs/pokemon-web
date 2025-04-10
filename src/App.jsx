import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarFooter from "./components/NavbarFooter";
import Home from "./pages/Home";
import Rating from "./pages/Rating";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NotFoundPage from "./pages/NotFoundPage";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Include NavbarFooter at Route */}
          <Route path="/" element={<NavbarFooter />}>
            <Route index element={<Home />} />
            <Route path="rating" element={<Rating />} />
            <Route path="about" element={<About />} />
          </Route>
          {/* NotFound */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
