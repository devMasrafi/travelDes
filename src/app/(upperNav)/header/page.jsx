"use client";

import Image from "next/image";
import logoImg from "/public/images/Travel Des.svg";
import logoImglight from "/public/images/TravelDesLight.svg";
import { useTheme } from "@/context/ThemeContext";

import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <section className="container mx-auto mt-4 mb-4 sm:p-1 lg:p-0">
      <div className="flex items-center">
        <div className="lg:w-[40%] sm:hidden lg:block ">
          <h3 className="text-lg uppercase font-medium ">call</h3>
          <p className="text-md ">(233) 3874 3827 456</p>
        </div>
        {/* web logo */}
        <div className=" flex justify-between lg:w-[60%] sm:w-full sm:gap-1">
          <div>
            <Image
              className="lg:w-[15rem] sm:w-[6rem] "
              src={theme == "light" ? logoImg : logoImglight}
              alt="something"
            />
          </div>
          <div className="flex lg:gap-3 sm:gap-1 items-center capitalize ">
            <div>sign up</div>
            <div className="lg:px-4 lg:py-2 sm:px-2 sm:py-1 bg-orrangeCol rounded-md text-white ">
              sign in
            </div>
            <div className="lg:text-xl px-3 flex items-center">
              <button onClick={toggleTheme}>
                {theme === "light" ? <BsFillMoonStarsFill /> : <FaSun />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
