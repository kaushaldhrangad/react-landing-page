import React from "react";
import "../assets/link.png";
import "../assets/plus.png";

// TODO:- Make Filter button,  design this card and Solve the error of navabr( in the navvbar Home page is not yellow if i navigate in the home)

const HoverCard = ({ title, src }) => {
  return (
    <div className="flex flex-wrap -m-4 ">
      <div className="relative space-x-3 flex-col mb-52 border-red-500 w-full h-full lg:w-[500px] lg:h-[300px] sm:w-[350px] sm:h-[250px] bg-cover bg-center overflow-hidden rounded-lg shadow-lg cursor-pointer">
        {/* Background Image */}
        <img
          src={src} // Replace with your image path
          alt="Card Background"
          className="w-full h-full object-cover"
        />

        {/* Hover Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-2/5 bg-black bg-opacity-75 opacity-0 hover:h-2/5 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <h2 className="text-white text-center uppercase text-lg sm:text-xl px-4 font-bold">
            {title}
          </h2>
          <a href="/link">
            <button>
              <img src={"./src/assets/link.png"} alt="" />
            </button>
          </a>
          <a href="/create" className="">
            <button>
              <img className="ml-2" src="./src/assets/plus.png" alt="" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
