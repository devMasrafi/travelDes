"use client";

import "./globals.css";
import NavBar from "./(upperNav)/navBar/page";
import Header from "./(upperNav)/header/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Header />
          <NavBar />
          {children}
      </body>
    </html>
  );
}
