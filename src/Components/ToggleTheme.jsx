import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      setTheme(defaultTheme);
      document.documentElement.setAttribute("data-theme", defaultTheme);
      // document.documentElement.classList.remove("dark"); no needed
      localStorage.setItem("theme", defaultTheme);
    }
  }, []);

  const toggleTheme = () => {

    let newTheme = '';

    if (theme === "light") {
      newTheme = "dark";
    } else {
      newTheme = "light";
    }
    
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme); 
    document.documentElement.classList.toggle("dark", newTheme === "dark"); 
    localStorage.setItem("theme", newTheme);
  };

  return (
    <label className="swap swap-rotate cursor-pointer">
      <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />

      {/* Sun Icon */}
      <FaSun className="text-yellow-400 h-6 w-6  lg:h-8 lg:w-8 swap-off fill-current" />

      {/* Moon Icon */}
      <FaMoon className="text-yellow-400 h-6 w-6  lg:h-8 lg:w-8 swap-on    fill-current" />
    </label>
  );
};

export default ThemeToggle;
