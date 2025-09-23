import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <span onClick={toggleTheme} style={{ cursor: "pointer", fontSize: "1.5rem", display: "inline-flex", alignItems: "center" }}>
      {theme === "light" ? <FaMoon aria-label="Switch to dark mode" /> : <FaSun aria-label="Switch to light mode" />}
    </span>
  );
}

export default ThemeToggle;
