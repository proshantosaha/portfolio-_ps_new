import React, { useContext } from "react";
import ps from "../assets/pspng21.png";
import AnimatedText from "../components/AnimatedText";
import HireMe from "../components/HireMe";
import { ThemeContext } from "../context";
import { Link, Route, Routes } from "react-router-dom";
import resume from "../assets/resume.pdf";
import { LinkArrow } from "../components/Icons";
import Contact from "./Contact";

// const ResumeDownload = () => {
//   // Path to the resume file in the public directory
//   const resumeUrl = '/files/resume.pdf';

//   return (
//     <div>
//       <a href={resumeUrl} download="resume.pdf">
//         <button className="download-button">Download Resume</button>
//       </a>
//     </div>
//   );
// };

const Home = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      id="home"
      className={` w-full  inline-block z-0 pt-8 md:pt-16 lg:pt-0 relative `}
    >
      <div className="flex items-center w-full flex-col lg:flex-row lg:justify-between  ">
        <div className="w-1/2 md:w-[30%] md:h-[30%] ">
          <img
            src={ps}
            className="  lg:w-full h-auto mb-16 sm:block md:hidden lg:block lg:mb-0"
            sizes="(min-width:768px)100vw,(min-width:1200px)50vw"
          />
        </div>
        <div className="w-full flex flex-col  items-center  text-center lg:text-left self-center lg:w-[50%] ">
          <AnimatedText
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit"
            className="!text-3xl md:text-!5xl lg:text-!6xl  text-center xl:!text-5xl 2xl:!text-6xl "
          />
          <p className="my-4  font-medium text-xs md:text-sm lg:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
            distinctio eligendi ullam pariatur dolore enim corrupti cumque
            repellat in doloribus eius deserunt itaque nihil! Ipsa.
          </p>
          <div className="flex items-center  self-center lg:self-start mt-2 ">
            <a
              //   className="flex  bg-dark text-light
              //  p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light
              //   hover:text-dark border-2 border-solid border-transparent
              //    hover:border-dark"
              //   download={true}
              href={resume}
              download="resume"
              // href={resumeUrl} download="resume.pdf"
              className={`${
                !isDark
                  ? " text-dark border-dark hover:bg-dark/75 hover:text-light  "
                  : "bg-light text-dark  hover:bg-dark/75 hover:text-light hover:border-light "
              } flex 
             p-2 px-4 rounded-lg text-base font-semibold 
              border-2 border-solid  md:p-2.5  md:px-6 md:text-lg
               `}
            >
              Resume <LinkArrow className={"w-6 ml-2 "} />
            </a>
            <Link
              to="./Contact"
              className={`ml-4 text-base md:text-base font-medium capitalize text-dark underline ${
                isDark ? "text-light" : "text-dark md:text-lg"
              }`}
            >
              <Routes>
                {" "}
                <Route element={<Contact />} path="/contact" />
              </Routes>
              contact
            </Link>
          </div>
        </div>
      </div>
      <HireMe />
    </div>
  );
};

export default Home;
