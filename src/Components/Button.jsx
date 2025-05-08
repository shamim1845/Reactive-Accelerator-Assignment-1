import React from "react";

const Button = ({ text, link, className, icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 ${
        className && className
      }`}
    >
      {icon} {text}
    </a>
  );
};

export default Button;
