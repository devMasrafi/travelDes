import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

export const SearchBar = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const isSearchHandler = () => {
    setIsVisible((prev) => !prev);
    // console.log("Search bar visibility toggled:", !isVisible);
  };

  return (
    <div
      className={`flex items-center px-3 py-1 rounded-2xl ${
        theme === "light" ? "bg-orrangeCol" : "bg-grayCol"
      }`}
    >
      {/* Search Input */}
      <input
        className={`transition-all duration-300 ease-in-out ${
          isVisible ? "sm:w-full lg:w-full p-1" : "sm:w-0 p-0"
        } rounded-2xl outline-none text-white placeholder:text-white ${
          theme === "light" ? "bg-orrangeCol" : "bg-grayCol"
        }`}
        type="text"
        placeholder="search here"
        style={{ visibility: isVisible ? "visible" : "sm:hidden lg:visible" }}
      />

      {/* Search Icon */}
      <label htmlFor="search" onClick={isSearchHandler}>
        {
          isVisible ?
          <RxCross2  className="text-2xl w-[4rem] text-white h-[2rem] cursor-pointer"/>
          :
          <CiSearch className="text-2xl w-[4rem] text-white h-[2rem] cursor-pointer" />
        }
      </label>
    </div>
  );
};
