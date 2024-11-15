import React, { useState } from "react";
import Logo from "./Logo";
import { HiMenu, HiX, HiSearch } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home"); // Track the current page

  // Toggle menu
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Toggle search
  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Handle page click to set current page
  const handlePageClick = (page) => {
    setCurrentPage(page); // Set the current page when a link is clicked
  };

  return (
    <nav className="shadow-md w-full z-10 bg-white">
      <div className="px-4 md:px-8 max-sm:lg:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0 items-center">
          <Logo />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center font-semibold space-x-8">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#home"
                className={`hover:text-[#FFB700] ${
                  currentPage === "home" ? "text-[#FFB700]" : "text-[#252C3A]"
                }`}
                onClick={() => handlePageClick("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`hover:text-[#FFB700] ${
                  currentPage === "about" ? "text-[#FFB700]" : "text-[#252C3A]"
                }`}
                onClick={() => handlePageClick("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={`hover:text-[#FFB700] ${
                  currentPage === "services" ? "text-[#FFB700]" : "text-[#252C3A]"
                }`}
                onClick={() => handlePageClick("services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`hover:text-[#FFB700] ${
                  currentPage === "contact" ? "text-[#FFB700]" : "text-[#252C3A]"
                }`}
                onClick={() => handlePageClick("contact")}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop Inline Search */}
          <div className="relative flex items-center">
            <AnimatePresence>
              {isSearchOpen ? (
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "16rem" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#252C3A]"
                  />
                  <button
                    onClick={handleSearchToggle}
                    className="text-[#252C3A] ml-2"
                  >
                    <HiX size={24} />
                  </button>
                </motion.div>
              ) : (
                <button
                  onClick={handleSearchToggle}
                  className="text-[#252C3A] flex items-center"
                >
                  <HiSearch size={24} />
                </button>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center ">
          <button onClick={handleToggle} className="text-[#252C3A]">
            <AnimatePresence>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiX size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiMenu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-[#EBEBEB] py-4 text-[#252C3A]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 font-semibold">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#252C3A]"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#252C3A]">
                  <HiSearch size={20} />
                </button>
              </div>
              <ul className="space-y-4">
                <li className="text-center">
                  <a
                    href="#home"
                    className={`${
                      currentPage === "home" ? "text-[#FFB700]" : "text-[#252C3A]"
                    }`}
                    onClick={() => handlePageClick("home")}
                  >
                    Home
                  </a>
                </li>
                <li className="text-center">
                  <a
                    href="#about"
                    className={`${
                      currentPage === "about" ? "text-[#FFB700]" : "text-[#252C3A]"
                    }`}
                    onClick={() => handlePageClick("about")}
                  >
                    About
                  </a>
                </li>
                <li className="text-center">
                  <a
                    href="#services"
                    className={`${
                      currentPage === "services" ? "text-[#FFB700]" : "text-[#252C3A]"
                    }`}
                    onClick={() => handlePageClick("services")}
                  >
                    Services
                  </a>
                </li>
                <li className="text-center">
                  <a
                    href="#contact"
                    className={`${
                      currentPage === "contact" ? "text-[#FFB700]" : "text-[#252C3A]"
                    }`}
                    onClick={() => handlePageClick("contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
