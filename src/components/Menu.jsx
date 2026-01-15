import { useEffect, useState, useRef } from "react";
import MenuCard from "./layouts/MenuCard";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const { type } = useParams();
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        if (!type) {
          setProducts(data["TURKISH-COFFEE"]);
        } else if (
          [
            "turkish-latte",
            "espresso",
            "macchiato",
            "café-latte",
            "cappuccino",
            "flat-white",
            "cortado",
            "soft-drinks",
          ].includes(type)
        ) {
          setProducts(data[`${type.toUpperCase()}`]);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => console.error("Failed to fetch menu:", err));
  }, [type]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 200;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="flex flex-wrap gap-6 justify-center px-4">
        {/* Scroll container */}
        <div className="w-full flex flex-col justify-center md:mb-8 sm:mb-5 px-4 relative max-w-6xl">
          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="
                flex gap-2 sm:gap-4
                flex-nowrap
                overflow-x-auto
                scroll-smooth
                bg-gradient-to-r from-[#FFF] to-stone-700
                backdrop-blur-md
                p-2 sm:p-4
                rounded-2xl
                shadow-lg
                        "
          >
            <Link to="/menu" className="shrink-0">
              <button className="px-5 py-2 sm:px-6 rounded-full bg-stone-800 text-white text-sm sm:text-base font-medium hover:bg-gray-800 transition whitespace-nowrap">
                TURKISH-COFFEE
              </button>
            </Link>
            <Link to="/menu/turkish-latte" className="shrink-0">
              <button className="px-5 py-2 sm:px-6 rounded-full bg-black text-white text-sm sm:text-base font-medium hover:bg-gray-800 transition whitespace-nowrap">
                TURKISH-LATTE
              </button>
            </Link>
            <Link to="/menu/espresso" className="shrink-0">
              <button className="px-5 py-2 sm:px-6 rounded-full bg-black text-white text-sm sm:text-base font-medium hover:bg-gray-800 transition whitespace-nowrap">
                ESPRESSO
              </button>
            </Link>
            <Link to="/menu/macchiato" className="shrink-0">
              <button className="px-5 py-2 sm:px-6 rounded-full bg-black text-white text-sm sm:text-base font-medium hover:bg-gray-800 transition whitespace-nowrap">
                MACCHIATO
              </button>
            </Link>
            <Link to="/menu/café-latte" className="shrink-0">
              <button className="px-5 py-2 sm:px-6 rounded-full bg-black text-white text-sm sm:text-base font-medium hover:bg-gray-800 transition whitespace-nowrap">
                CAFÉ-LATTE
              </button>
            </Link>
            <Link to="/menu/cappuccino" className="shrink-0">
              <button className="px-5 py-2 sm:px-6 rounded-full bg-black text-white text-sm sm:text-base font-medium hover:bg-gray-800 transition whitespace-nowrap">
                CAPPUCCINO
              </button>
            </Link>
            <Link to="/menu/flat-white" className="shrink-0">
              <button className="px-5 py-2 sm:px-6 rounded-full bg-black text-white text-sm sm:text-base font-medium hover:bg-gray-800 transition whitespace-nowrap">
                FLAT-WHITE
              </button>
            </Link>
            <Link to="/menu/cortado" className="shrink-0">
              <button className="px-5 py-2 sm:px-6 rounded-full bg-black text-white text-sm sm:text-base font-medium hover:bg-gray-800 transition whitespace-nowrap">
                CORTADO
              </button>
            </Link>
            <Link to="/menu/soft-drinks" className="shrink-0">
              <button className="px-5 py-2 sm:px-6 rounded-full bg-black text-white text-sm sm:text-base font-medium hover:bg-gray-800 transition whitespace-nowrap">
                SOFT-DRINKS
              </button>
            </Link>
            {Array.from({ length: 8 }).map((_, i) => (
              <Link key={i} to="/menu/café-latte" className="shrink-0">
                <button className="px-5 py-2 sm:px-6 rounded-full bg-black text-white text-sm sm:text-base font-medium hover:bg-gray-800 transition whitespace-nowrap">
                  CAFÉ-LATTE
                </button>
              </Link>
            ))}
          </div>

          {/*Mobile & Tablet Arrows */}
          <div className="flex lg:hidden justify-center gap-4 sm:gap-10 mt-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 sm:p-5 bg-white shadow-md rounded-full hover:bg-gray-100"
            >
              <ChevronLeft />
            </button>
            <span className="text-sm font-medium text-gray-600 self-center">
              -
            </span>
            <button
              onClick={() => scroll("right")}
              className="p-3 sm:p-5 bg-white shadow-md rounded-full hover:bg-gray-100"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          className="
    grid
    grid-cols-1      
    sm:grid-cols-2    
    lg:grid-cols-3    
    gap-8            
    px-4
    max-w-6xl 
    mx-auto 
    w-full
  "
        >
          {products.map((product) => {
            const sizes = Object.entries(product.size || {}).map(
              ([key, value]) => ({
                size: key,
                price: `${value} EGP`,
              })
            );

            return (
              <div key={product.id} className="flex justify-center h-full">
                <MenuCard
                  img={product.image}
                  title={product.title}
                  description={product.description}
                  sizes={sizes}
                />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
