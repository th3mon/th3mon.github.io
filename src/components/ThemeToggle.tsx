import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const storageKey = "theme";
const lightColor = "#f3efe6";
const darkColor = "#17140f";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(storageKey);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  const themeColor = document.querySelector('meta[name="theme-color"]');

  if (themeColor) {
    themeColor.setAttribute("content", theme === "dark" ? darkColor : lightColor);
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const syncFromPreference = () => {
      const nextTheme = getPreferredTheme();
      setTheme(nextTheme);
      applyTheme(nextTheme);
    };

    syncFromPreference();

    const handleChange = () => {
      const storedTheme = window.localStorage.getItem(storageKey);
      if (storedTheme !== "light" && storedTheme !== "dark") {
        syncFromPreference();
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      aria-label={`Switch to ${nextTheme} mode`}
      className="theme-toggle"
      onClick={() => {
        const updatedTheme = nextTheme;
        window.localStorage.setItem(storageKey, updatedTheme);
        setTheme(updatedTheme);
        applyTheme(updatedTheme);
      }}
      type="button"
    >
      <span className="theme-toggle-label">{theme === "light" ? "Light" : "Dark"}</span>
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-thumb" />
      </span>
    </button>
  );
}
