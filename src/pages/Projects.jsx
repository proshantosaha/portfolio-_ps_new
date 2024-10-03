import React, { useContext } from "react";
import PsProject from "../assets/pspng22.png";
import AnimatedText from "../components/AnimatedText";
import { ThemeContext } from "../context";
import { Link } from "react-router-dom";
import BorderBottom from "../components/BorderBottom";
import FeaturedProject from "../components/Project/FeatureProject";
import Project from "../components/Project/Project";
// import PsIcon from "../assets/images/poster.png";

// github er jaygay amr psProject image deya ache

// const FeaturedProject = ({ type, title, summary, img, PsIco, a }) => {
//   const { isDark } = useContext(ThemeContext);

//   return (
//     <article
//       id="projects"
//       className={`w-full relative flex items-center flex-col justify-between rounded-br-2xl
//      rounded-2xl border border-solid  shadow-2xl p-12 lg:flex-row xs:rounded-br-3xl xs:rounded-3xl ${
//        isDark ? "bg-dark  border-light" : "bg-light border-dark"
//      }
//      `}
//     >
//       {/* single div eta jtar kaj holo shadow deya */}
//       {/* isDark ? "bg-dark text-light" : "bg-light text-dark" */}

//       <div
//         className={`absolute top-0 -right-2 w-full h-[102%] rounded-[1.5rem] -z-10  xs:-right-5 xs:w-[101%] sm:h-[103%] xs:rounded-[2.5rem] ${
//           isDark ? "bg-light" : "bg-dark"
//         }`}
//       />

//       {/* href={link}   link dei nai cause problem korce link*/}
//       <a
//         target="_blank"
//         className="w-[30%] cursor-pointer overflow-hidden rounded-lg lg:w-[20%] "
//       >
//         <motion.img
//           src={img}
//           alt={title}
//           className="w-[50%] h-auto"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.2 }}
//         />
//       </a>

//       <div className="w-full flex flex-col items-start justify-between pt-6 pl-0 lg:w-1/2 lg:pl-6 lg:pt-0 ">
//         <span
//           className={`${
//             !isDark ? "text-primary" : "text-primaryDark"
//           }  font-medium text-base xs:text-xl`}
//         >
//           {type}
//         </span>

//         <div className={`${!isDark ? "text-dark" : "text-light"}`}>
//           {" "}
//           <a target="_blank" className="hover:underline underline-offset-2">
//             {/* <img src={img} alt={title} className="w-full h-auto" /> */}
//             <h2 className="my-2 w-full text-left text-sm font-bold sm:text-4xl">
//               {title}
//             </h2>
//           </a>
//           <p className="my-2 font-medium text-sm sm:text-xl">{summary}</p>
//         </div>

//         <div className="mt-2 flex items-center">
//           {" "}
//           <a href={PsIco} target="_blank" className="w-10">
//             {/* <PsIcon /> */}
//             {/* <PsProject /> */}
//           </a>
//           <a
//             href={a}
//             target="_blank"
//             className="ml-4 rounded-lg bg-dark text-light p-2 px-4 text-base font-semibold sm:text-lg sm:px:6"
//           >
//             {/* <GithubIcon /> */}
//             visit this site
//           </a>
//         </div>
//       </div>
//     </article>
//   );
// };

// const Project = ({ type, title, img, PsIco, a }) => {
//   const { isDark } = useContext(ThemeContext);

//   return (
//     <article>
//       <div
//         id="projects"
//         className={`w-full  flex flex-col relative  items-center justify-center rounded-2xl border border-solid p-4 xs:p-6 ${
//           isDark ? "bg-dark border-light" : "bg-light border-dark"
//         }`}
//       >
//         <div
//           className={`absolute top-0 -right-2 w-full h-[102%] rounded-[1.5rem]  -z-10  xs:-right-5 xs:w-[101%] sm:h-[103%] xs:rounded-[2.5rem] ${
//             isDark ? "bg-light" : "bg-dark"
//           }`}
//         />

//         <Link
//           target="_blank"
//           className="w-[50%] cursor-pointer overflow-hidden rounded-lg"
//         >
//           <motion.img
//             src={img}
//             alt={title}
//             className="w-full h-auto "
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.2 }}
//           />
//         </Link>

//         <div className="w-full flex flex-col items-start justify-between mt-4">
//           <span
//             className={`${
//               isDark ? "text-primaryDark" : "text-primary"
//             }  font-medium text-base md:text-lg lg:text-xl`}
//           >
//             {type}
//           </span>

//           <div className={`${!isDark ? "text-dark" : "text-light"}`}>
//             <Link
//               target="_blank"
//               className="hover:underline underline-offset-2"
//             >
//               {/* <img src={img} alt={title} className="w-full h-auto" /> */}
//               <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-3xl">
//                 {title}
//               </h2>
//             </Link>
//             <div className="w-full mt-2 flex items-center justify-between ">
//               {" "}
//               <Link
//                 to={a}
//                 target="_blank"
//                 className="text-base font-semibold underline md:text-lg"
//               >
//                 {/* <GithubIcon /> */}
//                 visit
//               </Link>
//               <Link href={PsIco} target="_blank" className="w-6 md:w-8">
//                 {/* <PsIcon /> */}
//                 {/* <PsProject /> */}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

const Projects = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="flex w-full mb-16 flex-col items-center justify-center pt-16">
      <AnimatedText
        text="proshanto saha Project section"
        className="mt-20 mb-2 !text-4xl sm:!text-6xl lg:!text-7xl"
      />

      <BorderBottom para4="---------------------------" />

      <div className=" grid grid-cols-12 gap-24 gap-y-24 md:gap-y-32 gap-x-0 lg:gap-x-8 xl:gap-x-16">
        <div className="col-span-12">
          <FeaturedProject
            img={PsProject}
            title="Lorem ipsum dolor sit amet consectetur"
            summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eaque perspiciatis commodi neque eligendi a incidunt, est reprehenderit fugiat unde dolores, consequatur earum repellendus pariatur quasi"
            // a="/"
            // PsIco="/"
            type="Featured Project"
          />
        </div>

        <div className="col-span-12 md:col-span-6 ">
          <Project
            img={PsProject}
            title="Lorem ipsum dolor sit amet consectetur"
            summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eaque perspiciatis commodi neque eligendi a incidunt, est reprehenderit fugiat unde dolores, consequatur earum repellendus pariatur quasi"
            // a="/"
            // PsIco="/"
            type="Featured Project"
          />
        </div>

        <div className="col-span-12 md:col-span-6">
          {" "}
          <Project
            img={PsProject}
            title="Lorem ipsum dolor sit amet consectetur"
            summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eaque perspiciatis commodi neque eligendi a incidunt, est reprehenderit fugiat unde dolores, consequatur earum repellendus pariatur quasi"
            // a="/"
            // PsIco="/"
            type="Featured Project"
          />
        </div>
        <div className="col-span-12">
          {" "}
          <FeaturedProject
            img={PsProject}
            title="Lorem ipsum dolor sit amet consectetur"
            summary="Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Velit, eaque perspiciatis
          commodi neque eligendi a incidunt, est reprehenderit fugiat unde
          dolores, consequatur earum repellendus pariatur quasi" // a="/" //
            PsIco="/"
            type="Featured Project"
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          {" "}
          <Project
            img={PsProject}
            title="Lorem ipsum dolor sit amet consectetur"
            summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eaque perspiciatis commodi neque eligendi a incidunt, est reprehenderit fugiat unde dolores, consequatur earum repellendus pariatur quasi"
            // a="/"
            // PsIco="/"
            type="Featured Project"
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          {" "}
          <Project
            img={PsProject}
            title="Lorem ipsum dolor sit amet consectetur"
            summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eaque perspiciatis commodi neque eligendi a incidunt, est reprehenderit fugiat unde dolores, consequatur earum repellendus pariatur quasi"
            // a="/"
            // PsIco="/"
            type="Featured Project"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
