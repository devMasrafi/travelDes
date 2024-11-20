'use client'

import Image from "next/image";
import logoImg from "@/public/images/TravelDes.svg";
import logoImglight from "@/public/images/TravelDesLight.svg";
import { useTheme } from "@/context/ThemeContext";

import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <section className="container mx-auto mt-4 mb-4">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg uppercase font-medium ">call</h3>
          <p className="text-md ">(233) 3874 3827 456</p>
        </div>
        {/* web logo */}
        <div>
          <Image
            className="w-[15rem] "
            src={theme == "light" ? logoImg : logoImglight}
            alt="something"
          />
        </div>
        <div className="flex gap-3 items-center capitalize ">
          <div>sign up</div>
          <div className="px-4 py-2 bg-orrangeCol rounded-md text-white ">sign in</div>
          <div className="text-xl px-3 flex items-center">
            <button onClick={toggleTheme}>
              {theme === "light" ? <BsFillMoonStarsFill /> : <FaSun />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
