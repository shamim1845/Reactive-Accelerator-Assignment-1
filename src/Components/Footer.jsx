import React from "react";
import BrandLogo from "./Icons/BrandLogo";
import FacebookIcon from "./Icons/FacebookIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import GithubIcon2 from "./Icons/GithubIcon2";
import DribbleIcon from "./Icons/DribbleIcon";
import MenuItem from "./MenuItem";

const Footer = () => {
  const footerMenu = [
    {
      id: 1,
      title: "Company",
      menu: [
        { text: "About", link: "#" },
        { text: "Careers", link: "#" },
        { text: "Brand Center", link: "#" },
        { text: "Blog", link: "#" },
      ],
    },
    {
      id: 2,
      title: "Help center",
      menu: [
        { text: "Discord Server", link: "#" },
        { text: "Twitter", link: "#" },
        { text: "Facebook", link: "#" },
        { text: "Contact Us", link: "#" },
      ],
    },
    {
      id: 3,
      title: "Legal",
      menu: [
        { text: "Privacy Policy", link: "#" },
        { text: "Licensing", link: "#" },
        { text: "Terms", link: "#" },
      ],
    },
    {
      id: 4,
      title: "Company",
      menu: [
        { text: "About", link: "#" },
        { text: "Careers", link: "#" },
        { text: "Brand Center", link: "#" },
        { text: "Blog", link: "#" },
      ],
    },
    {
      id: 5,
      title: "Download",
      menu: [
        { text: "iOS", link: "#" },
        { text: "Android", link: "#" },
        { text: "Windows", link: "#" },
        { text: "MacOS", link: "#" },
      ],
    },
  ];
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        {/* <!-- Sub Footer 1 --> */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {footerMenu.map((item) => (
            <MenuItem key={item.id} title={item.title} menu={item.menu} />
          ))}
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* <!-- Sub Footer 2 --> */}
        <div className="text-center">
          <BrandLogo
            className={"!justify-center !mb-5 !text-2xl"}
            textClassName={
              "!text-2xl !font-semibold !text-gray-900 dark:!text-white"
            }
          />
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
            <a
              href="#"
              target="_blank"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Flowbite
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Tailwind CSS
            </a>
            .
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <GithubIcon2 />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <DribbleIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
