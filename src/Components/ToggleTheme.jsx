import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

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
      <FaSun
        data-tooltip-id="theme-tooltipLight"
        data-tooltip-content="Switch to dark mode"
        className="text-yellow-400 h-6 w-6 lg:h-8 lg:w-8 swap-off fill-current"
      />
      <Tooltip id="theme-tooltipLight" place="bottom" />

      {/* Moon Icon */}
      <FaMoon
        data-tooltip-id="theme-tooltip"
        data-tooltip-content="Switch to light mode"
        className="text-sky-600 h-6 w-6 lg:h-8 lg:w-8 swap-on fill-current"
      />

      <Tooltip id="theme-tooltip" place="bottom" />
    </label>
  );
};

export default ThemeToggle;
