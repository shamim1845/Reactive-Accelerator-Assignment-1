import React from "react";
import Button from "./Button";
import BrandLogo from "./Icons/BrandLogo";

const Header = () => {
  const navList = [
    {
      id: 1,
      link: "#",
      text: "Home",
    },
    {
      id: 2,
      link: "#",
      text: "Company",
    },
    {
      id: 3,
      link: "#",
      text: "Marketplace",
    },
    {
      id: 4,
      link: "#",
      text: "Features",
    },
    {
      id: 5,
      link: "#",
      text: "Team",
    },
    {
      id: 6,
      link: "#",
      text: "Contact",
    },
  ];
  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <BrandLogo />
          <div className="flex items-center lg:order-2">
            <Button text="Download" link="#" target={"_blank"} />
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navList.map((nav) => (
                <li key={nav.text}>
                  <a
                    href={nav.link}
                    className={`${
                      nav.id === 1
                        ? "block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                        : "block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    }`}
                    aria-current="page"
                  >
                    {nav.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
