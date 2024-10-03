import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context";
import { useState } from "react";

const useTheme = () => {
  const preferDarkQuery = "(prefer-color-scheme:dark)";
  const { dark, isDark } = useContext(ThemeContext);

  const [mood, setMood] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setMood(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.renove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMood(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mood === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");

      document.documentElement.classList.remove("dark");
    }
  }, [mood]);

  return [mood, setMood];
};

export default useTheme;
