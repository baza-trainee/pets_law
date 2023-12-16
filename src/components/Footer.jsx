import Logo from "../assets/logo.svg?react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-spanishGrey">
      <div className="flex justify-between max-w-[1440px] h-[198px] mx-auto px-[10px]">
        <div className="relative flex items-center gap-[169px]">
          <a href="#">
            <Logo className="fill-white" />
          </a>

          <nav>
            <ul className="flex flex-col gap-[10px] w-fit">
              <li className="w-fit text-white font-extralight text-xl leading-5 cursor-pointer">
                <Link
                  duration={500}
                  to="hero"
                  aria-label="Move to Goal section"
                >
                  Головна
                </Link>
              </li>
              <li className="flex items-center text-white font-extralight text-xl leading-5 cursor-pointer">
                <span className="mr-[16px]">Права тварин</span>
                <span className="block text-[25px]">&#8250;</span>
              </li>
              <li className="w-fit text-white font-extralight text-xl leading-5 cursor-pointer">
                <Link duration={500} to="about">
                  Поради
                </Link>
              </li>
              <li className="w-fit text-white font-extralight text-xl leading-5 cursor-pointer">
                <Link duration={500} to="about">
                  Партнери
                </Link>
              </li>
              <li className="w-fit text-white font-extralight text-xl leading-5 cursor-pointer">
                <Link duration={500} to="about">
                  Контакти
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-end pt-[79px] gap-8">
          <button
            type="button"
            className="w-[341px] h-[44px] p-[10px] rounded-[20px] bg-white text-xl leading-5 hover:bg-yellow focus:bg-yellow duration-200 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]"
          >
            Підтримати проєкт{" "}
          </button>
          <p className="text-white text-base leading-5">
            Розробка BazaTraineeUkraine 2023 &copy; Усі права захищені
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
