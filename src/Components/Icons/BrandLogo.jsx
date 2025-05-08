import React from "react";

const BrandLogo = ({ className, textClassName }) => {
  return (
    <a href="#" className={`flex items-center ${className && className}`}>
      <img
        src="/assets/logo.svg"
        className={`h-6 mr-3 sm:h-9`}
        alt="Landwind Logo"
      />
      <span
        className={`self-center text-xl font-semibold whitespace-nowrap dark:text-white ${
          textClassName && textClassName
        }`}
      >
        Learn with Sumit
      </span>
    </a>
  );
};

export default BrandLogo;
