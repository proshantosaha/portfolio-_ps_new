import React, { useContext, useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import psProfile from "../assets/pspng22.png";
import { ThemeContext } from "../context";
import { Link } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";
import BorderBottom from "../components/BorderBottom";

// const FramerImage = motion(image);

// const colorText = ${isDark ?}

const MovingImg = ({ title, image, link }) => {
  // ekhane fremar motion er kaj

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(e) {
    imgRef.current.style.display = "inline-block";
    x.set(e.pageX);
    y.set(-10);
    // console.log(e.pageX);
  }

  function handleMouseLeave(e) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
    // console.log(e.pageX);
  }

  return (
    <Link
      to={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalized text-xl font-semibold hover:underline">
        {title}
      </h2>

      <motion.img
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={image}
        alt={title}
        className="z-10 absolute w-[10%] h-auto hidden rounded-lg"
      />
    </Link>
  );
};

const Aritcle = ({ image, title, date, link }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className={`relative w-full p-4 py-6 my-4 rounded-xl flex items-center
      justify-between first:mt-0 border border-solid 
      border-r-4 border-b-4 flex-col sm:flex-row     ${
        isDark
          ? "bg-dark border-light text-light"
          : "bg-light border-dark text-dark"
      }
`}
    >
      <MovingImg title={title} image={image} link={link} />

      <span
        className={`${
          !isDark ? "text-primary" : "text-primaryDark"
        } self-start text-lg pl-0 sm:pl-4 xs:text-xl`}
      >
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticles = ({ image, title, time, summary, link }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <li
      className={`w-full  flex flex-col relative  items-center justify-center rounded-2xl border border-solid  p-8 ${
        isDark ? "bg-dark border-light" : "bg-light border-dark "
      } `}
    >
      <div
        className={`absolute top-0 -right-2 w-full h-[102%] rounded-[1.5rem] -z-10  xs:-right-5 xs:w-[101%] sm:h-[103%] xs:rounded-[2.5rem] ${
          isDark ? "bg-light" : "bg-dark"
        }`}
      />
      <Link
        target="_blank"
        className="w-full items-center justify-center cursor-pointer overflow-hidden rounded-lg"
      >
        <motion.img
          src={image}
          alt={title}
          className="w-[50%] h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(min-width:786px)50vw,50vw
          (min-width:1200px)100vw"
        />
      </Link>
      <Link
        to={link}
        target="_blank"
        // className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
      >
        {/* <GithubIcon /> */}
        <h2 className="capitalize text-lg font-bold my-2 hover:underline mt-4  xs:text-2xl">
          {title}
        </h2>
        <p className="text-sm mb-2">{summary}</p>
        <span
          className={`${
            isDark ? "text-primaryDark" : "text-primary"
          }  font-semibold`}
        >
          {time}
        </span>
      </Link>
    </li>
  );
};

const Aritcles = () => {
  return (
    <div
      id="articles"
      className=" flex w-full flex-col  items-center justify-center pt-16 relative -z-10"
    >
      {" "}
      <AnimatedText
        text="proshanto saha articles section"
        className="mt-20 mb-2 !text-4xl sm:!text-6xl lg:!text-7xl"
      />
      <BorderBottom para4="---------------------------" />
      <ul className="grid grid-cols-1 gap-8 lg:gap-16 md:grid-cols-2 gap-y-16">
        <FeaturedArticles
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          summary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          consequuntur placeat obcaecati dolorum quibusdam deleniti velit
          aperiam eveniet facere. Maiores explicabo accusamus libero dolor
          provident?"
          time="9 min read "
          image={psProfile}
          link="/"
        />
        <FeaturedArticles
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          summary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          consequuntur placeat obcaecati dolorum quibusdam deleniti velit
          aperiam eveniet facere. Maiores explicabo accusamus libero dolor
          provident?"
          time="9 min read "
          image={psProfile}
          link="/"
        />{" "}
      </ul>
      <h2 className="font-bold text-4xl w-full text-center my-6 mt-32  ">
        All Articles
      </h2>
      <BorderBottom para4="-------------------" />
      <ul>
        <Aritcle
          title="Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet "
          date="March 23 ,2023"
          image={psProfile}
          link="/"
        />
        <Aritcle
          title="Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet "
          date="March 23 ,2023"
          image={psProfile}
          link="/"
        />{" "}
        <Aritcle
          title="Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet "
          date="March 23 ,2023"
          image={psProfile}
          link="/"
        />{" "}
        <Aritcle
          title="Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet "
          date="March 23 ,2023"
          image={psProfile}
          link="/"
        />{" "}
        <Aritcle
          title="Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet "
          date="March 23 ,2023"
          image={psProfile}
          link="/"
        />{" "}
        <Aritcle
          title="Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet "
          date="March 23 ,2023"
          image={psProfile}
          link="/"
        />{" "}
        <Aritcle
          title="Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet "
          date="March 23 ,2023"
          image={psProfile}
          link="/"
        />
      </ul>
    </div>
  );
};

export default Aritcles;
