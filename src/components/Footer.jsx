import React, { useContext } from "react";
import { ThemeContext } from "../context";

const Footer = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <footer
      className={`${
        !isDark ? "border-dark text-dark" : "border-light text-light"
      } w-full border-t-2 boder-solid  font-medium text-base sm:text-lg mt-40`}
      // className="w-full border-t-2 boder-solid border-dark font-medium text-lg mt-40"
    >
      <div className="py-6 lg:py-8 flex flex-col lg:flex-row  items-center justify-between">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
        <div className="flex items-center py-2 lg:py-0">
          Build with{" "}
          <span
            className={`${
              !isDark ? "text-primary" : "text-primaryDark"
            } text-2xl px-1`}
          >
            &#9825;
          </span>{" "}
          by&nbsp;
          <h className="underline underline-offset-2">codeBucks</h>
        </div>
        <h className="underline underline-offset-2">say hello</h>
      </div>
    </footer>
  );
};

export default Footer;
