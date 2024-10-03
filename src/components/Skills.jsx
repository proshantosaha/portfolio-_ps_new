import React, { useContext } from "react";
import AnimatedText from "./AnimatedText";
import { ThemeContext } from "../context";
import { motion } from "framer-motion";
import BorderBottom from "./BorderBottom";

const Skill = ({ name, x, y }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <motion.div
      className={`flex items-center justify-center
     rounded-full font-semibold 
      py-1.5 px-3 shadow-dark cursor-pointer absolute md:py-2 lg:py-3 md:px-4 lg:px-6   ${
        isDark
          ? "bg-light xs:text-dark xs:bg-light "
          : "text-dark xs:text-light xs:bg-dark"
      }
`}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <>
      {/* <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2> */}
      <AnimatedText
        text="Skills"
        className="mt-20 text-4xl md:text-6xl lg:8xl"
      />

      <BorderBottom para4="-----------------------" />

      <div
        className={`${
          isDark
            ? "bg-circularDirk md:bg-circularDirkbMd lg:bg-circularDirkLg xl:bg-circularDirkXl"
            : "bg-circularLight md:bg-circularLightMd lg:bg-circularLightLg xl:bg-circularLightXl"
        } w-full h-[50vh] sm:h-[60vh] lg:[80vh] xl:h-screen  relative flex items-center justify-center rounded-full -z-10`}
      >
        <motion.div
          className={`flex items-center justify-center
           rounded-full font-semibold p-2 shadow-dark cursor-pointer md:p-4 lg:p-6 xl:p-8  ${
             isDark ? "bg-light text-dark" : "bg-dark text-light "
           }
`}
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>
        <Skill name="HTML" x="-19vw" y="2vw" />
        <Skill name="CSS" x="-2vw" y="23vw" />
        <Skill name="JAVASCRIPT" x="32vw" y="-6vw" />
        <Skill name="BOOTSTRAP" x="20vw" y="-0vw" />
        <Skill name="TAILWIND" x="-18vw" y="-15vw" />
        <Skill name="REACTJs" x="-15vw" y="12vw" />
        <Skill name="NEXTJS" x="-30vw" y="-5vw" />
        <Skill name="FIREBASE" x="-0vw" y="-19vw" />
        <Skill name="FIGMA" x="-34vw" y="10vw" />
        <Skill name="WEB DESIGN" x="22vw" y="-19vw" />
        <Skill name="GIT" x="10vw" y="14VW" />
        <Skill name="GIT" x="30vw" y="14VW" />
      </div>
    </>
  );
};

export default Skills;
