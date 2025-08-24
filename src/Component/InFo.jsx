import React from "react";
// import styles from "./InFo.module.css";

function Info() {
  const sections = [
    { title: "Administrative Positions/Activities" },
    { title: "Awards/Honors" },
    { title: "Academic Career/ Member" },
    { title: "Other Professional Activities" },
  ];

  return (
    <div className="w-[98%] h-auto flex flex-col gap-8 ">
      {sections.map((section, index) => (
        <div  className="w-full flex flex-col gap-4" key={index}>
          <h1 className="w-[70%] ml-8 text-3xl font-sans text-green-600 shadow-[2px 2px 4px rgba(57, 225, 65, 0.7)]">{section.title}</h1>
        <div className="w-full h-full gap-4 flex flex-wrap flex-row items-center justify-evenly ml-4">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex-[1 1 300px] max-w-[30%] min-w-110 bg-white h-62 rounded-xl flex items-center justify-center border border-black shadow-[5px_5px_15px_rgba(0,0,0,0.2)]
         transition-[transform,box-shadow,border-color] duration-200 ease-in-out
         hover:scale-[1.03] hover:shadow-[0px_10px_24px_rgba(142,68,173,0.4)]
         hover:border-[#9b59b6] ">
              container{num}
            </div>
          ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Info;
