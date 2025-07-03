import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react"; // لو بتستخدم Lucide
function getInitialMode() {
  return localStorage.getItem("modeState") === "true";
}
function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialMode);

  useEffect(function () {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("modeState", isDark);
  }, [isDark]);
  return (
<button
  onClick={() => setIsDark(!isDark)}
  className="w-full lg:w-auto border rounded-full p-1 hover:bg-[var(--color-card-hover)] transition-all duration-300"
  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
  title={isDark ? "Switch to light mode" : "Switch to dark mode"}
>
  {isDark ? <Sun className="text-white" /> : <Moon />}
</button>

  );
}

export default ThemeToggle;
