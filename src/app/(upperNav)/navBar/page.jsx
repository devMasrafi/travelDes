

import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  const {theme, toogleTheme} = useTheme()
  
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-between items-center">
        <div>
          <div className={`flex items-center px-3 py-1 rounded-2xl ${ theme == 'light' ? 'bg-orrangeCol' :'bg-grayCol'}  `}>
            <input
            // style change based on theme
              className={`w-[15rem] rounded-2xl p-1  outline-none text-white placeholder:text-white ${theme == 'light'? 'bg-orrangeCol' : 'bg-grayCol'}`}
              type="text"
              placeholder="search here"
            />
            <label htmlFor="search">
              <CiSearch className="text-2xl  w-[4rem] text-white h-[2rem] " />
            </label>
          </div>
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
