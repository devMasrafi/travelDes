"use client";

import { SearchBar } from "@/components/SearchBar";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const { theme, toogleTheme } = useTheme();
  const [navToggle, setNavToggle] = useState(false);

  const onToggleHandler = () => {
    setNavToggle(!navToggle);
  };

  return (
    <section className="container mx-auto mt-8">
      <div className="sm:px-1 lg:px-0 flex justify-between items-center">
      <div className="relative w-full flex justify-between items-center">
          {/* Search Bar */}
          <div>
            <div className="sm:absolute lg:relative top-[-0.4rem] lg:top-[0.2rem]">
              <SearchBar />
            </div>
          </div>

          {/* Hamburger Icon */}
          <div
            onClick={onToggleHandler}
            className="sm:text-3xl lg:hidden relative z-[10]"
          >
            <GiHamburgerMenu />
          </div>

          {/* Dropdown Menu */}
          {navToggle && (
            <div className={`absolute top-12 right-0 shadow-md rounded-md w-full max-w-xs p-4 z-[5] ${ theme === 'light'? 'bg-grayCol' : 'bg-white'} `}>
              <ul className={`flex flex-col gap-y-2 text-black capitalize font-medium 
                `}>
                <li>
                  <Link className={`${theme === 'light' ? 'text-white': 'text-black'}`} href="/">home</Link>
                </li>
                <li>
                  <Link className={`${theme === 'light' ? 'text-white': 'text-black'}`} href="/about">about</Link>
                </li>
                <li>
                  <Link className={`${theme === 'light' ? 'text-white': 'text-black'}`} href="/destination">destination</Link>
                </li>
                <li>
                  <Link className={`${theme === 'light' ? 'text-white': 'text-black'}`} href="/tourPackege">tour packege</Link>
                </li>
                <li>
                  <Link className={`${theme === 'light' ? 'text-white': 'text-black'}`} href="/news">news</Link>
                </li>
                <li>
                  <Link className={`${theme === 'light' ? 'text-white': 'text-black'}`} href="/contact">contact</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* navigation pages */}
        <div className="sm:hidden lg:block ">
          <ul className="lg:flex gap-x-4 items-center lg:text-lg xl:text-xl capitalize font-medium whitespace-nowrap">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/destination">destination</Link>
            </li>
            <li>
              <Link href="/tourPackege">tour packege</Link>
            </li>
            <li>
              <Link href="/news">news</Link>
            </li>
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
