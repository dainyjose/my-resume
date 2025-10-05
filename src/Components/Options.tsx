import { useState, useEffect } from "react";

export const Options = () => {
  let lsTheme, lsIcon;
  try {
    lsTheme = localStorage.getItem("theme");
    lsIcon = localStorage.getItem("icon");
  } catch (e) {
    console.error(`All Cookies blocked - Error: ${e.message}`);
  }

  const [theme, setTheme] = useState(lsTheme || "light");
  const [icon, setIcon] = useState(lsIcon || "bx-moon");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("icon", icon);
    document.body.classList[theme === "dark" ? "add" : "remove"]("dark-theme");
  }, [theme, icon]);

  const _toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    setIcon((prev) => (prev === "bx-sun" ? "bx-moon" : "bx-sun"));
  };

  return (
    <div
      className="home__options no-print"
      id="resume__options"
    >
      <i
        className={`bx ${icon} change-theme`}
        title="Toggle Theme"
        id="theme-button"
        onClick={_toggleTheme}
      />
    </div>
  );
};
