import React, { useContext } from "react";
import { ThemeContext } from "../context";
import { CerculerImage } from "./Icons";
// import HiremePhoto from "../assets/hireme.png";

const HireMe = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    // left-4 bottom-4

    <div
      className="fixed  right-4 left-auto bottom-auto top-0 lg:left-4 md:bottom-9 md:right-auto md:top-auto
 flex items-center justify-center overflow-hidden z-40 "
    >
      <div className=" flex w-24 h-24 text-[10px] justify-center relative rounded-full md:w-48 md:h-48 md:text-[14px] ">
        {/* <span
          className={`${isDark ? "fill-dark" : "fill-light"} animate-spin-slow`}
        >
          HireMe
        </span> */}
        <CerculerImage
          className={`${
            isDark ? "fill-light" : " fill-dark"
          }  fill-dark animate-spin-slow `}
          // ${isDark ? "fill-dark" : "fill-light"}
        />

        <h2
          //   className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          //  shadow-md border border-solid  w-20 h-20 rounded-full font-semibol
          //  border-dark bg-dark text-light hover:bg-light hover:text-dark"

          className={`${
            !isDark
              ? "border-dark bg-dark text-light hover:bg-light hover:text-dark"
              : "border-light bg-light text-dark hover:bg-dark hover:text-light"
          } flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
       shadow-md border border-solid w-12 h-12 rounded-full font-semibol  md:w-20 md:h-20`}
        >
          Hire me{" "}
        </h2>
      </div>
    </div>
  );
};

export default HireMe;
