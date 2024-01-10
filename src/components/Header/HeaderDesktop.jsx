import IconArrow from "../common/icons/IconArrow";
import Link from "../../components/common/Link";
import { useEffect, useRef, useState } from "react";
import ButtonDonate from "../common/ButtonDonate";

const HeaderDesktop = () => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleDropDownMenu = () => {
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
    <nav className="items-center justify-between hidden text-xl md:flex gap-x-5 xl:gap-x-16">
      <ul className="flex items-center justify-between text-base gap-x-4 lg:text-xl xl:gap-x-16 sm:flex-wrap md:text-sm lg:flex-nowrap">
        <li className="duration-100 cursor-pointer hover:text-gray-500">
          <Link to="hero">
            Головна
          </Link>
        </li>
        <li className="duration-100 cursor-pointer hover:text-gray-500">
          <Link to="about">
            Про нас
          </Link>
        </li>
        <li className="relative" ref={menuRef}>
          <button
            className={`cursor-pointer duration-300 hover:text-gray-500 flex items-center gap-1 xl:gap-2.5 ${isOpen ? "text-stone-400" : ""
              }`}
            onClick={toggleDropDownMenu}
          >
            Права тварин
            <IconArrow isOpen={isOpen} />
          </button>
          <ul
            className={`absolute py-2 pl-7 pr-10 whitespace-nowrap duration-500 rounded bg-lightBlue  
                            ${isOpen
                ? "opacity-100 z-10 translate-y-0"
                : "opacity-0 pointer-events-none -translate-y-1.5"
              }`}
          >
            <li className="relative duration-100 cursor-pointer hover:text-gray-500">
              <Link to="part_1">
                1 частина
              </Link>
            </li>
            <li className="relative duration-100 cursor-pointer hover:text-gray-500">
              <Link to="part_2">
                2 частина
              </Link>
            </li>
          </ul>
        </li>
        <li className="duration-100 cursor-pointer hover:text-gray-500">
          <Link to="suggest">
            Поради
          </Link>
        </li>
        <li className="duration-100 cursor-pointer hover:text-gray-500">
          <Link to="partners">
            Партнери
          </Link>
        </li>
        {/* <li className='duration-100 cursor-pointer hover:text-gray-500'>
					<Link to=''>
						Контакти
					</Link>
				</li> */}
      </ul>
      <ButtonDonate className="btn btn-orange cursor-pointer rounded-[20px] h-[30px] text-sm leading-[13px] md:text-[18px] md:h-[44px]  md:leading-[20px]" />
      {/* <button className="py-2.5 px-4 bg-orange rounded-[20px] duration-200 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] hover:bg-orangeHover text-[11px] lg:text-[18px]">
        Підтримати проєкт
      </button> */}
    </nav>
  );
};

export default HeaderDesktop;
