
"use client";
import React, { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  attribute?: string; // Added attribute prop
  disableTransitionOnChange?: boolean; // Added disableTransitionOnChange prop
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system", // Initial state before localStorage is read
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  // Initialize with defaultTheme or a placeholder.
  // localStorage will be read in useEffect.
  const [theme, setTheme] = useState<Theme>(() => {
    // Attempt to read from localStorage on initial render if on client side
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem(storageKey) as Theme;
      if (storedTheme) {
        return storedTheme;
      }
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    // Determine the actual theme to apply based on 'theme' state
    const actualTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    // Apply the theme class to the html element
    root.classList.add(actualTheme);

    // Persist the theme to localStorage whenever it changes
    // Only save 'dark' or 'light' if the theme is not 'system'
    if (theme !== "system") {
      localStorage.setItem(storageKey, theme);
    } else {
      // If theme is 'system', remove from localStorage so it defaults to system preference on next load
      localStorage.removeItem(storageKey);
    }

  }, [theme, storageKey]); // Depend on theme and storageKey

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      // Update the component's state
      setTheme(newTheme);
      // The useEffect above will handle saving to localStorage
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
}
