import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
// import Home from "./components/Home";
// import Menu from "./components/Menu";
// import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { lazy } from "react";
const Menu = lazy(() => import("./components/Menu"));
const Home = lazy(() => import("./components/Home"));
const Products = lazy(() => import("./components/Products"));
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu/:type?" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
