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
    setNavToggle(true);
  };

  return (
    <section className="container mx-auto mt-8">
      <div className="sm:px-1 lg:px-0 flex justify-between items-center">
        <div className="relative w-full flex justify-between items-center">
          <div>
            <div className="sm:absolute lg:relative top-[-0.4rem] lg:top-[0.2rem]  ">
              <SearchBar />
            </div>
          </div>
          <div className="sm:text-3xl lg:hidden">
            <GiHamburgerMenu />
          </div>
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
