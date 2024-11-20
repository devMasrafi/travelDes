import Image from "next/image";
import logoImg from "@/public/images/TravelDes.svg";
import { useTheme } from "@/context/ThemeContext";


const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <section className="container mx-auto mt-4 mb-4">
      <div className="flex justify-between">
        <div>
          <h3>call</h3>
          <p>(233)3874 3827 456</p>
        </div>
        <div>
          <Image className="w-[15rem] " src={logoImg} alt="something" />
        </div>
        <div className="flex gap-2 items-center capitalize ">
          <div>sign up</div>
          <div>sign in</div>
          <div>
          <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
