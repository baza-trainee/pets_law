import Logo from "../assets/logo.svg?react";
import Link from "../components/common/Link";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import ButtonDonate from "./common/ButtonDonate";

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
              <li className="w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer transition-all duration-[300ms] hover:text-black">
                <Link to="hero">
                  Головна
                </Link>
              </li>
              <li className="w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer transition-all duration-[300ms] hover:text-black">
                <Link to="about">
                  Про нас
                </Link>
              </li>
              <li className="text-white font-extralight text-[14px] leading-[16px] cursor-pointer">
                <button
                  onClick={() => {
                    setMenu(!isMenu);
                  }}
                  type="button"
                  className="flex items-center gap-[8px] transition-all duration-[300ms] hover:text-black"
                >
                  <span>Права тварин</span>
                  <IoIosArrowDown
                    className="mf-[8px]"
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
                      to="part_1"
                      className="block w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer hover:text-black"
                    >
                      Частина 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="part_2"
                      className="block w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer hover:text-black"
                    >
                      Частина 2
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer transition-all duration-[300ms] hover:text-black">
                <Link to="suggest">
                  Поради
                </Link>
              </li>
              <li className="w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer transition-all duration-[300ms] hover:text-black">
                <Link to="partners">
                  Партнери
                </Link>
              </li>
              {/* <li className="w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer">
                <Link duration={500} to="">
                  Контакти
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-end pt-[48px] pb-[36px]">

        <ButtonDonate className="text-center w-[341px] h-[44px] p-[10px] mb-[20px] rounded-[20px] bg-white text-[20px] leading-[16px] hover:bg-yellow focus:bg-yellow duration-200 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] cursor-pointer"/>
          <p className="leading-5 text-white text-body">
            Розробка BazaTraineeUkraine 2023 &copy; Усі права захищені
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div className="relative block w-full h-full mx-auto pt-[50px] pb-[10px] px-[25px] lg:hidden ">
        <div className="flex justify-between">
          <nav>
            <ul className="flex flex-col gap-[10px] w-fit mb-[19px]">
              <li className="w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer hover:text-black">
                <Link
                  to="hero"
                >
                  Головна
                </Link>
              </li>

              <li className="w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer hover:text-black">
                <Link to="about">
                  Про нас
                </Link>
              </li>
              <li className="text-white font-extralight text-[14px] leading-[16px] cursor-pointer">
                <button
                  onClick={() => {
                    setMenu(!isMenu);
                  }}
                  type="button"
                  className="flex items-center gap-[8px] hover:text-black  transition-all duration-[300ms]"
                >
                  <span>Права тварин</span>
                  <IoIosArrowDown
                    className="mf-[8px]"
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
                      to="part_1"
                      className="block w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer hover:text-black"
                    >
                      Частина 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="part_2"
                      className="block w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer hover:text-black"
                    >
                      Частина 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="part_3"
                      className="block w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer hover:text-black"
                    >
                      Частина 3
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer hover:text-black">
                <Link to="suggest">
                  Поради
                </Link>
              </li>
              <li className="w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer hover:text-black">
                <Link to="partners">
                  Партнери
                </Link>
              </li>
              {/* <li className="w-fit text-white font-extralight text-[14px] leading-[16px] cursor-pointer hover:text-black">
                <Link duration={500} to="about">
                  Контакти
                </Link>
              </li> */}
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
