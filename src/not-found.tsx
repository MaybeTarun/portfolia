import React from "react";
import { Link } from "react-router-dom";
import FuzzyText from "./components/fuzzyText";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div className="text-[10rem] sm:text-[12rem] md:text-[14rem] font-extrabold leading-none">
          <FuzzyText baseIntensity={0.1} hoverIntensity={0.5} fuzzRange={30} fps={60} color="#2d2a32" enableHover>
            404
          </FuzzyText>
        </div>
        <h1 className="mt-4 tracking-tight">
          <FuzzyText baseIntensity={0.1} hoverIntensity={0.4} fuzzRange={30} fps={60} fontSize={48} color="#2d2a32" enableHover>
            page not found
          </FuzzyText>
        </h1>
        <Link
          to="/"
          className="mt-4 inline-flex items-center justify-center border-2 border-[#2d2a32] hover:bg-[#2d2a32] hover:text-white text-[#2d2a32] text-[clamp(1rem,2.5vw,1.125rem)] font-medium rounded-full px-8 md:px-10 py-3 md:py-4 transition-all duration-200"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
