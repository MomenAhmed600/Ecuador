import React, { useEffect, useState } from "react";

const MenuCard = React.memo(({ img, title, description, sizes = [] }) => {
  const [selectedSize, setSelectedSize] = useState(
    sizes[0] || { size: "", price: "" }
  );

  useEffect(() => {
    if (sizes.length > 0) {
      setSelectedSize(sizes[0]);
    }
  }, [sizes]);

  if (!sizes.length) return null;

  return (
    <div className="bg-[#f2f2f2] p-5 rounded-[2.5rem] flex flex-col h-full w-full transition-transform duration-300 hover:shadow-lg">
      <div className="w-full h-44 sm:h-48 overflow-hidden rounded-[2rem]">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt={title}
          loading="lazy"
        />
      </div>

      <div className="mt-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 leading-tight ">
          {title}
        </h3>

        <p className="text-[14px] text-gray-500 font-medium line-clamp-2 min-h-[40px] mb-4">
          {description}
        </p>

        <div className="flex gap-3 mb-4 flex-wrap">
          {sizes.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedSize(item)}
              className={`px-6 py-2 rounded-2xl text-[13px] font-bold transition-all ${
                selectedSize.size === item.size
                  ? "bg-black text-white"
                  : "bg-[#e0e0e0] text-gray-700 hover:bg-gray-300"
              }`}
            >
              {item.size}
            </button>
          ))}
        </div>

        <div className="text-lg font-black text-black mt-auto">
          {selectedSize.price}
        </div>
      </div>
    </div>
  );
});

export default MenuCard;
