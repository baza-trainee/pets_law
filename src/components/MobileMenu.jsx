import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-scroll";
import { IconClose } from "../assets/IconClose.jsx";

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="z-100">
      <div className="flex flex-col py-3.5  w-full">
        <div className="flex justify-between py-2.5 px-5">
          <a href="#">
            <img className="w-11" src={logo} alt="logo" />
          </a>
          <button className="text-xs py-2.5 px-6 rounded-[20px] border-[1px] border-black">
            Підтримати проєкт
          </button>
          <IconClose />
        </div>
        <nav className="flex flex-col px-5 bg-black pb-7 bg-opacity-60">
          <ul className="flex flex-col items-center text-base text-lg gap-y-8 pb-7 pt-14 ">
            <li className="cursor-pointer py-2.5 w-full bg-white rounded-[20px] text-center">
              <Link duration={500} to="hero">
                Головна
              </Link>
            </li>
            <li className="cursor-pointer py-2.5 w-full bg-white rounded-[20px] text-center">
              <Link duration={500} to="about">
                Про нас
              </Link>
            </li>
            <li className="w-full ">
              <button
                className={` w-full bg-white rounded-[20px] py-2.5 cursor-pointer duration-300 hover:font-semibold flex justify-center items-center gap-1 xl:gap-2.5  ${
                  isOpen ? "text-stone-400" : ""
                }`}
                onClick={toggleMenu}
              >
                Права тварин
                <svg
                  className={`duration-200 w-4 xl:w-6 ${
                    isOpen ? "rotate-180 " : ""
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
              {isOpen && (
                <ul className="w-full pt-1 duration-500 bg-opacity-60">
                  <li className="duration-100 my-8 cursor-pointer hover:font-semibold py-2.5 w-full bg-white rounded-[20px] text-center">
                    <Link duration={500} to="partOne">
                      1 частина
                    </Link>
                  </li>
                  <li className="duration-100 cursor-pointer hover:font-semibold py-2.5 w-full bg-white rounded-[20px] text-center">
                    <Link duration={500} to="partTwo">
                      2 частина
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="cursor-pointer py-2.5 w-full bg-white rounded-[20px] text-center">
              <Link duration={500} to="about">
                Поради
              </Link>
            </li>
            <li className="cursor-pointer py-2.5 w-full bg-white rounded-[20px] text-center">
              <Link duration={500} to="about">
                Партнери
              </Link>
            </li>
            <li className="cursor-pointer py-2.5 w-full bg-white rounded-[20px] text-center">
              <Link duration={500} to="about">
                Контакти
              </Link>
            </li>
          </ul>
          <button className="py-2.5 px-4 bg-[#D0A716] rounded-[20px] duration-200 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] hover:bg-[#BF9601] w-full text-center">
            Підтримати проєкт
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
