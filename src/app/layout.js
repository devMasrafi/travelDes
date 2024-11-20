"use client";

import "./globals.css";
import NavBar from "./(upperNav)/navBar/page";
import Header from "./(upperNav)/header/page";
import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({ children }) {
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
