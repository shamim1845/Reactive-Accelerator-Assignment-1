import React from "react";
import CheckmarkRound from "./Icons/CheckmarkRound";

const Service1 = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {/* <!-- Sub Service 1 --> */}
        <SubService
          title="Work with tools you already use"
          paragraph1="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
          featureList={[
            "Continuous integration and deployment",
            "Development workflow",
            "Knowledge management",
          ]}
          paragraph2="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
          imageUrl="./assets/features/feature-1.png"
          imagePosition="right"
        />

        {/* <!-- Sub Service 2 --> */}
        <SubService
          title="We invest in the world’s potential"
          paragraph1="Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work,
              eliminate toil, and deploy changes with ease."
          featureList={[
            "Dynamic reports and dashboards",
            "Templates for everyone",
            "Development workflow",
            "Limitless business automation",
            "Knowledge management",
          ]}
          paragraph2={
            "Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
          }
          imageUrl={"/assets/features/feature-2.png"}
          imagePosition="left"
        />
      </div>
    </section>
  );
};

export default Service1;

const SubService = ({
  title,
  paragraph1,
  featureList,
  paragraph2,
  imageUrl,
  imagePosition,
}) => (
  <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
    {imagePosition === "left" && (
      <img
        className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
        src={imageUrl}
        alt="dashboard feature image"
      />
    )}

    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="mb-8 font-light lg:text-xl">{paragraph1}</p>

      <ul
        role="list"
        className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
      >
        {featureList.map((feature) => (
          <li key={feature} className="flex space-x-3">
            <CheckmarkRound />
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <p className="mb-8 font-light lg:text-xl">{paragraph2}</p>
    </div>

    {imagePosition === "right" && (
      <img
        className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
        src={imageUrl}
        alt="dashboard feature image"
      />
    )}
  </div>
);
