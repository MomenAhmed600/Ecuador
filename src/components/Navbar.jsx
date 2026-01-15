import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import Button from "./layouts/Button";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  return (
    <div className="w-full z-50 relative">
      {/* Navbar container */}
      <div className="flex justify-between items-center p-5 lg:px-32 bg-gradient-to-r from-[#FFF] to-stone-950 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        {/* Logo */}
        <RouterLink to="/">
          <div className="flex items-center gap-2">
            <img src="/logo-2.png" alt="logo" className="w-8 h-8" />
            <h1 className="text-xl font-semibold">Ecuador</h1>
          </div>
        </RouterLink>

        {/* Desktop Menu Med-side  */}
        <nav className="hidden lg:flex gap-8 font-medium">
          <RouterLink to="/" className="hover:text-black text-white">
            Home
          </RouterLink>
          <RouterLink to="/menu" className="hover:text-black text-white">
            Menu
          </RouterLink>
          <RouterLink to="/products" className="hover:text-black text-white">
            Products
          </RouterLink>
          <RouterLink to="/about" className="hover:text-black text-white">
            About Us
          </RouterLink>
        </nav>

        {/* Desktop Contact Right-side */}
        <div className="hidden lg:flex">
          <a
            href="https://www.elmenus.com/alexandria/ecuador-coffee--zmll2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button title="Order Now" />
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden">
          <button onClick={handleChange}>
            {menu ? (
              <AiOutlineClose size={25} className="text-white" />
            ) : (
              <AiOutlineMenuUnfold size={25} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="lg:hidden flex flex-col absolute top-full left-0 w-full bg-black text-white gap-8 py-8 text-2xl text-center z-50">
          <RouterLink
            to="/"
            className="hover:text-orange-500"
            onClick={closeMenu}
          >
            Home
          </RouterLink>
          <RouterLink
            to="/menu"
            className="hover:text-orange-500"
            onClick={closeMenu}
          >
            Menu
          </RouterLink>
          <RouterLink
            to="/products"
            className="hover:text-orange-500"
            onClick={closeMenu}
          >
            Products
          </RouterLink>
          <RouterLink
            to="/about"
            className="hover:text-orange-500"
            onClick={closeMenu}
          >
            About Us
          </RouterLink>

          <div className="self-center">
            <Button title="Contact Us" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
