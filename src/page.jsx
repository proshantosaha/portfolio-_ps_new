import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Aritcles from "./pages/Aritcles";
import Footer from "./components/Footer";
import { ThemeContext } from "./context";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";

const AllPage = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    // <div className={`${isDark ? "bg-dark" : "bg-light"} w-full px-32`}></div>
    <div className="pt-16">
      <Home />
      <About />
      <Projects />
      <Aritcles />
      <Contact />
    </div>
  );
};

const Page = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`w-full h-full inline-block z-0  px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32  relative  ${
        isDark ? "bg-dark text-light" : "bg-light text-dark overflow-hidden"
      }
 `}
    >
      {/* ${isDark ? "bg-orange-600" : "bg-yellow-600"} */}
      {/* eta onek prblem korci dui din dhore */}

      <Navbar />
      <Routes>
        <Route path="/" element={<AllPage />} />
      </Routes>

      <Footer />
    </div>
    // <div className={`${isDark ? "bg-dark" : "bg-light"} w-full px-32`}>
    //     {/* <>
    //       <Routes>
    //         <Route element={<PrivetRoute />}>
    //           <Route element={<HomePage />} path="/" exact />
    //           <Route element={<ProfilePage />} path="/me" />
    //         </Route>

    //         <Route element={<NotFoundPage />} path="/*" />
    //       </Routes>
    //     </> */}

    //   </div>
    // );
  );
};

export default Page;
