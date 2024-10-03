import React, { useContext, useEffect, useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import psProfile from "../assets/pspng21.png";
import Skills from "../components/Skills";
import { ThemeContext } from "../context";
import {
  motionValue,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import BorderBottom from "../components/BorderBottom";
import Education from "../components/Education/Education";
import Experience from "../components/Experiance/Experience";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, isInView]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  const { isDark } = useContext(ThemeContext);

  // this  is h2 theme color
  const textDark = isDark ? "text-dark" : "text-light";

  // ei css ta prblem korce

  return (
    <div
      id="about"
      className={` flex w-full flex-col items-center justify-center pt-16  `}
    >
      <AnimatedText
        text="proshanto saha about section"
        className=" mt-8 sm:mt-16 mb-4 !text-4xl sm:!text-6xl lg:!text-7xl  "
      />

      <BorderBottom para4="-------------------" />

      <div className=" grid w-full grid-cols-8 gap-8 sm:gap-16 ">
        <div className="col-span-8 flex flex-col items-start justify-start md:col-span-4 xl:col-span-3 order-2 md:order-none">
          <h2
            className={`mb-4 text-lg font-bold uppercase textDark mt-8 md:mt-0`}
          >
            Biography
          </h2>
          <p className="font-medium textDark ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            veniam neque quae facilis ex molestias repellendus accusantium
            consectetur laudantium hic?tttttttttttttttttttttt
          </p>
          <p className="my-4 font-medium ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            veniam neque quae facilis ex molestias repellendus accusantium
            consectetur laudantium hic?ddddddddddddd
          </p>
          <p className="font-medium ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            veniam neque quae facilis ex molestias repellendus accusantium
            consectetur laudantium hic?
          </p>
        </div>
        <div
          className={`col-span-8 relative h-max  rounded-2xl border-2
             border-solid  flex justify-center items-center ${
               isDark
                 ? "bg-dark xl:col-span-3 order-1 md:order-none md:col-span-4"
                 : "bg-light xl:col-span-3 order-1 md:order-none md:col-span-4"
             }`}
          //  ${isDark ? "bg-dark border-light" : "bg-light border-dark" }
        >
          <div
            className={`absolute  top-0 -right-3  w-[101%] h-[103%] rounded-[2rem]  -z-10 ${
              isDark ? "bg-light" : "bg-dark"
            }`}
          />
          {/* ${isDark ? "bg-light" : "bg-dark"} */}
          <img src={psProfile} className=" w-[50%] h-auto rounded-2xl " />
        </div>

        <div className="col-span-8 flex flex-row justify-between  xl:col-span-2   xl:flex-col items-center order-3 md:order-none  ">
          <div className="flex flex-col items-center justify-center">
            <span className="inline-block  text-2xl items-center  sm:text-5xl md:text-6xl lg:text-7xl  font-bold">
              <AnimatedNumbers value={50} />+
            </span>
            <h2
              className={`text-center text-sm sm:text-base md:text-xl xl:text-center 2xl:text-xl font-medium capitalize textDark `}
            >
              satisfied client
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <span className="inline-block text-2xl items-center sm:text-5xl md:text-6xl lg:text-7xl  font-bold">
              {" "}
              <AnimatedNumbers value={40} />+
            </span>
            <h2 className="text-center  text-sm sm:text-base md:text-lg xl:text-center 2xl:text-xl font-medium capitalize textDark">
              projects completed
            </h2>
          </div>
          <div className="flex flex-col  items-center justify-center">
            <span className="inline-block text-2xl items-center  sm:text-5xl md:text-6xl lg:text-7xl  font-bold">
              {" "}
              <AnimatedNumbers value={4} />+
            </span>
            <h2 className=" text-center text-sm sm:text-base md:text-lg xl:text-center 2xl:text-xl font-medium capitalize textDark">
              years of experience
            </h2>
          </div>
        </div>
      </div>
      <Skills />
      <Experience />
      <Education />
      {/* <Education /> */}
    </div>
  );
};

export default About;
