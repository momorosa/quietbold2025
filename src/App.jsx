import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import About from "././components/pages/About.jsx";
import MyStack from "././components/pages/MyStack.jsx";
import FordWork from "././components/pages/FordWork.jsx";
import FrbWork from "././components/pages/FrbWork.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/stack" element={<MyStack />} />
        <Route path="/work/ford" element={<FordWork />} />
        <Route path="/work/frb" element={<FrbWork />} />
        <Route path="/work" element={<Navigate to="/work/ford" replace />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
