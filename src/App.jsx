import React from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import CompaniesLogo from "./Components/CompaniesLogo";
import Service1 from "./Components/Service1";
import Service2 from "./Components/Service2";
import Testimonial from "./Components/Testimonial";
import Pricing from "./Components/Pricing";
import FAQ from "./Components/FAQ";
import TrialSection from "./Components/TrialSection";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />

      <HeroSection />
      <CompaniesLogo />
      <Service1 />
      <Service2 />
      <Testimonial />
      <Pricing />
      <FAQ />
      <TrialSection />

      <Footer />
    </div>
  );
};

export default App;
