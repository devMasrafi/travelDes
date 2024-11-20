"use client";

import "./globals.css";
import NavBar from "./(upperNav)/navBar/page";
import Header from "./(upperNav)/header/page";
import { ThemeProvider } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true); // State to show loading screen

  useEffect(() => {
    // Simulate initialization and theme fetching
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Hide loading screen after a small delay for smooth experience
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  if (isLoading) {
    return (
      <html lang="en">
        <body>
          <div className="loading-screen">
            <p>Loading...</p>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
