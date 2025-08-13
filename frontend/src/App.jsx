import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";
import './App.css'

function App() {
  return (
    
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App
