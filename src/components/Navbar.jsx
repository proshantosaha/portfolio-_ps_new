import React, { useContext, useEffect, useState } from "react";
// import { a } from "react-router-dom";
import Logo from "./Logo";
import icon from "../assets/phone.png";
import { ThemeContext } from "../context";
import { Dribble, Github, LinkDin, Printerest, Twitter } from "./Icons";
import { motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import AnimationLinks from "./AnimationLinks";

const navsLinks = [
  { title: "Home", path: "/", id: "home" },
  { title: "About", path: "/about", id: "about" },
  { title: "Project", path: "/projects", id: "projects" },
  { title: "Articles", path: "/articles", id: "articles" },
  { title: "Contact", path: "/contact", id: "contact" },
];

const Navbar = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const [fix, setFix] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const sectionId = location.hash.replace("#", "");
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const navFixed = () => {
    if (window.scrollY >= 20) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navFixed);

    return () => {
      window.addEventListener("scroll", navFixed);
    };
  }, []);
  const handleToggleDarkMode = () => {
    setIsDark((prevDark) => !prevDark);
  };

  const MotionLink = motion(Link);

  // ${
  //   fix ? " w-[86.5%]  fixed z-40 bg-green-500 " : "w-full  font-medium "
  // }

  return (
    <header
      className={` ${
        isDark ? "text-light" : "text-dark"
      } flex py-8 items-center justify-between border-b-0 lg:border-b-2 relative`}
    >
      {/* <div className="border-b-2"></div> */}
      <button
        className="flex flex-col justify-center items-center lg:hidden "
        onClick={handleClick}
      >
        <span
          className={` block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isDark ? "bg-light" : "bg-dark"
          } ${menuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
        >
          {" "}
        </span>
        <span
          className={` block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out ${
            isDark ? "bg-light" : "bg-dark"
          } ${menuOpen ? "opacity-0" : "opacity-100"}`}
        >
          {" "}
        </span>

        <span
          className={` block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isDark ? "bg-light" : "bg-dark"
          } ${menuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
        >
          {" "}
        </span>
      </button>

      <div className="w-full hidden items-center justify-between lg:flex">
        <nav className="flex items-start text-xl    ">
          {navsLinks.map((link) => {
            return (
              <div
                className={`relative flex flex-col  w-70% mr-3
              `}
              >
                <NavLink
                  to={`#${link.id}`}
                  // onClick={handleClick}
                  key={link.id}
                  // to={`#${link.id}`}
                >
                  {" "}
                  <AnimationLinks title={link.title} />
                </NavLink>
              </div>
            );
          })}
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <MotionLink
            className=" w-6 mr-3"
            to="http://twitter.com"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Twitter />
          </MotionLink>

          <MotionLink
            className=" w-6 mr-3"
            to="http://aDin.com"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkDin />
          </MotionLink>
          <MotionLink
            className=" w-6 mr-3"
            to="http://twitter.com"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github />
          </MotionLink>

          <MotionLink
            className=" w-6 mr-3"
            to="http://twitter.com"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Dribble />
          </MotionLink>
          <MotionLink
            className=" w-6 mr-3"
            to="http://twitter.com"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            {" "}
            <Printerest />
          </MotionLink>

          <button
            onClick={handleToggleDarkMode}
            className={`ml-3 flex rounded-full p1 justify-center items-center ${
              isDark ? "bg-dark" : "bg-white"
            } shadow-md p-1`}
          >
            {isDark ? "🌙" : "🌞"}
          </button>
        </nav>
      </div>

      {menuOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className={`min-w-[70vw] flex flex-col z-30  rounded-lg backdrop-blur-md py-32 items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            isDark ? "bg-light/75" : "bg-dark/75"
          }`}
        >
          <nav className="flex items-center flex-col justify-center ">
            {navsLinks.map((link) => {
              return (
                <div
                  className={`relative group my-2 ${
                    isDark ? "text-dark/75" : "text-light/75"
                  }
              `}
                >
                  <NavLink
                    to={`#${link.id}`}
                    onClick={handleClick}
                    key={link.id}
                    // to={`#${link.id}`}
                  >
                    {" "}
                    <AnimationLinks title={link.title} className={``} />
                  </NavLink>
                </div>
              );
            })}
          </nav>

          <nav className={`flex items-center justify-center flex-wrap `}>
            <MotionLink
              className=" w-6 mx-1 sm:mx-3"
              to="http://twitter.com"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter />
            </MotionLink>

            <MotionLink
              className=" w-6  mx-1 sm:mx-3"
              to="http://aDin.com"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkDin />
            </MotionLink>
            <MotionLink
              className=" w-6  mx-1 sm:mx-3"
              to="http://twitter.com"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github />
            </MotionLink>

            <MotionLink
              className=" w-6  mx-1 sm:mx-3"
              to="http://twitter.com"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Dribble />
            </MotionLink>
            <MotionLink
              className=" w-6  mx-1 sm:mx-3"
              to="http://twitter.com"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              {" "}
              <Printerest />
            </MotionLink>

            <button
              onClick={handleToggleDarkMode}
              className={`ml-3 flex rounded-full p1 justify-center items-center ${
                isDark ? "bg-dark" : "bg-white"
              } shadow-md p-1`}
            >
              {isDark ? "🌙" : "🌞"}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
