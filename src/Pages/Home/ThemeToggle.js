import { useEffect, useState } from "react";

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
    <span onClick={toggleTheme} style={{ cursor: "pointer", fontSize: "1.5rem" }}>
      {theme === "light" ? "🌙" : "☀️"}
    </span>
  );
}

export default ThemeToggle;
