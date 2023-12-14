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
      <div className="flex justify-between items-center py-3.5 px-3.5 max-w-[1440px] mx-auto md:gap-4 lg:gap-0 ">
        <a href="#">
          <img className="w-11 lg:w-full" src={logo} alt="logo" />
        </a>
        <nav className="flex items-center justify-between text-xl gap-x-5 xl:gap-x-16">
          <ul className="flex items-center justify-between text-base gap-x-5 lg:text-xl xl:gap-x-16 sm:flex-wrap lg:flex-nowrap">
            <li className="duration-100 cursor-pointer hover:font-semibold">
              <Link duration={500} to="hero">
                Головна
              </Link>
            </li>
            <li className="duration-100 cursor-pointer hover:font-semibold">
              <Link duration={500} to="about">
                Про нас
              </Link>
            </li>
            <li className="relative" ref={menuRef}>
              <button
                className={`cursor-pointer duration-300 hover:font-semibold flex items-center gap-1 xl:gap-2.5 ${
                  isOpen ? "text-stone-400" : ""
                }`}
                onClick={toggleMenu}
              >
                Права тварин
                <svg
                  className={`duration-200 w-4 xl:w-6 ${
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
                className={`absolute pt-1 pl-7 pr-10 whitespace-nowrap duration-500 -translate-y-2.5;  bg-lightBlue  
                ${
                  isOpen
                    ? "opacity-100 z-10 translate-y-0"
                    : "opacity-0 pointer-events-none -translate-y-1.5"
                }`}
              >
                <li className="relative duration-100 cursor-pointer hover:font-semibold ">
                  <Link duration={500} to="partOne">
                    1 частина
                  </Link>
                </li>
                <li className="relative duration-100 cursor-pointer hover:font-semibold">
                  <Link duration={500} to="partTwo">
                    2 частина
                  </Link>
                </li>
              </ul>
            </li>
            <li className="duration-100 cursor-pointer hover:font-semibold">
              <Link duration={500} to="about">
                Поради
              </Link>
            </li>
            <li className="duration-100 cursor-pointer hover:font-semibold">
              <Link duration={500} to="about">
                Партнери
              </Link>
            </li>
            <li className="duration-100 cursor-pointer hover:font-semibold">
              <Link duration={500} to="about">
                Контакти
              </Link>
            </li>
          </ul>
          <button className="py-2.5 px-4 bg-[#D0A716] rounded-[20px] duration-200 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] hover:bg-[#BF9601]">
            Підтримати проєкт
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
