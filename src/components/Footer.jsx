import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#FFF] to-stone-700 text-white mt-10 shadow-[0_-3px_10px_rgb(0,0,0,0.2)]">
      <motion.div
        className="mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-5 py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
          {/* Section 1 */}
          <div className="ft-1">
            <div className="flex items-center gap-2">
              <img src="/logo-2.png" alt="logo" className="w-8 h-8" />
              <h1 className="text-xl font-semibold text-black">Ecuador</h1>
            </div>
            <p className="text-black md:ml-3 md:mt-3">
              Taste the finest coffee, freshly roasted for you.
            </p>
          </div>

          {/* Section 2 */}
          <div className="ft-2">
            <h5 className="text-xl font-semibold mb-4 text-black">
              Quick Links
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="hover:text-[#fff] transition text-black"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/menu"
                  className="hover:text-[#fff] transition text-black"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-[#fff] transition text-black"
                >
                  Products
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="ft-3">
            <h5 className="text-xl font-semibold mb-4 text-black">Follow Us</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/EcuadorCoffeeME/"
                  target="blank"
                  className="flex items-center gap-2 hover:text-blue-500 transition text-black"
                >
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ecuadorcoffeeme/?hl=en"
                  target="blank"
                  className="flex items-center gap-2 hover:text-pink-500 transition text-black"
                >
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@ecuadorcoffeeme?lang=en"
                  target="blank"
                  className="flex items-center gap-2 hover:text-gray-400 transition text-black"
                >
                  <FaTiktok /> TikTok
                </a>
              </li>
            </ul>
          </div>
          {/* Section 4 */}
          <div className="ft-4">
            <h5 className="text-xl font-semibold mb-4 text-black">
              ALEXANDRIA
            </h5>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-[#fff] transition text-black">
                  LOURAN
                </a>
              </li>
              <li>
                <a className="hover:text-[#fff] transition text-black">
                  FOUAD ST
                </a>
              </li>
              <li>
                <a className="hover:text-[#fff] transition text-black">GLEEM</a>
              </li>
              <li>
                <a className="hover:text-[#fff] transition text-black">
                  RAML STATION
                </a>
              </li>
              <li>
                <a className="hover:text-[#fff] transition text-black">
                  STANLY
                </a>
              </li>
              <li>
                <a className="hover:text-[#fff] transition text-black">
                  SAN STEFANO MALL
                </a>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="ft-5">
            <h5 className="text-xl font-semibold mb-4 text-black">CAIRO</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="hover:text-[#fff] transition text-black"
                >
                  6 OCTOBER CITY (GIZA)
                </a>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="ft-6">
            <h5 className="text-xl font-semibold mb-4 text-black">TANTA</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="hover:text-[#fff] transition text-black"
                >
                  STADIUM ST
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-black text-center py-4 text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-2">
            <FaRegCopyright /> Copy Right 2026 - All Reserved
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
