import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Dubai Building Park",
    image: "/images/feature-1.png",
    category: "building",
  },
  {
    id: 2,
    title: "Hospital Healthcare",
    image: "/images/healthcare.jpg",
    category: "healthcare",
  },
  {
    id: 3,
    title: "Pent House",
    image: "/images/feature-3.png",
    category: "building",
  },
  {
    id: 4,
    title: "Building Design",
    image: "/images/building-2.jpg",
    category: "building",
  },
  {
    id: 5,
    title: "Office Design",
    image: "/images/office.jpg",
    category: "office",
  },
  {
    id: 6,
    title: "Interior Design of the House",
    image: "/images/interior-design-2.jpg",
    category: "interior-design",
  },
];

const categories = [
  "all",
  "building",
  "healthcare",
  "interior-design",
  "office",
];

const FeatureSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filtered, setFiltered] = useState(projectsData);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    if (category === "all") {
      setFiltered(projectsData);
      return;
    }
    const filteredData = projectsData.filter(
      (item) => item.category === category
    );
    setFiltered(filteredData);
  };

  return (
    <div className="">
      <section className="text-gray-600 body-font py-0 sm:py-12 md:py-0">
        <div className="container px-4 sm:px-6 md:px-8 mx-auto">
          {/* Header Section */}
          <div className="flex flex-col text-center w-full mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl  title-font mb-2 sm:mb-3 md:mb-4 text-gray-900">
              FEATURED WORK
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-sm sm:text-base px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              nihil quam doloribus vitae eligendi. Harum facilis officiis
              dolorum at et unde labore aperiam sed soluta, aliquid, facere
              obcaecati vero maiores.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterClick(category)}
                className={`px-3 font-semibold sm:px-4 md:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg capitalize transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-[#FFB700] text-white"
                    : "bg-gray-200 text-[#5A5A5A] hover:bg-[#FFB700] hover:text-white"
                }`}>
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="w-full">
                  <div className="relative aspect-[5/3] w-full overflow-hidden rounded-lg shadow-lg cursor-pointer bg-gray-100">
                    {/* Background Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute bottom-0 left-0 w-full h-2/5 bg-black bg-opacity-75 opacity-0 hover:h-2/5 hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 sm:gap-4">
                      <h2 className="text-white text-center uppercase text-sm sm:text-base md:text-lg font-bold max-w-[60%] truncate">
                        {item.title}
                      </h2>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <a
                          href="#"
                          className="transform hover:scale-110 transition-transform duration-200">
                          <img
                            src="./src/assets/link.png"
                            alt="link"
                            className="w-5 h-5 sm:w-7 sm:h-7"
                          />
                        </a>
                        <a
                          href="#"
                          className="transform hover:scale-110 transition-transform duration-200">
                          <img
                            src="./src/assets/plus.png"
                            alt="plus"
                            className="w-5 h-5 sm:w-7 sm:h-7"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
