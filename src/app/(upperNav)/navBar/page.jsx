import Image from "next/image";

const NavBar = () => {
  return (
    <section className="container mx-auto mt-6">
      <div className="flex justify-between">
        <div>
          <div>
            <input className="outline outline-1 rounded-sm w-[23rem] " type="text" />
            <label htmlFor="search">
              <Image/>
            </label>
          </div>
        </div>
        <div>
          <ul className="flex gap-8 items-center">
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
