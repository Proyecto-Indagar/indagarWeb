import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import Multimedia from './pages/Multimedia';
import Contact from './pages/Contact';

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/multimedia" element={<Multimedia />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
