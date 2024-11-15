import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneSquareAlt } from "react-icons/fa";

const UtilityNav = () => {
  return (
    <div className="bg-[#EBEBEB] font-semibold text-[#252C3A] py-3 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="cursor-pointer hover:underline text-sm">
          Have any questions?
        </p>
        <div className="flex items-center space-x-6 mt-2 md:mt-0">
          <a
            href="mailto:contact@gmail.com"
            className="flex items-center hover:underline text-sm">
            <HiOutlineMailOpen className="mr-1" size={18} />
            contact@gmail.com
          </a>
          <div className="flex items-center text-sm">
            <FaPhoneSquareAlt className="mr-1" size={18} />
            +080 0444 333 444
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilityNav;
