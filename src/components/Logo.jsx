import React from "react";

const Logo = () => {
  return (
    <div className="flex justify-center md:justify-start cursor-pointer items-center place-items-center">
      <a href="/">
      <img
        src="../public/images/logo.png"
        alt="Logo"
        width={144}
        height={50}
        className="mt-4 md:mt-0 md:ml-8 lg:ml-0"
      /></a>
    </div>
  );
};

export default Logo;
