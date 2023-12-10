import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.svg";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <header className="bg-lightBlue">
      <div className="flex justify-between items-center py-3.5 px-3.5 max-w-[1440px] mx-auto">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <nav>
          <ul className="flex items-center gap-5 text-xl justify-between-0 xl:gap-x-16 ">
            <li className="cursor-pointer ">
              <Link duration={500} to="hero" aria-label="Move to Goal section">
                Головна
              </Link>
            </li>
            <li className="cursor-pointer ">
              <Link duration={500} to="about" aria-label="Move to Goal section">
                Про нас
              </Link>
            </li>
            <li className="relative cursor-pointer " ref={menuRef}>
              <button
                className={`flex items-center gap-2.5 ${
                  isOpen ? "text-stone-400" : ""
                }`}
                onClick={toggleMenu}
              >
                Права тварин
                <svg
                  className={`duration-200 ${
                    isOpen ? "rotate-180 stroke-[#A7A3A3]" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="13"
                  viewBox="0 0 24 13"
                  fill="none"
                >
                  <path
                    className={`${isOpen ? "stroke-[#A7A3A3]" : ""}`}
                    d="M1 0.5L12 11.5L23 0.5"
                    stroke="#181717"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <ul
                className={`absolute pt-1 pl-7 pr-10 whitespace-nowrap  duration-200  bg-lightBlue  
                ${
                  isOpen ? "opacity-100 z-10" : "opacity-0 pointer-events-none"
                }`}
              >
                <li>
                  <Link duration={500} to="partOne">
                    1 частина
                  </Link>
                </li>
                <li>
                  <Link duration={500} to="partTwo">
                    2 частина
                  </Link>
                </li>
              </ul>
            </li>
            <li className="cursor-pointer ">
              <Link duration={500} to="about">
                Поради
              </Link>
            </li>
            <li className="cursor-pointer ">
              <Link duration={500} to="about">
                Партнери
              </Link>
            </li>
            <li className="cursor-pointer ">
              <Link duration={500} to="about">
                Контакти
              </Link>
            </li>
            <li className="cursor-pointer">
              <button className="py-2.5 px-4 bg-[#D0A716] rounded-[20px] duration-200 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]">
                Підтримати проєкт
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
