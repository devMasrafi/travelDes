

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
              <a href="/">home</a>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
            <li>
              <a href="/destination">destination</a>
            </li>
            <li>
              <a href="/tourPackege">tour packege</a>
            </li>
            <li>
              <a href="/news">news</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
