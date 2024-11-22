'use client'

import { SearchBar } from "@/components/SearchBar";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  const {theme, toogleTheme} = useTheme()
  
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-between items-center">
        <div>
          <SearchBar/>
        </div>
        <div>
          <ul className="flex gap-8 items-center text-xl capitalize font-medium  ">
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
