import React from "react";
import ArrowUp from "./Icons/ArrowUp";
import ArrowDown from "./Icons/ArrowDown";

const FaqItem = ({ id, heading, body }) => {
  return (
    <>
      <h3 id={`accordion-flush-heading-${id}`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full py-5 font-medium text-left ${
            id === 1
              ? "text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              : "text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
          }`}
          data-accordion-target={`#accordion-flush-body-${id}`}
          aria-expanded="false"
          aria-controls={`accordion-flush-body-${id}`}
        >
          <span>{heading}</span>
          {id === 1 ? <ArrowUp /> : <ArrowDown />}
        </button>
      </h3>
      <div
        id={`accordion-flush-body-${id}`}
        className={id === 1 ? "" : "hidden"}
        aria-labelledby={`accordion-flush-heading-${id}`}
      >
        {body}
      </div>
    </>
  );
};

export default FaqItem;
