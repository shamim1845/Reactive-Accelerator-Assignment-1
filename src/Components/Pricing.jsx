import React from "react";
import Button from "./Button";
import CheckmarkIcon from "./Icons/CheckmarkIcon";

const PricingSection = () => {
  const pricingList = [
    {
      packageName: "Starter",
      description: "Best option for personal use & for your next project.",
      price: "$29",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
    },
    {
      packageName: "Company",
      description: "Relevant for multiple users, extended & premium support.",
      price: "$99",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 10 developers",
        "Premium support: 24 months",
        "Free updates: 24 month",
      ],
    },
    {
      packageName: "Enterprise",
      description:
        "Best for large scale uses and extended redistribution rights.",
      price: "$499",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 100+ developers",
        "Premium support: 36 months",
        "Free updates: 36 months",
      ],
    },
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricingList.map((pricing) => (
            <div
              key={pricing.packageName}
              className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="mb-4 text-2xl font-semibold">
                {pricing.packageName}
              </h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {pricing.description}
              </p>
              <div className="flex items-baseline justify-center my-8">
                <span className="mr-2 text-5xl font-extrabold">
                  {pricing.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>

              <ul role="list" className="mb-8 space-y-4 text-left">
                {pricing.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <CheckmarkIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button text={"Get started"} link={"#"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
