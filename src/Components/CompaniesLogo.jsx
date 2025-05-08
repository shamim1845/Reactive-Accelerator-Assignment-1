import React from "react";
import AirbnbLogo from "./Icons/AirbnbLogo";
import GoogleLogo from "./Icons/GoogleLogo";
import MicrosoftLogo from "./Icons/MicrosoftLogo";
import SpotifyLogo from "./Icons/SpotifyLogo";
import MailchimpLogo from "./Icons/MailchimpLogo";
import MashableLogo from "./Icons/MashableLogo";

const CompaniesLogo = () => {
  const companyList = [
    {
      id: 1,
      logo: <AirbnbLogo />,
      link: "#",
    },
    {
      id: 2,
      logo: <GoogleLogo />,
      link: "#",
    },
    {
      id: 3,
      logo: <MicrosoftLogo />,
      link: "#",
    },
    {
      id: 4,
      logo: <SpotifyLogo />,
      link: "#",
    },
    {
      id: 5,
      logo: <MailchimpLogo />,
      link: "#",
    },
    {
      id: 6,
      logo: <MashableLogo />,
      link: "#",
    },
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {companyList.map((company) => (
            <a
              key={company.id}
              href={company.link}
              className="flex items-center lg:justify-center"
            >
              {company.logo}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesLogo;
