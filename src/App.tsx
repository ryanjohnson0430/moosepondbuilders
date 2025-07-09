import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <nav className="bg-white shadow p-4 flex justify-between">
          <h1 className="text-xl font-bold">Moose Pond Builders</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-white text-center text-sm text-gray-500 p-4">
          &copy; 2025 Moose Pond Builders. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
