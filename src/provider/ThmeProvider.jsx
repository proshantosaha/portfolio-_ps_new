import React, { useState } from "react";
import { ThemeContext } from "../context";

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState();

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
