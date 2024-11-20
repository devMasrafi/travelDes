

import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center">
            <input
              className="outline outline-1 w-[23rem] rounded-l p-1"
              type="text"
            />
            <label htmlFor="search">
              <CiSearch className="text-2xl bg-grayCol outline outline-1 w-[4rem] text-textCol rounded-r h-[2rem] " />
            </label>
          </div>
        </div>
        <div>
          <ul className="flex gap-8 items-center text-xl capitalize font-semibold  ">
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
