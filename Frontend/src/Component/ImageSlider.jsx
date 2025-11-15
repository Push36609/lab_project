import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
 
const data = [
  {
    "url": "group photo.png"
  },
  {
    "url": "1.jpeg"
  },
  {
    "url": "2.jpeg"
  },
  {
    "url": "3.jpeg"
  }
];

function ImageSlider() {
  const [next, setNext] = useState(0);
  let ref = useRef(null)

  const handleNext = () => {
    setNext((previousValue) => {
      if (previousValue == data.length - 2) {
        return 0
      }
      return previousValue + 1
    })

  };
  const handlePre = () => {
    if (next == 0) {
      setNext(data.length - 1)
    } else {
      setNext(next - 1);
    }

  };

  useEffect(() => {
    ref.current = setInterval(handleNext, 2000)
    return (() => {
      clearInterval(ref.current)
    })
  }, [])

  return (
    <div className="w-full bg-gradient-to-t from-blue-50 to-sky-50 flex flex-col items-center z-1 pt-5" onMouseEnter={() => clearInterval(ref.current)}
      onMouseLeave={() => ref.current = setInterval(handleNext, 2000)}>

      <div className="relative inline-block w-full z-1 ">
        <button className="absolute top-1/2 transform -translate-y-1/2 text-[clamp(1.2rem,2vw,2.5rem)] cursor-pointer font-bold text-purple-400 border-none rounded-full z-2 flex justify-center left-8 hover:bg-green-300" onClick={handlePre}>{"<"}</button>
        <motion.img
          src={data[next].url}
          alt=""
          className="w-[95%] justify-center h-auto mx-auto rounded-[1.25rem] block m-auto shadow-[5px_5px_15px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <button className="absolute top-1/2 transform -translate-y-1/2 text-[clamp(1.2rem,2vw,2.5rem)] cursor-pointer font-bold text-purple-400 border-none rounded-full z-2 flex justify-center right-8 hover:bg-green-300" onClick={handleNext}>{">"}</button>
      </div>

      <div className="absolute top-[85%] transform -translate-y-1/2 text-[clamp(1.2rem,2vw,2.5rem)] cursor-pointer font-bold text-purple-400 border-none rounded-full z-2 flex justify-center">
        <div className="flex items-center justify-center gap-4 absolute">
          {data.map((_, i) => (
            <div
              key={i}
              className={`flex justify-center transition-all-[0.2s ease-in-out] ${
                         next === i ? 'bg-purple-500 scale-125' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>


    </div>



  );
}

export default ImageSlider;