import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context";
import { motion } from "framer-motion";

const Logo = () => {
  const { isDark } = useContext(ThemeContext);
  const MotionLink = motion(Link);

  return (
    <div className="flex items-center justify-center mt-2">
      {/* <Link
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded"
        to="/"
      >
        ps
      </Link> */}
      <MotionLink
        className={`${
          isDark ? " text-light" : " text-dark"
        } w-16 h-16  flex items-center justify-center border bg-dark text-light  border-solid boder-light rounded-full text-2xl font-bold`}
        whileHover={{
          backgroundColor: [
            "rgba(115, 129, 209, 0.969)",
            "rgba(133, 210, 163, 0.8)",
            "rgba(189, 73, 18, 1)",
            "rgba(24, 224, 239, 1)",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        {/* <h2 className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"> */}
        PS
      </MotionLink>
    </div>
  );
};

export default Logo;
