import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MainSection = () => {
  return (
    <div className="relative bg-cover bg-center h-[550px]">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        className="absolute inset-0 w-full h-full bg-black">
        <div>
          <img
            src="/images/main-image-1.png"
            alt="background 1"
            className="w-full h-[550px] object-cover  opacity-50"
          />
        </div>
        <div>
          <img
            src="/images/main-image-2.jpg"
            alt="background 2"
            className="w-full h-[550px] object-cover  opacity-50"
          />
        </div>
        <div>
          <img
            src="/images/main-image-3.jpg"
            alt="background 2"
            className="w-full h-[550px] object-cover  opacity-50"
          />
        </div>
      </Carousel>

      {/* Static Text Content */}
      <div className="relative z-10 text-white ml-2 pt-40 px-5 md:px-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          We Do Big Things
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">With Big Ideas</h2>
        <p className="md:w-1/2 max-md:w-5/4 text-xl pr-2 md:pr-5 font-normal">
          Talk To Our Experts and Get Your Dream Home Done. If you dream of
          designing a new home that takes full advantage of the unique geography
          and views of land that you love
        </p>
        <a
          href=""
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full transition-colors duration-300 mt-9">
          Explore Now
        </a>
      </div>

      <div className="bg-[#FAB702] h-[100px] pt-8 sm:pt-10 lg:pt-16 flex flex-col lg:flex-row justify-center items-center lg:h-[200px] sm:h-[150px] max-sm:h-[150px] max-md:h-[100px]  ">

        <ul className="text-center lg:text-left text-white space-y-2 lg:space-y-0 lg:space-x-4 lg:flex lg:items-center lg:justify-between ">
          <li className="text-sm font-semibold  sm:text-base lg:text-lg max-lg:justify-between md:text-[20px] lg:text-[20px]">
            Consulting And Estimate For Your Project,{" "}
            <span className="text-[#252c3a] font-bold underline">
              Contact Us Today
            </span>
          </li>
          <li className="max-lg:mt-2">
            <button className="bg-white text-[#252C3A] font-semibold py-3 px-4 text-sm sm:text-sm lg:text-lg:flex lg:text-[20px] md:text-[20px]  mt-2 lg:mt-0 lg:py-4">
              Get a Quote
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainSection;
