import React from "react";

const MenuItem = ({ title, menu }) => {
  return (
    <div>
      <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {title}
      </h3>
      <ul className="text-gray-500 dark:text-gray-400">
        {menu.map((menuItem) => (
          <li key={menuItem.text} className="mb-4">
            <a href={menuItem.link} className=" hover:underline">
              {menuItem.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItem;
