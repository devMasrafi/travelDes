"use client";

import "./globals.css";
import NavBar from "./(upperNav)/navBar/page";
import Header from "./(upperNav)/header/page";
import { ThemeProvider } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

import ClipLoader from "react-spinners/ClipLoader";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Hide loading screen
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer); 
  }, []);

  if (isLoading) {
    return (
      <html lang="en">
        <body>
          <div className="flex justify-center items-center h-screen w-full bg-[var(--background-color)] " >
          <ClipLoader color="#3498db" size={50} loading={true} />
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className="font-fontRoboto">
        <ThemeProvider>
          <Header />
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
