import React from "react";

const Footer = () => {
  return (
    <footer class="bg-[#252C3A] sm:mt-[100px] text-white py-4 ">
    <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div class="flex items-center mb-4 md:mb-0">
            {/* <img src="your-logo.png" alt="Company Logo" class="w-20 h-20 md:w-24 md:h-24"/> */}
            <h2 class="text-xl ml-4 font-semibold">© DIGIWHIZ 2019</h2>
        </div>

        <nav class="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#home" class="hover:text-[#FFB700]">Home</a>
            <a href="#about" class="hover:text-[#FFB700]">About</a>
            <a href="#services" class="hover:text-[#FFB700]">Services</a>
            <a href="#contact" class="hover:text-[#FFB700]">Contact</a>
        </nav>
    </div>

    {/* <div class="text-center text-sm mt-6">
        <p>&copy; 2024 Company Name. All Rights Reserved.</p>
    </div> */}
</footer>
  );
};

export default Footer;
