import React, { useState, useRef, useEffect } from "react";
 
// import data from "./data.json";

const slides = [
  {
    content: (
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
          Welcome to <br /> Health Informatics
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          <span className="text-blue-600 font-semibold">Advancing</span> Bioinformatics and{" "}
          <span className="text-lime-500 font-semibold">Computational Biology</span>
        </p>
      </div>
    ),
  },
  {
    content: (
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
          We believe we can always <br /> do more and better
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          <span className="text-purple-600 font-semibold">Transforming</span> biological research through{" "}
          <span className="text-green-500 font-semibold">computational excellence</span>
        </p>
      </div>
    ),
  },
  {
    content: (
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
          Going beyond is our true <br /> purpose of Existing
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          <span className="text-pink-500 font-semibold">Transforming</span> Healthcare with{" "}
          <span className="text-blue-500 font-semibold">Computational Research</span>
        </p>
      </div>
    ),
  },
];

function Hero() {
  const [next, setNext] = useState(0);
  let ref = useRef(null);

  const handleNext = () => {
    setNext((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePre = () => {
    setNext((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    ref.current = setInterval(handleNext, 2000);
    return () => clearInterval(ref.current);
  }, []);

  return (
    <div
      className="w-full min-h-130 mt-15 bg-gradient-to-r from-blue-100 via-purple-50 to-sky-100 flex flex-col items-center justify-center relative"
      onMouseEnter={() => clearInterval(ref.current)}
      onMouseLeave={() => (ref.current = setInterval(handleNext, 2000))}
    >

      <button
        className="absolute left-6 top-1/2 -translate-y-1/2 text-4xl text-blue-600 opacity-60 hover:opacity-100 transition"
        onClick={handlePre}
      >
        ‹
      </button>

      {/* Dynamic Slide Content */}
      <div key={next} className="animate-slide-left">
        {slides[next].content}
      </div>

      {/* Right Arrow (clean floating) */}
      <button
        className="absolute right-6 top-1/2 -translate-y-1/2 text-4xl text-blue-600 opacity-60 hover:opacity-100 transition"
        onClick={handleNext}
      >
        ›
      </button>

      {/* Dots */}
      <div className="flex items-center justify-center gap-3 mt-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setNext(i)}
            className={`w-3 h-3 rounded-full transition-all ${next === i ? "bg-blue-600 scale-125" : "bg-gray-300"
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Hero;
