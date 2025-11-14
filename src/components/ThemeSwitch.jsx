import iconSun from "/assets/images/icon-sun.svg";
import iconMoon from "/assets/images/icon-moon.svg";
import { useState, useEffect } from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
};

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const body = document.body;
    body.classList.remove("light-override", "dark-override");
    if (theme === "dark") {
      body.classList.add("dark-override");
    } else if (theme === "light") {
      body.classList.add("light-override");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <button aria-label="Toggle theme" onClick={toggleTheme}>
      <img
        src={theme === "light" ? iconMoon : iconSun}
        alt={
          theme === "light"
            ? "Moon icon for dark theme"
            : "Sun icon for light theme"
        }
      />
    </button>
  );
}
