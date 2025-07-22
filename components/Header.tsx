// components/Header.tsx
'use client'; // This component uses client-side hooks (useState, useTheme, usePathname)

import { useState } from "react";
// REMOVED: import { Link, useLocation } from "react-router-dom";
import Link from "next/link"; // Import Link from Next.js
import { usePathname } from "next/navigation"; // Import usePathname from Next.js for getting current route

import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button"; // Adjust path if needed
import { useTheme } from "@/components/ThemeProvider"; // Adjust path if needed

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname(); // Use usePathname instead of useLocation()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/" // Changed 'to' to 'href'
            passHref // Added passHref when Link wraps a non-<a> element (implicitly, for styling)
            className="text-2xl font-bold text-foreground hover:scale-105 transition-transform duration-200"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path} // Changed 'to' to 'href'
                passHref // Added passHref
                className={`relative px-3 py-2 transition-all duration-300 hover:text-primary ${
                  pathname === item.path // Use pathname instead of location.pathname
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {pathname === item.path && ( // Use pathname
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-accent hover:scale-110 transition-all duration-200"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path} // Changed 'to' to 'href'
                  passHref // Added passHref
                  className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                    pathname === item.path // Use pathname
                      ? "bg-accent text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;