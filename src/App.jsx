import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/pages/home/Home";
import About from "../src/pages/about/About";
import Contact from "../src/pages/contact/Contact";
import Gallery from "../src/pages/gallery/Gallery";
import Plans from "../src/pages/plans/Plans";
import Trainers from "../src/pages/trainers/Trainers";
import NotFound from "../src/pages/notFound/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
