import { useTheme } from "@/context/ThemeContext";
import { CiSearch } from "react-icons/ci";

export const SearchBar = () => {
    const {theme, toogleTheme} = useTheme()

  return (
    <div
      className={`flex items-center px-3 py-1 rounded-2xl ${
        theme == "light" ? "bg-orrangeCol" : "bg-grayCol"
      }  `}
    >
      <input
        // style change based on theme
        className={`w-[15rem] rounded-2xl p-1  outline-none text-white placeholder:text-white ${
          theme == "light" ? "bg-orrangeCol" : "bg-grayCol"
        }`}
        type="text"
        placeholder="search here"
      />
      <label htmlFor="search">
        <CiSearch className="text-2xl  w-[4rem] text-white h-[2rem] " />
      </label>
    </div>
  );
};
