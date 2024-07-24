import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import Multimedia from './pages/Multimedia';
import Contact from './pages/Contact';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/multimedia" element={<Multimedia />} />
      </Routes>
    </>
  );
};

export default App;
