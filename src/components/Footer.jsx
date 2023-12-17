import Logo from "../assets/logo.svg?react";
import { Link } from "react-scroll";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Footer = () => {
  const [isMenu, setMenu] = useState(false);
  return (
    <footer className="w-full bg-spanishGrey h-[276px] lg:h-[196px]">
      {/* Desktop */}
      <div className="hidden lg:flex h-full justify-between max-w-[1440px] mx-auto pt-[30px] pb-[10px] px-[20px]">
        <div className="relative flex items-center gap-[169px]">
          <a href="#">
            <Logo className="fill-white" />
          </a>

          <nav>
            <ul className="flex flex-col gap-[10px] w-fit">
              <li className="w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer">
                <Link
                  duration={500}
                  to="hero"
                  aria-label="Move to Goal section"
                >
                  Головна
                </Link>
              </li>
              <li className="flex items-center text-white font-extralight text-[14px] leading-[16px] cursor-pointer">
                <span className="mr-[16px]">Права тварин</span>
                <span className="block text-[25px]">&#8250;</span>
              </li>
              <li className="w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer">
                <Link duration={500} to="about">
                  Поради
                </Link>
              </li>
              <li className="w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer">
                <Link duration={500} to="about">
                  Партнери
                </Link>
              </li>
              <li className="w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer">
                <Link duration={500} to="about">
                  Контакти
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-end pt-[48px] pb-[36px]">
          <button
            type="button"
            className="w-[341px] h-[44px] p-[10px] mb-[20px] rounded-[20px] bg-white text-[14px] leading-[16px] hover:bg-yellow focus:bg-yellow duration-200 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]"
          >
            Підтримати проєкт{" "}
          </button>
          <p className="text-base leading-5 text-white">
            Розробка BazaTraineeUkraine 2023 &copy; Усі права захищені
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div className="relative block w-full h-full mx-auto pt-[30px] pb-[10px] px-[20px] lg:hidden ">
        <div className="flex justify-between">
          <nav>
            <ul className="flex flex-col gap-[10px] w-fit mb-[19px]">
              <li className="w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer hover:text-black">
                <Link
                  duration={500}
                  to="hero"
                  aria-label="Move to Goal section"
                >
                  Головна
                </Link>
              </li>
              <li className="text-white font-extralight text-[14px] leading-[16px] cursor-pointer">
                <button
                  onClick={() => {
                    setMenu(!isMenu);
                  }}
                  type="button"
                  className="flex items-center gap-[8px] hover:text-black"
                >
                  <span>Права тварин</span>
                  <IoIosArrowDown
                    className="mf-[8px] transition-all duration-[300ms]"
                    style={{
                      transform: isMenu ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
              </li>
              <li
                className="transition-all duration-[300ms]"
                style={{
                  display: isMenu ? "block" : "none",
                }}
              >
                <ul className="flex flex-col gap-[10px] w-fit">
                  <li>
                    <Link
                      duration={500}
                      to="about"
                      className="block w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer hover:text-black"
                    >
                      Частина 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      duration={500}
                      to="about"
                      className="block w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer hover:text-black"
                    >
                      Частина 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      duration={500}
                      to="about"
                      className="block w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer hover:text-black"
                    >
                      Частина 3
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer hover:text-black">
                <Link duration={500} to="about">
                  Поради
                </Link>
              </li>
              <li className="w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer hover:text-black">
                <Link duration={500} to="about">
                  Партнери
                </Link>
              </li>
              <li className="w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer hover:text-black">
                <Link duration={500} to="about">
                  Контакти
                </Link>
              </li>
            </ul>
          </nav>
          <a href="#">
            <Logo className="fill-white" />
          </a>
        </div>
        <p className="absolute left-0 right-0 bottom-[10px] text-white text-[10px] leading-[12px] text-center">
          Розробка BazaTraineeUkraine 2023{" "}
          <span className="w-[15px] h-[15px]">&copy;</span> Усі права захищені
        </p>
      </div>
    </footer>
  );
};

export default Footer;
