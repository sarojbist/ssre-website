
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Services from "./pages/Sevices";
import Properties from "./pages/Properties";
import ContactUs from "./pages/Contact";
             


export default function App() {
  return (
    <div className="App">
     
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
           <Route path="/services" element={<Services />} />
      <Route path="/contact-us" element={<ContactUs />} />
             <Route path="/properties" element={<Properties />} />
        </Routes>
      </Router>
    </div>
  );
}
